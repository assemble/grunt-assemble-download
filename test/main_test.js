/*!
 * grunt-assemble-download <https://github.com/assemble/grunt-assemble-download>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var expect = require('chai').expect
var grunt = require('grunt');
var plugin = require('../');

describe('grunt-assemble-download', function() {

  describe('when given a file', function() {

    before(function() {
      grunt.config.set('plugin.download.done', undefined);
    });

    it('should download it', function(done) {
      var params = {
        assemble: {
          options: {
            download: {
              repo: 'assemble/handlebars-helpers',
              files: ['docs/helpers.zip'],
              dest: 'test/actual/downloads/'
            }
          }
        },
        grunt: grunt
      };
      plugin(params, done);
    });
  });

  describe('when given a bad file', function() {

    before(function() {
      grunt.config.set('plugin.download.done', undefined);
    });

    it('should error', function(done) {
      var params = {
        assemble: {
          options: {
            download: {
              repo: 'assemble/handlebars-helpers',
              files: ['some/file/that/does/not/exist/error.html'],
              dest: 'test/actual/downloads/'
            },
          }
        },
        grunt: grunt
      };

      try {
        plugin(params, done);
      } catch (err) {
        console.log('error throw!', err);
      }
    });
  });

});
