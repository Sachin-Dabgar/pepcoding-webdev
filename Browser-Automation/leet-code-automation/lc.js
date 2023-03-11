import puppeteer from "puppeteer"
import codesObj from "./codes.js"
const loginUrl = 'https://leetcode.com/accounts/login/'
const password = "pilet12345"
const email = 'rojehol398@luxeic.com'
let page
const browserOpenPromise = puppeteer.launch(
    {
        headless: false,
        args: ['--start-maximized'],
        defaultViewport:null
    }
).then(function(browserObject){
    console.log("opend new tab")
    let newTabOpenPromise = browserObject.newPage()
    return newTabOpenPromise
}).then(function(newTab){
    page = newTab
    console.log("going to the login url")
    let hackerrankOpenLoginPromise = page.goto(loginUrl)
    return hackerrankOpenLoginPromise
}).then(function(){
    console.log("waiting for 3 seconds")
    let waitForThreeSecondsPromise = page.waitForTimeout(3000)
    return waitForThreeSecondsPromise
}).then(function(){
    console.log("entering email")
    let emailPlaceHolderPromise = page.type('input[placeholder="Username or E-mail"]', email, {delay: 50})
    return emailPlaceHolderPromise
}).then(function(){
    console.log("entering password")
    let passwordPlaceHolderPromise = page.type('input[placeholder="Password"]', password, {delay: 50})
    return passwordPlaceHolderPromise
}).then(function(){
    console.log("clicking on signin button")
    let signInButtonClickPromise = waitAndClick('button#signin_btn', page)
    return signInButtonClickPromise
}).then(function(){
    console.log("waiting for 3 seconds")
    let waitForThreeSecondsPromise = page.waitForTimeout(3000)
    return waitForThreeSecondsPromise
}).then(function(){
    console.log("Clicking on the problem button")
    let clickOnProblemsButtonPromise = waitAndClick('a[href="/problemset/all/"]', page)
    return clickOnProblemsButtonPromise
}).then(function(){
    console.log("waiting for 3 seconds")
    let waitForThreeSecondsPromise = page.waitForTimeout(5000)
    return waitForThreeSecondsPromise
}).then(function(){
    console.log("cliking on the two-sum problem")
    let clickOnTwoSumProblem = waitAndClick('a[href="/problems/two-sum/"]', page)
    return clickOnTwoSumProblem
}).then(function(){
    console.log("waiting for 3 seconds")
    let waitForThreeSecondsPromise = page.waitForTimeout(3000)
    return waitForThreeSecondsPromise
}).then(function(){
    console.log("clicking on the note clip")
    let noteClipClickPromise = waitAndClick('div.text-label-r', page)
}).then(function(){
    console.log("let's solve the question")
    let questionWillBeSolvedPromise = questionSolver(page, codesObj.answers[0])
    return questionWillBeSolvedPromise
})
.catch(function(err){
    console.log("some error occured ", err)
})


function questionSolver(page, answer){
    return new Promise(function(resolve, reject){
        console.log("clicking inside clipboard")
        let clickInsideClipboardPromise = waitAndClick('div.CodeMirror.cm-s-easymde.CodeMirror-wrap.CodeMirror-empty', page)
        clickInsideClipboardPromise.then(function(){
            console.log("writing code")
            return page.type('div.CodeMirror.cm-s-easymde.CodeMirror-wrap.CodeMirror-empty', answer, {delay:10})
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control', {delay:50})
            return ctrlIsPressed
        }).then(function(){
            let aisPressed = page.keyboard.press('KeyA', {delay: 10})
            return aisPressed
        }).then(function(){
            let xisPressed = page.keyboard.press('KeyX', {delay: 10})
            return xisPressed
        }).then(function(){
            let ctrlIsUnpressed = page.keyboard.up('Control', {delay:50})
            return ctrlIsUnpressed
        }).then(function(){
            let waitForThreeSeconds = page.waitForTimeout(3000)
            return waitForThreeSeconds
        }).then(function(){
            let clickOnCanclePromise = waitAndClick('div.absolute.right-4.top-0.flex.h-10.cursor-pointer.items-center', page)
            return clickOnCanclePromise
        }).then(function(){
            let mainEditorInFocusPromise = waitAndClick('div.view-lines.monaco-mouse-cursor-text', page)
            return mainEditorInFocusPromise
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control')
            return ctrlIsPressed
        }).then(function(){
            let aisPressed = page.keyboard.press('A', {delay: 100})
            return aisPressed
        }).then(function(){
            let visPresed = page.keyboard.press('V', {delay:100})
            return visPresed
        }).then(function(){
            let ctrlIsUnpressed = page.keyboard.up('Control')
            return ctrlIsUnpressed
        })
    })
}
function waitAndClick(selector, page){
    return new Promise(function(resolve, reject){
        let waitForModelPromise = page.waitForSelector(selector)
        waitForModelPromise.then(
            function(){
                let clickModel = page.click(selector)
                return clickModel
        }).then(function(){
            console.log("resolving promise")
            resolve()
        }).catch(function(){
            console.log("rejecting promise")
            reject()
        })
    })
}