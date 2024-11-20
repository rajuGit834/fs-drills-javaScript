const { default: fs } = await import("fs/promises");
import { readFile, writeFile } from "fs";
import path from "path";
const dirPath = path.join(process.cwd());

function main() {
  const fileName = path.join(dirPath, "lipsum.txt");
  let files = [];
  let index = 0;

  fs.readFile(fileName, "utf8")
    .then((data) => {
      console.log(data);
      return fs.writeFile("file1.txt", data.toUpperCase());
    })
    .then(() => {
      console.log("file1 is created");
      return fs.writeFile("filenames.txt", "file1.txt");
    })
    .then(() => {
      console.log("filenames.txt is created");
      return fs.readFile("file1.txt", "utf8");
    })
    .then((data) => {
      return fs.writeFile("file2.txt", data.toLowerCase().split(","));
    })
    .then(() => {
      console.log("file2 is created and content is converted in lowercase..");
      return fs.appendFile("filenames.txt", " file2.txt");
    })
    .then(() => {
      console.log("file name is added to the filenames.txt");
      return fs.readFile("file2.txt", "utf8");
    })
    .then((data) => {
      return fs.writeFile("file3.txt", data.split(",").sort().join());
    })
    .then(() => {
      console.log("file3 is created");
      return fs.appendFile("filenames.txt", " file3.txt");
    })
    .then(() => {
      console.log("file3 is added in filenames.txt");
      return fs.readFile("filenames.txt", "utf8");
    })
    .then((data) => {
      files = data.split(" ");
      return fs.unlink(files[index]);
    })
    .then(() => {
      console.log(files[index], " is deleted..");
      index++;
      return fs.unlink(files[index]);
    })
    .then(() => {
      console.log(files[index], " is deleted..");
      index++;
      return fs.unlink(files[index]);
    })
    .then(() => {
      console.log(files[index], " is deleted..");
    })
    .catch((err) => {
      console.log(err);
    });
}

export { main };
