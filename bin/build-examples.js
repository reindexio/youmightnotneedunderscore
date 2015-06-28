"use strict";
var fs = require('fs');
var path = require('path');
var marked = require('marked');

marked.setOptions({
  langPrefix: 'language-'
});

var renderer = new marked.Renderer();

renderer.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + ' class="ESComparison">\n' + body + '</' + type + '>\n';
};

renderer.listitem = function(text) {
  return '<li class="ESComparison-example">' + text + '</li>\n';
};

var markdownFilename = path.join(__dirname, '..', 'README.md');
var htmlFilename = path.join(__dirname, '..', 'examples.html');

var markdown = fs.readFileSync(markdownFilename, { encoding: 'utf8' });
fs.writeFileSync(
  htmlFilename,
  marked(markdown, { renderer: renderer }),
  { encoding: 'utf8' }
);
