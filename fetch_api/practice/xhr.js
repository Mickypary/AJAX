let url = "https://icanhazdadjoke.com/";

let buttonOne = document.getElementById("one");
let divOne = document.getElementsByTagName("div")[0];

buttonOne.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onload = () => {
    let jsonData = xhr.responseText;
    let jsObject = JSON.parse(jsonData);
    divOne.innerHTML = jsObject.joke;
  };

  xhr.send();
});
