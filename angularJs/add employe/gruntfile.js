module.exports = function(grunt) {

  grunt.initConfig({
            ngtemplates: {
                dz: {
                    cwd: 'app/',
                    src: [
                        'app/view/**/*.html'
                    ],
                    dest: 'app/src/js/appJs/tmp.js',
                    options: {
                        htmlmin: {
                            collapseWhitespace: true,
                            collapseBooleanAttribues: true
                        },
                        bootstrap: function(module, script) {
                            return "angular.module('" + module + "').run(['$templateCache',function($templateCache){" + script + "}]);"
                        }
                    }
                }
            },
    concat: {
            "lib": {
                "src": [
                  // "app/src/js/lib/angular.js",
                  "bower_components/angular/angular.js"
                ],
                "dest": "app/dist/js/lib.js"
            },
            "app": {
                "src": [
                // "app/src/js/appJs/**/*.js"
                "app/src/js/appJs/dz.js",
               "app/src/js/appJs/tmp.js"

                ],
                "dest": "app/dist/js/app.js"
            }
        },
        sass: {
            dist: {
              files: {
                'app/dist/css/app.css': 'app/src/**/*.scss'
              }
            }
        },
        watch: {
          scripts: {
            files: ['app/src/js/**/*.js'],
            tasks: ['concat'],
            options: {
              spawn: false,
            },
          },
          tmp: {
            files: ['view/*.html'],
            tasks: ['ngtemplates'],
            options: {
              spawn: false,
            },
          },
          sToc:{
            files: ['app/src/**/*.scss'],
            tasks: ['sass'],
          }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('watchCss', ['watch:sToc']);
  grunt.registerTask('watchTmp', ['watch:tmp']);
  grunt.registerTask('watchJs', ['watch:scripts']);
  grunt.registerTask('default', ['sass','concat']);
  grunt.registerTask('tmp', ['ngtemplates']);

};