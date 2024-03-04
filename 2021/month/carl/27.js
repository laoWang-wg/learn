function removeElement(arr, target) {
	let start = 0
	let end = 0
	while (end < arr.length) {
		if (arr[start] !== target) {
			start++
			end++
		} else {
			end++
			if (arr[end] !== target && end < arr.length) {
				;[arr[start], arr[end]] = [arr[end], arr[start]]
				start++
				// end++
			}
		}
	}
	console.log(start)
	console.log(arr)
	return start
}

function removeElement2(arr, target) {
	let start = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== target) {
			//同步的时候 先赋值
			arr[start] = arr[i]
			// 慢指针前进
			start++
		}
	}
	console.log(start)
	return start
}

let nums = [0, 1, 2, 2, 3, 0, 4, 2]
let val = 2
removeElement2(nums, val)
