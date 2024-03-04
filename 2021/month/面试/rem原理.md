### 移动端自适应布局原理

em: em 作为 font-size 的单位时，其代表父元素的字体大小，em 作为其他属性单位时，代表自身字体大小——MDN

rem: rem 作用于非根元素时，相对于根元素字体大小；rem 作用于根元素字体大小时，相对于其出初始字体大小——MDN

```document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px';

```
