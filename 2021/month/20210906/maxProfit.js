/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let maxValue = 0
	let minPrice = Infinity
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			minPrice = prices[i]
		} else {
			maxValue = Math.max(prices[i] - minPrice, maxValue)
		}
	}
	return maxValue
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
