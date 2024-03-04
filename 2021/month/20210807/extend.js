function Pub() {}

function Sub(...args) {
	Pub.call(this, ...args)
}

Sub.prototype = Object.create(Pub.prototype)
Sub.prototype.constructor = Sub
