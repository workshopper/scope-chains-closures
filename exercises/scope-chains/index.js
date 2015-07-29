var fs = require('fs'),
    path = require('path'),
    problem = require('../../problem'),
    asciiScope = require('../../util/ascii-scope');

module.exports = {
  title: 'Scope Chains',
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
