// Bumps in the Road

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

// my code 

function bump(x){
let bumps = x.split('').filter(y => y == 'n')
   if (bumps.length <= 15){
     return 'Woohoo!'
   }else {
     return 'Car Dead'
   }
  console.log(bumps)
}