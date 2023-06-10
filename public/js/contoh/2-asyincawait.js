let condition = true;

let promise = new Promise (function (resolve, reject) {
    if (condition) {
        resolve("promise is resolved");
      } else
        reject("promise is rejected");
});
async function asyncFunction() {
    const response = await promise;
    console.log(response);
  }
  
  asyncFunction();
