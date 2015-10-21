'use strict';

var adventure = require('workshopper-adventure/adventure');

var shop = adventure({
  appDir: __dirname,
  languages: ['en', 'ja'],
  header: require('workshopper-adventure/default/header'),
  footer: [
    {text: '---', type: 'md'},
    require('workshopper-adventure/default/footer')
  ]
})
 
;[
  'Scopes',
  'Scope Chains',
  'Global Scope & Shadowing',
  'Closures',
  'Garbage Collection'
].forEach(function(name, index) {
  shop.add(name, function() {
    var folder = name.replace(/\s/ig, '-').replace(/\&/ig, 'and')
    return require('./' + folder).problem
   });
 })

module.exports = shop
