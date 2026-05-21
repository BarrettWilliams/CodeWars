// Mumbling


// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// my code 

function accum(s) {
s.split('')
  console.log(s,s.length)
  let arr = []
  
  for(let i = 0; i < s.length;i++){
    for(let j=-1; j < i; j++){
//       console.log(s[i])
      if(i == 0){
        arr.push(s[i].toUpperCase(), '-')
      }else if(j ==-1){
        arr.push(s[i].toUpperCase())
      }else if(j>=i-1){
        arr.push(s[i].toLowerCase(), '-')
      }else {
        arr.push(s[i].toLowerCase())
      }
    }
  }
  arr.pop()
  console.log(arr.join(''))
  return arr.join('')
}