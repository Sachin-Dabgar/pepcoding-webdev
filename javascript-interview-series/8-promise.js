import fs from "fs"

console.log("before")
// fs.readFile("f1.txt", function(err, data){
//     console.log(data)
// })

let promise = fs.promises.readFile("f1.txt")
console.log(promise)

// setelled

// fulfilled
promise.then(function(data){
    console.log(data+"")
})


// reject
promise.catch(function(err){
    console.log(err)
})
console.log("after")