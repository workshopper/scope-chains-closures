'use strict';

function getFunctionString(node) {
  var name;

  switch(node.type) {
    case 'FunctionDeclaration':
      return node.id.name + '()';

    case 'FunctionExpression':
      if (node.id && (name = node.id.name)) {
        return name + '()';
      } else {
        return '(anonymous function)';
      }

    case 'Program':
      return '(global)';
  }

  return '';

}

function getReturnStatements(node) {

  if (!node.body || !node.body.body) {
    return [];
  }

  return node.body.body.filter(function(body) {
    return body.type === 'ReturnStatement'
           && body.argument
           && body.argument.name;
  }).map(function(body) {
    return 'return ' + body.argument.name;
  })

}

module.exports = {
  getFunctionString: getFunctionString,
  getReturnStatements: getReturnStatements
}
