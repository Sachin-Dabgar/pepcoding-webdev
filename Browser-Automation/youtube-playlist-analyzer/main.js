import puppeteer from "puppeteer";
import pdfkit from "pdfkit"
import fs from "fs"


const delay = (milliseconds) => new Promise(
    (resolve) => setTimeout(resolve, milliseconds) 
)

const url = "https://www.youtube.com/playlist?list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj";
// const url = "https://www.youtube.com/playlist?list=PLhsz9CILh357zA1yMT-K5T9ZTNEU6Fl6n";

(async function(){
    try{
        let browserOpen = await puppeteer.launch({
            headless: false,
            args:['--start-maximized'],
            defaultViewport:null
        })

        let page = await browserOpen.newPage()
        await page.goto(url)
        await delay(3000)
        await page.waitForSelector('div#container.dynamic-text-container.style-scope.yt-dynamic-sizing-formatted-string')
        await delay(3000)
        let name = await page.evaluate(
            (select) => { 
                return document.querySelector(select).innerText
            }, 
            'div#container.dynamic-text-container.style-scope.yt-dynamic-sizing-formatted-string'
        )
        console.log(name)
        // await getData('.byline-item.style-scope.ytd-playlist-byline-renderer')
        let allData = await page.evaluate(getData, '.byline-item.style-scope.ytd-playlist-byline-renderer')

        console.log(allData)

        let totalVideos = parseInt(allData.noOfVideos.split(" ")[0])
        console.log(totalVideos)

        let currentVideos = await getLengthOfCurrentVideos(page)
        console.log(currentVideos)

        console.log("while loop starts")
        while((totalVideos-currentVideos)>0){
            await scrollToBottom(page)
            currentVideos = await getLengthOfCurrentVideos(page)
        }

        console.log("done while loop")

        let finalList = await getStats(page)
        console.log(finalList.length)

        let pdfDoc = new pdfkit()
        pdfDoc.pipe(fs.createWriteStream("playlist.pdf"))
        pdfDoc.text(JSON.stringify(finalList))
        pdfDoc.end()


    }
    catch(err){
        console.log(err)
    }
})();

async function getStats(page){
    let list = await page.evaluate(getNameAndDuration, 'div#meta h3 a#video-title', 'div#overlays span#text')
    // console.log("printting from getstat function")
    // console.log(list)
    return list
}

function getNameAndDuration(videoSelector, durationSelector){
    try{
        // console.log(videoSelector, durationSelector)
        let videoElement = document.querySelectorAll(videoSelector)
        let durationElement = document.querySelectorAll(durationSelector)
        let currentList = []

        for(let i = 0; i<durationElement.length; i++){
            let videoTitle = videoElement[i].innerText
            let duration = durationElement[i].innerText
            currentList.push({videoTitle, duration})
        }
        return currentList
    }
    catch(err){
        return err
    }

}

async function scrollToBottom(page){
    await page.evaluate(goToBottom)
    function goToBottom(){
        window.scrollBy(0, window.innerHeight)
    }
}


async function getLengthOfCurrentVideos(page){
    let length = await page.evaluate(getLength, 'div#container #thumbnail #thumbnail')
    return length
}

function getLength(durationSelector){
    let durationElement = document.querySelectorAll(durationSelector)
    return durationElement.length
}

function getData(selector){
    try{
        let allElems =  document.querySelectorAll(selector);
        let noOfVideos =  allElems[0].innerText
        let noOfViews =  allElems[1].innerText
        return {noOfVideos, noOfViews}
    }
    catch(err){
        return err
    }
}