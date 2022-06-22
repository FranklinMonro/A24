const fs = require("fs");
const path = require('path')
const filePath =  path.join('c:', 'Users', 'franc', 'OneDrive', 'Documents', 'Projects', 'A24', 'README.md');

async function getFileContents(filePath, callback) {
    const fileExist = fs.existsSync(filePath);
    let fileStats;
    if (!fileExist) {
        return callback(new Error("File does not exist"));
    } else {
        fileStats = fs.statSync(filePath, (err, stats) => {if (err){return err}return stats})
    }
    let statSize;
    if (!fileStats) {
        return callback(new Error("Error trying to get stats"))
    } else {
        statSize = fileStats.size > 0 ? true : false;
    }
    let readFile;
    if (!statSize) {
        return callback(new Error("File exists but there is no content"));
    } else {
        readFile = fs.readFileSync(filePath, (err, buffer) => {if(err){return err} return buffer})
    }
    if (!readFile) {
        return callback(new Error("Error trying to get stats"));
    } else {
        return callback(null, readFile);
    }
}

getFileContents(filePath, (err, contents) => {
    if (err) {
        console.error(`There was an error getting contents for ${filePath}`, err);
        return;
    }
    console.info("File was found and the contents were loaded");
});
