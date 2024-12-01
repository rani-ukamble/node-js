const path = require("path");

// console.log(path.sep) // '\'

// console.log(process.env.PATH); //;

// console.log(path.delimiter); //; 


const currFilePath = __filename;
// console.log('currFilePath > ', currFilePath);

// let basename = path.basename(currFilePath);
// console.log('basename > ', basename) 

// let basenameWithoutExt = path.basename(currFilePath, '.js');
// console.log('basenameWithoutExt > ', basenameWithoutExt); 

// let dirname = path.dirname(currFilePath);
// console.log('dirname> ', dirname)



// console.log('ext1 > ', path.extname(currFilePath));

// console.log('ext2 > ', path.extname('index.js'))


// let pathToFile = path.format({
//     dir: '/public_html/home',
//     base: 'index.html'
// });
// console.log('pathToFile > ', pathToFile); 


// console.log('isAbsolute', path.isAbsolute(currFilePath)) 

// console.log('isAbsolute', path.isAbsolute('/index.js'))

// console.log('isAbsolute', path.isAbsolute('./index.js'))

// console.log('isAbsolute', path.isAbsolute('../index.js'))



// let pathToDir = path.join('/home', 'js', 'dist', 'index.js');
// console.log('pathToDir > ', pathToDir);  //pathToDir >  \home\js\dist\index.js


// console.log('parse> ', path.parse(currFilePath));  //base, ext, name etc.

console.log('relative path> ', path.relative('/home/user/config', 'home/user/js' ))