var num = 1450068;
console.log('[ num ]-2', num.toString());
// console.log(num.toLocaleString()) // 1,450,068

// 1.
// num.toLocaleString()
console.log('[ num.toLocaleString() ]-6', num.toLocaleString());

// 2
function toThousandsNum(n) {
  n = n.toString();
  let arr = [];
  while (n.length > 3) {
    arr.push(n.slice(-3));
    n = n.slice(0, n.length - 3);
  }
  arr.push(n);
  return arr.reverse().join(',');
}
console.log(toThousandsNum(num));
