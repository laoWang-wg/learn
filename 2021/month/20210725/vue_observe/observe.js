import Observer from './Observer'

export default function observe(value) {
	if (typeof value !== 'object') {
		return
	}
	var ob
	if (typeof value__ob__ !== 'undefined') {
		ob = value__ob__
	} else {
		ob = new Observer(value)
	}
	return ob
}
