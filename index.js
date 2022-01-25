console.log("hello");

let JSON_URL = 'http://localhost:3000/value'

fetch(JSON_URL)
  .then((res) => res.json())
  .then((data) => console.log(data));
