module.exports = function(grunt) {
  grunt.initConfig({
    express: {
      options: {
        // Override defaults here
        output: ".+",
      },
      dev: {
        options: {
          script: 'app.js'
        }
      },
      prod: {
        options: {
          script: 'path/to/prod/server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'path/to/test/server.js'
        }
      }
    },
    
    watch: {
      express: {
        files:  [ '**/*.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  
  grunt.registerTask('server', [ 'express:dev', 'watch' ])
  
};