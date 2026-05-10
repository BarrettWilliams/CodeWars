// Largest pair sum in array

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// my code 

function largestPairSum (numbers) {
 let x = numbers.sort((a,b) => b-a)
  return x[0]+x[1]
}