import postFactory from "./modules/postFactory.js";

const divContainer = document.querySelector("#div-container");
const loadOneBtn = document.getElementById("load-one-btn");
const loadFiveBtn = document.getElementById("load-five-btn");
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
    for (let i = 0; i < nPosts; i++) {
      postFactory(postsArray[currentId], divContainer);
      currentId++;
    }
  } catch (e) {
    alert(e);
    console.log(e);
  }
};

printPosts(3);
loadOneBtn.addEventListener("click", () => printPosts(1));
loadFiveBtn.addEventListener("click", () => printPosts(5));