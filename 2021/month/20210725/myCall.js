Function.prototype.myCall = function (context, ...args) {
	this.fn = context || window
	context.fn = this
	let result = context.fn(...args)

	delete context.fn
	return result
}

Function.prototype.myApply = function (context, args) {
	this.fn = context || window
	context.fn = this
	let result = null
	if (!args) {
		result = context.fn()
	} else {
		if (Array.isArray(args)) {
			result = context.fn(...args)
		} else {
			throw new SyntaxError('"参数类型错误"')
		}
	}
	delete context.fn
	return result
}

Function.prototype.bind = function (oThis) {
	if (typeof this !== 'function') {
		throw new TypeError('被绑定的对象需要是函数')
	}
	const self = this
	const args = [].slice.call(arguments, 1)
	const func = function () {}
	let fBound = function () {
		// instanceof用来检测某个实例对象的原型链上是否存在这个构造函数的prototype属性，
		// this instanceof func === true时,说明返回的fBound被当做new的构造函数调用，
		// 此时this=fBound(){}，否则this=window, 如果是的话使用新创建的this代替硬绑定的this
		return self.apply(
			this instanceof func ? this : oThis,
			args.concat([].slice.call(arguments)),
		)
	}
	//维护原型关系
	if (this.prototype) {
		func.prototype = this.prototype
	}
	//使fBound.prototype是func的实例，返回的fBound若作为new的构造函数，新对象的__proto__就是func的实例
	fBound.prototype = new func()
	return fBound
}

let o = {
	name: 14,
}
function a(k) {
	console.log(k)
	console.log(this.name)
}
a.myApply(o, [24])
