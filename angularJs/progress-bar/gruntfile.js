module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
            "lib": {
                "src": ["src/js/lib/angular.js"],
                "dest": "dist/js/lib.js"
            },
            "app": {
                "src": ["src/js/appJs/**/*.js"],
                "dest": "dist/js/app.js"
            }
        },
        sass: {
            dist: {
              files: {
                'dist/css/app.css': 'src/**/*.scss'
              }
            }
        },
        watch: {
          scripts: {
            files: ['src/js/**/*.js'],
            tasks: ['concat'],
            options: {
              spawn: false,
            },
          },
          sToc:{
            files: ['src/**/*.scss'],
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