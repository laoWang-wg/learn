function jsonp({ url, params = {}, callbackKey = "cb", callback }) {
	let script = document.createElement("script")
	params[callbackKey] = callback
	let urlStr = Object.keys(params)
		.map((key) => {
			return key + "=" + params[key]
		})
		.join("&")
	window[callbackKey] = callback
	script.src = url + "?" + urlStr
	document.body.appendChild(script)
}

const obj = {
	[Symbol.iterator]: function () {
		return {
			next: function () {
				return {
					value: 1,
					done: true
				}
			}
		}
	}
}
for (const number of obj) {
	console.log(number, 23)
}

class RangeIterator {
	constructor(start, stop) {
		this.value = start
		this.stop = stop
	}

	[Symbol.iterator]() {
		return this
	}

	next() {
		var value = this.value
		if (value < this.stop) {
			this.value++
			return { done: false, value: value }
		}
		return { done: true, value: undefined }
	}
}

function range(start, stop) {
	return new RangeIterator(start, stop)
}

for (var value of range(0, 3)) {
	console.log(value) // 0, 1, 2
}

function Obj(value) {
	this.value = value
	this.next = null
}

Obj.prototype[Symbol.iterator] = function () {
	var iterator = { next: next }

	var current = this

	function next() {
		if (current) {
			var value = current.value
			current = current.next
			return { done: false, value: value }
		}
		return { done: true }
	}
	return iterator
}

var one = new Obj(1)
var two = new Obj(2)
var three = new Obj(3)

one.next = two
two.next = three

for (var i of one) {
	console.log(i) // 1, 2, 3
}

var lengthOfLongestSubstring = function (s) {
	let str = ""
	let start = 0
	let max = 0
	for (let i = 0; i < s.length; i++) {
		let index = str.indexOf(s[i])
		if (index > -1) {
			start = start + index + 1
		}

		str = s.slice(start, i + 1)
		max = Math.max(i - start + 1, max)
	}
	return max
}

lengthOfLongestSubstring("abcabcbb")
