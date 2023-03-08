import request from "request"
import cheerio from "cheerio"
import chalk from "chalk"


console.log(chalk.white.bgGreen.bold("requesting to the website ... \n"))
request("https://www.worldometers.info/coronavirus/", cb)
function cb(err, resp, html){
    if(err){
        console.log("some error occured ", err)
    }
    else{
        handleHtml(html)
    }
}

function handleHtml(html){
    // console.log(typeof html) // gives string
    let selTool = cheerio.load(html)
    // console.log(typeof selTool) // gives function
    // for headings
    // #maincounter-wrap h1
    // for numbers
    // #maincounter-wrap span

    let headingsArray = selTool("#maincounter-wrap h1")
    let numbersArray = selTool("#maincounter-wrap span")

    let covidData = {}

    for(let i = 0; i<headingsArray.length; i++){
        let currentHeading = selTool(headingsArray[i]).text()
        let currentNumber = selTool(numbersArray[i]).text()
        covidData[currentHeading] = currentNumber
    }

    // console.log(covidData)

    for(let i in covidData){
        console.log(chalk.bgBlack.white.bold(`${i} : ${covidData[i]}`))
    }

}