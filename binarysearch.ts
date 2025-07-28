function bins(arr: number[], t: number): number {
    let l = 0
    let h = arr.length - 1

    while (l <= h){
        let mid = Math.floor(l + h)/2;

        if (t == arr[mid]){
            return mid
        } else if (t > arr[mid]) {

        }
    }

    return -1
}