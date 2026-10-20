// Largest Elements


// Write a program that outputs the top n elements from a list.

// Example:

// k = 2; list = [7, 6, 5, 4, 3, 2, 1]
// ==> [6, 7]

// my code 

function largest(n, array) {
 let neat = array.sort((a,b)=> b - a, 0)
  let nums = neat.slice(0,n)
  return nums.reverse()
}