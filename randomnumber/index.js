//script to pick a number between one and ten

// Require the seedrandom module

const seedrandom = require('seedrandom');

//create a random number
let rng = seedrandom();

let myRandomNumber = Math.ceil((rng()*10));

console.log(myRandomNumber);