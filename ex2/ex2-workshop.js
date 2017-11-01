function output(fn) {
	return function outputFn(txt) {
		fn(txt);
	};
}

// function printIf(predicate) {
// 	return function(msg) {
// 		if (predicate(msg)) {
// 			output(msg);
// 		}
// 	};
// }

function printIf(fn) {
	return function when(predicate) {
		return function(...args) {
			if (predicate(...args)) {
				return fn(...args);
			}
		}
	}
}

function isShortEnough(str) {
	return str.length <= 5;
}

function not(fn) {
	return function negated(str) {
		return !fn(str);
	}
}

var isLongEnough = not(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(console.log.bind(console))(isShortEnough)(msg1);		// Hello
printIf(console.log.bind(console))(isShortEnough)(msg2);
printIf(console.log.bind(console))(isLongEnough)(msg1);
printIf(console.log.bind(console))(isLongEnough)(msg2);		// Hello World

//output(console.log)('Connie Leung');
