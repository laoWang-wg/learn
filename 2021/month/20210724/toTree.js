data = [
	{
		id: 1,
		parent: 0,
		text: 'A',
	},
	{
		id: 2,
		parent: 4,
		text: 'B',
	},
	{
		id: 3,
		parent: 7,
		text: 'C',
	},
	{
		id: 4,
		parent: 1,
		text: 'D',
	},
	{
		id: 5,
		parent: 0,
		text: 'E',
	},
	{
		id: 6,
		parent: 5,
		text: 'B',
	},
	{
		id: 7,
		parent: 4,
		text: 'F',
	},
]

function toTree(arr) {
	const help = function (data, parentId) {
		let result = []
		for (let i = 0; i < data.length - 1; i++) {
			if (data[i].parent === parentId) {
				data[i].children = help(data, data[i].id)
				result.push(data[i])
			}
		}
		return result
	}

	return help(arr, 0)
}
// function getNestedChildren(arr, parent) {
//     var out = []
//     for (var i in arr) {
//         if (arr[i].parent == parent) {
//             var children = getNestedChildren(arr, arr[i].id)
//             if (children.length) {
//                 arr[i].children = children
//             }
//             out.push(arr[i])
//         }
//     }
//     return out
// }

let a = toTree(data)
console.log(a)
