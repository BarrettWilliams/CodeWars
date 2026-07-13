// Sum of differences in array

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// my code 

function sumOfDifferences(arr) {
  let n = arr.sort((a, b) => b - a)
 
  let arrs = []
  
  for(let i = 0; i< n.length -1; i++){ 
      arrs.push(n[i] - n[i+1])
    }
  
  console.log(arrs)
  
  if(arr.length <= 1){
    return 0
  }else {
    return arrs.reduce((a,b) => a + b)
  }
  
}