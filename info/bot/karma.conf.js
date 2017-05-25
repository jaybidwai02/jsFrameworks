// Karma configuration
// Generated on Thu Apr 06 2017 12:18:46 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-ajax','jasmine'],
    //plugins: ['karma-jasmine-ajax'],


    // list of files / patterns to load in the browser
    files: [
        // 'bower_components/angular/angular.js',
        // 'bower_components/angular-mocks/angular-mocks.js',
        // 'bower_components/angular-resource/angular-resource.js',
        'bower_components/jquery/dist/jquery.js',
        // 'bower_components/jquery/dist/mock-ajax.js',
        // 'test/dependencies.js',
        //'src/jass/validation/submitService.js',
        //'src/jass/**/*.js',
        // 'src/j/libs_v1.js',
        //'src/j/app_v1.js',
        // 'src/j/plugin_v1.js',
        // "src/app/app.module.js",
        // 'src/app/shared/services/onWindowCloseService.js',
        // 'src/app/**/*.html',
       // 'src/app/**/*.js',
       'src/j/botDetect_v1.js',
       'src/jass/botDetect_v1.js',       
        'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/jass/botDetect_v1.js': ['coverage'],
        
    },

    ngHtml2JsPreprocessor:{
        moduleName: 'templates'
    },


    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
