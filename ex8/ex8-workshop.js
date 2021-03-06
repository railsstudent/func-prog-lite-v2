var nums = {
	first: [3,5,2,4,9,1,12,3],
	second: [5,7,7,9,10,4,2],
	third: [1,1,3,2]
};

var filteredNums = filterObj(function(list){
	return isOdd(listSum(list));
},nums);

var filteredNumsProducts = mapObj(function(list){
	return listProduct(list);
},filteredNums);

const result = reduceObj(function(acc,v){
	return acc + v;
},0,filteredNumsProducts);
//38886

console.log(result === 38886);

// My solution, did not get rid of the nameless functions
const myResult = pipe(
	curry(filterObj)(function(list){
		return isOdd(listSum(list));
	}),
	curry(mapObj)(function(list){
		return listProduct(list);
	}),
	curry(reduceObj)(function(acc,v){
		return acc + v;
	})(0)
)(nums);
console.log(myResult === 38886);

// Kyle's first solution
const result2 = pipe(
	curry(filterObj)(compose(isOdd, listSum)),
	curry(mapObj)(listProduct),
	curry(reduceObj)(sum)(0)
)(nums);
console.log(result2 === 38886);

// Kyle's final solution that reduces list of functions by pipe
// make filterObj and mapObj into a single functions
// make combined function and reduceObj into a single function
// pass nums to function returned by reduce()
const result3 =
[
	curry(filterObj)(compose(isOdd, listSum)),
	curry(mapObj)(listProduct),
	curry(reduceObj)(sum)(0)
]
.reduce(binary(pipe))
(nums);
console.log(result3 === 38886);


// ************************************

function mapObj(mapperFn,o) {
	var newObj = {};
	var keys = Object.keys(o);
	for (let key of keys) {
		newObj[key] = mapperFn( o[key] );
	}
	return newObj;
}

function filterObj(predicateFn,o) {
	var newObj = {};
	var keys = Object.keys(o);
	for (let key of keys) {
			const ll = o[key];
			if (predicateFn(ll)) {
				newObj[key] = ll;
			}
	}
	return newObj;
}

function reduceObj(reducerFn,initialValue,o) {
	var keys = Object.keys(o);
	var result = initialValue
	for (let key of keys) {
		result = reducerFn(result, o[key]);
	}
	return result;
}


// ************************************

function curry(fn,arity = fn.length) {
	return (function nextCurried(prevArgs){
		return function curried(nextArg){
			var args = prevArgs.concat([nextArg]);
			if (args.length >= arity) {
				return fn(...args);
			}
			else {
				return nextCurried(args);
			}
		};
	})([]);
}
function compose(...fns) {
	return function composed(arg) {
		return fns.reduceRight((result,fn) => fn(result),arg);
	};
}
function pipe(...fns) {
	return compose(...fns.reverse());
}
function binary(fn) {
	return function two(arg1,arg2){
		return fn(arg1,arg2);
	};
}


// ************************************

function isOdd(v) { return v % 2 == 1; }
function sum(x,y) { return x + y; }
function mult(x,y) { return x * y; }
function listSum(list) { return list.reduce(sum,0); }
function listProduct(list) { return list.reduce(mult,1); }
