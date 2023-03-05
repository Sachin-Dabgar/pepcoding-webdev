let n = 65784383
let numberCount = 0

while(n > 0){
    n = Math.floor(n / 10)
    // console.log(n)
    numberCount++
}

console.log(numberCount)