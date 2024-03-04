const options = [
	{
		id: "zhejiang",
		text: "Zhejiang",
		children: [
			{
				id: "hangzhou",
				text: "Hangzhou",
				children: [
					{
						id: "xihu",
						text: "West Lake"
					}
				]
			}
		]
	},
	{
		id: "jiangsu",
		text: "Jiangsu",
		children: [
			{
				id: "nanjing",
				text: "Nanjing",
				children: [
					{
						id: "zhonghuamen",
						text: "Zhong Hua Men"
					}
				]
			},
			{
				id: "beijing",
				text: "beijing",
				children: [
					{
						id: "baiyuan",
						text: "baiyuan"
					}
				]
			}
		]
	}
]
function recursion(_primary, _options) {
	let result = []
	const help = function (arr) {
		for (let i = 0; i < arr.length; i++) {
			if (_primary === arr[i].id) {
				result.push(i)
				return true
			}
			if (!arr[i].children) return false
			if (help(arr[i].children, arr[i].id)) {
				result.unshift(i)
				return true
			}
		}
	}
	help(_options)
	return _options
}

console.log(recursion("baiyuan", options))
