function createNewPromise() {
  return new Promise((resolve) => {
    setTimeout(() =>{
        return resolve("Program is complete");
    }, 3000)
  });
}

function main() {
  console.log("Program started...");
  console.log(createNewPromise());
  console.log("Program is in process...");
  createNewPromise().then((data) =>{
    console.log(data);
  })
}
main();