
## inherit答案

- inherit1.js, 采用链式的方式继承，缺点很明显，冗余且不灵活，Grid和Tree是两个独立并行的类，Tree并不需要继承Grid，但是为了后面TreGrid能拥有Grid的功能，不得不继承Grid。（不推荐）

- inherit2.js, 使用mixin的思想，把要继承类的原型属性都拷贝到mixin类的原型上，这样我们只是需要继承mixin类就可以了。（推荐做法）

## number答案（calculate.js）

## canvas答案

- canvas1.html, 采用了重新渲染整个画布的方式.

- canvas2.html, 采用了只是重新绘画点击的圆的方式.