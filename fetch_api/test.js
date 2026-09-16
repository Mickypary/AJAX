// lets create our own promise
let firstPromise = new Promise((resolve, reject) => {
  let animal = "warthog";
  // resolve(animal); // successful state
  console.log("A"); // synchronous
  setTimeout(() => {
    resolve(animal);
  }, 3000); // asynchronous
  console.log("B"); // Synchronous
});

firstPromise
  .then((ani) => {
    console.log(ani);
    console.log("promise done");
    return ani + " is nice";
  })
  .then((chained_ani) => {
    console.log(chained_ani);
  })
  .catch((x) => {
    console.log("error: ", x);
  });
