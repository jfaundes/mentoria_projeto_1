const loadOneBtn = document.getElementById("load-one-btn");
const loadFiveBtn = document.getElementById("load-five-btn");
const divContainer = document.querySelector("#div-container");
const POSTS_URL = `https://jsonplaceholder.typicode.com/posts/`;
let currentId = 0;

const getAllPosts = async () => {
  const response = await fetch(POSTS_URL);
  const posts = await response.json();
  return posts;
};
const postsPromise = getAllPosts();

const printPosts = async nPosts => {
  try {
    const postsArray = await postsPromise;
    for(i = 0; i < nPosts; i++) {
      makePostContainer(postsArray[currentId]);
      currentId++;
    }
  } catch (e) {
    alert(`ERRO!`)
    console.log(e);
  }
};

const makePostContainer = post => {
  const newContainer = document.createElement("article");
  newContainer.className = 'post-container';

  const newH1 = document.createElement("h1");
  newH1.className = 'post-title';
  newH1.innerHTML = post.title;

  const newParagraph = document.createElement("p");
  newParagraph.className = 'post-content';
  newParagraph.innerHTML = post.body;

  const newFooter = document.createElement("footer");
  newFooter.className = 'post-footer';
  newFooter.innerHTML = post.id;

  newContainer.appendChild(newH1);
  newContainer.appendChild(newParagraph);
  newContainer.appendChild(newFooter);

  divContainer.appendChild(newContainer);
}

printPosts(3);
loadOneBtn.addEventListener("click", () => printPosts(1));
loadFiveBtn.addEventListener("click", () => printPosts(5));