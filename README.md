<p align="center">
    <img width="40%" src="https://camo.githubusercontent.com/f1a61f80abc01fe14ab9d8820fd048ad817f92dc2e4fa65d3271d350b9a78749/68747470733a2f2f64656d6f2e73796c6975732e636f6d2f6173736574732f73686f702f696d672f6c6f676f2e706e67" />
    <h1 align="center">Sylius Bootstrap Theme</h1>
    <p align="center">Sylius Bootstrap theme with build process based on <a target="_blank" href="https://symfony.com/doc/current/frontend.html">Webpack Encore.</a></p>
    It allows to swap to Bootstrap-based theme separately in each channel.
</p>

Installation
------------

There are two ways to install a theme. It is possible to copy files in `themes/` or add this package as a composer dependency and create a child theme.

The instructions below refer to an installation in the theme folder. Installation as a composer dependency (with child theme) [is also documented](https://docs.sylius.com/en/latest/book/themes/bootstrap-theme.html).

- Sylius 1.6 : `composer require sylius/bootstrap-theme:~0.1.0`
- Sylius 1.7 : `composer require sylius/bootstrap-theme:~0.2.0`
- Sylius 1.8 : `composer require sylius/bootstrap-theme:~0.3.0`
- Sylius 1.8, 1.9 and 1.10 : `composer require sylius/bootstrap-theme:~0.4.0`

Master is compatible with Sylius 1.8, 1.9 and 1.10.

1. Copy files from repository to `./themes/BootstrapTheme`

2. Install Encore

    ```bash
    composer require encore
    ```

3. Install node dependencies

    ```bash
    yarn
    yarn add @symfony/webpack-encore sass-loader@^7.0.0 node-sass lodash.throttle -D
    yarn add bootstrap@^4.5.0 bootstrap.native@^3.0.0 glightbox axios form-serialize @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons popper.js
    ```

4. Import bootstrap-theme config in the main webpack file

    ```bash
    # ./webpack.config.js

    const Encore = require('@symfony/webpack-encore');
    const bootstrapTheme = require('./themes/BootstrapTheme/webpack.config');
    module.exports = [bootstrapTheme];
    ```

5. Edit project config files

    ```bash
    # ./config/packages/assets.yaml

    framework:
        assets:
            packages:
                bootstrapTheme:
                    json_manifest_path: '%kernel.project_dir%/public/bootstrap-theme/manifest.json'
    ```

    ```bash
    # ./config/packages/webpack_encore.yaml

    webpack_encore:
        output_path: '%kernel.project_dir%/public/build'
        builds:
            bootstrapTheme: '%kernel.project_dir%/public/bootstrap-theme'
    ```
    
    ```bash
    # ./config/packages/_sylius.yaml
    sylius_theme:
        legacy_mode: true # for sylius 1.9 and 1.10
    ```

6. To build the assets, run one of the following commands

    ```bash
    # compile assets once
    yarn encore dev

    # recompile assets automatically when files change
    yarn encore dev --watch

    # recompile assets automatically with live reload
    yarn encore dev-server

    # create a production build
    yarn encore production
    ```

7. Change theme in the admin panel by visiting the Edit Channel page

Screenshots
-----------

#### Homepage

![Homepage](docs/homepage.png)

#### Product show

![Product page](docs/product-page.png)


#### Cart

![Cart page](docs/cart.png)

#### Checkout bar

![Checkout bar](docs/checkout-bar.png)

#### Changing the theme
![Changing the theme](docs/edit-channel-page.png)

Developers
----------

1. Run `composer create-project sylius/bootstrap-theme ProjectName` or clone this project

### Quickstart Installation (docker)

1. From the plugin skeleton root directory, run the following commands:

```bash
sudo chmod -Rf 777 tests/Application/var
sudo chmod -Rf 777 tests/Application/public/media
docker-compose exec php php -d memory_limit=-1 /usr/bin/composer install
docker-compose exec nodejs yarn --cwd tests/Application install
docker-compose exec php tests/Application/bin/console doctrine:database:create --if-not-exists -vvv
docker-compose exec php tests/Application/bin/console doctrine:schema:create -vvv
docker-compose exec php tests/Application/bin/console assets:install tests/Application/public -vvv
docker-compose exec nodejs yarn --cwd tests/Application build
docker-compose exec php php -d memory_limit=-1 tests/Application/bin/console cache:warmup -vvv
docker-compose exec php tests/Application/bin/console sylius:fixtures:load -n
```

#### Quality tools

```bash
docker-compose exec php composer validate --ansi --strict
docker-compose exec php php -d memory_limit=-1 vendor/bin/behat --profile docker --colors --strict -vvv -f progress --no-interaction --tags="@javascript && ~@todo && ~@cli"
``` 

__ProTip__ use `Makefile` ;)

### Quickstart Installation (legacy)

1. From the plugin skeleton root directory, run the following commands:

    ```bash
    $ (cd tests/Application && yarn install)
    $ (cd tests/Application && yarn build)
    $ (cd tests/Application && APP_ENV=test bin/console assets:install public)
    
    $ (cd tests/Application && APP_ENV=test bin/console doctrine:database:create)
    $ (cd tests/Application && APP_ENV=test bin/console doctrine:schema:create)
    ```

To be able to setup a plugin's database, remember to configure you database credentials in `tests/Application/.env` and `tests/Application/.env.test`.

### Usage

#### Running plugin tests

- Behat (non-JS scenarios)

  ```bash
  vendor/bin/behat --strict --tags="~@javascript"
  ```

- Behat (JS scenarios)

    1. [Install Symfony CLI command](https://symfony.com/download).

    2. Start Headless Chrome:

    ```bash
    google-chrome-stable --enable-automation --disable-background-networking --no-default-browser-check --no-first-run --disable-popup-blocking --disable-default-apps --allow-insecure-localhost --disable-translate --disable-extensions --no-sandbox --enable-features=Metal --headless --remote-debugging-port=9222 --window-size=2880,1800 --proxy-server='direct://' --proxy-bypass-list='*' http://127.0.0.1
    ```

    3. Install SSL certificates (only once needed) and run test application's webserver on `127.0.0.1:8080`:

    ```bash
    symfony server:ca:install
    APP_ENV=test symfony server:start --port=8080 --dir=tests/Application/public --daemon
    ```

    4. Run Behat:

    ```bash
    vendor/bin/behat --strict --tags="@javascript"
    ```

#### Opening Sylius with your plugin

- Using `test` environment:

    ```bash
    (cd tests/Application && APP_ENV=test bin/console sylius:fixtures:load)
    (cd tests/Application && APP_ENV=test bin/console server:run -d public)
    ```

- Using `dev` environment:

    ```bash
    (cd tests/Application && APP_ENV=dev bin/console sylius:fixtures:load)
    (cd tests/Application && APP_ENV=dev bin/console server:run -d public)
    ```
