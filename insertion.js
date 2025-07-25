"use strict";
const numbers = [2, 6, 0, 9, 3, 1, 8, 7];
function insertionSort(array) {
    // create a for loop. 
    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i]; //6
        let j = i - 1; //1-1=0
        while (j >= 0 && array[j] > currentValue) {
            // we want this to loop when j is greater than or equals to 0 AND array[j] > curr
            //array[j] = array[0] = 2 is it greater than 0? NO
            array[j + 1] = array[j]; // [[empty], 2,6]
            j--; // -1
        }
        if (array[j + 1] !== currentValue)
            array[j + 1] = currentValue;
    }
}
