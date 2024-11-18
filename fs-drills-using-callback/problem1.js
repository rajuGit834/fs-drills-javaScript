const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "random");

function createDirectory(callback) {
  fs.mkdir(dirPath, (err) => {
    if (err) {
      return callback(err);
    } else {
      callback(null, "Random directory is created");
    }
  });
}

function createFiles(index, callback) {
  const filePath = path.join(dirPath, `file${index}.json`);
  const fileName = `file${index}.json`;
  fs.writeFile(filePath, `this file name is file${index}.json`, (err) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, `file${index} is created...`);
    }
  });
}

function readFiles(callback) {
  fs.readdir(dirPath, (err, data) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, data);
    }
  });
}

function deleteFiles(fileName, callback) {
  const filePath = path.join(dirPath, fileName);
  fs.unlink(filePath, (err) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, `${fileName} is deleted...`);
    }
  });
}

function removeDirectory(callback) {
  fs.rmdir(dirPath, (err) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, "Random directory is deleted...");
    }
  });
}

function main() {
  createDirectory((err, data) => {
    let index = 1;
    if (err) {
      console.log(err);
    }
    console.log(data);

    createFiles(index, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
      index++;
      createFiles(index, (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
        index++;
        createFiles(index, (err, data) => {
          if (err) {
            console.log(err);
          }
          console.log(data);
          index++;
          createFiles(index, (err, data) => {
            if (err) {
              console.log(err);
            }
            console.log(data);
            index++;
            createFiles(index, (err, data) => {
              if (err) {
                console.log(err);
              }
              console.log(data);
            });
          });
        });
      });
    });
  });

  setTimeout(() => {
    readFiles((err, files) => {
      let index = 0;
      if (err) {
        console.log(err);
      }
      deleteFiles(files[index], (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        index++;
        deleteFiles(files[index], (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log(result);
          index++;
          deleteFiles(files[index], (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
            index++;
            deleteFiles(files[index], (err, result) => {
              if (err) {
                console.log(err);
              }
              console.log(result);
              index++;
              deleteFiles(files[index], (err, result) => {
                if (err) {
                  console.log(err);
                }
                console.log(result);
                removeDirectory((err, data) => {
                  if (err) {
                    console.log(err);
                  }
                  console.log(data);
                });
              });
            });
          });
        });
      });
    });
  }, 1000);
}

module.exports = {main};
