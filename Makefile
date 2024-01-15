.DEFAULT_GOAL := help
SHELL=/bin/bash
COMPOSER_ROOT=composer
TEST_DIRECTORY=tests/Application
CONSOLE=cd tests/Application && php bin/console -e test
COMPOSER=cd tests/Application && composer
YARN=cd tests/Application && yarn

SYLIUS_VERSION=1.12.0
SYMFONY_VERSION=6.3
PHP_VERSION=8.2
PLUGIN_NAME=sylius/bootstrap-theme

###
### DEVELOPMENT
### ¯¯¯¯¯¯¯¯¯¯¯

install: sylius ## Install Plugin on Sylius [SYLIUS_VERSION=1.12.0] [SYMFONY_VERSION=6.3] [PHP_VERSION=8.2]
.PHONY: install

reset: ## Remove dependencies
ifneq ("$(wildcard tests/Application/bin/console)","")
	${CONSOLE} doctrine:database:drop --force --if-exists || true
endif
	rm -rf tests/Application
.PHONY: reset

phpunit: phpunit-configure phpunit-run ## Run PHPUnit
.PHONY: phpunit

###
### OTHER
### ¯¯¯¯¯¯

sylius: sylius-standard update-dependencies install-plugin install-theme install-sylius
.PHONY: sylius

sylius-standard:
	${COMPOSER_ROOT} create-project sylius/sylius-standard ${TEST_DIRECTORY} "~${SYLIUS_VERSION}" --no-install --no-scripts
	${COMPOSER} config allow-plugins true
	${COMPOSER} require sylius/sylius:"~${SYLIUS_VERSION}"

update-dependencies:
	${COMPOSER} config extra.symfony.require "~${SYMFONY_VERSION}"
	${COMPOSER} update --no-progress -n

install-plugin:
	${COMPOSER} config repositories.plugin '{"type": "path", "url": "../../"}'
	${COMPOSER} config extra.symfony.allow-contrib true
	${COMPOSER} config minimum-stability "dev"
	${COMPOSER} config prefer-stable true
	${COMPOSER} req ${PLUGIN_NAME}:* --prefer-source --no-scripts

install-theme:
ifneq ("$(wildcard install/Application)","")
	cp -r install/Application tests
endif
	mkdir ${TEST_DIRECTORY}/themes/BootstrapTheme
	cp -r assets ${TEST_DIRECTORY}/themes/BootstrapTheme
	cp -r templates ${TEST_DIRECTORY}/themes/BootstrapTheme
	cp composer.json ${TEST_DIRECTORY}/themes/BootstrapTheme
	cp webpack.config.js ${TEST_DIRECTORY}/themes/BootstrapTheme
	echo "const bootstrapTheme = require('./themes/BootstrapTheme/webpack.config');" >> ${TEST_DIRECTORY}/webpack.config.js
	echo "module.exports = [shopConfig, adminConfig, appShopConfig, appAdminConfig, bootstrapTheme];" >> ${TEST_DIRECTORY}/webpack.config.js
	echo "            bootstrapTheme:" >> ${TEST_DIRECTORY}/config/packages/assets.yaml
	echo "                json_manifest_path: '%kernel.project_dir%/public/themes/bootstrap-theme/manifest.json'" >> ${TEST_DIRECTORY}/config/packages/assets.yaml
	echo "        bootstrapTheme: '%kernel.project_dir%/public/themes/bootstrap-theme'" >> ${TEST_DIRECTORY}/config/packages/webpack_encore.yaml

install-sylius:
	${CONSOLE} doctrine:database:create --if-not-exists
	${CONSOLE} doctrine:migrations:migrate -n
	${CONSOLE} sylius:fixtures:load default -n
	${YARN} install
	${YARN} add bootstrap@^5.3 @fortawesome/fontawesome-free@^6.4.2 lightbox axios @popperjs/core@^2.11 glightbox
	${YARN} build
	${CONSOLE} cache:clear

phpunit-configure:
	cp phpunit.xml.dist ${TEST_DIRECTORY}/phpunit.xml

phpunit-run:
	cd ${TEST_DIRECTORY} && ./vendor/bin/phpunit --testdox

help: SHELL=/bin/bash
help: ## Dislay this help
	@IFS=$$'\n'; for line in `grep -h -E '^[a-zA-Z_#-]+:?.*?##.*$$' $(MAKEFILE_LIST)`; do if [ "$${line:0:2}" = "##" ]; then \
	echo $$line | awk 'BEGIN {FS = "## "}; {printf "\033[33m    %s\033[0m\n", $$2}'; else \
	echo $$line | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m%s\n", $$1, $$2}'; fi; \
	done; unset IFS;
.PHONY: help
