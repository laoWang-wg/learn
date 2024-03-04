// var a = {
// 	i: 1,
// 	toString: function () {
// 		return this.i++
// 	}
// }
// let a = {
// 	i: 1,
// 	valueOf: function () {
// 		return this.i++
// 	}
// }

// let a = {
// 	i: 1,
// 	[Symbol.toPrimitive]: function () {
// 		return this.i++
// 	}
// }
// let i = 1
// let a = new Proxy(
// 	{},
// 	{
// 		i: 1,
// 		get(target, p, receiver) {
// 			return this.i++
// 		}
// 	}
// )
// if (a == 1 && a == 2 && a == 3) {
// 	console.log(2)
// }

// let i = 1
// let a = new Proxy(
// 	{},
// 	{
// 		i: 1,
// 		get() {
// 			return () => this.i++
// 		}
// 	}
// )

Object.defineProperty(window, "a", {
	get() {
		return (this.value = this.value ? (this.value += 1) : 1)
	}
})
if (window.a == 1 && window.a == 2 && window.a == 3) {
	console.log(2)
}
