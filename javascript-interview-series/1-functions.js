// Types of functions -> 
// function statement

// define
// function sayHello(params){
//     console.log("Hello", params)
//     // return "hey", "man"
// }

// // function invocation
// console.log("````````````````````````````````````````````")
// sayHello(10)
// console.log("````````````````````````````````````````````")
// sayHello("Hello")
// console.log("````````````````````````````````````````````")
// sayHello([1,2,3,4,5])
// console.log("````````````````````````````````````````````")
// sayHello({"name": "Sachin"})
// console.log("````````````````````````````````````````````")
// let rVal = sayHello()
// console.log(rVal)


// functions are first class citizens
// functions are treated as variables.

// function expression
// let fnContainer = function fn(){
//     console.log("I am expression")
// }
// fnContainer()
// // when we don't give name to the function is known as anonymous function
// let fnContainer1 = function(){
//     console.log("I am expression and anonymous")
// }
// fnContainer1()

// IIFE => Immediately Invoked Function Expression
// (function fn(){
//     console.log("I am IIFE")
//     console.log("I will run on my own")
// })()

// Arrow function
// let fn = (num) => {
//     return num * num
// }

// above function can be written as below
// let fn = num => num*num

// console.log(fn(10))

// first class citizens
// functions are treated as variable
// 1. assignment => function expression
// 2. functions can be passed as parameter

// function sayHello(params){
//     console.log("Hello", params)
//     params()
//     return "sachin"
// }

// function smaller(){
//     console.log("Hello, I am smaller")
// }

// // sayHello([1,2,3,4,5])
// sayHello(smaller)

// 3. function can be return from function

function outer(){
    console.log("I am outer returning inner")
    return function(){
        console.log("I am inner")
    }
}

let rFn = outer()
console.log("retured function from outer", rFn)
rFn()