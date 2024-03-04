// 例如将 input 转成output的形式
let input = [
  {
    id: 1,
    val: '学校',
    parentId: null,
  },
  {
    id: 2,
    val: '班级1',
    parentId: 1,
  },
  {
    id: 3,
    val: '班级2',
    parentId: 1,
  },
  {
    id: 4,
    val: '学生1',
    parentId: 2,
  },
  {
    id: 5,
    val: '学生2',
    parentId: 3,
  },
  {
    id: 6,
    val: '学生3',
    parentId: 3,
  },
];

let data = toTree0(input);
console.log('[ data ]-46', data);

function toTree(arr, parentId) {
  let children = [];
  for (let index = 0; index < arr.length; index++) {
    let node = arr[index];
    if (node.parentId === parentId) {
      children.push({
        id: node.id,
        val: node.val,
        children: toTree(arr, node.id),
      });
    }
  }
  return children;
}

let a = toTree(input, null);
// console.log(a);

const toTree2 = function (arr) {
  let root = [];
  for (let i = 0; i < arr.length; i++) {
    let parent = arr[i];
    parent.children = arr.filter((item) => item.parentId === parent.id);
    if (parent.parentId === null) {
      root.push(parent);
    }
  }
  return root;
};

let b = toTree2(input);
// console.log(b);

function toTree3(arr, parentId) {
  let result = [];
  for (const arrElement of arr) {
    if (arrElement.parentId === parentId) {
      result.push({
        ...arrElement,
        children: toTree3(arr, arrElement.id),
      });
    }
  }
  return result;
}

let c = toTree3(input, null);
// console.log(c);
