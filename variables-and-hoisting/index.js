var path = require('path'),
    problem = require('../problem');

function testIt(tape, result, value) {
  tape.equal(
    result.value,
    value,
    'iterator.next().value == ' + value
  );
}

function testRange(tape, solution, isEven, min, max) {

  var tester = testIt.bind(null, tape),
      iterator,
      result;

  iterator = solution(isEven);

  tape.equal(
    typeof iterator.next,
    'function',
    'returns an ' + (isEven ? 'even' : 'odd') + ' iterator with .next()'
  );

  for (var i = min; i <= max; i += 2) {
    result = iterator.next();
    tester(result, i);
  }
}

function testSwapping(tape, solution, isEven, min, max, swapAfter) {

  var tester = testIt.bind(null, tape),
      iterator,
      result;

  iterator = solution(isEven);

  tape.equal(
    typeof iterator.next,
    'function',
    'returns an ' + (isEven ? 'even' : 'odd') + ' iterator with .next()'
  );

  for (var i = min; i <= swapAfter; i += 2) {
    result = iterator.next();
    tester(result, i);
  }

  result = iterator.next(true);
  tape.equal(
    result.value,
    swapAfter + 1,
    'Swapped from ' + (isEven ? 'even' : 'odd') + ' to ' + (!isEven ? 'even' : 'odd') + ': iterator.next().value == ' + (swapAfter + 1)
  );

  for (var i = swapAfter + 3; i <= max; i += 2) {
    result = iterator.next();
    tester(result, i);
  }

}

module.exports = {
  title: 'Advanced Iterables',
  problem: problem(__dirname, function (args, t) {

    var solution = require(path.resolve(args[0]));

    t.equal(typeof solution, 'function', 'you exported a function');

    testRange(t, solution, true, 2, 10);
    testRange(t, solution, false, 1, 9);

    testSwapping(t, solution, true, 2, 10, 6);
    testSwapping(t, solution, false, 1, 9, 3);

    t.end();
  })
}
