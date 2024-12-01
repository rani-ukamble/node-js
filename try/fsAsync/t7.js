// #Asynchronous

const fs = require("fs");

//... callbacks makes program asynchronous 

// ...must use callback function for asynchronous fn
// fs.writeFile('read.txt', 'it is awesome', ()=>{
//     console.log("file is created")
// });


// fs.appendFile('read.txt', 'add at the end of file', ()=>{
//     console.log('task completed')
// }); 


// fs.rename('read.txt', 'asyncRead.txt', ()=>{

// });

//.. utf8--encoding ..>
// 2 argumentds (err, data) must pass in readFile
fs.readFile('asyncRead.txt', 'utf8' ,(err, data)=>{
    console.log(data)
})