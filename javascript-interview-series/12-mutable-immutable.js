const person1 = {
    name: "Sachin",
    age: 25
}

// const person2 = Object.assign({}, person1)
const person2 = {...person1} // using spread operator
person2.name = "amit"

console.log(person1)
console.log(person2)