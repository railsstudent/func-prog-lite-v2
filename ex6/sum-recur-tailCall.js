'use strict';

// Proper Tail Call
function sumRecur(sum, num, ...nums) {
  sum += num;
  if (nums.length === 0) {
    return sum;
  }
  return sumRecur(sum, ...nums);
}

console.log(21 === sumRecur(1,2,3,4,5,6));
console.log(3 === sumRecur(1,2));

function partial(fn, ...firstArgs) {
  return function(...lastArgs) {
      return fn(...firstArgs, ...lastArgs);
  }
}

function add(x, y) {
  return x + y;
}

var add10 = partial(add, 10);

console.log(add10(32) === 42);
console.log(add10(92) === 102);
