// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

// my code

function solution(str, ending){
  let n = ending.length
  let x = str.slice(-n)
  if(ending === x){
    return true
  }else if(ending === ''){
    return true
    }else {
    return false
  }
}