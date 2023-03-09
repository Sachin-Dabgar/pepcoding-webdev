import cheerio from "cheerio"
import request from "request"
import getReposHtml from "./reposPage.js"


const url = "https://github.com/topics"

request(url, cb)
function cb(err, resp, html){
    if(err){
        console.log("some error occured", err)
    }
    else{
        console.log(resp && resp.statusCode)
        if(resp.statusCode == 200){
            getTopicLinks(html) 
        }
        else{
            console.log("problem while loading the page")
        }
    }
}

function getTopicLinks(html){
    let $ = cheerio.load(html)
    let linkElementArr = $('div.topic-box a.no-underline')
    for(let i = 0; i<linkElementArr.length; i++){
        let href = $(linkElementArr[i]).attr('href')
        let fullLink = `https://github.com${href}`
        let topic = href.split("/").pop()
        // console.log(topic)
        getReposHtml(fullLink, topic)
    }
}