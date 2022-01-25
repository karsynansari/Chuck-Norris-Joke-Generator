// console.log("hello");
//DOM Selectors

const randomJokeDiv = document.querySelector("#post-block");
const jokeButton = document.querySelector("#chuck-btn");
// console.log(randomJokeDiv)

const JSON_URL = "http://localhost:3000/value";

//   const postEl = document.createElement('p')
//   const postJoke = document.getElementById('post-block')
// postJoke.appendChild(postEl)

function getJoke() {
  fetch(JSON_URL)
    .then((res) => res.json())
    .then(renderJoke);
}

function renderJoke(JokeArr) {
  // console.log(JokeArr)
  let newJokeArray = JokeArr.map((jokeObject) => {
    // console.log(jokeObject.joke)
    return jokeObject.joke;
    // const values = Object.values(jokeObject)

    // console.log(prop);
  });
  let randomJoke =
    newJokeArray[Math.floor(Math.random() * newJokeArray.length)];
  // console.log(randomJoke)
  //create a new p element for the joke to live
  let generatedJoke = document.createElement("p");
  //create a new button element for the like button for each joke
  let likeBtn = document.createElement("button");
  //just an example here, added some innner text just to makie it look decent
  likeBtn.innerHTML = "  Like";
  generatedJoke.textContent = randomJoke;
  // console.log(generatedJoke)
  //append the new element to the parent div declared in DOM selectors
  randomJokeDiv.appendChild(generatedJoke);
  //appended the like button element to the joke
  generatedJoke.appendChild(likeBtn);
  //tried creating an even listener to render the jokes to the DOM. Stopped here. 
  jokeButton.addEventListener("click", () => console.log(randomJoke));
}

getJoke();
