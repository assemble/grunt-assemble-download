/*
 * grunt-assemble-download
 * https://github.com/assemble/grunt-assemble-download
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    assemble: {
      options: {
        plugins: ['index.js'],
        download: {
          repo: 'assemble/handlebars-helpers',
          files: ['docs/helpers.zip'],
          dest: 'tmp/'
        }
      },
      test: {
        files: {
          // arbitrary file
          'test/actual/test.html': ['test/fixtures/test.hbs']
        }
      }
    },

    /**
     * Run mocha tests.
     */
    mochaTest: {
      tests: {
        options: {
          reporter: 'progress'
        },
        src: ['test/**/*_test.js']
      }
    },

    /**
     * Pull down a list of repos from Github.
     * (bundled with the readme task)
     */
    repos: {
      assemble: {
        options: {
          username: 'assemble',
          include: ['contrib'],
          exclude: ['example', 'download', 'rss']
        },
        files: {
          'docs/repos.json': ['repos?page=1&per_page=100']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-repos');
  grunt.loadNpmTasks('grunt-assemble');


  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'mochaTest', 'assemble']);
};
