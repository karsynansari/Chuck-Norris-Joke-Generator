console.log("hello");

let JSON_URL = 'http://localhost:3000/value'

//   const postEl = document.createElement('p')
//   const postJoke = document.getElementById('post-block')
// postJoke.appendChild(postEl)


function getJoke() {
fetch(JSON_URL)
  .then((res) => res.json())
  .then(renderJoke)

  }

function renderJoke(JokeArr) {
    JokeArr.forEach(jokeObject => {
    const values = Object.values(jokeObject)
    const prop = values[Math.floor(Math.random() * values.length)]
console.log(prop);
    
    })
}

getJoke();











