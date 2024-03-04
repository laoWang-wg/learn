/*
 * @Date: 2021-07-09 10:06:00
 * @LastEditTime: 2021-08-28 11:09:30
 * @Description: 找出数组中第k大和第m大的数字相加之和
 * let arr = [1,2,4,4,3,5], k = 2, m = 4
 * findTopSum(arr, k, m); // 第2大的数是4，出现2次，第4大的是2，出现1次，所以结果为10
 */

/**
 * @description: 采用堆排序求解
 * @param {*} arr 接收一个未排序的数组
 * @param {*} k 数组中第k大的元素
 * @param {*} m 数组中第m大的元素
 * @return {*}  返回数组中第k大和第m大的数字相加之和
 */
function findTopSum(arr, k, m) {
	let target = k > m ? k : m
	let a = null
	let b = null
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
			}
		}
		if (i === target) {
			a = arr[k - 1]
			b = arr[m - 1]
			break
		}
	}
	console.log(a, b)
}

findTopSum([1, 2, 4, 4, 3, 5], 2, 4)
