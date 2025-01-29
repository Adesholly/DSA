


//Brute Force

function sortedSquaredArray (array: number[]): number[] {
    let newArray = new Array(array.length)

    for(let i = 0; i < array.length; i++) {
        const squaredArray =  array[i] ** 2
        newArray[i] = squaredArray
    }


    return newArray.sort((a, b) => a - b) //incase negative value
}




// Two Pointer Method

function _sortedSquaredArray (array : number[]): number[] {
    
    let newArray  = new Array(array.length)

    let right = array.length - 1
    let left = 0

    for(let i = array.length - 1; i >= 0; i--){
        const rightSquared = array[right] ** 2
        const leftSquared = array[left] ** 2

        if(leftSquared > rightSquared) {
            newArray[i] = leftSquared
            left++
        } else {
            newArray[i] = rightSquared
            right--
        }
    }
    return newArray

}


// Test Cases
console.log(sortedSquaredArray([-12,-1,0,1,3,4,6]))
console.log(_sortedSquaredArray([-12,-1,0,1,3,4,6]))