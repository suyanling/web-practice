class Tree {
    constructor() {
        this.tree = 'tree'
    }
    getTree(data) {
        console.log('I am getTree')
    }
    setTree(data) {
        console.log('I am setTree ')
    }
};


class Grid{
    constructor(){
        this.grid = 'grid'
    }
    getGrid() {
        console.log('I am getGrid')
    }
    setGrid(data) {
        console.log(`I am setGrid set data ${data}`)
    }
};


function mix(...mixins) { // 作者阮一峰
    class Mix {}
    for (let mixin of mixins) {
      copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }
    return Mix;
  }
  
  function copyProperties(target, source) {
    /* 
        Reflect Unlike most global objects, 
        Reflect is not a constructor. 
        You can not use it with a new operator or 
        invoke the Reflect object as a function. 
        All properties and methods of Reflect are static (just like the Math object).
    */
    // Reflect.ownKeys()
    // Returns an array of the target object's own (not inherited) property keys.
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

  class TreeGrid extends mix(Grid, Tree) {
    constructor() {
        super();
        this.treeGrid = 'treeGrid',
        this.tree = 'treeGrid‘tree' // 覆盖Tree 的tree属性
    }
    getTreeGrid(data) {
        console.log('I am getTreeGrid')
    }
    setTreeGrid(data) {
        console.log('I am setTreeGrid')
    }
    getGrid() {
        // 覆盖属性Grid 的getGrid方法
        console.log('I am TreeGrid‘getGrid')
    }
}

let treeGrid = new TreeGrid();

console.log('treeGrid.tree', treeGrid.tree); // treeGrid.tree treeGrid‘tree
treeGrid.getGrid(); // I am TreeGrid’getGrid
treeGrid.setGrid('treeGrid'); // I am setGrid set data treeGrid

