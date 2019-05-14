const countryData = './countries.json';
const fs = require('fs');
const inputFromTerminal = process.argv[2];
const fileReader = require('./json-file-reader');

//part2
fileReader('./countries.json')



//PART 1:
// fs.readFile(countryData, 'utf-8', (error, data) => {
//     if (error) throw error
//     else {

//         let parsedData = JSON.parse(data);

//         for (let j = 0; j < parsedData.length; j++) {
//             if (parsedData[j].name === inputFromTerminal) {
//                 console.log(`Country: ${parsedData[j].name}`);
//                 console.log(`Top Level Domain: ${parsedData[j].topLevelDomain}`);
//             }
//         }
//     }
// })