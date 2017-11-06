// use reducer to compose a list of functions into a single function
// and then feed the input to it to produce output

function add1(n) { return n + 1; }
function mult2(n) { return n * 2; }
function div3(n) { return n / 3; }

// machine making machine
function composeRight (f1, f2) {
  return function(...args) {
    return f1(f2(...args));
  }
}

// original
// list.map(add1).map(mult2).add(div3);

// Fusion approach
var list = [2,5,8,11,14,17,20];
var results = list.map(
  [div3, mult2, add1].reduce(composeRight)
);  // [2,4,6,8,10,12,14];

console.log(results);
