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

module.exports = {
  getFunctionString: getFunctionString
}
