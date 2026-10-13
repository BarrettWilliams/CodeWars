// longest_palindrome

// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

// my code 

function longestPalindrome(s){
  if(s === ''){
    return 0
  }
  
  let long = 0
  
  for(let i = 0; i < s.length; i++){
    for(let j = i +1; j <= s.length; j++){
      let str = s.slice(i, j)
      
      if(str === str.split('').reverse().join('')){
        if(str.length > long){
          long=str.length
        }
      }
    }
  }
  return long
}