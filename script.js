const loadOneBtn = document.getElementById("load-one-btn");
const loadFiveBtn = document.getElementById("load-five-btn");
const divContainer = document.querySelector("#div-container");
const posts = [];
const POSTS_INICIAIS = 3;
let nextId = 1;

const getPostURL = id => `https://jsonplaceholder.typicode.com/posts/${id}`;

const printPost = post => {
  const newContainer = document.createElement("article");
  newContainer.className = 'post-container';

  const newH1 = document.createElement("h1");
  newH1.className = 'post-title';
  newH1.innerHTML = post.title;
  
  const newParagraph = document.createElement("p");
  newParagraph.className = 'post-content';
  newParagraph.innerHTML= post.body;
  
  const newFooter = document.createElement("footer");
  newFooter.className = 'post-footer';
  newFooter.innerHTML = post.id;
  
  newContainer.appendChild(newH1);
  newContainer.appendChild(newParagraph);
  newContainer.appendChild(newFooter);
  
  divContainer.appendChild(newContainer);
}

const getPosts = n => {
  for(i = 0; i < n; i++) {
    posts.push(fetch(getPostURL(nextId))
      .then(data => data.json())
      .then(nextId++));
  }
  Promise.all(posts.slice(-n))
  .then(posts => {
    posts.forEach(post => {
      printPost(post);
    });
  })
}

getPosts(3);
loadOneBtn.addEventListener("click", () => getPosts(1));
loadFiveBtn.addEventListener("click", () => getPosts(5));