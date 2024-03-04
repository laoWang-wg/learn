import { arrayMethods } from './array'
import defineReactive from './defineReactive'
import Dep from './Dep'
import observe from './observe'
import { def } from './utils'
export default class Observer {
	constructor(value) {
		console.log('我是Observe构造器')
		def(value, '__ob__', this, false)
		this.dep = new Dep()
		if (Array.isArray(value)) {
			Object.setPrototypeOf(value, arrayMethods)
		} else {
			this.walk(value)
		}
	}

	walk(value) {
		for (const key in value) {
			if (Object.hasOwnProperty.call(value, key)) {
				defineReactive(value, key)
			}
		}
	}
	observeArray(arr) {
		for (let i = 0; (j = arr.length), i < j; i++) {
			observe(arr)
		}
	}
}
