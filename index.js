console.log("hello");

fetch("http://api.icndb.com/jokes/random?firstName=John&lastName=Doe")
  .then((res) => res.json())
  .then((data) => console.log(data));
