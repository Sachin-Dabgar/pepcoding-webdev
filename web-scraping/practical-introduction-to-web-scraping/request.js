const request = require("request")

console.log("before")
request("https://www.worldometers.info/coronavirus/", cb)
function cb(err, resp, body){
    console.log(err)
    console.log(resp&&resp.statusCode)
    // console.log(resp)
    // console.log(body)
}
console.log("after")