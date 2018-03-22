const fs = require('fs');

fs.writeFile('message.txt',"This is message in new file", (err) => {
    if(err) throw err;
    console.log("File has been saved!!");
});