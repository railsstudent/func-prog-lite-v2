function foo(x) {
	y++;
	z = x * y;
}

function bar(curX, curY) {
	var [origY, origZ] = [y, z];
	y = curY;
	foo(curX);
	var [newY, newZ] = [y, z];
	[y, z] = [origY, origZ];
	return [newY, newZ];
}

var y, z;
var v, w;

[v, w] = bar(20, 5); //6 120
// 120
console.log('v: ', v, 'w: ', w, 'y: ', y, ', z: ', z);

[v, w] = bar(25, 6);  // 7 125
console.log('v: ', v, 'w: ', w, 'y: ', y, ', z: ', z);
