class LNode {
    value: number;
    next: LNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: LNode | null;

    constructor(initialValue: number) {
        const newNode = new LNode(initialValue)
        this.head = newNode;
    }

    add(value: number) {
        const newNode = new LNode(value);
        
        if(this.head == null) {
            this.head = newNode;
        } else {
            this
        }
        // const currentNode = this.head
    }
}

const list = new LinkedList(10);