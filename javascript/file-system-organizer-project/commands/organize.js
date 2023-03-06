import typesObj from "../utility.js"
import fs from "fs"
import path from "path"

// console.log("you")
// console.log(types.types)
// console.log("edd")
let types = typesObj.types

function organizeFn(dirPath){
    // console.log("Organize command implemented for ", dirPath)
    // 1. input -> directory path given
    if(dirPath == undefined){
        console.log("Kindly enter the path")
        return
    }
    else{
        let doesExist = fs.existsSync(dirPath)
        if(doesExist){
            // 2. create -> organized_files directory
            let destPath = path.join(dirPath, "organized_files")
            if(fs.existsSync(destPath) == false){
                fs.mkdirSync(destPath)
            }
            organizeHelper(dirPath, destPath)
        }
        else{
            console.log("Kindly enter the correct path")
            return
        }
    }
}


// organize helper function
function organizeHelper(src, dest){
    // 3. identiry categories of all the files present in the input directory
    let childNames = fs.readdirSync(src)
    // console.log(childNames)
    for(let i = 0; i<childNames.length; i++){
        let childAddress = path.join(src, childNames[i])
        // console.log(childAddress)
        let isFile = fs.lstatSync(childAddress).isFile()
        // console.log(isFile)
        if(isFile){
            // 4. copy / cut files to that organized_directory inside any of category folder
            let category = getCategory(childAddress)
            // console.log(childNames[i],category)
            sendFiles(childAddress, dest, category)
        }
    }
}

// function to copy / cut the files from src to the destination directory->category directory
function sendFiles(srcFilePath, dest, category){
    // creating the category directory if not exist
    let categoryPath = path.join(dest, category)
    if(!fs.existsSync(categoryPath)){
        fs.mkdirSync(categoryPath)
    }
    let fileName = path.basename(srcFilePath)
    // console.log(fileName)
    let destFilePath = path.join(categoryPath, fileName)
    if(!fs.existsSync(destFilePath)){
        fs.copyFileSync(srcFilePath, destFilePath)
        console.log(srcFilePath, "copied to ", destFilePath)
        fs.unlinkSync(srcFilePath)
    }
    
}

// function to get the category of the file
function getCategory(name){
    let ext = path.extname(name)
    ext = ext.slice(1)
    // console.log(ext)
    for(let type in types){
        let currentTypeArray = types[type]
        // console.log(currentTypeArray)
        for(let i = 0; i<currentTypeArray.length; i++){
            if(ext == currentTypeArray[i]){
                return type
            }
        }
    }
    return "others"
}

export default {
    organizeKey: organizeFn
}