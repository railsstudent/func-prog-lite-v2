'use strict';

// Use IIFE pattern
// Continuation Passing Style
var sumRecur = (function(...nums) {
  return function(...nums) {
    return recur(nums, v => v);
  };

  function recur([sum, ...nums], cont) {
    if (nums.length === 0) return cont(sum);
    return recur(nums, function(v) {
        return cont(sum + v);
    });
  }
})();

console.log(21 === sumRecur(1,2,3,4,5,6));
console.log(3 === sumRecur(1,2));
console.log(42 === sumRecur(3,4,5,6,7,8,9));
