// Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// my code 

function removeUrlAnchor(url){
  //find index of the #
  //slice from that point til url.length might have to subtract 1 need to think more
  
  let buzz = url.split('').indexOf('#')
  if(url.split('').find((x) => x == '#')){
    return url.slice(0,buzz)
  }else {
    return url
  }
  
}