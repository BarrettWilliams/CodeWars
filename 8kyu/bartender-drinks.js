// L1: Bartender, drinks!

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// my code

function getDrinkByProfession(param){
  let x = param.toLowerCase()
  if(x == 'jabroni'){
    return "Patron Tequila"
  }else if(x == 'school counselor'){
    return "Anything with Alcohol"
  }else if (x == 'programmer'){
    return "Hipster Craft Beer"
  }else if(x == 'bike gang member'){
    return "Moonshine"
  }else if(x == 'politician'){
    return "Your tax dollars"
  }else if (x == 'rapper'){
    return "Cristal"
  }else{
    return "Beer"
  }

}