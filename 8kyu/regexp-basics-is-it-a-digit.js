// Regexp Basics - is it a digit?


// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a single digit (0-9), false otherwise.

// my code 

String.prototype.digit = function() {
   return /^[0-9]$/.test(this)
};