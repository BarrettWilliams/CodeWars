// Well of Ideas - Easy Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 
// 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!',
//  if there are more than 2 return 'I smell a series!'. If there are no good ideas, as 
//  is often the case, return 'Fail!'.

//  my code

function well(x){
  let good = 'good'
let arr = x.filter(b => b === 'good')
if ((0 < arr.length) && (arr.length < 3) ){
  return 'Publish!'
}else if(arr.length > 0){
  return 'I smell a series!'
}else {
  return 'Fail!'
}
  return arr.length
}