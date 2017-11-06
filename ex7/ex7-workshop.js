console.log(14 === add(fixNum1(), fixNum2()));
console.log(14 === add2(fixNum1, fixNum2));

var identity5 = identity(5);
var identity9 = identity(9);

console.log(5 === identity5());
console.log(9 === identity9());
console.log(14 === add2(identity5, identity9));
console.log(14 === add(identity5(), identity9()));

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
  return f1() + f2();
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
// function addn(...fns) {
//   if (fns.length === 2) {
//     return add2(fns[0], fns[1]);
//   }
//   return addn(...[
//     function() {
//       return add2(fns[0], fns[1]);
//     },
//     ...fns.slice(2)
//   ]);
// }

// map/reduce
function addn(fns) {
	// reduce:
  return fns.reduce(function reducer(composedFn,fn){
		return function(){
			return add2(composedFn,fn);
		};
	}) ();
}

var x = addn([identity(3), identity(4), identity(5), identity(6), identity(7), identity(8), identity(9)]);
console.log(42 === x);

// 6.
const vals = [1, 2, 6, 7, 8, 9, 7, 2, 2, 2, 1, 1, 0];
const uniqueVals = vals.reduce((acc, b) => {
  if (acc.indexOf(b) < 0) {
    return acc.concat(b);
  }
  return acc;
}, []);
console.log(uniqueVals);

// 7.
const evenNums = uniqueVals.filter(n => {
  return n % 2 === 0;
})
console.log(evenNums);

const sum = addn(
  [3,4,5,6,7,8,9,0].map(identity)
);
console.log(42 === sum);
