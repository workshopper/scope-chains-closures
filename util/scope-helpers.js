'use strict';
function isDeclared(name, scope) {
  return scope.variables.some(function someVariables(variable) {
    return variable.name === name;
  });
}

function isReferenced(name, scope) {
  return scope.references.some(function eachReference(reference) {
    return reference.identifier.name === name;
  });
}

function canReferenceNonGlobal(name, scope) {
  if (!scope.upper) {
    return false;
  }
  return isDeclared(name, scope.upper)
         || canReferenceNonGlobal(name, scope.upper);
}

function availableToScope(name, scope) {
  return isDeclared(name, scope)
         || availableAsGlobal(name, scope)
         || canReferenceNonGlobal(name, scope);
}

function availableAsGlobal(name, scope) {
  return scope.through.some(function eachThrough(reference) {
    return reference.identifier.name === name;
  });
}

function getScopeVariablesWithoutArguments(scope) {
  var args = scope.variables[0];
  if (!args || args.name !== 'arguments') {
    return scope.variables;
  } else {
    // drop the `arguments` and any formal parameters
    return scope.variables.slice(scope.block.params.length + 1);
  }
}



module.exports = {
  isDeclared: isDeclared,
  isReferenced: isReferenced,
  canReferenceNonGlobal: canReferenceNonGlobal,
  availableToScope: availableToScope,
  availableAsGlobal: availableAsGlobal,
  getScopeVariablesWithoutArguments: getScopeVariablesWithoutArguments
}
