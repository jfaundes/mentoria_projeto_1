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
  const newTitle = document.createElement("h1");
  newTitle.className = 'new-title';
  const newParagraph = document.createElement("p");
  newParagraph.className = 'new-paragraph';

  fetchPostJSON().then(data => {
    newTitle.innerHTML = data.title;
    newParagraph.innerHTML= data.body;
    nClicks++;
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newParagraph);
    divContainer.appendChild(newDiv);
  });
}

addButton.addEventListener("click", addDiv);