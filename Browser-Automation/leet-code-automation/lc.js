import puppeteer from "puppeteer"
import codesObj from "./codes.js"
const loginUrl = 'https://leetcode.com/accounts/login/'
const password = "pilet12345"
const email = 'rojehol398@luxeic.com';
// let page

//IIFI function

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

(async function(){
    try{
        const browserInstance = await puppeteer.launch({
            headless: false,
            args:['--start-maximized'],
            defaultViewport:null
        })
        let page = await browserInstance.newPage()
        await page.goto(loginUrl)
        await delay(3000)
        await page.type('input[placeholder="Username or E-mail"]', email, {delay: 50})
        await page.type('input[placeholder="Password"]', password, {delay: 50})
        await waitAndClick('button#signin_btn', page)
        await delay(3000)
        await waitAndClick('a[href="/problemset/all/"]', page)
        await delay(3000)
        await waitAndClick('a[href="/problems/two-sum/"]', page)
        await delay(3000)
        await waitAndClick('div.text-label-r', page)
        await questionSolver(page, codesObj.answers[0])
    } 
    catch(error){
        console.log(error)
    }
})();



async function questionSolver(page, answer){
    try{
        await delay(3000)
        await waitAndClick('div.CodeMirror.cm-s-easymde.CodeMirror-wrap.CodeMirror-empty', page)
        await delay(3000)
        await page.type('div.CodeMirror.cm-s-easymde.CodeMirror-wrap.CodeMirror-empty', answer, {delay:10})
        await delay(3000)
        await page.keyboard.down('Control', {delay:50})
        await page.keyboard.press('A', {delay: 50})
        await page.keyboard.press('X', {delay: 50})
        await page.keyboard.up('Control', {delay:50})
        await delay(3000)
        await waitAndClick('div.absolute.right-4.top-0.flex.h-10.cursor-pointer.items-center', page)
        await delay(3000)
        await waitAndClick('div.view-lines.monaco-mouse-cursor-text', page)
        await page.keyboard.down('Control', {delay:50})
        await page.keyboard.press('A', {delay: 50})
        await page.keyboard.press('V', {delay: 50})
        await page.keyboard.up('Control', {delay:50})
        await delay(3000)
        await waitAndClick('button.bg-green-s', page)
    }
    catch(err){
        console.log(err)
    }
}

async function waitAndClick(selector, page){
    try{
        await page.waitForSelector(selector)
        await page.click(selector)
    }
    catch(err){
        console.log(err)
    }
}

// only promise used
// const browserOpenPromise = puppeteer.launch(
//     {
//         headless: false,
//         args: ['--start-maximized'],
//         defaultViewport:null
//     }
// ).then(function(browserObject){
//     console.log("opend new tab")
//     let newTabOpenPromise = browserObject.newPage()
//     return newTabOpenPromise
// }).then(function(newTab){
//     page = newTab
//     console.log("going to the login url")
//     let hackerrankOpenLoginPromise = page.goto(loginUrl)
//     return hackerrankOpenLoginPromise
// }).then(function(){
//     console.log("waiting for 3 seconds")
//     let waitForThreeSecondsPromise = page.waitForTimeout(3000)
//     return waitForThreeSecondsPromise
// }).then(function(){
//     console.log("entering email")
//     let emailPlaceHolderPromise = page.type('input[placeholder="Username or E-mail"]', email, {delay: 50})
//     return emailPlaceHolderPromise
// }).then(function(){
//     console.log("entering password")
//     let passwordPlaceHolderPromise = page.type('input[placeholder="Password"]', password, {delay: 50})
//     return passwordPlaceHolderPromise
// }).then(function(){
//     console.log("clicking on signin button")
//     let signInButtonClickPromise = waitAndClick('button#signin_btn', page)
//     return signInButtonClickPromise
// }).then(function(){
//     console.log("waiting for 3 seconds")
//     let waitForThreeSecondsPromise = page.waitForTimeout(3000)
//     return waitForThreeSecondsPromise
// }).then(function(){
//     console.log("Clicking on the problem button")
//     let clickOnProblemsButtonPromise = waitAndClick('a[href="/problemset/all/"]', page)
//     return clickOnProblemsButtonPromise
// }).then(function(){
//     console.log("waiting for 3 seconds")
//     let waitForThreeSecondsPromise = page.waitForTimeout(5000)
//     return waitForThreeSecondsPromise
// }).then(function(){
//     console.log("cliking on the two-sum problem")
//     let clickOnTwoSumProblem = waitAndClick('a[href="/problems/two-sum/"]', page)
//     return clickOnTwoSumProblem
// }).then(function(){
//     console.log("waiting for 3 seconds")
//     let waitForThreeSecondsPromise = page.waitForTimeout(3000)
//     return waitForThreeSecondsPromise
// }).then(function(){
//     console.log("clicking on the note clip")
//     let noteClipClickPromise = waitAndClick('div.text-label-r', page)
// }).then(function(){
//     console.log("let's solve the question")
//     let questionWillBeSolvedPromise = questionSolver(page, codesObj.answers[0])
//     return questionWillBeSolvedPromise
// })
// .catch(function(err){
//     console.log("some error occured ", err)
// })


// function questionSolver(page, answer){
//     return new Promise(function(resolve, reject){
//         console.log("clicking inside clipboard")
//         let clickInsideClipboardPromise = waitAndClick('div.CodeMirror.cm-s-easymde.CodeMirror-wrap.CodeMirror-empty', page)
//         clickInsideClipboardPromise.then(function(){
//             console.log("writing code")
//             return page.type('div.CodeMirror.cm-s-easymde.CodeMirror-wrap.CodeMirror-empty', answer, {delay:10})
//         }).then(function(){
//             console.log("pressing control")
//             let ctrlIsPressed = page.keyboard.down('Control', {delay:50})
//             return ctrlIsPressed
//         }).then(function(){
//             console.log("pressing a")
//             let aisPressed = page.keyboard.press('KeyA', {delay: 10})
//             return aisPressed
//         }).then(function(){
//             console.log("pressing x")
//             let xisPressed = page.keyboard.press('KeyX', {delay: 10})
//             return xisPressed
//         }).then(function(){
//             console.log("release control")
//             let ctrlIsUnpressed = page.keyboard.up('Control', {delay:50})
//             return ctrlIsUnpressed
//         }).then(function(){
//             console.log("waiting for 3 seconds")
//             let waitForThreeSeconds = page.waitForTimeout(3000)
//             return waitForThreeSeconds
//         }).then(function(){
//             console.log("clicking on cancel")
//             let clickOnCanclePromise = waitAndClick('div.absolute.right-4.top-0.flex.h-10.cursor-pointer.items-center', page)
//             return clickOnCanclePromise
//         }).then(function(){
//             console.log("waiting for 3 seconds")
//             let waitForThreeSeconds = page.waitForTimeout(3000)
//             return waitForThreeSeconds
//         }).then(function(){
//             console.log("click on main editor")
//             let mainEditorInFocusPromise = waitAndClick('div.view-lines.monaco-mouse-cursor-text', page)
//             return mainEditorInFocusPromise
//         }).then(function(){
//             console.log("pressing control")
//             let ctrlIsPressed = page.keyboard.down('Control')
//             return ctrlIsPressed
//         }).then(function(){
//             console.log("pressing key A")
//             let aisPressed = page.keyboard.press('A', {delay: 100})
//             return aisPressed
//         }).then(function(){
//             console.log("pressing key V")
//             let visPresed = page.keyboard.press('V', {delay:100})
//             return visPresed
//         }).then(function(){
//             console.log("releasing the control")
//             let ctrlIsUnpressed = page.keyboard.up('Control')
//             return ctrlIsUnpressed
//         }).then(function(){
//             console.log("waiting for 3 seconds")
//             let waitForThreeSecondsPromise = page.waitForTimeout(3000)
//             return waitForThreeSecondsPromise
//         }).then(function(){
//             console.log("sumitting solution")
//             let clickSubmitButtonPromise = waitAndClick('button.bg-green-s', page)
//             return clickSubmitButtonPromise
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
//         }).then(function(){
//             console.log("resolving promise")
//             resolve()
//         }).catch(function(){
//             console.log("rejecting promise")
//             reject()
//         })
//     })
// }