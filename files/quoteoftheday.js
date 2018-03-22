const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("whats your name..?", (answer) => {

    console.log("well..hello," + answer);
    rl.close;
});
