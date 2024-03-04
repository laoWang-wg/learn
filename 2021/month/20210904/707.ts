class LinkNode {
	val: number | null
	next: any

	constructor(val: number, next: any) {
		this.val = val ? val : null
		this.next = next ? next : null
	}
}

class MyLinkedList {
	_size: number
	_tail: any
	_head: any
	constructor() {
		this._size = 0
		this._tail = null
		this._head = null
	}
	getNode(index: number): any {
		if (index < 0 || index >= this._size) return null
		// 创建虚拟头节点
		let cur = new LinkNode(0, this._head)
		// 0 -> head
		while (index-- >= 0) {
			cur = cur.next
		}
		return cur
	}
	get(index: number): number {
		if (index < 0 || index >= this._size) return -1
		const cur: any = new LinkNode(0, this._head)
		return this.getNode(index).val
	}

	addAtHead(val: number): void {
		const node = new LinkNode(val, this._head)
		this._head = node
		this._size++
		if (!this._tail) {
			this._tail = node
		}
	}

	addAtTail(val: number): void {
		const node = new LinkNode(val, null)
		this._size++
		if (this._tail) {
			this._tail.next = node
			this._tail = node
			return
		}
		this._tail = node
		this._head = node
	}

	addAtIndex(index: number, val: number): void {
		if (index > this._size) return
		if (this._size <= 0) {
			this.addAtHead(val)
		}
		if (this._size === index) {
			this.addAtTail(val)
		}
		const node = this.getNode(index - 1)
		node.next = new LinkNode(val, node.next)
		this._size++
	}

	deleteAtIndex(index: number): void {
		if (index < 0 || index >= this._size) return
		if (index === 0) {
			this._head = this._head.next
			this._size--
			return
		}
		// 获取目标节点的上一个的节点
		const node = this.getNode(index - 1)
		node.next = node.next.next
		// 处理尾节点
		if (index === this._size - 1) {
			this._tail = node
		}
		this._size--
	}
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
