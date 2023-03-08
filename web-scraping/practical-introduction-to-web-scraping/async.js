import fs from "fs"
// console.log("before")
// let data = fs.readFileSync("f1.txt")
// console.log(""+data)
// console.log("after")
// console.log("meanwhile")

// async function
console.log("before")
let data = fs.readFile("f1.txt", cb)
function cb(err, data){
    if (err){
        console.log(err)
    }
    else{

        console.log("" + data)
    }
}
console.log("after")
console.log("meanwhile")