import fs from "fs"

let buffer = fs.readFileSync("./example.json")
let data = JSON.parse(buffer)
// data.push(
//     {
//         "name": "Thor",
//         "last name": "Rogers",
//         "isAvenger": true,
//         "friends": [
//             "Bruce",
//             "Neter",
//             "Natasha"
//         ],
//         "age": 45,
//         "address": {
//             "ciry": "New York",
//             "state": "manhatten"
//         }
//     }
// )

// let stringData = JSON.stringify(data)
// fs.writeFileSync("./example.json", stringData)

import xlsx from "xlsx"

// wb -> filepath, ws -> name, json data

// to write the data
// new workbook and sheet
// let newWb = xlsx.utils.book_new()
// // converting json data to exel format
// let newWs = xlsx.utils.json_to_sheet(data)
// // adding new workbook and sheet to the excel by giving it a name
// xlsx.utils.book_append_sheet(newWb, newWs, "sheet1")

// //filepath
// xlsx.writeFile(newWb, "./abc.xlsx")

// reading from excel file
let wb = xlsx.readFile("abc.xlsx")
let exelData = wb.Sheets["sheet1"]
let ans = xlsx.utils.sheet_to_json(exelData)
console.log(ans)