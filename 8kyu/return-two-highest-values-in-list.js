// Return Two Highest Values in List


// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

// my code 

function twoHighest(arr) {
  if(arr == ''){
    return []
  }
  let one = arr.sort((a,b) => b - a)
  let high = one[0]
  if(arr.length < 2){
    return [high]
  }
 let two = one.filter(x => x != high)
 let second = two[0]
 return [high,second]
  
}