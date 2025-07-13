"use strict";
class LNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(initialValue) {
        const newNode = new LNode(initialValue);
        this.head = newNode;
    }
    add(value) {
        const newNode = new LNode(value);
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            this;
        }
        // const currentNode = this.head
    }
}
const list = new LinkedList(10);
