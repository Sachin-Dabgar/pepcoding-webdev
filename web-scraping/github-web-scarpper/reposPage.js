import cheerio from "cheerio"
import request from "request"
import getIssuesHtml from "./issues.js"
function getReposHtml(url, topic){
    request(url, cb)
    function cb(err, resp, html){
        if(err){
            console.log('some error occured', err)
        }
        else{
            console.log(resp&&resp.statusCode)
            if(resp.statusCode == 200){
                getReposLink(html, topic)
            }
            else{
                console.log("problem while loading the page")
            }
            // console.log(html)
        }
    }
    function getReposLink(html, topic){
        let $ = cheerio.load(html)
        let reposLink = $('article h3.f3.color-fg-muted a.text-bold.wb-break-word')
        console.log(topic)
        for(let i = 0; i<reposLink.length; i++){
            let href = $(reposLink[i]).attr('href')
            let fullLink = `https://github.com${href}/issues`
            let repoName = href.split("/").pop()
            getIssuesHtml(fullLink, topic, repoName)
            // console.log(repoName)
        }

        console.log("````````````````````````````````````````````````")


    }
}

export default getReposHtml