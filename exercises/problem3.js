function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "Hello, friend!", error: null });
    }, 5 * 1000);
  });
}

function main() {
  console.log("Program Started");
  console.log(getPromise());
  console.log("Program in progress...");

  getPromise()
    .then((data) => {
      console.log(data);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("First promise chain complete!");
        }, 2 * 1000);
      });
    })
    .then((data) => {
      console.log(data);
    });

  getPromise()
    .then((data) => {
      console.log(data);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Second promise chain complete!");
        }, 10 * 1000);
      });
    })
    .then((data) => {
      console.log(data);
    });
}

main();
