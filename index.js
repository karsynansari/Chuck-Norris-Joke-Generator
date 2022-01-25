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
<<<<<<< HEAD
    JokeArr.forEach(potato => {
    let jokeValue =  potato.id
    const jokePost = jokeValue[Math.random()* jokeValue.length]
    console.log(jokePost)
    }) 
=======
    JokeArr.forEach(jokeObject => {
    const values = Object.values(jokeObject)
    const prop = values[Math.floor(Math.random() * values.length)]
console.log(prop);
>>>>>>> 9f3b52cd1de3a2cc84a1531fd8f3d70604ffc830
    
    })
}

getJoke();











