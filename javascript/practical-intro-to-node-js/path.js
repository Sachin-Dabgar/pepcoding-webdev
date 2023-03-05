let path = require("path")
let fs = require("fs")
let ext = path.extname(path.join(__dirname, "abc.js"))
console.log(ext)

let name = path.basename(__dirname)
console.log(name)

for(let i = 1; i<=10; i++){
    let diretoryToMake = `Lecture-${i}`
    fs.mkdirSync(diretoryToMake)
    fs.writeFileSync(path.join(diretoryToMake, "readme.md"), `# this is lecture-${i}`)
}