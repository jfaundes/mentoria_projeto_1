const addButton = document.getElementById("btn");
const divContainer = document.querySelector("#div-container");
const getPostURL = id => `https://jsonplaceholder.typicode.com/posts/${id}`;
const posts = [];
const POSTS_INICIAIS = 3;
let nextId = POSTS_INICIAIS + 1;

const getNextPost = () => {
  fetch(getPostURL(nextId))
    .then(response => response.json())
    .then(data => makePost(data));
  nextId++;
}

const makePost = post => {
  const newDiv = document.createElement("div");
  newDiv.className = 'new-div';

  const newTitle = document.createElement("h1");
  newTitle.className = 'new-title';
  newTitle.innerHTML = post.title;
  
  const newParagraph = document.createElement("p");
  newParagraph.className = 'new-paragraph';
  newParagraph.innerHTML= post.body;
  
  const newFooter = document.createElement("span");
  newFooter.className = 'new-footer';
  newFooter.innerHTML = post.id;
  
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newParagraph);
  newDiv.appendChild(newFooter);
  
  divContainer.appendChild(newDiv);
}

for(i = 1; i <= POSTS_INICIAIS; i++) {
  posts.push(fetch(getPostURL(i)).then(data => data.json()))
}
Promise.all(posts)
.then(posts => {
  posts.forEach(post => {
    makePost(post);
  });
})

addButton.addEventListener("click", getNextPost);