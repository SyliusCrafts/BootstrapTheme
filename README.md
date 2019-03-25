<p align="center">
    <img width="40%" src="https://sylius.com/wp-content/themes/sylius/assets/img/sylius-bootstrap.png" />
    <h1 align="center">Sylius Bootstrap Theme</h1>
    <p align="center">Sylius Bootstrap theme with build process based on <a target="_blank" href="https://symfony.com/doc/current/frontend.html">Webpack Encore.</a></p>
    It allows to swap to Bootstrap-based theme separately in each channel.
</p>

Installation
------------

1. Copy files from repository to `./themes/BootstrapTheme`

2. Install Encore

    ```bash
    composer require encore
    ```
    
3. Install node dependencies

    ```bash
    yarn
    yarn add @symfony/webpack-encore sass-loader node-sass lodash.throttle -D
    yarn add bootstrap bootstrap.native glightbox axios form-serialize @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons
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
