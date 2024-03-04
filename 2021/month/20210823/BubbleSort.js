function BubbleDort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}
	return arr
}

function InsertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
			}
		}
	}
	return arr
}

function selectionSort(arr) {
	let min = 0
	for (let i = 0; i < arr.length; i++) {
		min = i
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j
			}
		}

		;[arr[i], arr[min]] = [arr[min], arr[i]]
	}
	return arr
}

function quickSort(arr) {
	const help = function (nums, low, hight) {
		let _low = low
		let _hight = hight
		if (low > hight) return
		let temp = nums[low]
		while (low < hight) {
			while (low < hight && temp < nums[hight]) {
				hight--
			}
			if (low < hight) {
				nums[low] = nums[hight]
				low++
			}
			while (low < hight && nums[low] < temp) {
				low++
			}
			if (low < hight) {
				nums[hight] = nums[low]
				hight--
			}
		}
		nums[low] = temp
		help(nums, _low, low - 1)
		help(nums, low + 1, _hight)
	}

	help(arr, 0, arr.length - 1)

	return arr
}
let arr = [4, 1, 5, 7, 2, 6, 3, 8, 0]

console.log(quickSort(arr))
