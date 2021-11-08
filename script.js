const addButton = document.getElementById("btn");
const divContainer = document.querySelector("#div-container");
const url = 'https://jsonplaceholder.typicode.com/posts/';
let nClicks = 1;

const fetchPostJSON = async () => {
  const response = await fetch(url + nClicks);
  const data = await response.json();
  return data;
}

const addDiv = () => {
  const newDiv = document.createElement("div");
  newDiv.className = 'new-div';

  fetchPostJSON().then(data => {
    newDiv.innerHTML = JSON.stringify(data);
    nClicks++;
    divContainer.appendChild(newDiv);
  });
}

addButton.addEventListener("click", addDiv);