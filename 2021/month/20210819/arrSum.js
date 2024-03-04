function arrSum(arr) {
	return arr.reduce((a, b) => a + b, 0)
}

console.log(arrSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//arr=[1,2,3,[[4,5],6],7,8,9]，求和

function arrSum2(arr) {
	return arr
		.toString()
		.split(",")
		.reduce((a, b) => a + Number(b), 0)
}

console.log(arrSum2([1, 2, 3, [[4, 5], 6], 7, 8, 9]))

function add(arr) {
	if (arr.length === 1) return arr[0]
	return arr[0] + add(arr.slice(1))
}

console.log(add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
