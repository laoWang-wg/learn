function conduct(str) {
	let strArr = str.split('')
	console.log(strArr)
	let stack1 = []
	let stack2 = []
	for (let j = 0; j < strArr.length; j++) {
		let temp = strArr[i]
		// 2+9/3-5
		switch (temp) {
			case '+':
			case '-':
				let s2 = stack2[stack2.length - 1]
				if (s2 === '*' || s2 === '/') {
					s2 = stack2.pop()
				}
				stack2.push(temp)
				break
			case '*':
			case '/':
				break
			case '(':
				break
			case ')':
				break

			default:
				stack1.push(temp)
				break
		}
	}
}

conduct('3+2*5')
