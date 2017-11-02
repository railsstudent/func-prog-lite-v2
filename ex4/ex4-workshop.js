var luckyLotteryNumbers = [];

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

//console.log(luckyLotteryNumbers);

function pickNumber(){
	var newLuckyLotteryNumbers = [];
	const num = lotteryNum();
	for (let i = 0; i < luckyLotteryNumbers.length; i++) {
		newLuckyLotteryNumbers.push(luckyLotteryNumbers[i]);
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

for (var i = 0; i < 6; i++) {
	luckyLotteryNumbers = pickNumber();
}

console.log(luckyLotteryNumbers);
