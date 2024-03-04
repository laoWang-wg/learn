function reverseList(head) {
	let cur = head
	let root = null

	while (cur) {
		let next = cur.next
		cur.next = root
		root = cur
		cur = next
	}
}
