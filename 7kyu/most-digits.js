// Most digits

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// my code 


function findLongest(array){

const numStr = array.map(x => String(x))
// console.log(numStr)

// // let black = numStr

let test = [...numStr].sort((a,b) => b - a)
// console.log(test)
// console.log(numStr[0].length,numStr[1].length)
// console.log(numStr)
// console.log(test)

if (test[0].length == test[1].length){
    let juice = numStr.filter(x => x.length === test[0].length)
//     console.log(juice[0])
    return Number(juice[0])
}else {
//     console.log(test[0])
  return Number(test[0])
}
 
}

