// Linear time O(n)
function sumUpTo(n) {
    var num = 0;
    for (var i = 0; i <= n; i++) {
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
    var sum = m * (m + 1) / 2;
    return sum;
}
console.log(addUp(50000));
