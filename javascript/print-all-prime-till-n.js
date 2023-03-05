let low = 6
let high = 24

for(let i = low; i<=high; i++){
    let flag = true

    let numToCheck = i
    for(let j = 2; j<numToCheck; j++){
        if(numToCheck % j == 0){
            flag = false
            break
        }
    }
    if(flag){
        console.log(numToCheck)
    }
}