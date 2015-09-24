'use strict';
/*
 * grunt-assemble-download
 * http://github.com/assemble/grunt-assemble-download
 *
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * MIT License
 */

// Node.js
var path     = require('path');
var fs       = require('fs');

// node_modules
var async    = require('async');
var chalk    = require('chalk');
var file     = require('fs-utils');
var request  = require('request');
var progress = require('request-progress');
var _        = require('lodash');


// Console colors
var bold     = chalk.bold;
var success  = chalk.green;
var error    = chalk.red;
var info     = chalk.cyan;


// Run this plugin before the 'configuration' stage.
var config = {
  stage: 'options:pre:configuration',
};

var ran = false;

/**
 * 'Download' Plugin
 * @param  {Object}   params
 * @param  {Function} callback
 */
var plugin = function(params, callback) {

  var grunt    = params.grunt;
  var assemble = params.assemble;
  var download = assemble.options.download || {};

  // If this plugin has already run, skip it.
  if(grunt.config.get('plugin.download.done') === undefined) {

    console.log();
    console.log(bold('  Running:'), '"grunt-assemble-download"');
    console.log(bold('  Stage:  '), '"options:pre:configuration"');
    console.log('\nThis may take a moment, files are downloading...');
    console.log();

    // Plugin defaults.
    download = _.extend({
      repo: 'assemble/handlebars-helpers',
      dest: 'tmp/',
      files: ['docs/helpers.zip']
    }, download, config);

    if(!file.exists(download.dest)) {
      file.mkdirpSync(download.dest);
    }

    async.forEach(download.files, function (filepath, next) {
      var filename = path.basename(filepath);
      var fullpath = 'https://github.com/' + download.repo + '/blob/master/' + filepath + '?raw=true';
      var dest = file.normalizeSlash(path.join(download.dest, filename));

      var error = false;
      // Download the specified file(s)
      progress(request(fullpath))
      .on('progress', function (state) {
        console.log(bold('  received size in bytes'), info(state.received));
        console.log(bold('  percent'), info(state.percent));
        console.log(bold('  percent'), info('100'), success('OK'));
        console.log(bold('  total received (bytes)'), info(state.received));
        console.log();
      })
      .pipe(fs.createWriteStream(dest))
      .on('close', function () {
        console.log(success('>> Downloaded:'), dest + success(' OK'));
        if (!error) {
          next();
        }
      })
      .on('error', function (err) {
        error = true;
        console.log(error('>> Error:'), err);
        next(err);
      });
    }, function (err) {
      grunt.config.set('plugin.download.done', true);
      callback();
    });
  } else {
    callback();
  }
};


// export the plugin and options.
plugin.options = config;
module.exports = plugin;
