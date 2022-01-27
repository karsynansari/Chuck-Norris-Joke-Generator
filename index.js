//DOM Selectors & other global variables
const randomJokeDiv = document.querySelector("#post-block");
const jokeButton = document.querySelector("#chuck-btn");
const jokeSubmitForm = document.querySelector("#add-joke");
console.log(jokeSubmitForm);
let generatedJoke = document.createElement("p");
let likeBtn = document.createElement("button");
likeBtn.className = "like-buttons";
let newUserJoke = document.createElement("p");
newUserJoke.className = "joke-paragraph";
console.log(newUserJoke);
let likeBtn2 = document.createElement("button");
likeBtn2.className = "like-buttons";
likeBtn2.textContent = "Like";
const JSON_URL = "http://localhost:3000/value";
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
    console.log(randomJoke);

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
  likeBtn.textContent = " 🔥Liked!";
});
//Event listener for liking user-added jokes
likeBtn2.addEventListener("click", () => {
  likeBtn2.textContent = "🔥Liked!";
});
//event listener for joke submit form
jokeSubmitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //target the input of the form & then cain on .value to get the value of the input
  addNewJoke(e.target["new-joke"].value);
});
//addNewJoke function to handle adding the new jokes to the dom when button is clicked
function addNewJoke(userAddedJoke) {
  if (userAddedJoke !== "") {
    newUserJoke.textContent = userAddedJoke;

    document.querySelector("#user-joke").appendChild(newUserJoke);
    newUserJoke.appendChild(likeBtn2);
    jokeSubmitForm.reset();
  }
}


getJoke();
