const person = {
    name: "Adam",
    age: 25
}

const showDetails = function(city, car, some){
    console.log(`${this.name} and ${this.age} and ${city} and ${car} and ${some}`)
}

// let showDetailsBind = showDetails.bind(person)
// showDetailsBind()

Function.prototype.myBind = function(context){
    let fn = this
    // console.log(arguments)
    let args = Array.prototype.slice.call(arguments, 1)
    console.log(args)
    return function(...args2){
        // console.log(args2)
        // let check = [...args, ...args2]
        // console.log(check)
        return fn.apply(context, [...args, ...args2])
    }
}

let myShowDetailsBind = showDetails.myBind(person, "mumbai")
myShowDetailsBind("bmw", "some")