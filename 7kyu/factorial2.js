// Factorial


// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// my code 

function factorial(n){
  let arr = []
  for(let i = 1; i <= n; i++){
    arr.push(i)
  }
 
  let sum = arr.reduce((a,b) => a*b, 1)
  return n == 0 ? 1 : sum

}