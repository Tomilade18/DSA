"use strict";
// Linear time O(n)
function sumUpTo(n) {
    let num = 0;
    for (let i = 0; i <= n; i++) {
        num += i;
        console.log(num);
    }
    return num;
}
sumUpTo(10000);
console.log(sumUpTo(50000));
console.log(sumUpTo(10));
// constant time  o1
function addUp(m) {
    let sum = m * (m + 1) / 2;
    return sum;
}
console.log(addUp(50000));
