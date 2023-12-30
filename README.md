<p align="center">
    <img width="40%" src="" />
    <h1 align="center">Sylius Bootstrap Theme</h1>
    <p align="center">Sylius Bootstrap theme with build process based on <a target="_blank" href="https://symfony.com/doc/current/frontend.html">Webpack Encore.</a></p>
</p>

## Preview

<img src="./docs/homepage.png" align="center" height="50%">

### Checkout 

<table>
    <tr>
        <td>
            <a href="./docs/checkout-1.png" target="_blank">
                <img src="./docs/checkout-1.png" align="center" height="200px" width="auto">
            </a>
        </td>
        <td>
            <a href="./docs/checkout-2.png" target="_blank">
                <img src="./docs/checkout-2.png" align="center" height="200px" width="auto">
            </a>
        </td>
        <td>
            <a href="./docs/checkout-3.png" target="_blank">
                <img src="./docs/checkout-3.png" align="center" height="50%">
            </a>
        </td>
        <td>
            <a href="./docs/checkout-4.png" target="_blank">
                <img src="./docs/checkout-3.png" align="center" height="50%">
            </a>
        </td>
        <td>
            <a href="./docs/checkout-5.png" target="_blank">
                <img src="./docs/checkout-3.png" align="center" height="50%">
            </a>
        </td>
    </tr>
</table>

### Cart

<table>
    <tr>
        <td>
            <a href="./docs/cart.png" target="_blank">
                <img src="./docs/cart.png" align="center" height="50%">
            </a>
        </td>
        <td>
            <a href="./docs/cart-dropdown.png" target="_blank">
                <img src="./docs/cart-dropdown.png" align="center" height="50%">
            </a>
        </td>
    </tr>
</table>

## Installation

There are two ways to install a theme. It is possible to copy files in `themes/` or add this package as a composer dependency and create a child theme.

The instructions below refer to an installation in the theme folder. 

### Composer installation

Installation as a composer dependency (with child theme) [is documented here](https://docs.sylius.com/en/latest/book/themes/bootstrap-theme.html). Run:

```bash
composer require sylius/bootstrap-theme:1.12
```

### Manual installation

#### Copy files from repository to `./themes/BootstrapTheme`

Only `assets` and `SyliusShopBundle` directories and the `webpack.config.js` file are required.

#### Install node dependencies

```bash
yarn install
yarn add bootstrap@^5.3 @fortawesome/fontawesome-free@^6.4.2 glightbox axios @popperjs/core@^2.11
```

#### Import `bootstrap-theme` config in your `./webpack.config.js`

```diff
+ const bootstrapTheme = require('./themes/BootstrapTheme/webpack.config');

// ...

- module.exports = [shopConfig, adminConfig, appShopConfig, appAdminConfig];
+ module.exports = [shopConfig, adminConfig, appShopConfig, appAdminConfig, bootstrapTheme];
```

#### Edit project config files

```diff
# ./config/packages/assets.yaml

framework:
    assets:
        packages:
+            bootstrapTheme:
+                json_manifest_path: '%kernel.project_dir%/public/themes/bootstrap-theme/manifest.json'
```

```diff
# ./config/packages/webpack_encore.yaml

webpack_encore:
    output_path: '%kernel.project_dir%/public/build'
    builds:
+        bootstrapTheme: '%kernel.project_dir%/public/themes/bootstrap-theme'
```

6. To build the assets, run one of the following commands  
```bash
# compile assets once
yarn dev

# recompile assets automatically when files change
yarn watch

# create a production build
yarn build
```

#### Change theme in the admin panel

1. Go to `Configuration > Channels`
2. Edit desired channel from the list
3. Go to `Look & feel > Theme` section
4. Change theme to `Sylius Bootstrap Theme` 

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
