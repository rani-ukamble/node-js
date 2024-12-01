const fs = require("fs")

// console.log('READ START ')
// // Async way
// fs.readFile('input.txt', (err, data)=>{
//     console.log(data.toString())
// })



// // sync way
// let d= fs.readFileSync('input.txt')
// console.log(d.toString()) 


// open file => read => close file
// read>>>open + read

// const buf = new Buffer(1024);

// fs.open('input.txt', 'r+', (err,fd)=>{
//     if(err) console.log("error in writing file");
//     console.log("file ope successfully");
// // read from position 0
//     fs.read(fd, buf, 0, buf.length, 0, (err, bytes)=>{
//         if(err){console.log("error in writing file");} 
//         console.log("Data: ", bytes);
//         console.log(buf.slice(0, bytes).toString())
//     })

// });



// #write into a file

// #sync
// fs.writeFileSync('input.txt', 'PW skills')

// #async
// fs.writeFile('input.txt', 'Welcime guys', (err)=>{
//     if(err) console.log("error in writing file");
//     else console.log("success in writing file");
// })



// #AppendFile
// fs.appendFile('input.txt', 'Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a Buffer.', (err, data)=>{
//     if(err) console.log("error in writing file");
//     else console.log("success in writing file");
// } )


 

// #Delete file

// fs.unlink('input.txt', (err)=>{
//     if(err) console.log("error in deleting file");
//     else console.log("success in deleting file");
// })

