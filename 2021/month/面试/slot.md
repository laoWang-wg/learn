slot会在父组件被生成children节点，传入到子组件中





默认插槽：

compile
（ast） 在父组件编译的时候， 会被编译成children 并且被标记成 slotTarget: "\"header\""

生成 render函数的时候 会
```js
with(this){
  return _c('div',
    [_c('app-layout',
      [_c('h1',{attrs:{"slot":"header"},slot:"header"},
         [_v(_s(title))]),
       _c('p',[_v(_s(msg))]),
       _c('p',{attrs:{"slot":"footer"},slot:"footer"},
         [_v(_s(desc))]
         )
       ])
     ],
   1)}
```

creatElement 之后 父组件 vnode 的 children 中保存这 slot 的vnode （也就是vnode在parent中生成）


作用域插槽
在父组件编译的时候， 生成的code , 以函数的形式存在
```js
with (this) {
  return _c(
    "div",
    [
      _c("child", {
        scopedSlots: _u([
          {
            key: "default ",
            fn: function (props) {
              return [
                _c("p", [_v("Hello from parent")]),
                _c("p", [_v(_s(props.text + props.msg))]),
              ];
            },
          },
        ]),
      }),
    ],
    1
  );
}

```

在子组件 生成vnode的时候再去调用函数生成 , 最后再patch 到dom上


(问题：那父元素数据更新怎么办？ 毕竟slot的vnode是由子组件生成的)

当父组件在渲染的时候,更新子组件的时候， 如果有插槽会强制 子组件重新渲染
```js
updateChildComponent(){
///....
// Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );
    /// ......
 // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}


```

