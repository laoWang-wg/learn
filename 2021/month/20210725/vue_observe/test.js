// function parsePath(str) {
//     var segments = str.split('.');

//     return (obj) => {
//         for (let i = 0; i < segments.length; i++) {
//             if (!obj) return;
//             obj = obj[segments[i]]
//         }
//         return obj;
//     };
// }
let obj = {
	a: {
		b: {
			c: 55,
		},
	},
}
console.log(
	parsePath('a.b.c', {
		a: {
			b: {
				c: 55,
			},
		},
	}),
)
