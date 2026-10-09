// Longest vowel chain

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// my code 

function solve(s){
 let j = 0
 let vowelNum = 0
 let vs = 'aeiou'
 
 for(let i = 0; i < s.length; i++){
   if(vs.includes(s[i])){
     j++
   }else {
     if (j > vowelNum){
       vowelNum = j
     }
     j = 0
   }
 }
  return vowelNum
 
}