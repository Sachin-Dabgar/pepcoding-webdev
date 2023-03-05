// require child process module
let cp = require("child_process")

console.log("Trying to open google")
// cp.execSync("code")
// cp.execSync("google-chrome www.google.com")
console.log("opened google")

let output = cp.execSync("node abc.js")
console.log("output received " + output)