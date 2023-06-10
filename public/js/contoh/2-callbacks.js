function hello() {
  console.log("hello world");
}

function goodbye() {
  console.log("goodbye");
}

function print(callback) {
  callback();
}

print(hello);
print(goodbye);