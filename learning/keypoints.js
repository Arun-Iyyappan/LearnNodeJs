
// __dirname = Path to Current directory


// To export module from the Files : 
//         -> module.exports = {}


// To import modules :
//         -> const name  = require(filepath)

// Destructuring in Importing or using in  : 
//         -> Either by { exporting names } or name.exportvalue( function(name.exportvalue))


// os Module = Info about operating system -> require('os')

// Path Module =  require('path') -> info about paths

// fs module = require('fs') -> info about file system


// To append contents to existing file , give third parameter { flag : 'a'} in WriteFile


// Http Module = To create server using http.createServer(() => {})

// Nested Loops Results in Blocking Codes


// Promise Structure :

// const {readFile} = require('fs')

// const func = (path) => {
//     return new Promise( (resolve,reject) => {
//         readFile(path,'utf8',(err,data) => {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// Using async and Await :
// const start = async() => {
//     try{
//         const first = await func('./text/hello.txt')
//         console.log(first);
//     }
//     catch(error){
//          console.log(error);
//     }
// }

// start()


// func(path)
//    .then( () => {})
//    .catch( ()=> {})


