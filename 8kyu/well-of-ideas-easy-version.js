// Well of Ideas - Easy Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// my code 

function well(x){
  let ideas = x.filter(a => a === 'good')
  let b = ideas.length
  if(b < 1){
    return 'Fail!'
  }else if(b < 3){
    return 'Publish!'
  }else {
    return 'I smell a series!'
  }
}