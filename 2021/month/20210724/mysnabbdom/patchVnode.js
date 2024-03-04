import createElement from './createElement.js'
import updateChildren from './updateChildren'
export default function (oldVnode, newVnode) {
	if (oldVnode === newVnode) return

	if (
		newVnode.text != undefined &&
		(newVnode.children == undefined || newVnode.children.length == 0)
	) {
		// 新的有
		if (newVnode.text != oldVnode.text) {
			oldVnode.elm.innerText = newVnode.text
		}
	} else {
		// 新的没有text
		if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
			updateChildren(oldVnode.elm, oldVnode.children, newVnode.children)
		} else {
			oldVnode.elm.innerHTML = ''
			for (let index = 0; index < newVnode.children.length; index++) {
				let dom = createElement(newVnode.children[index])
				oldVnode.elm.appendChild(dom)
			}
		}
	}
}
