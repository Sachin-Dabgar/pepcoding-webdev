#!/usr/bin/env node
// taken above line from shebang syntax
import helpObj from "./commands/help.js"
import organizeObj from "./commands/organize.js"
import treeObj from "./commands/tree.js"


let inputArr = process.argv.slice(2)
console.log(inputArr)

// commands to implement
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help


let command = inputArr[0]
switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1])
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1])
        break
    case "help":
        helpObj.helpKey()
        break
    default:
        console.log("Please enter a valid command")
        break
}







