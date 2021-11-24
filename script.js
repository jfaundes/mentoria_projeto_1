import { getAllPosts } from "./events/getAllPosts.js";
import postSetup from "./modules/post.js";
import { writePostEditorContainer } from "./modules/postEditor.js";

const postsContainer = document.getElementById("posts-container");
const newPostDiv = document.getElementById(`post-editor__wrapper${0}`);
const loadFiveBtn = document.getElementById("load-five-btn");
const newPostBtn = document.getElementById("new-post-btn");

let currentId = 0;
let showNewPostEditor = { value: false };

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
  if (showNewPostEditor.value) {
    const postEdtrContainer = document.getElementById(
      `post-editor__container${0}`
    );
    newPostBtn.innerHTML = 'New Post';
    newPostBtn.className = "header__btn noselect";
    newPostDiv.removeChild(postEdtrContainer);
    showNewPostEditor.value = false;
  } else {
    const postEdtrContainer = writePostEditorContainer(
      null, 
      showNewPostEditor,
      newPostDiv
    );
    newPostBtn.innerHTML = 'Cancelar'
    newPostBtn.className = "header__btn header__btn--cancel noselect";
    newPostDiv.appendChild(postEdtrContainer);
    showNewPostEditor.value = true;
  }
}

printPosts(10);
newPostBtn.addEventListener("click", showNewPostCard)
loadFiveBtn.addEventListener("click", () => printPosts(5));