// Write Number in Expanded Form

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// my code 

function expandedForm(num) {
  let nums = String(num)
  let result = []
  
  for(let i = 0; i < nums.length; i++){
    if(nums[i] != 0){
      let zero = nums.length - 1 - i
      let digits = nums[i] + '0'.repeat(zero)
      result.push(digits)
    }
    
  }
  return result.join(' + ')
}