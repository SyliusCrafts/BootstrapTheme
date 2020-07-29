ARG PHP_VERSION=7.4
ARG NODE_VERSION=12
ARG NGINX_VERSION=1.19

FROM php:${PHP_VERSION}-fpm-alpine AS sylius_php_base

# persistent / runtime deps
RUN apk add --no-cache \
		acl \
		file \
		gettext \
		git \
		mariadb-client \
		vim \
	;

ARG APCU_VERSION=5.1.17
RUN set -eux; \
	apk add --no-cache --virtual .build-deps \
		$PHPIZE_DEPS \
		coreutils \
		freetype-dev \
		icu-dev \
		libjpeg-turbo-dev \
		libpng-dev \
		libtool \
		libwebp-dev \
		libzip-dev \
		mariadb-dev \
		zlib-dev \
	; \
	\
	if [ ! -z "${PHP_VERSION}" ] && [ "${PHP_VERSION:0:3}" = "7.3" ]; then \
		docker-php-ext-configure gd --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include --with-webp-dir=/usr/include --with-freetype-dir=/usr/include/; \
		docker-php-ext-configure zip --with-libzip; \
	else \
		docker-php-ext-configure gd --with-jpeg --with-webp --with-freetype; \
		docker-php-ext-configure zip --with-zip; \
	fi; \
	docker-php-ext-install -j$(nproc) \
		exif \
		gd \
		intl \
		pdo_mysql \
		zip \
	; \
	pecl install \
		apcu-${APCU_VERSION} \
	; \
	pecl clear-cache; \
	docker-php-ext-enable \
		apcu \
		opcache \
	; \
	\
	runDeps="$( \
		scanelf --needed --nobanner --format '%n#p' --recursive /usr/local/lib/php/extensions \
			| tr ',' '\n' \
			| sort -u \
			| awk 'system("[ -e /usr/local/lib/" $1 " ]") == 0 { next } { print "so:" $1 }' \
	)"; \
	apk add --no-cache --virtual .sylius-phpexts-rundeps $runDeps; \
	\
	apk del .build-deps

ARG BLACKFIRE=false

RUN set -eux; \
	if [ ! -z "$BLACKFIRE" ] && [ "$BLACKFIRE" = "true" ]; then \
		curl -A "Docker" -o /tmp/blackfire-probe.tar.gz -D - -L -s https://blackfire.io/api/v1/releases/probe/php/alpine/amd64/$(php -r "echo PHP_MAJOR_VERSION.PHP_MINOR_VERSION;"); \
		mkdir -p /tmp/blackfire; \
		tar zxpf /tmp/blackfire-probe.tar.gz -C /tmp/blackfire; \
		mv /tmp/blackfire/blackfire-*.so $(php -r "echo ini_get ('extension_dir');")/blackfire.so; \
		printf "extension=blackfire.so\nblackfire.agent_socket=tcp://blackfire:8707\n" > $PHP_INI_DIR/conf.d/blackfire.ini; \
		rm -rf /tmp/blackfire /tmp/blackfire-probe.tar.gz; \
		mkdir -p /tmp/blackfire; \
		curl -A "Docker" -L https://blackfire.io/api/v1/releases/client/linux_static/amd64 | tar zxp -C /tmp/blackfire; \
		mv /tmp/blackfire/blackfire /usr/bin/blackfire; \
		rm -Rf /tmp/blackfire; \
	fi

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# https://getcomposer.org/doc/03-cli.md#composer-allow-superuser
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN set -eux; \
	composer global require "hirak/prestissimo:^0.3" --prefer-dist --no-progress --no-suggest --classmap-authoritative; \
	composer clear-cache
ENV PATH="${PATH}:/root/.composer/vendor/bin"

WORKDIR /srv/sylius

RUN git clone --depth 1 --single-branch --branch "1.7" https://github.com/Sylius/Sylius-Standard.git .

RUN set -eux; \
	cp docker/php/php.ini /usr/local/etc/php/php.ini; \
	cp docker/php/php-cli.ini /usr/local/etc/php/php-cli.ini

COPY . themes/BootstrapTheme

# build for production
ARG APP_ENV=prod

RUN set -eux; \
	sed -i s/2G/6G/g /usr/local/etc/php/php-cli.ini; \
	composer install --prefer-dist --no-autoloader --no-scripts --no-progress --no-suggest; \
	composer require symfony/webpack-encore-bundle; \
	composer clear-cache

COPY docker/assets.yaml config/packages/assets.yaml
COPY docker/webpack_encore.yaml config/packages/webpack_encore.yaml

COPY docker/SyliusAdminBundle templates/bundles/SyliusAdminBundle
COPY docker/SyliusShopBundle templates/bundles/SyliusShopBundle


FROM node:${NODE_VERSION}-alpine AS sylius_nodejs

WORKDIR /srv/sylius

RUN set -eux; \
	apk add --no-cache --virtual .build-deps \
		g++ \
		gcc \
		git \
		make \
		python \
	;

# prevent the reinstallation of vendors at every changes in the source code
COPY --from=sylius_php_base /srv/sylius/package.json ./
COPY --from=sylius_php_base /srv/sylius/yarn.lock ./

RUN set -eux; \
	yarn add \
		@symfony/webpack-encore \
		sass-loader@^8.0.0 \
		node-sass \
		lodash.throttle -D \
	;\
	yarn add \
		bootstrap@^4.5.0 \
		bootstrap.native@^3.0.0 \
		glightbox \
		axios \
		form-serialize \
		@fortawesome/fontawesome-svg-core \
		@fortawesome/free-brands-svg-icons \
		@fortawesome/free-regular-svg-icons \
		@fortawesome/free-solid-svg-icons \
	; \
	yarn install; \
	yarn cache clean

COPY . themes/BootstrapTheme
COPY --from=sylius_php_base /srv/sylius/vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/
COPY --from=sylius_php_base /srv/sylius/vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/
COPY --from=sylius_php_base /srv/sylius/vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/
COPY --from=sylius_php_base /srv/sylius/assets assets/
COPY --from=sylius_php_base /srv/sylius/webpack.config.js ./webpack.config.js.orig

COPY docker/webpack.config.js.part ./
RUN set -eux; \
	head -n -1 webpack.config.js.orig > webpack.config.js; \
	cat ./webpack.config.js.part >> webpack.config.js

RUN yarn encore production

COPY --from=sylius_php_base /srv/sylius/docker/nodejs/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]
CMD ["yarn", "encore", "dev", "--watch"]


FROM sylius_php_base AS sylius_php

COPY --from=sylius_nodejs /srv/sylius/public public/

RUN set -eux; \
	mkdir -p var/cache var/log; \
	composer dump-autoload --classmap-authoritative; \
	APP_SECRET='' composer run-script post-install-cmd; \
	chmod +x bin/console; sync; \
	bin/console sylius:install:assets; \
	bin/console sylius:theme:assets:install public
VOLUME /srv/sylius/var

VOLUME /srv/sylius/public

RUN cp docker/php/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]
CMD ["php-fpm"]


FROM nginx:${NGINX_VERSION}-alpine AS sylius_nginx

COPY docker/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /srv/sylius

COPY --from=sylius_php /srv/sylius/public public/
COPY --from=sylius_nodejs /srv/sylius/public public/


FROM ubuntu:bionic AS sylius_chrome

RUN set -eux; \
	apt update; \
	apt install -yqq wget gnupg; \
	wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -; \
	wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb; \
	apt install -yqq ./google-chrome-stable_current_amd64.deb; \
	apt install -yqq google-chrome-stable; \
	apt clean

CMD ["google-chrome-stable", "--enable-automation", "--disable-background-networking", "--no-default-browser-check", "--no-first-run", "--disable-popup-blocking", "--disable-default-apps", "--allow-insecure-localhost", "--disable-translate", "--disable-extensions", "--no-sandbox", "--enable-features=Metal", "--headless", "--remote-debugging-port=9222", "--window-size=2880,1800", "--proxy-server='direct://'", "--proxy-bypass-list='*'", "http://127.0.0.1"]
