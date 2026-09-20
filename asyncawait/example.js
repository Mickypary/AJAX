// use async and await
async function message() {
  let firstWord = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });

  let secondWord = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("world");
    }, 1000);
  });

  console.log(`DONE: ${firstWord} ${secondWord}`);
}

// message();

function execute() {
  message();
  console.log("I am first");
}

execute();

function message2() {
  return "Hello World2";
}

// top-level await (available in ES Modules)
console.log(await message2());

console.log(await fetch("https://example.com"));

async function foo() {
  let promise = new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });

  // wait until the promise above resolves with the word hello world
  let message = await promise;

  alert(message);
}
