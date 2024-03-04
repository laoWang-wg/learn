namespace BinaryTree {
	class Node {
		value: number
		left: Node | null
		right: Node | null
		constructor(value: number) {
			this.value = value
			this.left = null
			this.right = null
		}
	}

	export class BST {
		root: Node | null
		constructor() {
			this.root = null
		}
		// 前序遍历
		preOrderTraverse1(node: Node | null): void {
			if (node) {
				console.log(node.value)
				this.preOrderTraverse1(node.left)
				this.preOrderTraverse1(node.right)
			}
		}
		//前序遍历（非递归）
		preOrder(node: Node | null): void {
			const stack: any = []
			while (node !== null || stack.length > 0) {
				if (node != null) {
					console.log(node.value)
					stack.push(node)
					node = node.left
				} else {
					const a = stack.pop()
					if (a) node = a.right
				}
			}
		}
		// 中序遍历
		inOrderTraverse1(node: Node | null): void {
			if (node) {
				this.inOrderTraverse1(node.left)
				console.log(node.value)
				this.inOrderTraverse1(node.right)
			}
		}
		// 中序遍历(非递归)
		inOrder(node: Node | null): void {
			const stack: any = []
			while (node || stack.length > 0) {
				if (node) {
					stack.push(node)
					node = node.left
				} else {
					const a = stack.pop()
					if (a) {
						console.log(a.value)
						node = a.right
					}
				}
			}
		}
		// 后续遍历
		postOrderTraverse1(node: Node | null): void {
			if (node) {
				this.postOrderTraverse1(node.left)
				this.postOrderTraverse1(node.right)
				console.log(node.value)
			}
		}
		insert(value: number): void {
			const node = new Node(value)
			const insertNode = (o: Node, n: Node) => {
				if (n.value < o.value) {
					if (o.left === null) {
						o.left = n
					} else {
						insertNode(o.left, n)
					}
				} else {
					if (o.right === null) {
						o.right = n
					} else {
						insertNode(o.right, n)
					}
				}
			}
			if (!this.root) {
				this.root = node
			} else {
				insertNode(this.root, node)
			}
		}
	}
}

// console.log(BinaryTree.BST);

const bst = new BinaryTree.BST()
const barr = [44, 63, 2, 9, 2, 3, 5, 12, 44, 65, 2, 9, 4, 11, 0]
for (let i = 0; i < barr.length; i++) {
	bst.insert(barr[i])
}

// console.log(bst.root);

bst.postOrderTraverse1(bst.root)
console.log("===")

bst.inOrder(bst.root)
