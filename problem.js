var msee = require('msee'),
    path = require('path'),
    verify = require('adventure-verify');

module.exports = function(dir, testCorrect) {

  var problem = {
    verify: verify({ modeReset: true }, testCorrect)
  };

  ['problem', 'solution', 'pass', 'fail'].forEach(function(type) {
    problem[type] = msee.parseFile(
      dir + '/' + type + '.md',
      {paragraphEnd: '\n\n'}
    );
  });

  return problem;
};
