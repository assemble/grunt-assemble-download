# assemble-contrib-download [![NPM version](https://badge.fury.io/js/assemble-contrib-download.png)](http://badge.fury.io/js/assemble-contrib-download) 

> Assemble plugin for downloading files from GitHub.

## Quickstart
In the command line, run:

```bash
npm install assemble-contrib-download --save
```

Next, to register the plugin with Assemble in your project's Gruntfile you can either specify the direct path to the plugin(s) (e.g. `./path/to/plugins/*.js`), or if installed via npm, make sure the plugin is in the `devDependencies` of your project.js package.json, and simply add the module's name to the `plugins` option:

```js
assemble: {
  options: {
    plugins: ['assemble-contrib-download', 'other/plugins/*.js']
  }
}
```
Visit the [plugins docs](http://assemble.io/plugins/) for more info or for help getting started.



## Options
### repo
Type: `String`
Default: `assemble/handlebars-helpers`

Repo from which to download files.

### dest
Type: `String`
Default: `tmp/`

Destination for the downloaded files.

### files
Type: `Array`
Default: `['docs/helpers.zip']`

Paths the file or files to download.



## Usage Examples
```js
assemble: {
  options: {
    plugins: ['assemble-contrib-download'],
    download: {
      repo: 'assemble/handlebars-helpers',
      files: ['docs/helpers.zip'],
      dest: 'tmp/'
    }
  }
}
```



## Contributing
Find a bug? Have a feature request? Please [create an Issue](https://github.com/assemble/assemble-contrib-download/issues). Pull requests are also encouraged.
If you find this project useful, please consider "starring" it to show your support! Thanks!


## Assemble plugins
Here are some related projects you might be interested in from the [Assemble](http://assemble.io) core team. 

+ [assemble-contrib-anchors](https://github.com/assemble/assemble-contrib-anchors): Assemble plugin for creating anchor tags from generated html. 
+ [assemble-contrib-contextual](https://github.com/assemble/assemble-contrib-contextual): Generates a JSON file containing the context of each page. Basic plugin to help see what's happening in the build. 
+ [assemble-contrib-decompress](https://github.com/assemble/assemble-contrib-decompress): Assemble plugin for extracting zip, tar and tar.gz archives.  
+ [assemble-contrib-lunr](https://github.com/assemble/assemble-contrib-lunr): Assemble plugin for creating a search engine within your static site using lunr.js. 
+ [assemble-contrib-markdown](https://github.com/assemble/assemble-contrib-markdown): Convert markdown files to HTML using marked.js. This plugin is an alternative to Assemble's markdown Handlebars helpers. Both are useful in different scenarios. 
+ [assemble-contrib-permalinks](https://github.com/assemble/assemble-contrib-permalinks): Permalinks plugin for Assemble, the static site generator for Grunt.js and Yeoman. This plugin enables powerful and configurable URI replacement patterns, presets, uses Moment.js for parsing dates, and much more. 
+ [assemble-contrib-sitemap](https://github.com/assemble/assemble-contrib-sitemap): Sitemap generator plugin for Assemble 
+ [assemble-contrib-toc](https://github.com/assemble/assemble-contrib-toc): Create a table of contents in the generated HTML, using Cheerio.js 
+ [assemble-contrib-wordcount](https://github.com/assemble/assemble-contrib-wordcount): Assemble plugin for displaying a word-count on blog posts or pages. 
Visit [assemble.io/plugins](http:/assemble.io/plugins/) for more information about [Assemble](http:/assemble.io/) plugins.



## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## License
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated by [grunt-readme](https://github.com/assemble/grunt-readme) on Thursday, November 28, 2013._

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html

