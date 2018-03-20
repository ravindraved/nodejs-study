const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Pick a number--", (number) => {
    console.log(`you chose ${number}`);


    rl.question("Pick a second number: ", (number2) => {

        const product = parseInt(number) + parseInt(number2);
        console.log(`${number} + ${number2} = ${product}`);
    });
    rl.close();

});

