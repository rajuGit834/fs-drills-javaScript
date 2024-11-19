function createPromise() {
  return new Promise((resolve, reject) => {
    let isComplete = true;
    if (isComplete) {
      setTimeout(() => {
        return resolve("Program Complete");
      }, 3000);
    } else {
      setTimeout(() => {
        return reject("Program Rejected");
      }, 2000);
    }
  });
}

function main() {
  console.log("Program started...");
  console.log(createPromise());
  console.log("Process in Progress.......");
  createPromise().then((data) =>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })
}
main();