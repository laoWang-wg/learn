function red() {
	console.log("red")
}
function green() {
	console.log("green")
}
function yellow() {
	console.log("yellow")
}
// 下面来看一道比较典型的问题，通过这个问题来对比几种异步编程方法：
// 红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；
// 如何让三个灯不断交替重复亮灯？
// const task = (timer, light, callback) => {
// 	setTimeout(() => {
// 		if (light === "red") {
// 			red()
// 		} else if (light === "green") {
// 			green()
// 		} else if (light === "yellow") {
// 			yellow()
// 		}
// 		callback()
// 	}, timer)
// }
//
// const step = () => {
// 	task(3000, "red", () => {
// 		task(2000, "green", () => {
// 			task(1000, "yellow", step)
// 		})
// 	})
// }
// step()

const task = (timer, light) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if (light === "red") {
				red()
			} else if (light === "green") {
				green()
			} else if (light === "yellow") {
				yellow()
			}
			resolve()
		}, timer)
	})
const step = () => {
	task(3000, "red")
		.then(() => task(2000, "green"))
		.then(() => task(2100, "yellow"))
		.then(step)
}
step()
