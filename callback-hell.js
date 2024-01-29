const fs = require('fs');
console.log("start");
fs.readFile('./test/first.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = data;
    fs.readFile('./test/second.txt','utf-8', (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        fs.writeFile('./test/result2.txt',`The result 2 is????? ${first} and ${second}`, (err,value)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("done");
        })
    })
});

console.log("starting next task");
