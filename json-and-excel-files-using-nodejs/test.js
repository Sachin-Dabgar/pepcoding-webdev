// const XLSX = require('xlsx');
import XLSX from "xlsx"

// define the JSON data with nested objects and arrays
let jsonData = {
  title: 'My Data',
  people: [
    {
      name: 'John Doe',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      },
      hobbies: ['reading', 'traveling']
    },
    {
      name: 'Jane Smith',
      age: 25,
      address: {
        street: '456 Elm St',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90001'
      },
      hobbies: ['painting', 'hiking']
    }
  ]
};

jsonData = JSON.stringify(jsonData)
// console.log(jsonData)
// create a new workbook and worksheet
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(jsonData);

// add the worksheet to the workbook
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

// write the workbook to an Excel file
XLSX.writeFile(wb, 'output.xlsx');