/**
 * Reference
 * peter.sh
 * https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/
 * https://flaviocopes.com/puppeteer/
 */

import puppeteer from "puppeteer";

console.log("Before");

let page;

/**
 * creating the promise which can help us to launch the browser
 * by default the browser launch is headless
 * to make it visible we have changed the flag to false
 */
const browserOpenPromise = puppeteer.launch({ 
    headless: false,
    slowMo: 28,
    defaultViewport: null,
    args: ["--start-maximized"]
});

/**
 * Here we are telling the browser promise to actually launch it.
 * in the callback we are passing bowserContextObj as browser.
 */
browserOpenPromise.then(
    function (browser) {
        console.log("browser opened");
        // this gives me all the opened pages in the browser (returning the promise)
        let pagesArrPromise = browser.pages();
        return pagesArrPromise;
    }
).then(
    function (browserPages) {
        // ye mujhe tab laa ke dega
        page = browserPages[0];
        // kaha jana hai wo bata do cpage ko and ye promise dega return me
        let gotoPromise = page.goto("https://www.google.com");
        return gotoPromise;
    }
).then(
    function () {
        // waiting for the element to be appeared on the page
        let elementWaitPromise = page.waitForSelector('input[type="text"]', { visible: true });
        return elementWaitPromise;
    }
)
    .then(
        function () {
            // type any element on the page -> element
            console.log("reached google home page");
            let keysWillBeSendPromise = page.type('input[type="text"]', "pepcoding");
            return keysWillBeSendPromise;
        }
    ).then(
        function () {
            // page.keyboard is used to type the special characters.
            let enterWillBePressed = page.keyboard.press("Enter");
            return enterWillBePressed;
        }
    ).then(
        function () {
            let elemntWaitPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", { visible: true });
            return elemntWaitPromise;
        }
    ).then(
        function(){
            // mouse
            let keysWillBeSendPromise = page.click('h3.LC20lb.MBeuO.DKV0Md');
            return keysWillBeSendPromise;
        }
    ).catch(
        function (err) {
            console.log("some error occured", err)
        }
    )

console.log("After");