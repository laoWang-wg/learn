import Dep from './Dep'
import observe from './observe'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function defineReactive(data, key, val) {
	console.log('我是defineReactive', key)
	if (arguments.length === 2) {
		val = data[key]
	}
	const dep = new Dep()
	let childOb = observe(val)
	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: true,
		get() {
			console.log('你试图访问' + key + '属性')
			if (Dep.target) {
				dep.depend()
				// if(childOb){
				//     childOb.dep.depend()
				// }
			}
			return val
		},
		set(newVal) {
			console.log('你试图改变' + key + '属性', newVal)
			if (val === newVal) return
			val = newVal
			childOb = observe(newVal)
			dep.notify()
		}
	})
}
