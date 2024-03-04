// entry.js -> message.js -> name.js
// 找到入口文件，解析入口文件，找出他的依赖，递归，把所有文件打包成一个文件

const fs = require('fs');
const babylon = require('babylon');
const path = require('path');
const traverse = require('babel-traverse').default;
const babel = require('babel-core');
// 2.分析ast, 解析出entry.js 的依赖
// babylon 一个基于babel的js解析工具

let ID = 0;

function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = babylon.parse(content, {
    sourceType: 'module',
  });

  const dependencies = [];

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencies.push(node.source.value);
    },
  });
  const id = ID++;
  // 通过ast获取code
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['env'],
  });
  return {
    id,
    filename,
    dependencies,
    code,
  };
}
// 建立依赖关系图

function createGraph(entry) {
  const mainAsset = createAsset(entry);
  const allAsset = [mainAsset];

  for (const asset of allAsset) {
    const dirname = path.dirname(asset.filename);

    asset.mapping = {};

    asset.dependencies.forEach((relativePath) => {
      const absolutePath = path.join(dirname, relativePath);
      // 通过依赖的绝对路径 那个依赖的依赖
      const childAsset = createAsset(absolutePath);

      asset.mapping[relativePath] = childAsset.id;
      allAsset.push(childAsset);
    });
  }
  return allAsset;
}
// 所有的依赖图
const graph = createGraph('./source/entry.js');
// console.log('[ graph ]-50', graph);

// 输出的是一个接受参数且立即执行函数
function bundle(graph) {
  let modules = '';
  graph.forEach((module) => {
    modules += `${module.id}: [
      function(require, module,exports){
        ${module.code}
      },
      ${JSON.stringify(module.mapping)},
    ],`;
  });
  // 实现require方法
  const res = `
    (function(modules){
      function require(id){
        const [fn, mapping] = modules[id];

        function localRequire(relativePath){
          return require([mapping[relativePath]]);
        }

        const module = {exports: {}};

        fn(localRequire, module, module.exports);

        return module.exports;
      }
      require(0);
    })({${modules}})
  `;
  return res;
}

const res = bundle(graph);
console.log(res);
