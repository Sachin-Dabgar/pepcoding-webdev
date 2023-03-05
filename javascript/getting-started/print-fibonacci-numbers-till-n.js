let i = 1
let f = 0
let s = 1
while(i<=4){
    if (i == 1){
        console.log(f)
        i++
    }
    else if(i == 2){
        console.log(s)
        i++
    }
    else{
        c = f + s
        console.log(c)
        f = s
        s = c
        i++
    }
}