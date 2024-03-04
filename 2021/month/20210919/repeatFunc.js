function repeat(fn, count, timeout) {
	const show = function (fn, timeout) {
		return function (message) {
			return new Promise((resolve) => {
				setTimeout(() => {
					fn(message)
					resolve()
				}, timeout)
			})
		}
	}
	let promises = Array.from({ length: count }, () => show(fn, timeout))
	return function (message) {
		let promise = Promise.resolve()
		while (promises.length) {
			let p = promises.pop()
			promise = promise.then(() => p(message))
		}
	}
}
// 每3秒打印一个helloworld，总计执行4次
const repeatFunc = repeat(console.log, 4, 3000)

repeatFunc("helloworld")
