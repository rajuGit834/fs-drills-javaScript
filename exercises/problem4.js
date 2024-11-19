function getPromise(value, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    });
  }, time * 1000);
}

function main() {
  getPromise(10, 3)
    .then((value1) => {
      return getPromise(20, 5).then((value2) => {
        return value1 + value2;
      });
    })
    .then((value) => {
      console.log(value);
    });
}

main();
