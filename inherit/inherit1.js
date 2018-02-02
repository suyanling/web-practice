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

class Tree extends Grid{
    constructor() {
        super();
        this.tree = 'tree'
    }
    getTree(data) {
        console.log('I am getTree')
    }
    setTree(data) {
        console.log('I am setTree ')
    }
};


class TreeGrid extends Tree{
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

