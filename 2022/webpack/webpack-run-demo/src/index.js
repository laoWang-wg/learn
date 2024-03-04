import { once } from 'lodash';
import add from './add';
import multiply from './multiply';
const onceAdd = once(add);
const addRes = onceAdd(1, 3);
console.log('[ addRes ]-6', addRes);
const multiplyRes = multiply(2, 3);
console.log('[ multiplyRes ]-8', multiplyRes);
