// File

const fs = require("fs")

// ...if file present then override data else create new file

// fs.writeFileSync("read.txt", "welcome to new file");
// fs.writeFileSync("read.txt", "welcome welcome");


// ... append text at the end
// fs.appendFileSync("read.txt", "new line appeded")


// ...read data ---buffer data-->tostring
// let buffData = fs.readFileSync("read.txt")
//  console.log(buffData.toString())


fs.renameSync('read.txt', 'write.txt')