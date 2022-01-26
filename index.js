
//DOM Selectors

const randomJokeDiv = document.querySelector("#post-block");
const jokeButton = document.querySelector("#chuck-btn");
const jokeSubmitForm = document.querySelector("#add-joke");
console.log(jokeSubmitForm);


//moved these 2 variables into the global scope from their original place inside the joke button event listener.
//this made a new joke appear every time btn is clicked, instead of them all listing out, which is optimal imo.
let generatedJoke = document.createElement("p");
let likeBtn = document.createElement("button");
likeBtn.className = 'likebtn'

const JSON_URL = "http://localhost:3000/value";


function getJoke() {
  fetch(JSON_URL)
    .then((res) => res.json())
    .then(renderJoke);
}

function renderJoke(JokeArr) {
  let newJokeArray = JokeArr.map((jokeObject) => {
    return jokeObject.joke;
    // const values = Object.values(jokeObject)
  });


  jokeButton.addEventListener("click", () => {
    let randomJoke =
      newJokeArray[Math.floor(Math.random() * newJokeArray.length)];
    console.log(randomJoke)
    //create a new p element for the joke to live ****

    //just an example here, added some innner text just to makie it look decent
    likeBtn.innerHTML = "  Like";
    generatedJoke.textContent = randomJoke;
    //append the new element to the parent div declared in DOM selectors
    randomJokeDiv.appendChild(generatedJoke);
    //appended the like button element to the joke
    generatedJoke.appendChild(likeBtn);
    //tried creating an even listener to render the jokes to the DOM. Stopped here.
  });
}


//Event Listeners


//Event listener for like button. We can add more sophisticated functionality to it, but for now it's working!
likeBtn.addEventListener("click", () => {
  likeBtn.textContent = "Liked!";
});

//event listener for joke submit form
jokeSubmitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("i've been submitted");
  //target the input of the form & then cain on .value to get the value of the input
  addNewJoke(e.target["new-joke"].value);
});

//addNewJoke function to handle adding the new jokes to the dom
function addNewJoke(userAddedJoke) {
  // console.log(userAddedJoke);
  let newUserJoke = document.createElement("p");
  let likeBtn2 = document.createElement("button");
  likeBtn2.className = 'likebtn'
  newUserJoke.textContent = userAddedJoke;
  document.querySelector("#user-joke").appendChild(newUserJoke);
  newUserJoke.appendChild(likeBtn2)
  jokeSubmitForm.reset() 
}

getJoke();
