Promise.prototype.all = function (promises) {
	if (!Array.isArray(promises)) {
		throw new TypeError("参数类型必须是 数组")
	}
	return new Promise((resolve, reject) => {
		let result = []
		let count = 0

		for (let i = 0; i < promises.length; i++) {
			Promise.resolve(promises[i])
				.then((res) => {
					result[i] = res
					count++
				})
				.catch((err) => {
					reject(err)
				})
				.finally(() => {
					if (count === promises.length) {
						resolve(result)
					}
				})
		}
	})
}

// test
let p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve(1)
	}, 1000)
})
let p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve(2)
	}, 2000)
})
let p3 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve(3)
	}, 3000)
})
Promise.all([p3, p1, p2]).then((res) => {
	console.log(res) // [3, 1, 2]
})
