const fs = require('fs');

myReadfile = (path)=> {
    return new Promise((resolve, reject) =>{
        fs.readFile(path, 'utf-8',(err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

// doWork = async function(){
//     try {
//         let first = await myReadfile('./test/first.txt','utf-8');
//     let second = await myReadfile('./test/second.txt','utf-8');
//     fs.writeFile('./test/result2.txt',`THE RESULT 2 IS ${first} and ${second}`,{flag:'a'},(err) =>{
//         if(err){
//             console.log(err);
//         }
//     });
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// doWork();

myReadfile('./test/first.txt').then((value)=>{{
    console.log(value)
}}).catch((err)=>{
    console.log(err)
})

