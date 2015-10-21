var path = require('path'),
    verify = require('adventure-verify');

module.exports = function(dir, testCorrect) {

  var problem = {
    init: function (exercise) {
      ['problem', 'solution', 'pass', 'fail'].forEach(function(type) {
        problem[type] = {
          file: path.join(dir, exercise.i18n.lang(), type + '.md')
        }
      });
    },
    verify: verify({ modeReset: true }, testCorrect)
  };

  return problem;
};
