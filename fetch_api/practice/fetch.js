let buttonTwo = document.getElementById("two");
let divTwo = document.getElementsByTagName("div")[0];

buttonTwo.addEventListener("click", function () {
  fetch("https://icanhazdadjoke.com/search", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let jokeObject = data.results;
      for (let i = 0; i < jokeObject.length; i++) {
        divTwo.innerHTML += "<br>" + jokeObject[i].joke + "<br>";
      }
    })
    .catch((error) => {
      console.log("oh no man, there's an error " + error);
    });
});
