'use strict';

var babel = require('babel-core'),
    escope = require('escope'),
    estraverse = require('estraverse');

module.exports = function(code, traverseFuncs) {

  var result = babel.transform(code),
      ast = result.ast.program,
      scopeManager = escope.analyze(ast);

  estraverse.traverse(ast, {
    enter: function(node) {
      var scope = scopeManager.acquire(node);
      if (scope) {
        traverseFuncs.enter(node, scope);
      }
    },
    leave: function(node) {
      var scope = scopeManager.acquire(node);
      if (scope) {
        traverseFuncs.leave(node, scope);
      }
    }
  });
}
