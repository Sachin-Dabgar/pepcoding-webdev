// 2015 es6
// hoisting
console.log("line 3", varName)
// declare
var varName
// assign
varName = 10
console.log("line 8", varName)
// reassign
varName = 20
console.log("line 11", varName)
var varName
console.log("line 13", varName)