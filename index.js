//DOM Selectors & other global variables
const JSON_URL = "http://localhost:3000/value";
const randomJokeDiv = document.querySelector("#post-block");
const jokeButton = document.querySelector("#chuck-btn");
const jokeSubmitForm = document.querySelector("#add-joke");
const inputSubmitBtn = document.querySelector("#submit-button");

let generatedJoke = document.createElement("p");
let likeBtn = document.createElement("button");
likeBtn.className = "like-buttons";

//Fetch function
function getJoke() {
  fetch(JSON_URL)
    .then((res) => res.json())
    .then(renderJoke);
}

//Render function for fetch data
function renderJoke(JokeArr) {
  let newJokeArray = JokeArr.map((jokeObject) => {
    return jokeObject.joke;
  });
  jokeButton.addEventListener("click", () => {
    let randomJoke =
      newJokeArray[Math.floor(Math.random() * newJokeArray.length)];

    likeBtn.innerHTML = "  Like";
    generatedJoke.textContent = randomJoke;
    generatedJoke.className = "joke-paragraph";

    randomJokeDiv.appendChild(generatedJoke);

    generatedJoke.appendChild(likeBtn);
  });
}
//Event Listeners
//Event listener for like button. We can add more sophisticated functionality to it, but for now it's working!
likeBtn.addEventListener("click", () => {
  if (likeBtn.textContent === " 🔥Liked!") {
    likeBtn.textContent = "Like";
  } else {
    likeBtn.textContent = " 🔥Liked!";
  }
});
//Event listener for liking user-added jokes

inputSubmitBtn.addEventListener(
  "mouseover",
  (event) => {
    inputSubmitBtn.style.background = "#FFFFFF";
    setTimeout(function () {
      event.target.style.background = "";
    }, 500);
  },
  false
);

//event listener for joke submit form
jokeSubmitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //target the input of the form & then cain on .value to get the value of the input
  addNewJoke(e.target["new-joke"].value);
});
//addNewJoke function to handle adding the new jokes to the dom when button is clicked
function addNewJoke(userAddedJoke) {
  if (userAddedJoke !== "") {
    let likeBtn2 = document.createElement("button");
    likeBtn2.className = "like-buttons";
    likeBtn2.textContent = "Like";
    let newUserJoke = document.createElement("p");
    newUserJoke.className = "joke-paragraph";
    newUserJoke.textContent = userAddedJoke;

    likeBtn2.addEventListener("click", () => {
      if (likeBtn2.textContent === " 🔥Liked!") {
        likeBtn2.textContent = "Like";
      } else {
        likeBtn2.textContent = " 🔥Liked!";
      }
    });
    document.querySelector("#user-joke").appendChild(newUserJoke);
    newUserJoke.appendChild(likeBtn2);
    jokeSubmitForm.reset();
  }
}

getJoke();
