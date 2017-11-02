function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(list){
	var newLuckyLotteryNumbers = [];
	const num = lotteryNum();
	for (let i = 0; i < list.length; i++) {
		newLuckyLotteryNumbers.push(list[i]);
	}
	if (newLuckyLotteryNumbers.indexOf(num) < 0) {
		newLuckyLotteryNumbers.push(lotteryNum());
		newLuckyLotteryNumbers.sort((a, b) => {
			if (a < b) {
				return -1;
			} else if (a > b) {
				return 1;
			}
			return 0;
		});
	}
	return newLuckyLotteryNumbers;
}

var luckyLotteryNumbers = [];

for (var i = 0; i < 6; i++) {
	luckyLotteryNumbers = pickNumber(Object.freeze(luckyLotteryNumbers));
}

console.log(luckyLotteryNumbers);
