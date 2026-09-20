const root = "http://jsonplaceholder.typicode.com";
let url = `${root}/posts?userId=1`;

let h = new Headers();
h.append("Accept", "application/json");

let options = {
  method: "GET",
  header: h,
};

let req = new Request(url, options);

fetch(req)
  .then((res) => {
    if (!res.ok) {
      throw new Error("oops");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error ", err.message);
  });
