function randomNum(min, max) {
	console.log(Math.random())
	return Math.floor(Math.random() * (max - min + 1) + min)
}

for (let i = 0; i < 10; i++) {
	console.log(randomNum(2, 5))
}
