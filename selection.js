"use strict";
class selectionSort {
    constructor(arr) {
        this.arr = [];
        this.arr = arr;
    }
    sort() {
        let num = this.arr;
        for (let i = 0; i < num.length - 1; i++) {
            let mindex = i;
            // store the current variable in a temp
            for (let j = i + 1; j < num.length - 1; j++) {
                if (num[j] < num[mindex]) {
                    mindex = j;
                }
            }
            // array[i] = arr[mindex]
        }
        return num;
    }
}
const sorting = new selectionSort([5, 28, 30, 11, 15]);
console.log(sorting.sort());
