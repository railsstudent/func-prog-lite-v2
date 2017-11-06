// console.log(14 === add(fixNum1(), fixNum2()));
// console.log(14 === add2(fixNum1, fixNum2));
//
// var identity5 = identity(5);
// var identity9 = identity(9);
//
// console.log(5 === identity5());
// console.log(9 === identity9());
// console.log(14 === add2(identity5, identity9));
// console.log(14 === add(identity5(), identity9()));

// code here! :)
function fixNum1() {
  return 5;
}

function fixNum2() {
  return 9;
}

// 2.
function add(x, y) {
  return x + y;
}

// 3.
function add2(f1, f2) {
  var a = f1();
  var b = f2();
  console.log('a', a, 'b', b);
  return a + b;
}

// 4.
function identity(n) {
  return function output() {
    return n;
  }
}

//5 addn
// Iterative
// function addn(...fns) {
//   fns = fns.slice(0);
//   while (fns.length > 2) {
//     let fns0 = fns[0];
//     let fns1 = fns[1];
//     fns = [
//       function() {
//         return add2(fns0, fns1);
//       }
//     ].concat(
//       fns.slice(2)
//     );
//   }
//   return add2(fns[0], fns[1]);
// }

// Recursive
function addn(...fns) {
  if (fns.length === 2) {
    return add2(fns[0], fns[1]);
  }
  return addn(...[
    function() {
      return add2(fns[0], fns[1]);
    },
    ...fns.slice(2)
  ]);
}

// map/reduce

var x = addn(identity(3), identity(4), identity(5), identity(6), identity(7), identity(8), identity(9));
console.log(42 === x);
