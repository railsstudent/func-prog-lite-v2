function mult(product,num,...nums) {
	if (nums.length === 0) {
		return product * num;
	}
	return product * mult(num, ...nums);
}

console.log(60 === mult(3,4,5));	// 60

console.log(360 === mult(3,4,5,6));	// Oops!
