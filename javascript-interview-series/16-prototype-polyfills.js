// map protype polyfill

const arr = [1,2,3,4,5,6,7,8,9,10];

// const mapedArr = arr.map(function(x){
//     return x * x
// })

Array.prototype.myMap = function(cb){
    let newArr = []
    for(let i = 0; i<this.length; i++){
        newArr.push(cb(this[i]))
    }
    return newArr
}

Array.prototype.myFilter = function(cb){
    let newArr = []
    for(let i = 0; i<this.length; i++){
        if(cb(this[i])){
            newArr.push(this[i])
        }
    }
    return newArr
}

Array.prototype.myReduce = function(cb, accumulator){
    for(let i = 0; i<this.length; i++){
        accumulator = cb(accumulator, this[i])
    }
    return accumulator
}

const mappedArr = arr.myMap(function(x){
    return x * x
})

console.log(mappedArr)

const filteredArr = mappedArr.myFilter(function(x){
    return x % 2 === 0
})

console.log(filteredArr)


// const reducedARr = filteredArr.reduce(function(accumulator, x){
//     return accumulator + x
// } , 0)

const reducedARr = filteredArr.myReduce(function(accumulator, x){
    return accumulator * x
} , 1)

console.log(reducedARr)