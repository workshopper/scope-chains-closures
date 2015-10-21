var msee = require('msee'),
    path = require('path'),
    verify = require('adventure-verify');

module.exports = function(dir, testCorrect) {

  var problem = {
    init: function (exercise) {
      ['problem', 'solution', 'pass', 'fail'].forEach(function(type) {
          problem[type] = function () {
            return msee.parseFile(
              dir + '/' + exercise.lang + '/' + type + '.md',
              {paragraphEnd: '\n\n'}
            );
          }
        });
    },
    verify: verify({ modeReset: true }, testCorrect)
  };

  return problem;
};
