// Description:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// My Solution 

function areYouPlayingBanjo(name) {
    x = name
    
  return x[0].toLowerCase() === 'r'? `${x} plays banjo` : `${x} does not play banjo`
  }