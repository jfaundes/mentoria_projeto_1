const addButton = document.getElementById("btn");
const divContainer = document.querySelector("#div-container");

let nClicks = 1;

// -------- Fetch Funcionando normalmente abaixo. --------
// const addDiv = () => {
//   const newDiv = document.createElement("div");
//   newDiv.className = 'new-div';

//   fetch('https://jsonplaceholder.typicode.com/posts/' + nClicks)
//     .then(response => response.json())
//     .then(json => {
//       newDiv.innerHTML = JSON.stringify(json);
//       nClicks++;

//       divContainer.appendChild(newDiv);
//     });
// }

// -------- Tentativa de fazer o fetch acontecer dentro de uma função async. --------
// NÃO FUNCIONAL!
const addDiv = () => {
  const newDiv = document.createElement("div");
  newDiv.className = 'new-div';

  const post = async function fetchPostJSON() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + nClicks);
    const post = await response.json();
    console.log(JSON.stringify(post));
    return post;
  }

  newDiv.innerHTML = JSON.stringify(post);
  nClicks++;

  divContainer.appendChild(newDiv);
}

addButton.addEventListener("click", addDiv);