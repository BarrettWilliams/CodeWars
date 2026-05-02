// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// my code 

function reverseWords(str) {
  let restr = str.split(' ')
  let say = restr.map(x =>  x.split('').reverse().join('')).join(' ')
  return say
}