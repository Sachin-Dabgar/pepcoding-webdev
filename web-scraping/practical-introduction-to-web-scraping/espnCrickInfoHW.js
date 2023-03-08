// div.ds-bg-fill-content-prime.ds-mb-4 div.ds-leading-\[0\]
import request from "request"
import cheerio from "cheerio"

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard", cb)

function cb(err, resp, html){
    if(err){
        console.log("some error occured", err)
    }
    else{
        console.log(resp&&resp.statusCode)
        handleHtml(html)
    }
}

function handleHtml(html){
    // console.log(html)
    let selTool = cheerio.load(html)
    let playerData = selTool("div.ds-bg-fill-content-prime a.ds-inline-flex span.ds-text-tight-m")
    console.log(playerData.length)
    for(let i = 0; i<playerData.length; i++){
        console.log(selTool(playerData[i]).text())
    }
}
