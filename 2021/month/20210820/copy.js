let obj = {
	a: undefined
}

let b = JSON.parse(JSON.stringify(obj))
console.log(b)
