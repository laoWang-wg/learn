import { def } from './utils.js'

// 得到Array.prototype
const arrayPrototype = Array.prototype

// 以Array.prototype为原型创建arrayMethods对象，并暴露
export const arrayMethods = Object.create(arrayPrototype)

// 要被改写的7个数组方法
const methodsNeedChange = [
	'push',
	'pop',
	'shift',
	'unshift',
	'splice',
	'sort',
	'reverse',
]

methodsNeedChange.forEach((method) => {
	let originMethod = arrayPrototype[method]

	def(
		arrayMethods,
		method,
		function () {
			console.log('llll')
			const ob = this.__ob__
			let result = originMethod.apply(this, arguments)
			const args = [...arguments]
			// 有三种方法push\unshift\splice能够插入新项，现在要把插入的新项也要变为observe的
			let inserted = []

			switch (methodName) {
				case 'push':
				case 'unshift':
					inserted = args
					break
				case 'splice':
					// splice格式是splice(下标, 数量, 插入的新项)
					inserted = args.slice(2)
					break
			}
			if (inserted) {
				ob.observeArray(inserted)
			}
			ob.dep.notify()
			return result
		},
		false,
	)
})
