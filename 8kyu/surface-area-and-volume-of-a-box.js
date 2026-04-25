// Surface Area and Volume of a Box

// Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.

// The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, etcetera).

// my code

function getSize(width, height, depth){
  let v = width * height * depth
  let sa = 2*width*height + 2*width*depth + 2*height*depth
  return [sa,v]
}
