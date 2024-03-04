/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 题意：反转一个单链表。

 示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL

 */
var reverseList = function (head) {
	let cur = head
	let prev = null

	while (cur) {
		let temp = cur.next // 2
		cur.next = prev

		prev = temp

		cur = temp
	}
	return prev
}
