let buttonThree = document.getElementById("three");
let divThree = document.getElementsByTagName("div")[0];

buttonThree.addEventListener("click", async () => {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  let responseJson = await response.json();
  let lowercasejoke = responseJson.joke.toUpperCase();
  divThree.innerHTML = lowercasejoke;
});
