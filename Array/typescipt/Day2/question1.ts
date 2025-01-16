// Recursive
function kgram(n: number, k: number): number {

    if(n === 1) return 0

    let length = Math.pow(2, n-1)
    let mid = length / 2

    if(k <= mid) {
        return kgram(n-1, k)
    } else {
        return 1 - kgram(n-1, k - mid)
    }
}


// Iterative
function kgramI(n: number, k: number): number {
    let res = 0

    for(let i = 1; i <= n; i++) {
        if(k % 2 === 1) {
            res = 1 - res
        }
        k = Math.floor(k/2)
    }
    return res
}

// Test Cases
console.log(kgram(3, 4)) // 1