console.log("line 1", varName)
var varName = 10
console.log("line 3", varName)
function fn(){
    console.log("line 5", varName)
    var varName = 20
    function b(){
        console.log("line 8", varName)
        // var varName = 30
    }
    b()
    console.log("line 10", varName)
}

fn()

// scope => area where function or variable can be found
// lexical scope => look outside of function definition not a function call
// scope chain / lexical scope chain => this means how far the function looks outside of it self. 