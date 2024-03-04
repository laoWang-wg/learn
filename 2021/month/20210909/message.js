function message() {
	let time = null
	let count = 1
	return function () {
		if (time === null) {
			time = new Date().getTime()
		}
		let lastTime = new Date().getTime()
		console.log(lastTime - time)
		if (count < 4) {
			console.log("执行", count)
			++count
		} else {
			if (lastTime - time > 5000) {
				time = lastTime
				count = 1
				console.log("可以重新执行", count)
			} else {
				console.log("次数 太多了")
			}
		}
	}
}
let b = message()
setInterval(function () {
	b()
}, 1000)
