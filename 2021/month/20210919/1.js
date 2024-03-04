function test() {
	var a = 1
	return function () {
		eval("")
	}
}
let c = test()
console.log(c)
