// 请实现一个makeRepeat方法领上面repeat之后可以每隔3秒打印"hello world"一次，一共要打印4次。
function makeRepeat(fn, times, waits) {
	const help = function (fn, waits, message) {
		return new Promise((resolve) =>
			setTimeout(() => {
				fn(message)
				resolve()
			}, waits)
		)
	}

	const task = function (message, n = 0) {
		if (n > times - 1) return
		help(fn, waits, message).then((res) => {
			task(message, n + 1)
		})
	}
	return task
}

var repeat = makeRepeat(console.log, 4, 3000)
repeat("hello world")

//输入[3,1,2,6, 5,8,9]
//输出[[1,2,3],[5,6],[8,9]]

function help(arr) {
	arr = arr.sort((a, b) => a - b)
	let result = []
	let target = [arr[0]]

	for (let i = 1; i <= arr.length; i++) {
		if (arr[i] - target[target.length - 1] === 1) {
			target.push(arr[i])
		} else {
			result.push(target)
			target = [arr[i]]
		}
	}
	console.log(result)
	return result
}

console.log(help([3, 1, 2, 6, 5, 8, 9]))

class Person {
	// 实现方法
	constructor(message) {
		this.callback = []
		this.callback.push(Person.help(0, message))
	}
	async execute() {
		// if(this.callback.length===0) return
		//   let fn = this.callback.shift()
		//     await fn()
		// await  this.execute()
		for (const argument of this.callback) {
			await argument()
		}
	}
	do(msg) {
		this.callback.push(Person.help(0, msg))
		return this
	}
	wait(time) {
		this.callback.push(Person.help(time))
		return this
	}
	waitFirst(time) {
		this.callback.unshift(Person.help(time))
		return this
	}
	static help(time, message = null) {
		return function () {
			if (message) {
				console.log(message)
				return
			}
			return new Promise((resolve) => {
				setTimeout(() => {
					console.log(time)
					resolve()
				}, time)
			})
		}
	}
}

p = new Person("abc")
p.wait(2000).do("df").wait(1000).do("gh").waitFirst(3000).execute()

// person('abc').execute()
// // 打印'abc'
// person('abc').do('df').execute()
// // 打印'abc'
// // 打印'df'
// person('abc').wait(2000).do('df').execute()
// // 打印'abc'
// // 等2秒
// // 打印'df'
// person('abc').wait(2000).do('df').wait(1000).do('gh').waitFirst(3000).execute()
// 等3秒
// 打印'abc'
// 等2秒
// 打印'df'
// 等1秒
// 打印'gh'
