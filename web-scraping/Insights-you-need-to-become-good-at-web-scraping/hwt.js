const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard'

import request from "request"
import cheerio from "cheerio"

console.log("before")
request(url, cb)
function cb(err, resp, html){
    if(err){
        console.log("some error occured", err)
    }
    else{
        console.log(resp&&resp.statusCode)
        extractHtml(html)
    }
}

function extractHtml(html){
    let $ = cheerio.load(html)
    let teamsArray = $('div.ds-w-full.ds-bg-fill-content-prime div.ds-text-compact-xxs div.ci-team-score')
    let winnerTeamName = ""
    for(let i = 0; i<teamsArray.length; i++){
        if(!$(teamsArray[i]).hasClass('ds-opacity-50')){
            let teamElement = $(teamsArray[i]).find('.ds-text-tight-l')
            winnerTeamName = teamElement.text().trim()
        }
    }

    let inningsArr = $('div.ds-rounded-lg.ds-mt-2')
    // console.log(inningsArr.length)

    // let htmlStr = ""
    for(let i = 0; i<inningsArr.length; i++){
        // let cHtml = $(inningsArr[i]).html()
        // htmlStr+=cHtml

        // team names
        let teamNameElement = $(inningsArr[i]).find('span.ds-text-title-xs span.ds-text-title-xs')
        let teamName = teamNameElement.text().trim()
        // console.log(teamName)
        if(winnerTeamName == teamName){
            console.log(teamName)
            // console.log($(inningsArr[i]).html())
            let teamTableElement = $(inningsArr[i]).find('div table.ds-w-full')
            console.log(teamTableElement.length)
            let bowlingTable = ""
            for(let tt = 0; tt<teamTableElement.length; tt++){
                if(!$(teamTableElement[tt]).hasClass('ci-scorecard-table')){
                    bowlingTable = $(teamTableElement[tt])
                }
            }
            // console.log($(bowlingTable).html())
            let allRowsInBowlingTable = $(bowlingTable).find('tbody tr')
            // console.log($(allRowsInBowlingTable).html())

            for(let bowler = 0; bowler<allRowsInBowlingTable.length; bowler++){
                let allBowlersOfPlayer = $(allRowsInBowlingTable[bowler]).find('td')
                console.log(allBowlersOfPlayer[0].text())
            }
        }
        // team table

    }
}