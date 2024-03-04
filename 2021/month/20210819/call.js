/**
 * 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
 * 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
 * 处理传入的参数，截取第一个参数后的所有参数。
 * 将函数作为上下文对象的一个属性。
 * 使用上下文对象来调用这个方法，并保存返回结果。
 * 删除刚才新增的属性。
 * 返回结果。

 * @param obj
 * @param args
 * @returns {*}
 */
Function.prototype.call = function (obj, ...args) {
	let context = obj || window
	let fn = Symbol()
	context[fn] = this
	let result = context[fn](...args)
	delete context[fn]
	return result
}
