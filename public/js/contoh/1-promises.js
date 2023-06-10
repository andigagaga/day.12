let condition = false;

let promise = new Promise (function (resolve, reject) {
    if (condition) {
        resolve("promise is resolved");
        } else 
        reject("promise is rejected");
});

console.log(promise);

promise
.then(function(value) {
    console.log(value);
})
.catch(function(reason) {
    console.log(reason);
    return alert("promise is not fulfilled")
});
