// TEST CODE

const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1], false); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3, 4], false); // => should PASS