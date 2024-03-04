let cache = new Map();
function deepClone(obj) {
  console.log(typeof obj);
  if (obj === null) return null;
  if (cache.has(obj)) return cache.get(obj);
  if (typeof obj === 'object') {
    let result = null;
    result = Array.isArray(obj) ? [] : {};
    cache.set(obj, result);
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        result[key] = deepClone(obj[key]);
      }
    }
    return result;
  }

  return obj;
}
let a = {
  b: 1,
  c: {
    f: function () {},
    e: null,
    d: 123,
  },
};

console.log(deepClone(a));

function deepClone2(obj, map = new Map()) {
  if (obj === null) return obj;
  if (map.has(obj)) return map.get(obj);
  if (typeof obj === 'object') {
    let res = Array.isArray(obj) ? [] : {};
    map.set(obj, res);
    for (let key in obj) {
      res[key] = deepClone2(obj[key], map);
    }
    return map.get(obj);
  }
  return obj;
}
console.log(deepClone2(a));
