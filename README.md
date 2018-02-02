## 前端工程师练习题和答案

### 多重继承
我们在复杂的前端场景中，经常会面临代码复用的问题，但是 JavaScript 仅支持一个父类。使用 JS 设计一套实现多重继承的方案，可以使用 ES5 或 ES6，有以下要求：
* 可以轻松的覆盖父类（接口）的方法实现
* 支持属性的覆盖
* 保证性能
提示：例如一个 UI 库下，已经写了一个 Grid （表格组件），也实现了一个 Tree （树组件），需要一个 TreeGrid （即拥有树功能也拥有表格功能的组件）


A: 因为JavaScript 仅支持一个父类，故我们把需要的继承的其他的类的原型都拷到到一个类mix里面，我们只是需要继承这个mix类就可以了。代码详情看'/inherit'。

```javascript
// 代码注释
function mix(...mixins) { // 作者阮一峰
    class Mix {}
    for (let mixin of mixins) {
      copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }
    return Mix;
}
   
function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if ( key !== "constructor"
        && key !== "prototype"
        && key !== "name"
        ) {
        let desc = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, desc);
        }
    }
}
```

The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.
// 给对象添加新的属性 decorator的原理也是这样的
The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.


### 原型链
实现链式运算符（加减乘除乘方）
要点：原型链、this
// p1 code goes here
console.log( (123).add(1).minus(2).multi(3).div(4).pow(2) );
// 相当于 ((123 + 1 - 2) * 3 / 4) ^ 2

A： 让（123）即数据拥有方法，那么就是在Number原型链上添加我们想要的方法，代码详情看'/number'文件。


### 绘制图形
在一个 html canvas 画布上绘制上百个圆，点击其中的一个圆，将其绘制在最上面（原先的绘制不保留），并设置不同的颜色，要求：
* 能够点击选中圆
* 将选中的圆绘制在最上面时，其他的圆的绘制顺序不变


A：canvas的绘制，清除clearRect()，鼠标点击事件处理。canvas的beginPath(), 画图形函数，和图形的样式函数，fill()和store填充函数。以及save()，store()和clip()方法的调用。
代码详情看'/canvas'文件。