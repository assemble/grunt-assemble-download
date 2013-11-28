```js
assemble: {
  options: {
    plugins: ['{%= name %}'],
    download: {
      repo: 'assemble/handlebars-helpers',
      files: ['docs/helpers.zip'],
      dest: 'tmp/'
    }
  }
}
```
