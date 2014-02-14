/*
 * assemble-contrib-download
 * http://github.com/assemble/assemble-contrib-download
 *
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * MIT License
 */

// Node.js
var path     = require('path');
var fs       = require('fs');

// node_modules
var async    = require('async');
var file     = require('fs-utils');
var request  = require('request');
var progress = require('request-progress');
var _        = require('lodash');


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

    if(!file.exists(download.dest)) {
      file.mkdirpSync(download.dest)
    }

    async.forEach(download.files, function (file, next) {
      var filename = path.basename(file);
      var fullpath = 'https://github.com/' + download.repo + '/blob/master/' + file + '?raw=true';

      // Download the specified file(s)
      request(fullpath)
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
