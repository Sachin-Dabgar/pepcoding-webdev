import puppeteer from "puppeteer"
import codeObj from "./codes.js"

const loginLink = 'https://www.hackerrank.com/auth/login'
// credentials
const email = 'yiniv83736@luxeic.com'
const password = '123456';

// creating IIFE => immediately invoked function expression
(async function(){
    try{
        let browserInstance = await puppeteer.launch({
            headless: false,
            args:['--start-maximized'],
            defaultViewport:null
        })
    
        let page = await browserInstance.newPage()
        await page.goto(loginLink)
        await page.type('div.ui-tooltip-wrapper input[type="text"]', email, {delay: 50})
        await page.type('div.ui-tooltip-wrapper input[type="password"]', password, {delay: 50})
        await waitAndClick('button[data-analytics="LoginPassword"] span', page)
        await waitAndClick('li.topic-card a[data-attr1="algorithms"]', page)
        await waitAndClick('div.checkbox-wrap input[value="warmup"]', page)
        let allChallenges = await page.$$('div.challenge-submit-btn button', {delay:50})
        console.log(allChallenges.length)
        await questionSolver(page, allChallenges[0], codeObj.answers[0])
        
    }
    catch(error){
        console.log(error)
    }

})();

async function waitAndClick(selector, page){
    try{
        await page.waitForSelector(selector)
        await page.click(selector)
    }
    catch(error){
        console.log(error)
    }
}

async function questionSolver(page, question, answer){
    try{
        await question.click()
        await waitAndClick('div.monaco-editor.no-user-select.vs', page)
        await waitAndClick('div.checkbox-wrap input[type="checkbox"]', page)
        await page.waitForSelector('div.ui-tooltip-wrapper textarea#input-1', page)
        await page.type('div.ui-tooltip-wrapper textarea#input-1', answer, {delay:10})
        await page.keyboard.down('Control', {delay:50})
        await page.keyboard.press('KeyA', {delay: 10})
        await page.keyboard.press('KeyX', {delay: 10})
        await page.keyboard.up('Control', {delay:50})
        await waitAndClick('div.monaco-editor.no-user-select.vs', page)
        await page.keyboard.down('Control')
        await page.keyboard.press('A', {delay: 100})
        await page.keyboard.press('V', {delay:100})
        await page.keyboard.up('Control')
        await waitAndClick('button.hr-monaco-submit', page)
    }
    catch(error){
        console.log(error)
    }
}


// Only promise and promise chained based approach


// function questionSolver(page, question, answer){
//     return new Promise(function(resolve, reject){
//         let questionWillBeClickedPromise = question.click()
//         questionWillBeClickedPromise.then(function(){
//             let editorInFocusPromise = waitAndClick('div.monaco-editor.no-user-select.vs', page)
//             return editorInFocusPromise
//         }).then(function(){
//             return  waitAndClick('div.checkbox-wrap input[type="checkbox"]', page)
//         }).then(function(){
//             return page.waitForSelector('div.ui-tooltip-wrapper textarea#input-1', page)
//         }).then(function(){
//             return page.type('div.ui-tooltip-wrapper textarea#input-1', answer, {delay:10})
//         }).then(function(){
//             let ctrlIsPressed = page.keyboard.down('Control', {delay:50})
//             return ctrlIsPressed
//         }).then(function(){
//             let aisPressed = page.keyboard.press('KeyA', {delay: 10})
//             return aisPressed
//         }).then(function(){
//             let xisPressed = page.keyboard.press('KeyX', {delay: 10})
//             return xisPressed
//         }).then(function(){
//             let ctrlIsUnpressed = page.keyboard.up('Control', {delay:50})
//             return ctrlIsUnpressed
//         }).then(function(){
//             let mainEditorInFocusPromise = waitAndClick('div.monaco-editor.no-user-select.vs', page)
//             return mainEditorInFocusPromise
//         }).then(function(){
//             let ctrlIsPressed = page.keyboard.down('Control')
//             return ctrlIsPressed
//         }).then(function(){
//             let aisPressed = page.keyboard.press('A', {delay: 100})
//             return aisPressed
//         }).then(function(){
//             let visPresed = page.keyboard.press('V', {delay:100})
//             return visPresed
//         }).then(function(){
//             let ctrlIsUnpressed = page.keyboard.up('Control')
//             return ctrlIsUnpressed
//         }).then(function(){
//             let submitCodePromise = waitAndClick('button.hr-monaco-submit', page)
//             return submitCodePromise
//         }).then(function(){
//             resolve()
//         }).then(function(){
//             reject()
//         })
//     })
// }


// let browserOpen = puppeteer.launch({
//     headless: false,
//     args:['--start-maximized'],
//     defaultViewport:null
// }).then(function(browserObject){
//     let browserOpenPromise = browserObject.newPage()
//     return browserOpenPromise
// }).then(function(newTab){
//     page = newTab
//     let hackerrankOpenPromise = newTab.goto(loginLink)
//     return hackerrankOpenPromise
// }).then(function(){
//     let emailIsEntered = page.type('div.ui-tooltip-wrapper input[type="text"]', email, {delay: 50})
//     return emailIsEntered
// }).then(function(){
//     let passwordIsEntered = page.type('div.ui-tooltip-wrapper input[type="password"]', password, {delay: 50})
//     return passwordIsEntered
// }).then(function(){
//     let loginButtonClicked = waitAndClick('button[data-analytics="LoginPassword"] span', page)
//     return loginButtonClicked
// }).then(function(){
//     let clickOnAlgoPromise = waitAndClick('li.topic-card a[data-attr1="algorithms"]', page)
//     return clickOnAlgoPromise
// }).then(function(){
//     let getToWarmUpPromise = waitAndClick('div.checkbox-wrap input[value="warmup"]', page)
//     return getToWarmUpPromise
// }).then(function(){
//     let waitForThreeSeconds = page.waitForTimeout(3000)
//     return waitForThreeSeconds
// }).then(function(){
//     // $$ => document.querySelectorAll()
//     let allChallengesPromise = page.$$('div.challenge-submit-btn button', {delay:50})
//     return allChallengesPromise
// }).then(function(questionsArr){
//     console.log("number of questions", questionsArr.length)
//     let questionWillBeSolvedPromise = questionSolver(page, questionsArr[0], codeObj.answers[0])
//     return questionWillBeSolvedPromise
// })
// .catch(function(err){
//     console.log("some error occured", err)
// })


// function questionSolver(page, question, answer){
//     return new Promise(function(resolve, reject){
//         let questionWillBeClickedPromise = question.click()
//         questionWillBeClickedPromise.then(function(){
//             let editorInFocusPromise = waitAndClick('div.monaco-editor.no-user-select.vs', page)
//             return editorInFocusPromise
//         }).then(function(){
//             return  waitAndClick('div.checkbox-wrap input[type="checkbox"]', page)
//         }).then(function(){
//             return page.waitForSelector('div.ui-tooltip-wrapper textarea#input-1', page)
//         }).then(function(){
//             return page.type('div.ui-tooltip-wrapper textarea#input-1', answer, {delay:10})
//         }).then(function(){
//             let ctrlIsPressed = page.keyboard.down('Control', {delay:50})
//             return ctrlIsPressed
//         }).then(function(){
//             let aisPressed = page.keyboard.press('KeyA', {delay: 10})
//             return aisPressed
//         }).then(function(){
//             let xisPressed = page.keyboard.press('KeyX', {delay: 10})
//             return xisPressed
//         }).then(function(){
//             let ctrlIsUnpressed = page.keyboard.up('Control', {delay:50})
//             return ctrlIsUnpressed
//         }).then(function(){
//             let mainEditorInFocusPromise = waitAndClick('div.monaco-editor.no-user-select.vs', page)
//             return mainEditorInFocusPromise
//         }).then(function(){
//             let ctrlIsPressed = page.keyboard.down('Control')
//             return ctrlIsPressed
//         }).then(function(){
//             let aisPressed = page.keyboard.press('A', {delay: 100})
//             return aisPressed
//         }).then(function(){
//             let visPresed = page.keyboard.press('V', {delay:100})
//             return visPresed
//         }).then(function(){
//             let ctrlIsUnpressed = page.keyboard.up('Control')
//             return ctrlIsUnpressed
//         }).then(function(){
//             let submitCodePromise = waitAndClick('button.hr-monaco-submit', page)
//             return submitCodePromise
//         }).then(function(){
//             resolve()
//         }).then(function(){
//             reject()
//         })
//     })
// }

// function waitAndClick(selector, page){
//     return new Promise(function(resolve, reject){
//         let waitForModelPromise = page.waitForSelector(selector)
//         waitForModelPromise.then(
//             function(){
//                 let clickModel = page.click(selector)
//                 return clickModel
//             }).then(function(){
//                 resolve()
//             }).catch(function(){
//                 reject()
//             })
//         })
// }