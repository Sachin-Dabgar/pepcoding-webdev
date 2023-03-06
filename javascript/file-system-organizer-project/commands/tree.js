import fs from "fs"
import path from "path"

function treeFn(dirPath){
    // console.log("Tree command implemented for ", dirPath)
    if(dirPath === undefined){
        treeHelper(process.cwd(), "")
        return
    }
    else{
        let doesExist = fs.existsSync(dirPath)
        if(doesExist){
            treeHelper(dirPath, "")
        }
        else{
            console.log("Kindly enter valid path")
        }
    }
}

function treeHelper(dirPath, indent){
    // is file or folder??
    let isFile = fs.lstatSync(dirPath).isFile()
    if(isFile){
        let fileName = path.basename(dirPath)
        console.log(indent + "├──" + fileName)
    }
    else{
        let dirName = path.basename(dirPath)
        console.log(indent + "└──" + dirName)
        let children = fs.readdirSync(dirPath)
        for(let i = 0; i<children.length; i++){
            // console.log(children[i])
            let childrenPath = path.join(dirPath, children[i])
            treeHelper(childrenPath, indent+"\t")
        }
    }
}

export default {
    treeKey: treeFn
}