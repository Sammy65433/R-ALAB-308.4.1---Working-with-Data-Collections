// R-ALAB 308.4.1: 
// Working with Data Collections



// const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


// // Without Arrays:
// // Your task is to write a script that accomplishes the following:
// // Loop through the characters of a given CSV string.
// console.log(`CSV Data:\n${csvData}\n`);
// console.log('--- Parsing rows ---');

// // Store each “cell” of data.
// //4 players on the floor 
// let cell1 = "";   //PG
// let cell2 = "";  //SG
// let cell3 = "";  //SF
// let cell4 = "";   //PF
// let currentCell = "";   //active column.  //The ball being passed around while a player is still dribbling (adding letters).
// let cellNumber = 1;  //Index (1‑4) that tells which column we are filling. Which player has the ball


// for (let i = 0; i < csvData.length; i++) {
//     const char = csvData[i];   // store the current character in a variable 
 

//     if (char === ',') {  // store the current cell 
//     // data in the appropriate variable based on the cell number
        
//         if (cellNumber === 1) {  // store the current cell data in cell1
//             cell1 = currentCell;
//         } else if (cellNumber === 2) { // store the current cell data in cell2
//             cell2 = currentCell;
//         } else if (cellNumber === 3) {   //store the current cell data in cell3
//             cell3 = currentCell;
//         }
//         currentCell = "";
//         cellNumber++;
//         continue; // move to the next character after processing a comma
//     } if (char === '\n') {
//         cell4 = currentCell;   //4th cell is stored when we encounter a new line character
//         console.log(`Row: ${cell1}, ${cell2}, ${cell3}, ${cell4}`); 
//         //  log the current row data and reset the cell variables for 
//         // the next row
//         cell1 = cell2 = cell3 = cell4 = "";   // reset all cell variables
//         currentCell = "";
//         cellNumber = 1;
//         continue; // move to the next character after processing a new line
//      }
//      currentCell += char; // add the current character to the current cell data
//     }
//     if (currentCell !== "") { // if there is any remaining cell data after the loop, log it as the last row
//         cell4 = currentCell; // store the last cell data in cell4
//         console.log(`Row: ${cell1}, ${cell2}, ${cell3}, ${cell4}`); // log the last row data
//     }



// // NBA‑style pseudocode****************************************************************************************
// // FOR each symbol in the playbook
// //     IF symbol is a pass (',')
// //         SAVE the current dribble (currentCell) to the player who just finished (cell1‑cell3)
// //         CLEAR dribble buffer
// //         MOVE ball to next player (cellNumber++)
// //     ELSE IF symbol is end‑of‑play ('\n')
// //         SAVE the final dribble to the fourth player (cell4)
// //         ANNOUNCE the completed line‑up (log the row)
// //         RESET all players and ball for next play
// //     ELSE
// //         ADD symbol to current dribble (currentCell)
// // END FOR

// // IF there is still a dribble left after the loop
// //     SAVE it to the fourth player and announce the final line‑up
// // **************************************************************************************************************


// console.log('--- Parsing with Arrays ---');
//     // With Arrays:
//     // 1) count columns dynamically from the header row

//     let numColumns = 1; // initialize number of columns to 1
//     for (let i = 0; i < csvData.length; i++) {
        
//         if (csvData[i] === '\n') break; // count columns by 
//         // counting commas in the header row
        
//         if (csvData[i] === ',') numColumns++; // count rows by 
//         // counting new line characters
//     }

// // 2) build the 2D array
// let table = []; // parent array to cache 
// let row = []; // child array to cache current row data
// let cell = ""; // variable to build current cell data

// for (let i = 0; i < csvData.length; i++) { // loop through each character in the CSV data
//     let char = csvData[i]; // store the current character in a 
//     // variable

//     if (char === ",") { // if we encounter a comma, we have reached the end of a cell
//         row.push(cell); // add the current cell data to the current row array
//         cell = ""; // reset the cell variable for the next cell
//     } else if (char === "\n") { // if we encounter a new line, we have reached the end of a row
//         row.push(cell); // add the last cell data to the current row array
//         table.push(row); // add the current row array to the table array
//         row = []; // reset the row array for the next row
//         cell = ""; // reset the cell variable for the next cell
//     } else {
//         cell += char; // add the current character to the current cell data
//     }
// }

// // Push the final cell and row 
// row.push(cell); // add the last cell data to the current row array
// table.push(row); // add the last row array to the table array

// console.log("Parsed " + numColumns + " columns");
// console.log(table);






// // Part 2: Expanding Functionality

// // Now that you are familiar with your code, and perhaps have 
// // improved it, it is time to expand upon its functionality.

// // Begin with the following task:

// // Declare a variable that stores the number of columns in each 
// // row of data within the CSV.

// // let rows = csvData.split("\n");
// // let numColumns = rows[0].split(",").length;
// // console.log(numColumns); // 4

// // Instead of hard-coding four columns per row, expand your 
// // code to accept any number of columns. 
// // This should be calculated dynamically based on the first 
// // row of data.

// // For example, if the first row of data (the headings) 
// // has eight entries, your program should create eight 
// // entries per row. You can safely assume that all rows that 
// // follow will contain the same number of entries per row.

// // After you have implemented the above:

// // Store your results in a two-dimensional array.

// // Each row should be its own array, with individual entries 
// // for each column.

// // Each row should be stored in a parent array, with the 
// // heading row located at index 0.

// // Cache this two-dimensional array in a variable for later use.

// // Using the original CSV example data, here is what the result 
// // of this step should look like:

// // ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,
// // Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,
// // Doctor’s Assistant,26

// // becomes

// // [["ID", "Name", "Occupation", "Age"],
// //  ["42", "Bruce", "Knight", "41"],
// //  ["57", "Bob", "Fry Cook", "19"],
// //  ["63", "Blaine", "Quiz Master", "58"],
// //  ["98", "Bill", "Doctor’s Assistant", "26"]]


// // Start with the big CSV string
// // Break it into rows
// // Use the first row to figure out how many columns there are
// // Loop through each row
// // Break each row into columns
// // Put each row array into one big parent array





// // Part 3
// // Part 3: Transforming Data

// // While the data is now much more workable than it was in 
// // its string format, there is still a large amount of obscurity 
// // in the data itself. When we access an arbitrary index of the 
// // results array, it is impossible to know what that data is 
// // referring to without additional cross-referencing.

// // In order to make it more obvious what the data is, 
// // we will transform our rows into objects.

// // Implement the following:

// // For each row of data in the result array produced by 
// // your code above, create an object where the key of each 
// // value is the heading for that value’s column.

// // Convert these keys to all lowercase letters for consistency.

// // Store these objects in an array, in the order that 
// // they were originally listed.

// // Since the heading for each column will be stored in 
// // the object keys, you do not need to create an object 
// // for the heading row itself.

// // For instance, the results of the example data above being 
// // passed through this step are as follows:

// // [["ID", "Name", "Occupation", "Age"],
// //  ["42", "Bruce", "Knight", "41"],
// //  ["57", "Bob", "Fry Cook", "19"],
// //  ["63", "Blaine", "Quiz Master", "58"],
// //  ["98", "Bill", "Doctor’s Assistant", "26"]]

// // becomes

// // [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
// //  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
// //  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
// //  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

// // Important: While this functionality can be built into the 
// // original CSV parser you built in Part 2, we are intentionally 
// // creating two different algorithms to test different skillsets. 
// // Please leave these sections separate even if it would be more 
// // efficient to combine them.

// const results = [
//   ["ID", "Name", "Occupation", "Age"],
//   ["42", "Bruce", "Knight", "41"],
//   ["57", "Bob", "Fry Cook", "19"],
//   ["63", "Blaine", "Quiz Master", "58"],
//   ["98", "Bill", "Doctor’s Assistant", "26"]
// ];

// let headers = results[0];
// let objectArray = [];

// for (let i = 1; i < results.length; i++) {
//   let row = results[i];
//   let rowObject = {};

//   for (let j = 0; j < headers.length; j++) {
//     let key = headers[j].toLowerCase();
//     rowObject[key] = row[j];
//   }

//   objectArray.push(rowObject);
// }

// // put it here
// console.log(objectArray);



// raw CSV (same as the assignment example)
const csv = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;


// Part 2
// 2.1 split into rows (preserve line‑breaks)
const rows = csv.split('\n');

// 2.2 split each row into columns -> 2‑D array
// map(row => row.split(',')) -> each line becomes an array 
// of its fields.
const table = rows.map(row => row.split(','));

// 2.3 number of columns is the length of the heading row
const colCount = table[0].length;   // dynamic, 

console.log('Column count:', colCount);
console.table(table);

// Part 3
// 3.1 extract headings (first row) and lower‑case them
const headings = table[0].map(h => h.toLowerCase());

// 3.2 build an array of objects, skipping the heading row
const objects = table.slice(1).map(row => {
  const obj = {};
  for (let i = 0; i < colCount; i++) {
    obj[headings[i]] = row[i];
  }
  return obj;
});

console.log('Objects array:');
console.log(objects);


// part4 

// 4.1 sort by numeric age (ascending)
objects.sort((a, b) => Number(a.age) - Number(b.age));

// 4.2 remove the last element
objects.pop();               // removes the entry with id "98"

// 4.3 insert Barry at index 1
objects.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25"
});

// 4.4 add Bilbo to the end
objects.push({
  id: "7",
  name: "Bilbo",
  occupation: "None",
  age: "111"
});

console.log('After manipulations:');
console.table(objects);

// 4.5 Compute avg age with a loop 
let sum = 0;
for (let i = 0; i < objects.length; i++) {
  sum += Number(objects[i].age);
}
const avgAge = sum / objects.length;
console.log('Average age:', avgAge);



// Part 5 COnvert the final array back to CSV

// 5.1 build header line (lower‑case keys are fine)
const header = headings.join(',');

// headings –  holds the column names in lower‑case, 
// e.g. ['id','name','occupation','age'].
// .join(',') – takes every element of the array and 
// concatenates them, inserting a comma between each one.

// 5.2 build each data line
// Array of row objects earlier plus a new array by running callback
// on every element of obj
const csvLines = objects.map(o => {
  return `${o.id},${o.name},${o.occupation},${o.age}`;
});

// 5.3 join header + data lines with newline
const finalCsv = [header, ...csvLines].join('\n');

console.log('--- CSV output ---');
console.log(finalCsv);