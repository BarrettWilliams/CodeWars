// Simple validation of a username

// Write a simple function to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// my code 

function validateUsr(username) {
  const res =  /^[a-z0-9_]{4,16}$/.test(username)
  return res;
}
