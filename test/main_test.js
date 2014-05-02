/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2014 Assemble.
 * Licensed under the MIT License (MIT).
 */

var expect = require('chai').expect
var grunt = require('grunt');
var plugin = require('../');

describe('assemble-contrib-download', function() {

  describe('when given a file', function() {

    before(function() {
      grunt.config.set('plugin.download.done', undefined);
    });

    it('should download it', function(done) {
      var assemble = {
        config: {
          download: {
            repo: 'assemble/handlebars-helpers',
            files: ['docs/helpers.zip'],
            dest: 'test/actual/downloads/'
          },
          grunt: grunt
        }
      };
      var params = {
        event: 'assemble:before:configuration',
      };
      plugin(assemble)['assemble-middleware-download'](params, done);
    });
  });

  describe('when given a bad file', function() {

    before(function() {
      grunt.config.set('plugin.download.done', undefined);
    });

    it('should error', function(done) {
      var assemble = {
        config: {
          download: {
            repo: 'assemble/handlebars-helpers',
            files: ['some/file/that/does/not/exist/error.html'],
            dest: 'test/actual/downloads/'
          },
          grunt: grunt
        }
      };
      var params = {
        event: 'assemble:before:configuration',
      };

      try {
        plugin(assemble)['assemble-middleware-download'](params, done);
      } catch (err) {
        console.log('error throw!', err);
      }
    });
  });

});
