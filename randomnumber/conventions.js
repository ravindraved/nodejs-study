var oldStyleVarDecleartion = "Hello..";

let newStyleVarDecleration = "World !!";

const declareFixVar = "Const..UseItWhereEverItMakesSense..";


// Arrow Functions -- Old Style
// setTimeout (var1, var2);
// var1 and var2 can be -- object or function !!

//Old Style
setTimeout(function() {
    console.log("Timeout Function..OldStyle");    
}, 1000);


//New Style
setTimeout(() => {
    console.log("Timeout Function..NewStyle =>");    
}, 1500);

console.log("started timer hooks..");

//
console.log("DoubleQuote Style:" + " ${oldStyleVarDecleartion} " + oldStyleVarDecleartion);
console.log('SingleQuote Style:' + ' ${newStyleVarDecleration} ' + newStyleVarDecleration);
console.log(`BackTick Style:` + ` ${oldStyleVarDecleartion}` + ` ` + `${newStyleVarDecleration}`);
console.log(` ${oldStyleVarDecleartion} `);