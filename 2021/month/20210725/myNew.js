// 1.创建一个空的简单JavaScript对象（即{}）；
// 2.链接该对象（即设置该对象的构造函数）到另一个对象 ；
// 3.将步骤1新创建的对象作为this的上下文 ；
// 4.如果该函数没有返回对象，则返回this。
function myNew(fn, ...args) {
	let obj = Object.create(fn.prototype)
	let result = fn.apply(obj, args)
	return typeof result === "object" ? result : obj
}

function A(name) {
	this.name = name
}

var a1 = new A("原生")

var a2 = myNew(A, "myNew")
console.log(a1)
