// map, reduce, filter

const myArr = [1,2,3,4,5,6,7,8]

const newArr = myArr.map(function(x){
    return x * x
})

console.log(myArr)
console.log(newArr)

// filter

const filteredArr = newArr.filter(function(x){
    return x % 2 === 0
})

console.log(filteredArr)

// reduce

const sumArr = filteredArr.reduce(function(accumulator, x){
    return accumulator + x
}, 0)

console.log(sumArr)