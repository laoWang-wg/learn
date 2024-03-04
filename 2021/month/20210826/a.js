function myNew(fn, ...args) {
	let cto = Object.create(fn.prototype)
	console.log(cto.__proto__ === fn.prototype)
	console.log(fn.__proto__ === Function.prototype)
	console.log(Function.__proto__ === Function.prototype)
	console.log(Function.prototype.__proto__ === Object.prototype)
	let result = fn.apply(cto, args)
	if (result !== null && typeof result === "object") {
		return result
	}
	return cto
}

myNew(function a() {
	console.log(124)
})
console.log(myNew.__proto__ === Function.prototype)

console.log(Function.__proto__ === Function.prototype)
