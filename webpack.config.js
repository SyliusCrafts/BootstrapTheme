const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/themes/bootstrap-theme')
  .setPublicPath('/themes/bootstrap-theme')
  .addEntry('app', './themes/BootstrapTheme/assets/index.js')
  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSassLoader()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction());

const config = Encore.getWebpackConfig();
config.name = 'bootstrapTheme';

module.exports = config;
