"use strict";
class TNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
}
const bst = new BinarySearchTree();
console.log('Tree is empty', bst.isEmpty());
