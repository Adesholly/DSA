


function isMonotonic (array: number[]): boolean {

    if(array.length === 0) return true

    const first = array[0]
    const last = array[array.length - 1]

    if(first === last){

        for(let i = 0; i < array.length - 1; i++){

            if(array[i+1] !== array[i]) return false

        }

    } else if (first < last) {
        for(let i = 0; i < array.length -1; i++){

            if(array[i+1] < array[i]) return false

        }
    } else {

        for(let i = 0; i < array.length - 1; i++){

            if(array[i+1] > array[i]) return false
        }
    }
    
    return true  

}


// Test case

console.log(isMonotonic([1,2,3,5,4,4,4])) // false
console.log(isMonotonic([1,2,3,4,4,4,5])) // true