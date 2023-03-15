// function scope
// the variables defined inside functions are only accessible inside the function.
// function calculate(a, b){
//     let result = a + b
//     return result
// }

// console.log(calculate(2,3))
// console.log(result)

// lexical scope
// child function ko apne parent ke sabhi element ka access hota hai means
// child function is lexically scoped.
// function add(){
//     let a = 4
//     function addChild(){
//         console.log(a + 5)
//     }
//     addChild()
// }
// add()

// a function bundled with it's lexical scope forms a closure

function add(){
    let a = 5
    function addChild(){
        console.log(a + 10)
    }
    return addChild
}

let catchAddChild = add()
catchAddChild()