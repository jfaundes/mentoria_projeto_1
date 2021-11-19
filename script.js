import postSetup from "./modules/post.js";
import writePost from "./modules/postEditor.js";

// Provavelmente descartar essas duas no futuro.
const main = document.getElementById('main');

const newPostEditorCard = document.getElementById('new-post');
const postWrapper = document.getElementById("posts-container");

const loadFiveBtn = document.getElementById("load-five-btn");
const newPostBtn = document.getElementById("new-post-btn");
const submitBtn = document.getElementById("submit-btn-0");

const titleInput = document.getElementById("title-input");

const POSTS_URL = `https://jsonplaceholder.typicode.com/posts/`;
let currentId = 0;
let showNewPostEditor = false;

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
      postSetup(postsArray[currentId], postWrapper);
      currentId++;
    }
  } catch (e) {
    alert(e);
    console.log(e);
  }
};

const showNewPostCard = () => {
  if (showNewPostEditor) {
    newPostBtn.innerHTML = 'New Post'
    newPostBtn.className = "header__btn noselect";
    newPostEditorCard.style.display = "none";
    showNewPostEditor = false;
  } else {
    newPostBtn.innerHTML = 'Cancelar'
    newPostBtn.className = "header__btn--cancel noselect";
    newPostEditorCard.style.display = "block";
    showNewPostEditor = true;
  }


}



printPosts(10);
newPostBtn.addEventListener("click", showNewPostCard)
loadFiveBtn.addEventListener("click", () => printPosts(5));