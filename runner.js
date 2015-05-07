#!/bin/sh
":" //# why? http://sambal.org/?p=1014 ; exec /usr/bin/env node --harmony "$0" "$@"

'use strict';

var packageJson = require('./package.json'),
    adventure = require('adventure');

var shop = adventure(packageJson.name),
    lesson;

[
  'advanced-iterables'
].forEach(function(lesson, index) {

  lesson = require('./' + lesson);

  shop.add((index + 1) + '. ' + lesson.title, function() {
    return lesson.problem
  });
})

shop.execute(process.argv.slice(2));
