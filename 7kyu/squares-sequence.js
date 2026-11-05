// Squares sequence

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

// my code 

function squares(x, n) {
  if(n < 1){
    return []
  }
let arr = []
let num = x
arr.push(x)

for(let i = 1; i < n; i++){
  num *= num
  arr.push(num)
}
  return arr
}