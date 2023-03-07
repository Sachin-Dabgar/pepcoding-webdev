#!/usr/bin/env node
// taken above line from shebang syntax

import fs from "fs"
import path from "path"

let inputArr = process.argv.slice(2)

// options

let optionsArr = []
let filesArr = []

for(let i = 0; i<inputArr.length; i++){
    if(inputArr[i].charAt(0) == "-"){
        optionsArr.push(inputArr[i])
    }
    else{
        filesArr.push(inputArr[i])
    }
}

if(optionsArr.includes("-b") && optionsArr.includes("-n")){
    console.log("combination of -b and -n doesn't work")
    process.exit()
}

// console.log(optionsArr, filesArr)

// read

let content = ""
for(let i = 0; i<filesArr.length; i++){
    if(fs.existsSync(filesArr[i])){
        let bufferedContent = fs.readFileSync(filesArr[i])
        content+=bufferedContent+"\n"
    }
    else{
        console.log("File doesn't exist..", filesArr[i])
        process.exit()
    }
}

// console.log(content)

let contentArr = content.split("\n")
// console.log(contentArr)

// -s
let isSPresent = optionsArr.includes("-s")
if(isSPresent){
    for(let i = 1; i<contentArr.length; i++){
        if((contentArr[i] == "" && contentArr[i-1] == "")){
            contentArr[i] = null
        }
        else if(contentArr[i] == "" && contentArr[i-1] == null){
            contentArr[i] = null
        } 
    }
    let tempArr = []
    for(let i = 0; i<contentArr.length; i++){
        if(contentArr[i] != null){
            tempArr.push(contentArr[i])
        }
    }
    contentArr = tempArr
}

// console.log(contentArr)
let isNPresent = optionsArr.includes("-n")
if(isNPresent){
    let counter = 1
    for(let i = 0; i<contentArr.length; i++){
        contentArr[i] = counter + " " + contentArr[i]
        counter++
    }
}
console.log(contentArr.join("\n"))

let isBPresent = optionsArr.includes("-b")
if(isBPresent){
    let counter = 1
    for(let i = 0; i<contentArr.length; i++){
        if(contentArr[i] != ""){
            contentArr[i] = counter + " " + contentArr[i]
            counter++
        }
    }
}
console.log(contentArr.join("\n"))