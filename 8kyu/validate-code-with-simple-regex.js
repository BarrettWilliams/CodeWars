// validate code with simple regex

// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

// my code 

function validateCode (code) {
let a = code.toString()[0]
console.log(a)

if(a == 1 || a == 2 || a == 3){
  return true
}else {
  return false
}
}