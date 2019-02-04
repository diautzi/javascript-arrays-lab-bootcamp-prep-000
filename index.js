var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newKittens = kittens.slice(0);
  newKittens.push(name);
  return newKittens;
}


function prependKitten(name) {
  var newKittens = kittens.slice(0);
  newKittens.unshift(name);
  return newKittens;
  
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
  }
  
  function removeLastKitten() {
    return kittens.slice(0, kittens.length -1);
  }
  
 
  
  
  
  
  
  
  
>>>>>>> 15b876b32ae486ebddb43319a7bce408f2c266db
