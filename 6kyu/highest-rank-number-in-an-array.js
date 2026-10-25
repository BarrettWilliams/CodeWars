// Highest Rank Number in an Array


// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


// my code 

function highestRank(arr){

  let baseball = arr.reduce((a,b)=> {
    a[b] = (a[b] || 0) +1
    return a
  }, {})

let high = null
let count = 0

for(const item in baseball) {
  if(baseball[item] > count || (baseball[item] === count && Number(item) > Number(high))){
    count = baseball[item]
    high = item
  }
}
return Number(high)
}