const { rejects } = require("assert");
const fs = require("fs");
const path = require("path");

function createFile(fileName, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`${fileName} is created...`);
      }
    });
  });
}

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, fileName);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.toString());
    });
  });
}

function addFileName(fileName, lastFileName) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, fileName);
    fs.appendFile(filePath, lastFileName, (err) => {
      if (err) {
        reject(err);
      }
      resolve("File Name is Added SuccessFully");
    });
  });
}

function deleteFiles(fileName) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, fileName);
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err);
      }
      resolve(`${fileName} is deleted...`);
    });
  });
}

function main() {
    readFile("lipsum.txt")
    .then(content =>{
        return createFile('file1.txt', content.toUpperCase());
    })
    .then(message =>{
        console.log(message);
        return createFile('filenames.txt', 'file1.txt')
    })
    .then(message =>{
        console.log(message);
        return readFile('file1.txt');
    }) 
    .then(content =>{
        return createFile('file2.txt', content.toLowerCase().split(",").join());
    })
    .then(message =>{
        console.log(message);
        return addFileName('filenames.txt', ' file2.txt')
    })
    .then(message =>{
        console.log(message);
        return readFile('file2.txt');
    }) 
    .then(content =>{
        return createFile('file3.txt', content.split(",").sort().join());
    })
    .then(message =>{
        console.log(message);
        return addFileName('filenames.txt', ' file3.txt')
    })
    .then(message =>{
        console.log(message);
        return readFile('filenames.txt');
    })
    .then(files =>{
        files.split(" ").forEach(file =>{
            deleteFiles(file).then(message =>{
                console.log(message);
            })
        })
    })
    .catch(err =>{
        console.log(err);
    })
}

module.exports = { main };
