function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink === "coffee"){
            resolve('order placed')
        }
        else{
            reject('sorry we only serve coffee')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log(`order is being processed`)
        resolve(`coffee served for the ${order}`)
    })
}


// Scenario with Promises
// placeOrder("tea").then(function(orderFromCustomer){
//     console.log("Reqeust received.")
//     let orderIsProcessed = processOrder(orderFromCustomer)
//     return orderIsProcessed
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed)
// }).catch(function(err){
//     console.log(err)
// })

// with async and await

async function serverOrder(){
    try{
        const orderReceived = await placeOrder('tea')
        console.log(orderReceived)
        const processedOrder = await processOrder(orderReceived)
        console.log(processedOrder)
    }
    catch(error){
        console.log(error)
    }
}

serverOrder()