console.log("hello");

let JSON_URL = 'http://localhost:3000/value'

function getJoke() {
fetch(JSON_URL)
  .then((res) => res.json())
  .then(renderJoke)

  }

function renderJoke(JokeArr) {
    JokeArr.forEach(joke)
    }

function joke(jokeObj) {
  console.log(jokeObj)
}

getJoke();





      // const randomQoute = Math.floor(Math.random()* data.length)
      // console.log(typeof randomQoute)

