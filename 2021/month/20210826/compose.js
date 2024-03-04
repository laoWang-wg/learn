const middleware = []
let p = () => {
	return new Promise((resolve) => {
		setTimeout(resolve, 1000)
	})
}
let mw1 = async function (next) {
	console.log("next前，第一个中间件", 1)
	await p()
	await next()
	console.log("next后，第一个中间件", 1.1)
}
let mw2 = async function (next) {
	console.log("next前，第二个中间件", 2)
	await p()
	await next()
	console.log("next后，第二个中间件", 2.1)
}
let mw3 = async function (next) {
	console.log("next前，第三个中间件", 3)
	await p()
	await next()
	console.log("next后，第三个中间件", 3.1)
}

function use(mw) {
	middleware.push(mw)
}

use(mw1)
use(mw2)
use(mw3)

let fn = function () {
	return dispatch(0)

	function dispatch(i) {
		let currentMW = middleware[i]
		if (!currentMW) {
			return
		}
		return currentMW(async () => {
			await dispatch(i + 1)
		})
	}
}
fn()

// function compose(middleware) {
// 	return function () {
// 		dispatch(0)
// 		function dispatch(i) {
// 			const fn = middleware[i]
// 			if (!fn) return null
// 			fn(async function next() {
// 				await dispatch(i + 1)
// 			})
// 		}
// 	}
// }
// compose(middleware)()
