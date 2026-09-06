// Divide and Conquer


// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// my code 

function divCon(x){

  const num = x.filter(x => x === Number(x))
  const str = x.filter(y => y !== Number(y))
  let strN = str.map(x => Number(x))
  
  let nums = num.reduce((a,b) => a+b,0)
  let strs = strN.reduce((x,y) => x + y,0)
  return nums - strs
}