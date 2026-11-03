// Ensure question

// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"

// my code 

function ensureQuestion(s) {
 let x = s.slice(-1)
 if (x !== '?'){
   return s + '?'
 }else {
   return s
 }
}