// Find the capitals

// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// my code

var capitals = function (word) {
	let nums = word.split('').map((a,b) => a === a.toUpperCase()? b: 's')
    return nums.filter(x => x !== 's')
};