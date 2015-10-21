'use strict';

var adventure = require('workshopper-adventure/adventure');

var shop = adventure({
  appDir: __dirname,
  languages: ['en', 'ja']
})
 
;[
  'Scopes',
  'Scope Chains',
  'Global Scope & Shadowing',
  'Closures',
  'Garbage Collection'
].forEach(function(name, index) {
  shop.add((index + 1) + '. ' + name, function() {
    var folder = name.replace(/\s/ig, '-').replace(/\&/ig, 'and')
    return require('./' + folder).problem
   });
 })

module.exports = shop
