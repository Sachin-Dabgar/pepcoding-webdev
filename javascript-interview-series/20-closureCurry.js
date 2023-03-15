function add(x){
    return function(y){
        console.log(x + y)
    }
}

let addwith2 = add(2)
addwith2(3)