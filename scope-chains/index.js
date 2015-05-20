var fs = require('fs'),
    path = require('path'),
    problem = require('../problem'),
    asciiScope = require('../util/ascii-scope'),
    nodeHelpers = require('../util/node-helpers'),
    scopeHelpers = require('../util/scope-helpers'),
    scopeTraverse = require('../util/scope-traverse');

module.exports = {
  title: 'Scopes',
  problem: problem(__dirname, function (args, t) {

    var file = path.resolve(args[0]);

    fs.readFile(file, function(err, code) {

      t.error(err, 'Solution loaded');

      scopeAsAscii = asciiScope(code);

      t.equal(
        scopeAsAscii,
        ['(global)','\tfoo()','\t- var bar','\t\tzip()','\t\t- var quux'].join('\n'),
        'The structure is correct'
      );

      t.end();

    });

  })
}
