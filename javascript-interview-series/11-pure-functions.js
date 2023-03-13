// impure function

// my addSum function depands on the external variable/member which makes the function impure
// let a = 5;

// function addNum(b){
//     console.log("sum is", a+b);
// }

// addNum(4)

// pure function

function addNum(a, b){
    // console.log("sum is", a + b); // side effect becuase it uses the external screen to show the  output
    // to avoid the side effect we can return value from the function.
    return a + b;
}

console.log(addNum(5,2));