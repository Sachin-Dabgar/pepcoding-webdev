import cheerio from "cheerio"
import request from "request"

// Tasks
/**
 * 1. get the last ball commentary
 * 2. highest wicket taker for winning team -> name and number of wickets
 * 3. birthday of every batsman
 */

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"

console.log("requesting the website....")

request(url, cb)

function cb(err, resp, html){
    if(err){
        console.log("some error occured", err)
    }
    else{
        console.log(resp.statusCode)
        extractHtml(html)
    }
}

function extractHtml(html){
    let $ = cheerio.load(html)
    let commentaryArray = $('div.ds-text-compact-s div.ds-hover-parent div.ds-grow p.ci-html-content')
    // console.log(commentaryArray.length)
    let lastballCommentary = $(commentaryArray[0]).text()
    console.log(lastballCommentary)
}