// Filter the number

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// my code 

function filterString(value) {
  let num = value.split('').filter(x => Number(x)|| x==0).join('')
  return Number(num)
}