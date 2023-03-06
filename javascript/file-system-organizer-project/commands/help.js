// help function
function helpFn(){
    console.log(`
        List of all commands:
            node main.js tree "directoryPath"
            node main.js organize "directoryPath"
            node main.js help
    `)
}

export default {
    helpKey: helpFn
}