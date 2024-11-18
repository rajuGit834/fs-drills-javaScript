const fs = require("fs");
const path = require("path");

function createFile(fileName, content, callback) {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, `${fileName} is created...`);
    }
  });
}
createFile("lipsum.txt", "This is Lipsum.txt file.", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

function readFile(fileName, callback) {
  const filePath = path.join(__dirname, fileName);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return callback(err);
    }
    return callback(null, data.toString());
  });
}

function addFileName(fileName, content, callback) {
  const filePath = path.join(__dirname, fileName);
  fs.appendFile(filePath, content, (err) => {
    if (err) {
      return callback(err);
    }
    return callback(null, "File Name is Added SuccessFully");
  });
}

function deleteFiles(fileName, callback) {
  const filePath = path.join(__dirname, fileName);
  fs.unlink(filePath, (err) => {
    if (err) {
      return callback(err);
    }
    return callback(null, `${fileName} is deleted...`);
  });
}

function main() {
  readFile("lipsum.txt", (err, content) => {
    if (err) {
      console.log(err);
    }
    createFile("raju.txt", content.toUpperCase(), (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
      createFile("filesname.txt", "raju.txt", (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
        readFile("raju.txt", (err, content) => {
          if (err) {
            console.log(err);
          }
          let text = content.toLowerCase().split(",");
          createFile("raju2.txt", text[0], (err, data) => {
            if (err) {
              console.log(err);
            }
            console.log(data);
            addFileName("filesname.txt", ", raju2.txt", (err, data) => {
              if (err) {
                console.log(err);
              }
              console.log("file name is added in filesname file");
              readFile("raju2.txt", (err, content) => {
                if (err) {
                  console.log(err);
                }
                createFile(
                  "raju3.txt",
                  content.split(" ").sort().join(),
                  (err, data) => {
                    if (err) {
                      console.log(err);
                    }
                    console.log(data);
                    addFileName("filesname.txt", ", raju3.txt", (err, data) => {
                      if (err) {
                        console.log(err);
                      }
                      console.log("file name is added in filesname file");
                      readFile("filesname.txt", (err, files) => {
                        if (err) {
                          console.log(err);
                        }
                        const fileList = files.split(", ");
                        let index = 0;
                        deleteFiles(fileList[index], (err, data) => {
                          if (err) {
                            console.log(err);
                          }
                          console.log(data);
                          index++;
                          deleteFiles(fileList[index], (err, data) => {
                            if (err) {
                              console.log(err);
                            }
                            console.log(data);
                            index++;
                            deleteFiles(fileList[index], (err, data) => {
                              if (err) {
                                console.log(err);
                              }
                              console.log(data);
                            });
                          });
                        });
                      });
                    });
                  }
                );
              });
            });
          });
        });
      });
    });
  });
}

module.exports={main};
