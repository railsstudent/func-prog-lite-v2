function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

// right-to-left
function compose(...fns) {
  return pipe(...fns.reverse());
}

// left-to-right
function pipe(...fns) {
  return function pipeHelper(result) {
      // let result = null;
      // for (let i = 0; i < fns.length; i++) {
      //     if (result == null) {
      //       result = fns[i](...args);
      //     } else {
      //       result = fns[i](result);
      //     }
      // }
      // return result;
      if (fns.length === 0) {
        return result;
      }
      const [fn, ...rest] = fns;
      return pipe(...rest)(fn(result));
  }
}

var f = compose(decrement,double,increment,half);
var p = pipe(half,increment,double,decrement);

console.log(f(3) === 4);
// true

console.log(f(3) === p(3));
// true

// const x = [half,increment,double,decrement];
// const [head, ...rest] = x;
// console.log(head);
// console.log(rest);
