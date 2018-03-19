//script to pick a number between one and ten

// Require the seedrandom module

const seedrandom = require('seedrandom');
console.log(seedrandom);

//create a random number
let rng = seedrandom();
//Prints the function details
console.log(rng);

let myRandomNumber = Math.ceil((rng()*10));

console.log(myRandomNumber);