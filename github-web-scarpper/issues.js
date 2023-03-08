import cheerio from "cheerio"
import request from "request"
import fs from "fs"
import path from "path"
import pdfkit from "pdfkit"

function getIssuesHtml(url, topic, repoName){
    request(url, cb)
    function cb(err, resp, html){
        if(err){
            console.log('some error occured', err) 
        }
        else{
            console.log(resp&&resp.statusCode)
            if(resp.statusCode == 200){
                getIssues(html, topic)
            }
            else{
                console.log("problem while loading the page")
            }
        }
    }

    function getIssues(html, topic){
        let $ = cheerio.load(html)
        let issuesLinkElement = $('.Link--primary.v-align-middle.no-underline')
        let arr = []
        for(let i = 0; i<issuesLinkElement.length; i++)
        {
            let href = $(issuesLinkElement[i]).attr('href')
            let fullLink = `https://github.com${href}`
            arr.push(fullLink)
        }
        console.log(topic, "    ", arr)
        // console.log(__dirname)
        let __dirname = path.resolve();
        let folderPath = path.join(__dirname, topic)
        dirCreator(folderPath)
        let filePath = path.join(folderPath, repoName + ".pdf")
        let text = JSON.stringify(arr)
        let pdfdoc = new pdfkit()
        pdfdoc.pipe(fs.createWriteStream(filePath))
        pdfdoc.text(text)
        pdfdoc.end()
        // fs.writeFileSync(filePath, text)
    }
}

function dirCreator(folderPath)
{
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath)
    }
    else{

    }
}
export default getIssuesHtml