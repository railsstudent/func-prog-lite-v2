function bar(x, y) {
  //var y = 5;
  var z = 0;
  foo(x);
  return [y, z];

  function foo(x) {
  	y++;
  	z = x * y;
  }
}

var y = 5, z;
var w;

[w, z] = bar(20, 5);  // [6,120]
console.log('w: ', w, 'y: ', y, ', z: ', z);

[w, z] = bar(25, 6);   // [7, 125]
console.log('w: ', w, 'y: ', y, ', z: ', z);
