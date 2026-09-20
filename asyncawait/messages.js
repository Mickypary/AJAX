// We are returning a promise explicitly
function message() {
  return Promise.resolve("Hello");
}

// OR

// We use the async keyword to return a promise implicitly
// async function message() {
//   return "hello";
// }

message().then((res) => console.log(res));
