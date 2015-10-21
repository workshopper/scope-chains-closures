#!/usr/bin/env node

'use strict';

 var packageJson = require('./package.json'),
    adventure = require('workshopper-adventure/adventure');
 
var shop = adventure({
  name: packageJson.name,
  appDir: __dirname,
  languages: ['en']
}),
    lesson;

[
  'scopes',
  'scope-chains',
  'global-scope-and-shadowing',
  'closures',
  'garbage-collection'
].forEach(function(lesson, index) {

  lesson = require('./exercises/' + lesson);

  shop.add((index + 1) + '. ' + lesson.title, function() {
    return lesson.problem
  });
})

shop.execute(process.argv.slice(2));
