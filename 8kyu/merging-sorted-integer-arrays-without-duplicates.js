// Merging sorted integer arrays (without duplicates)


// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// my code 

function mergeArrays(a, b) {
  let arr = []
  arr.push(...a)
  arr.push(...b)
  let nums = arr.filter((x,y) => arr.indexOf(x) === y)
  return nums.sort((a,b) => a-b)
}
