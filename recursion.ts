function sum(n: number): number{
    if(n <= 0){
        return 0;
    }
    return sum(n - 1) + n
}

console.log(sum(10))

// function fib(n: number): number{
//     if (n <= 0) {
//         return 0;
//     }
// }