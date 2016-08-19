'use strict';

var packageJson = require('./package.json'),
    adventure = require('workshopper-adventure/adventure');
 
var shop = adventure({
  name: packageJson.name,
  appDir: __dirname,
  languages: ['en'],
  header: require('workshopper-adventure/default/header'),
  footer: [
    {text: '---', type: 'md'},
    require('workshopper-adventure/default/footer')
  ]
});

[
  'Scopes',
  'Scope Chains',
  'Global Scope & Shadowing',
  'Closures',
  'Garbage Collection'
].forEach(function(title, index) {
  shop.add(title, function() {
    var folder = title.replace(/\s/ig, '-').replace(/\&/ig, 'and')
    return require('./exercises/' + folder).problem
   });
 })

module.exports = shop
