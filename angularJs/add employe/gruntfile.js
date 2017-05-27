module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
            "lib": {
                "src": [
                  "app/src/js/lib/angular.js",
                ],
                "dest": "app/dist/js/lib.js"
            },
            "app": {
                "src": ["app/src/js/appJs/**/*.js"],
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
          sToc:{
            files: ['app/src/**/*.scss'],
            tasks: ['sass'],
          }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('watchCss', ['watch:sToc']);
  grunt.registerTask('watchJs', ['watch:scripts']);
  grunt.registerTask('default', ['sass','concat']);

};