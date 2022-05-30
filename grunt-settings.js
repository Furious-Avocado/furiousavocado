module.exports = {
    sassDir:          'resources/scss/',
    sassFileName:     'app',
    sassMainFileName: 'main',
    cssDir:           'resources/css-dev/',
    cssMainFileDir:   'assets/css/',
    cssMainFileName:  'main',
    externalCssDir:   'resources/css/',
    jsSourceDir:      'resources/js/',
    jsMainFileName:   'app',
    jsDir:            'assets/js/',
    imgSourceDir:     'resources/images/',
    imgDir:           'assets/images/',
    host:             'furiousavocado.local',
    proxy:            'http://FuriousAvocado.local'
  };

/**
 * LARAGON:
 * - host - the virtual host name provided by laragon
 * - proxy - the root of your project
 *
 * COMMANDS:
 * 1. grunt build - it will build the project from resources to assets (scss to css, images, js)
 * 2. grunt - the default command is used for activating the watcher and browsersync
 *          - watches for changes made in resources folder - images, js, scss
 * 3. grunt dist - this command is for distribution, when the project is done
 *               - it will purge the css from all the unused classes with the exception of fancybox classes
 *               - for purging php files are checked and js files
 * */
