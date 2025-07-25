class TNode {
    value: number;
    left: TNode |null;
    right: TNode | null;

    constructor(value: number){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: TNode | null;

    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value: number){
        const newNode = new TNode(value); 
        let head = this.root
        
        if(this.isEmpty()){
            this.root = newNode
        } 

        while (head) {
            if (value < head.value){
                if (head.left == null){
                    head.left = newNode
                    return
                } else {
                    head = head.left
                    continue
                }
            }
            else if (value > head.value){
                if (head.right == null){
                    head.right = newNode
                    return
                }
                else {
                    head = head.right
                    continue
                }
            }
        }
    }

 
}

const bst = new BinarySearchTree()
console.log('Tree is empty', bst.isEmpty())