'use strict';

// Use IIFE pattern
// Trampoline
var sumTrampolined =
  trampoline(function f(sum, num, ...nums) {
      sum += num;
      if (nums.length === 0) {
        return sum;
      }
      return function() {
        return f(sum, ...nums);
      }
  });

function trampoline(fn) {
  return function trampolined(...args) {
      var result = fn(...args);
      while (typeof result === 'function') {
          result = result();
      }
      return result;
  }
}

console.log(21 === sumTrampolined(1,2,3,4,5,6));
console.log(3 === sumTrampolined(1,2));
console.log(42 === sumTrampolined(3,4,5,6,7,8,9));
