var fs = require('fs'),
    path = require('path'),
    problem = require('../../problem'),
    asciiScope = require('../../util/ascii-scope');

module.exports = {
  title: 'Closures',
  problem: problem(__dirname, function (args, t) {

    var file = path.resolve(args[0]);

    fs.readFile(file, function(err, code) {

      t.error(err, 'Solution loaded');

      scopeAsAscii = asciiScope(code);

      t.equal(
        scopeAsAscii,
        ['(global)','\tfoo()','\t- var bar','\t- quux = ?','\treturn zip','\t\tzip()','\t\t- var quux', '\t\t- bar = ?'].join('\n'),
        'The structure is correct'
      );

      t.end();

    });

  })
}
