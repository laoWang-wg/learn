Array.prototype.push = function (...args) {
	for (let i = 0; i < args.length; i++) {
		this[this.length] = args[i]
	}
	return this.length
}

let a = [12]

a.push(13, 14)
console.log(a)
