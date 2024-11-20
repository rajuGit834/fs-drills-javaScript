const { rejects } = require("assert");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "random");

function createDirectory() {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Random directory is created");
      }
    });
  });
}

function createFiles(index) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(dirPath, `file${index}.json`);
    const fileName = `file${index}.json`;
    fs.writeFile(filePath, `this file name is file${index}.json`, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`file${index} is created...`);
      }
    });
  });
}

function readFiles() {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function deleteFiles(fileName) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(dirPath, fileName);
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`${fileName} is deleted...`);
      }
    });
  });
}

function removeDirectory() {
  return new Promise((resolve, reject) => {
    fs.rmdir(dirPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Random directory is deleted...");
      }
    });
  });
}

function main() {
    createDirectory()
    .then(message =>{
        console.log(message);
        return createFiles(1)
    })
    .then(message =>{
        console.log(message);
        return createFiles(2)
    })
    .then(message =>{
        console.log(message);
        return createFiles(3)
    })
    .then(message =>{
        console.log(message);
        return readFiles();
    }).then(files =>{
        files.forEach(file =>{
            deleteFiles(file)
            .then(message =>{
                console.log(message);
            })
        });
        return removeDirectory()
    })
    .then(message =>{
        console.log(message);
    })
    .catch(err =>{
        console.log(err);
    })
}

module.exports = { main };
