// is the square of the number even??


// imperative way of writing code
// const x = 6;
// const xSquare = x * x;

// let isEven;
// if((xSquare & 1) == 0){
//     isEven = true;
// }
// else{
//     isEven = false;
// }

// console.log(isEven);

// declarative way of writing code

const isSquareEven = (x) => ((x*x) % 2 == 0 ? true : false)
console.log(isSquareEven(5))