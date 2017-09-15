module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
            "app": {
                "src": [
                  "src/js/lib/angular.js",
                  "src/js/appJs/**/*.js"
                ],
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
    },
    uglify: {
        js: {
          files: {
            'dist/js/app.min.js': ['dist/js/app.js']
          }
        }
      },
      cssmin: {
        target: {
          files: {
            'dist/css/app.min.css': ['dist/css/app.css']
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('watchCss', ['watch:sToc']);
  grunt.registerTask('watchJs', ['watch:scripts']);
  grunt.registerTask('default', ['sass','concat','uglify','cssmin']);

};