// this keyword in node with non string mode
'use strict'

console.log(this) // returns an empty object or undefined

function showThis(){
    console.log(this)
}

showThis()

const obj = {
    name: "sachin",
    f: function(){
        console.log(this)
    }
}

obj.f()

const obj2 = {
    name: "sachin",
    f: function(){
        function g(){
            console.log(this)
        }
        g()
    }
}

obj2.f()