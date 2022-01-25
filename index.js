console.log("hello");

let JSON_URL = 'http://localhost:3000/value'

  const postEl = document.createElement('p')
  const postJoke = document.getElementById('post-block')
postJoke.appendChild(postEl)


function getJoke() {
fetch(JSON_URL)
  .then((res) => res.json())
  .then(renderJoke)

  }

function renderJoke(JokeArr) {
    JokeArr.forEach(joke => console.log(joke)) 
    
    }


getJoke();




// const qouteID = Math.floor(Math.random()* joke.length)

// for (joke in jokeObj) {
//   console.log(`${joke}: ${jokeObj[1]}`)

// joke = object.value = > whatve the joke is 




// getJoke();


//   //gets id #







