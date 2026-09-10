// ASCII Total


// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

// my code 

function uniTotal (string) {
let arr = string.split('')

let yo = arr.map(x => x.charCodeAt(0))
let result = yo.reduce((a,b) => a + b, 0)
return result
}