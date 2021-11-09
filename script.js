const loadOneBtn = document.getElementById("load-one-btn");
const loadFiveBtn = document.getElementById("load-five-btn");
const divContainer = document.querySelector("#div-container");
const posts = [];
const POSTS_INICIAIS = 3;
let nextId = 1;

const getPostURL = id => `https://jsonplaceholder.typicode.com/posts/${id}`;

const fetchPosts = n => {
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

const getOnePost = () => {
  fetchPosts(1);
}

const getThreePosts = () => {
  fetchPosts(3);
}

const getFivePosts = () => {
  fetchPosts(5);
}

const printPost = post => {
  const newContainer = document.createElement("article");
  newContainer.className = 'post-container';

  const newTitle = document.createElement("title");
  const newH1 = document.createElement("h1");
  newH1.className = 'post-title';
  newH1.innerHTML = post.title;
  
  const newParagraph = document.createElement("p");
  newParagraph.className = 'post-content';
  newParagraph.innerHTML= post.body;
  
  const newFooter = document.createElement("footer");
  newFooter.className = 'post-footer';
  newFooter.innerHTML = post.id;
  
  newH1.appendChild(newTitle);
  newContainer.appendChild(newH1);
  newContainer.appendChild(newParagraph);
  newContainer.appendChild(newFooter);
  
  divContainer.appendChild(newContainer);
}

getThreePosts();

loadOneBtn.addEventListener("click", getOnePost);
loadFiveBtn.addEventListener("click", getFivePosts);

