'use strict';
var nodeHelpers = require('./node-helpers'),
    scopeHelpers = require('./scope-helpers'),
    scopeTraverse = require('./scope-traverse');

module.exports = function(code) {

  var depth = 0,
      result = [];

  scopeTraverse(code, {

    leave: function(node, scope) {
      depth--;
    },

    enter: function(node, scope) {

      var args,
          name,
          variables,
          tabs,
          scopeResult = [];

      scopeResult.push(nodeHelpers.getFunctionString(node));

      variables = scopeHelpers.getScopeVariablesWithoutArguments(scope);

      scopeResult = scopeResult.concat(

        variables.filter(function eachVariable(variable) {
          return variable.name !== 'arguments' && variable.defs[0].type !== 'FunctionName';
        }).map(function eachVariable(variable) {
          return '- var ' + variable.name;
        }),

        scope.references.filter(function filterReferences(reference) {
          // If it's not resolved, it's an implicit global
          return !reference.resolved
                 // Already declared in the variables above
                 || reference.resolved.scope !== scope;;
        }).map(function eachReference(reference) {
          return '- ' + reference.identifier.name + ' = ' + '?';
        })

      );

      scopeResult = scopeResult.concat(nodeHelpers.getReturnStatements(node));

      tabs = Array(depth + 1).join('\t');
      result = result.concat(scopeResult.map(function mapScopeResults(resultLine) {
        return tabs + resultLine;
      }));

      depth++;
    }
  });

  return result.join('\n');

}
