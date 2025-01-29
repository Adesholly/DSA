



// Approach 1


function winner (n: number, k: number): number {
   

    let arr  = Array.from({length: n}, (_, i) => i + 1)
    function helper (arr: number[], starting: number): number {

        //base case
        if(arr.length === 1) return arr[0]

        // recursive case
        let index = (starting + k - 1) % arr.length
        arr.splice(index, 1)
        return helper(arr, index)
    }

    return helper(arr, 0)

}


// Approach 2

function _winner(n: number, k: number): number {

    function helper(n: number ): number {
        // base case`
        if(n == 1) return 0
        // recursive case
        return (helper(n-1) + k) % n
      
    }

    return helper(n) + 1 

  
}


// Approach 3

function winnerI(n: number, k: number): number{

    let winner = 0
    for(let i = 2; i <= n; i++) {
        winner = (winner + k) % i

    }
    return winner + 1
}

// Test Cases
console.log(winner(5, 3))
console.log(_winner(5, 3))
console.log(winnerI(5, 3))

