// console.log("hello");

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
  console.log(JokeArr)
    let newJokeArray = JokeArr.map(jokeObject => {
      // console.log(jokeObject.joke)
      return(jokeObject.joke)
    // const values = Object.values(jokeObject)
    
// console.log(prop);
    
    })
let randomJoke = newJokeArray[Math.floor(Math.random() * newJokeArray.length)]
console.log(randomJoke)
}

getJoke();











