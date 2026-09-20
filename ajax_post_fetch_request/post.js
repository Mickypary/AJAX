const url = "https://jsonplaceholder.typicode.com/posts";
let outputEl = document.getElementById("demo");

let h = new Headers();
h.append("Content-type", "application/json; charset=UTF-8");

// let's create our post
let post = {
  userId: 99,
  title: "My cool title",
  body: "lorem ipsum .... blah blah blah ...",
};

let options = {
  method: "POST",
  headers: h,
  body: JSON.stringify(post),
};

let req = new Request(url, options);

// perform our fetch AJAX POST request

fetch(req)
  .then((res) => {
    if (!res.ok) {
      throw new Error("oops");
    }
    return res.json();
  })
  .then((data) => {
    outputEl.textContent = JSON.stringify(data);
  })
  .catch((err) => {
    console.log("Error ", err.message);
  });
