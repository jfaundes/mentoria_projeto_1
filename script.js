import { getAllPosts } from "./events/getAllPosts.js";
import postSetup from "./modules/post.js";
import { writePostEditorWrapper } from "./modules/postEditor.js";

const postsContainer = document.getElementById("posts-container");
const newPostDiv = document.getElementById('new-post');
const loadFiveBtn = document.getElementById("load-five-btn");
const newPostBtn = document.getElementById("new-post-btn");

let currentId = 0;
let showNewPostEditor = false;

const postsPromise = getAllPosts();

const printPosts = async nPosts => {
  try {
    const postsArray = await postsPromise;
    for (let i = 0; i < nPosts; i++) {
      postSetup(postsArray[currentId], postsContainer);
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
    newPostDiv.removeChild(document.querySelector('.post-editor__wrapper'));
    newPostDiv.style.display = "none";
    showNewPostEditor = false;
  } else {
    newPostBtn.innerHTML = 'Cancelar'
    newPostBtn.className = "header__btn--cancel noselect";
    newPostDiv.appendChild(writePostEditorWrapper());
    newPostDiv.style.display = "block";
    showNewPostEditor = true;
  }
}

printPosts(10);
newPostBtn.addEventListener("click", showNewPostCard)
loadFiveBtn.addEventListener("click", () => printPosts(5));