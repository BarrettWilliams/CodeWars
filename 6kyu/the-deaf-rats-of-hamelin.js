// The Deaf Rats of Hamelin

// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

// my code 

var countDeafRats = function(town) {
 let clean = town.replace(/ /g, '')
 
 const p = clean.indexOf('P')
 
 const left = clean.slice(0,p)
 const right = clean.slice(p +1)
 
 let rats = 0
 
 for(let i = 0; i<left.length; i+=2){
   if(left.slice(i, i + 2) === 'O~'){
     rats++
   }
 }
  
  for(let j = 0; j < right.length; j+=2){
    if(right.slice(j, j+ 2) === '~O'){
      rats++
    }
  }
  return rats
}