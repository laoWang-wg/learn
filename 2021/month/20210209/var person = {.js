var person = {
	name: '张三',
	age: {
		a: 32
	}
}

const proxy = new Proxy(person, {
	get: function (target, propKey) {
		console.log(target, propKey)
		if (propKey in target) {
			return target[propKey]
		} else {
			throw new ReferenceError('Prop name "' + propKey + '" does not exist.')
		}
	}
})

console.log(proxy.name) // "张三"
console.log(proxy.age.a) // 抛出一个错误.a
