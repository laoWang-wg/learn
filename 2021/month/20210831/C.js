// 有一个对象表示的树形结构，大致如下，实际节点很多，层级很深不止 2 层
// 实现一个 getPathByNodeId 的方法，传入节点的 id 值，返回节点的路径
const root = {
  id: 'root',
  nodes: [
    {
      id: 'node-123', // path 1 / [1]
      nodes: [
        {
          id: 'node-234', // path 1-1 / [1, 1]
        },
      ],
    },
    {
      id: 'node-345', // path 2 ...
      nodes: [
        {
          id: 'node-456', // path 2-1
        },
      ],
    },
  ],
};
function getPathByNodeId(root, key) {
  let result = [];
  let help = function (node) {
    if (!node) return false;
    if (node.id === key) return true;

    if (!node.nodes) return false;
    for (let i = 0; i < node.nodes.length; i++) {
      if (help(node.nodes[i], i)) {
        result.unshift(i);
        return true;
      }
    }
  };
  help(root, 'root');
  return result;
}
// root 1 0
let key = 'node-456';

let c = getPathByNodeId(root, key).reduce((a, b) => {
  return a[b].id === key ? a[b] : a[b].nodes;
}, root.nodes);
