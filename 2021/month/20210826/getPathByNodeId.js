// 朱培恺对所有人说 (15:35)
// 有一个对象表示的树形结构，大致如下，实际节点很多，层级很深不止 2 层
// 实现一个 getPathByNodeId 的方法，传入节点的 id 值，返回节点的路径
const root = {
	id: "root",
	nodes: [
		{
			id: "node-123", // path 1 / [1]
			nodes: [
				{
					id: "node-234" // path 1-1 / [1, 1]
				}
			]
		},
		{
			id: "node-345", // path 2 ...
			nodes: [
				{
					id: "node-456" // path 2-1
				}
			]
		}
	]
}
function getPathByNodeId(root, key) {
	let result = []
	let help = function (root, index) {
		if (!root) return false
		result.push(index)
		if (root.id == key) {
			return true
		}

		if (!root.nodes) return false
		for (let i = 0; i < root.nodes.length; i++) {
			const ele = root.nodes[i]
			if (help(ele, i)) {
				return true
			}
			result.pop()
		}
	}

	help(root, "root")
	console.log(result)
	return result
}

// getPathByNodeId(root, "node-456") //[0,1, 0]
let r = {}
getPathByNodeId(root, "node-456").map((item) => {
	if (item === "root") {
		r = root.nodes
	} else {
		r = r[item].nodes || r[item]
	}
}) //[0,1, 0]
console.log(r)
