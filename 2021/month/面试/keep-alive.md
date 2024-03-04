Keep-alive 生命钩子

1. created

   1. 初始化两个对象 缓存vnode、 以及vnode的key

2. destroy

   1. 清空缓存，同时调用缓存组件的destroy 钩子

3. mounted

   1. 监听include、exclude更新缓存

4. render

   1. 获取keep-alive包裹的第一个组件实例

   2. 根据配置，是否决定缓存

   3. 生成key， 缓存组件；LRU算法，更新最新的位置，移除第一个

      ```javascript
      vnode.componentInstance = cache[key].componentInstance
              remove(keys, key)
              keys.push(key) // 调整key排序 
      ```
   
   4. 如果超过最多缓存， 移除第一个
   5. 设置组件实例的keep-alive为true

渲染

正常的组件渲染流程

1. 调用createElement-> render函数-> vnode -> patch

Keep-alive

1. Vue在初始化生命周期的时候，为组件实例建立父子关系会根据abstract属性决定是否忽略某个组件。在keep-alive中，设置了abstract:true，那Vue就会跳过该组件实例。

   ```javascript
   // src/core/instance/lifecycle.js
   export function initLifecycle (vm: Component) {
       const options= vm.$options
       // 找到第一个非abstract父组件实例
       let parent = options.parent
       if (parent && !options.abstract) {
           while (parent.$options.abstract && parent.$parent) {
                 parent = parent.$parent
           }
           parent.$children.push(vm)
       }
       vm.$parent = parent
       // ...
   }
   ```

   

2. 在首次加载被包裹组建时，由keep-alive.js中的render函数可知，vnode.componentInstance的值是undfined，keepAlive的值是true，因为keep-alive组件作为父组件，它的render函数会先于被包裹组件执行；那么只执行到i(vnode,false)，后面的逻辑不执行；

3. 再次访问被包裹组件时，vnode.componentInstance的值就是已经缓存的组件实例，那么会执行insert(parentElm, vnode.elm, refElm)逻辑，这样就直接把上一次的DOM插入到父元素中。

钩子函数

1. 被缓存的组件实例会为其设置keepAlive= true，而在初始化组件钩子函数中：

   ```tsx
   // src/core/vdom/create-component.js
   const componentVNodeHooks = {
       init (vnode: VNodeWithData, hydrating: boolean): ?boolean{
           if (
            vnode.componentInstance &&       
            !vnode.componentInstance._isDestroyed &&
            vnode.data.keepAlive
           ) {
             // keep-alive components, treat as a patch
             const mountedNode:any = vnode
             componentVNodeHooks.prepatch(mountedNode, mountedNode)
           } else {
             const child = vnode.componentInstance = createComponentInstanceForVnode (vnode, activeInstance)
              
           }
       }
   }
   ```

   当vnode.componentInstance和keepAlive同时为true时，不再进入$mount过程，那mounted之前的所有钩子函数（beforeCreate、created、mounted）都不再执行。

   2. 在patch阶段 会执行 invokeInsertHook 函数，其中递归的调用activateChildComponent，去执行钩子函数
