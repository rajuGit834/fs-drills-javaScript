const { default: fs } = await import("fs/promises");
import path from "path";
const dirPath = path.join(process.cwd(), "random");

function main() {
  let index = 1;
  let files = [];
  fs.mkdir(dirPath, { recursive: true })
    .then(() => {
      console.log("Random directory is created");
      const filePath = path.join(dirPath, `file${index}.json`);
      return fs.writeFile(filePath, `This is file${index}.json`);
    })
    .then(() => {
      console.log(`file${index}.json is created...`);
      index++;
      const filePath = path.join(dirPath, `file${index}.json`);
      return fs.writeFile(filePath, `This is file${index}.json`);
    })
    .then(() => {
      console.log(`file${index}.json is created...`);
      index++;
      const filePath = path.join(dirPath, `file${index}.json`);
      return fs.writeFile(filePath, `This is file${index}.json`);
    })
    .then(() => {
      console.log(`file${index}.json is created...`);
      index++;
      const filePath = path.join(dirPath, `file${index}.json`);
      return fs.writeFile(filePath, `This is file${index}.json`);
    })
    .then(() => {
      console.log(`file${index}.json is created...`);
      index++;
      const filePath = path.join(dirPath, `file${index}.json`);
      return fs.writeFile(filePath, `This is file${index}.json`);
    })
    .then(() => {
      console.log(`file${index}.json is created...`);
      return fs.readdir(dirPath, "utf8");
    })
    .then((data) => {
      index = 0;
      files = data;
      let filePath = path.join(dirPath, files[index]);
      return fs.unlink(filePath);
    })
    .then(() => {
      console.log(files[index], " is deleted");
      index++;
      let filePath = path.join(dirPath, files[index]);
      return fs.unlink(filePath);
    })
    .then(() => {
      console.log(files[index], " is deleted");
      index++;
      let filePath = path.join(dirPath, files[index]);
      return fs.unlink(filePath);
    })
    .then(() => {
      console.log(files[index], " is deleted");
      index++;
      let filePath = path.join(dirPath, files[index]);
      return fs.unlink(filePath);
    })
    .then(() => {
      console.log(files[index], " is deleted");
      index++;
      let filePath = path.join(dirPath, files[index]);
      return fs.unlink(filePath);
    })
    .then(() => {
      console.log(files[index], " is deleted");
      return fs.rmdir(dirPath);
    })
    .then(() => {
      console.log("Random file is removed");
    })
    .catch((err) => {
      console.log(err);
    });
}

export{main};
