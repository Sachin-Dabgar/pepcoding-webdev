const arr = [1,2,3,4,5,6,7,8,9,10]

const sum = arr.reduce(function(accumulator, x){
    return accumulator + x
}, 0)

console.log(sum)

// polyfill of reduce

function pollyfillReduce(arr, cb, accumulator){
    for(let i = 0; i<arr.length; i++){
        accumulator = cb(accumulator, arr[i])
    }
    return accumulator
}

function cb(acc, x){
    return acc + x
}

const ans = pollyfillReduce(arr, cb, 0)
console.log(ans)