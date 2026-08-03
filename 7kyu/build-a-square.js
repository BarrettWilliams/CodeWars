// Build a square


// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// my code 

function generateShape(integer){
  let art = '' 
  let str = ''
//   console.log(art)
  for(let i = 0; i < integer; i++){
    art += '+'
  }
  
  console.log(art)
   for(let i = 0; i < integer; i++){
   str += art + '\n'
  }
 return str.slice(0,-1)
}