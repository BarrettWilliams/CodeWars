// Dashatize it

// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

// my code 

function dashatize(num) {
 num = num.toString().split('')
  
  let arr = []
  
  for(let i=0; i< num.length; i++){
    let x = num[i]
    
    if (x.includes('-')) continue; 
    
    if (i == num.length-1 && x %2 != 0 && num[i-1] % 2 == 0){
      arr.push('-'+x )
    }else if(i == num.length-1 && x %2 != 0 && num[i-1] % 2 != 0){
      arr.push(x)
    } else if(i == 0 && x % 2 != 0){
      arr.push(x+'-')
    } else if(x %2 != 0 && num[i-1] % 2 == 0) {
      arr.push('-'+x+'-')
    }else if(x % 2!=0 && num[i-1] %2 != 0){
      arr.push(x+'-')
    }else{
      arr.push(x)
    }
  }
  
  return arr.join('')
}