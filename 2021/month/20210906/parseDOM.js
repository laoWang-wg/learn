const JsonTree = {
	tagName: "ul",
	value: "ul-0",
	props: {
		className: "list",
		"data-name": "jsontree"
	},
	children: [
		{
			tagName: "li",
			value: "li-0",
			children: [
				{
					tagName: "img",
					value: "li-img-0",
					props: {
						src: "//img.alicdn.com/tps/TB1HwXxLpXXXXchapXXXXXXXXXX-32-32.ico",
						width: "16px"
					}
				}
			]
		},
		{
			tagName: "li",
			value: "li-1",
			children: [
				{
					tagName: "a",
					value: "li-1",
					props: {
						href: "https://www.aliyun.com",
						target: "_blank"
					}
				}
			]
		}
	]
}

//通过parseDOM函数（使用document.createElement，document.createTextNode，appendChild等方法），生成一颗DOM树（返回一个element元素）
const creatElm = (obj) => {
	let node = document.createElement(obj.tagName)
	node.innerHTML = obj.value
	return node
}

function parseDOM(tree) {}

parseDOM(JsonTree)
