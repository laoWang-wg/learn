/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.capacity = capacity
	this.cache = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	if (this.cache.has(key)) {
		let value = this.cache.get(key)
		this.cache.delete(key)
		this.cache.set(key, value)
		return value
	}
	return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	if (this.cache.has(key)) {
		this.cache.delete(key)
	}
	let key2 = this.cache.keys()
	console.log(key2)
	if (this.cache.size >= this.capacity) {
		this.cache.delete(this.cache.keys().next().value)
	}
	this.cache.set(key, value)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(3)
var param_1 = obj.get('as')
obj.put('ad', 123)
obj.put('as', 1234)
obj.put('af', 1235)
obj.put('ad', 1236)
obj.get('af')
console.log(param_1)
