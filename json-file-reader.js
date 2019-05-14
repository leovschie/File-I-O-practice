const fs = require('fs');

let fileReader = function (filename, callback) {
    fs.readFile(filename, 'utf-8', function (error, data) {
        if (error) {
            console.log(`Error error error!!!!!` + error);
            throw error;
        };
        let parsedFile = JSON.parse(data);
        return callback(parsedFile);
    });
}

module.exports = fileReader;