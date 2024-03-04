function* myGenerator() {
	console.log(yield Promise.resolve(1)) //1
	console.log(yield Promise.resolve(2)) //2
	console.log(yield Promise.resolve(3)) //3
}

function run(fn) {
	return new Promise((resolve, reject) => {
		let g = fn()
		let gen = function (val) {
			let value
			try {
				value = g.next(val)
			} catch (err) {
				reject(err)
			}

			if (value.done) return Promise.resolve(value.value)

			Promise.resolve(value.value).then(gen, reject)
		}
		gen()
	})
}

function* myGenerator() {
	try {
		console.log(yield Promise.resolve(1))
		console.log(yield 2) //2
		console.log(yield Promise.reject("error"))
	} catch (error) {
		console.log(error)
	}
}

const result = run(myGenerator)

function rightSideView(tree) {
	let stack = [tree]

	while (stack.length) {
		let len = stack.length
		let result = []
		result.push(stack[len - 1].val)
		for (let i = 0; i < len; i++) {
			let node = stack.pop()

			if (node.left) stack.push(node.left)
			if (node.right) stack.push(node.right)
		}
	}
}
