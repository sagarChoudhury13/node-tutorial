const path = require('path');

console.log(path.sep);

const fileName = path.resolve(__dirname, 'app.js');

console.log(fileName);

const fs = require('fs');
fs.readFile("./content/first.txt", "utf8", (err, result)=>{
    if(err){
        console.error(err);
    }else{
        console.log(result);
        fs.writeFile("./content/result.txt", `this is the first file appended ${result}`,(err, result)=>{
            try{
                console.log(result);
            }catch(err){
                console.log(err);
            }
        })
    }
})

