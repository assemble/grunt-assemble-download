/*
 * assemble-contrib-download
 * http://github.com/assemble/assemble-contrib-download
 *
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * MIT License
 */

// Node.js
var path    = require('path');
var fs      = require('fs');

// node_modules
var request = require('request');
var _       = require('lodash');


// Run this plugin before the 'configuration' stage.
var config = {
  stage: 'options:pre:configuration',
};


/**
 * 'Download' Plugin
 * @param  {Object}   params
 * @param  {Function} callback
 */
var plugin = function(params, callback) {

  'use strict';

  var grunt    = params.grunt;
  var assemble = params.assemble;

  var download = assemble.options.download || {};

  // If this plugin has already run, skip it.
  if(grunt.config.get('plugin.download.done') === undefined) {

    grunt.log.subhead('Running:'.bold, '"assemble-contrib-download"');
    grunt.log.writeln('Stage:  '.bold, '"options:pre:configuration"\n');
    grunt.log.writeln('This may take a moment, files are downloading...');

    // Plugin defaults.
    download = _.extend({
      repo: 'assemble/handlebars-helpers',
      dest: 'tmp/',
      files: ['docs/helpers.zip']
    }, download, config);

    var user = download.user;
    var repo = download.repo;

    grunt.util.async.forEach(download.files, function (file, next) {
      var filename = path.basename(file);

      // Download the given files
      request('https://github.com/' + repo + '/blob/master/' + file + '?raw=true')
      .pipe(fs.createWriteStream(path.join(download.dest, filename)))
      .on('close', function () {
        grunt.log.writeln('>> Downloaded:'.green, path.join(download.dest, filename) + ' OK'.green);
        next();
      });
    }, function () {
      grunt.config.set('plugin.download.done', true);
      callback();
    });
  }
};


// export the plugin and options.
plugin.options = config;
module.exports = plugin;
