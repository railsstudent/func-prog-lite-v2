function foo(...args) { /* .. */
  return function () {
    return args[0] + args[1];
  }
}

var x = foo(3,4);

console.log(x() === 7);	// 7
console.log(x() === 7);	// 7


var y = foo(3,4,5,6);

console.log(y() === 7);	// 7
console.log(y() === 7);	// 7
