// Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// my code 

var greet = function(name) {
let nameL = name.toLowerCase()
let n = nameL.charAt(0).toUpperCase() + nameL.slice(1)
return `Hello ${n}!`
};