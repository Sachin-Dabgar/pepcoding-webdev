let person1 = {
    name: "Adam",
    age: 25,
}

let person2 = {
    name: "Steve",
    age: 20,
}

let showDetails = function(city, car){
    console.log(`${this.name} is ${this.age} years old, he lives in ${city} and drives ${car}`)
}

// function borrowing
// person1.showDetails.call(person2)
// showDetails.call(person2)
// showDetails.call(person1)

showDetails.call(person1, "ahmedabad", "maruti")
showDetails.call(person2, "bengaluru", "bmw")


showDetails.apply(person2, ["jammu", "ferari"])


let showDetailsBind = showDetails.bind(person2, "vegas", "lamborghini")
showDetailsBind()

