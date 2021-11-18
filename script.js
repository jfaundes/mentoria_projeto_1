import postSetup from "./modules/post.js";
import writePost from "./modules/postEditor.js";

// Provavelmente descartar essas duas no futuro.
const main = document.getElementById('main');

const newPostEditorCard = document.getElementById('new-post-card');
const postWrapper = document.getElementById("posts-wrapper");
const loadFiveBtn = document.getElementById("load-five-btn");
const newPostBtn = document.getElementById("new-post-btn");
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

const newPost = () => {
  console.log("cliquei new post");
  if (showNewPostEditor) {
    newPostBtn.innerHTML = 'New Post'
    newPostBtn.className = "btn noselect";
    newPostEditorCard.style.display = "none";
    showNewPostEditor = false;
  } else {
    newPostBtn.innerHTML = 'Cancelar'
    newPostBtn.className = "btn2 noselect";
    newPostEditorCard.style.display = "block";
    showNewPostEditor = true;
  }
}

printPosts(10);
newPostBtn.addEventListener("click", newPost)
loadFiveBtn.addEventListener("click", () => printPosts(5));