// UEFA EURO 2016


// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// my code 

function uefaEuro2016(teams, scores){
  let host = teams[0]
  let visit = teams[1]
  let a = scores[0]
  let b = scores[1]
  
  if(a > b){
    return `At match ${host} - ${visit}, ${host} won!`
  }else if(a < b){
    return `At match ${host} - ${visit}, ${visit} won!`
  }else {
    return `At match ${host} - ${visit}, teams played draw.`
  }
}