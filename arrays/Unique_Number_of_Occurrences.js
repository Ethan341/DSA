// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

function countOccurences(ele, inputArray){
    let count = 0;
    for(let i=0; i<inputArray.length; i++){
        if(ele == inputArray[i]){
            count++;
            inputArray[i] = -1;
        }
    }
    return count;
}

function validateOccurence(count, inputArray){
    return inputArray.includes(count);
}

console.log((function checkUniqueOccurence(inputArray){
    let countArray = [];
    for(let i=0; i<inputArray.length; i++){
        if(inputArray[i] != -1){
            let count = countOccurences(inputArray[i], inputArray);
            if(validateOccurence(count, countArray)){
                return false;
            }else{
                countArray.push(count);
            }
        }
    }
    return true
})([1,2,1,2]));
