function getPromiseFirst() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("step1 is complete..");
    }, 3000);
  });
}

function getPromiseTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("step2 is Complete");
    }, 3000);
  });
}

function main() {
  console.log("Program started");

  console.log(getPromiseFirst());
  console.log("Program in progress");

  getPromiseFirst()
    .then((data) => {
      console.log(data);
      return getPromiseTwo();
    })
    .then((data) => {
      console.log(data);
    });
}

main();
