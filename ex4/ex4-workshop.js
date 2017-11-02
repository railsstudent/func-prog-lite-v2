function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(list){
	var newLuckyLotteryNumbers = [];
	for (let i = 0; i < list.length; i++) {
		newLuckyLotteryNumbers.push(list[i]);
	}
	let num = null;
	while (true) {
		num = lotteryNum();
		if (newLuckyLotteryNumbers.indexOf(num) < 0) {
			break;
		}
	}
	newLuckyLotteryNumbers.push(num);
	newLuckyLotteryNumbers.sort((a, b) => a - b);
	return newLuckyLotteryNumbers;
}

var luckyLotteryNumbers = [];

for (var i = 0; i < 6; i++) {
	luckyLotteryNumbers = pickNumber(Object.freeze(luckyLotteryNumbers));
}

console.log(luckyLotteryNumbers);
