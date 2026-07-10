// Sum of Odd Cubed Numbers

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// my code 

function cubeOdd(arr) {
let odds = arr.filter(x => x %2 !== 0)
// console.log(odds)
  let cubed = odds.map(x => x**3)
  let result = cubed.reduce((a,b) => a + b,0)

let str = arr.filter(x => typeof x !== "number" )
// console.log(str)

if (str.length >= 1){
  return undefined
}else {
  return result
}
}