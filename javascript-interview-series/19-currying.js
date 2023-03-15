function add (a, b){
    console.log(`a is ${a} and b is ${b}`)
    console.log(a + b)
}

// add(2,4)
// let addwith2 = add.bind(this, 2)
// addwith2(6)

// let addwith2 = add.bind(this)
// addwith2(6)

let addwith2 = add.bind(this, 2, 7)
addwith2()