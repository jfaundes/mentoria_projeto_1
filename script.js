const addButton = document.getElementById("btn");
const divContainer = document.querySelector("#div-container");

var nClicks = 1;
var post;

const addDiv = () => {
  const newDiv = document.createElement("div");

  fetch('https://jsonplaceholder.typicode.com/posts/' + nClicks)
  .then((response) => response.json())
  .then((json) => post = json);

  newDiv.className = 'newDiv';
  newDiv.innerHTML = JSON.stringify(post);
  nClicks++;

  divContainer.appendChild(newDiv);
}

addButton.addEventListener("click", addDiv);