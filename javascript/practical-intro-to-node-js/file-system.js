// fileSystem
// files -> create      read            update          delete
//          open -w     readFileSync    appendFile      unlinkSync
let fs = require("fs")

//read 
let buffer = fs.readFileSync("abc.js")
// console.log("bin data" + buffer)

//create
// fs.openSync("abc.txt", "w");

// no file => will create new file, file exist => content replace/overwrite kar dega
// create/write
// fs.writeFileSync("abc.txt", "Hum aaj bahot khush nahi hai")

// update
// fs.appendFileSync("abc.txt", "bhai khus kyu nahi hai??")

//folders
// create       read            delete
// mkdirSync    readdirSync     rmdirSync
// fs.mkdirSync("meriDirectory")

// fs.writeFileSync("meriDirectory/merifile.txt", "Mera content")

// let content = fs.readdirSync("meriDirectory")
// console.log(content)
// for(let i = 0; i<content.length; i++){
//     console.log("file", content[i], "is removed")
//     // to remove file
//     fs.unlinkSync("meriDirectory/"+content[i])
// }

// to remove folder
// fs.rmdirSync("meriDirectory")

// fs.existSync -> if file exist at path -> returns true else returns false
let doesPathExist = fs.existsSync("abc.txt")
console.log(doesPathExist)

doesPathExist = fs.existsSync("abcd.txt")
console.log(doesPathExist)

// fs.lstatSync -> ye bata deta hai ki ye path file ka hai ya folder ka hai.
let detailsObj = fs.lstatSync(__dirname+"/file-system.js")
console.log(detailsObj)
let ans = detailsObj.isFile()
console.log(ans)
ans = detailsObj.isDirectory()
console.log(ans)





