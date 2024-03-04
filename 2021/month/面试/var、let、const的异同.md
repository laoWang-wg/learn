[参考地址]([面试官：说说var、let、const之间的区别 | web前端面试 - 面试官系列 (vue3js.cn)](https://vue3js.cn/interview/es6/var_let_const.html#四、区别))

<h3>var、let、const三者区别可以围绕下面五点展开</h3>

1. 变量提升 
   1. var声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined 
   2. let和const不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错
2. 暂时性死区 
   1. var不存在暂时性死区 
   2. let和const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量
3. 块级作用域 
   1. var不存在块级作用域 
   2. let和const存在块级作用域
4. 重复声明
   1. var允许重复声明变量 
   2. let和const在同一作用域不允许重复声明变量
5. 修改声明的变量 
   1. var和let可以 
   2. const声明一个只读的常量。一旦声明，常量的值就不能改变
6. 使用
   1. 能用const的情况尽量使用const，其他情况下大多数使用let，避免使用var

