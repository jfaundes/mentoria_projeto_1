import { getAllPosts } from "./events/getAllPosts.js";
import postSetup from "./modules/post.js";
import { writePostEditorContainer } from "./modules/postEditor.js";

const newPostDiv = document.getElementById(`post-editor__wrapper${0}`);
const loadFiveBtn = document.getElementById("load-five-btn");
const newPostBtn = document.getElementById("new-post-btn");

let currentId = 0;

const postsPromise = getAllPosts();

const printPosts = async nPosts => {
  try {
    const postsArray = await postsPromise;
    for (let i = 0; i < nPosts; i++) {
      postSetup(postsArray[currentId]);
      currentId++;
    }
  } catch (e) {
    alert(e);
    console.log(e);
  }
};

export const showNewPostCard = () => {
  if (newPostDiv.childNodes.length !== 0) {
    const postEdtrContainer = document.getElementById(
      `post-editor__container${0}`
    );
    newPostBtn.innerHTML = 'New Post';
    newPostBtn.className = "header__btn noselect";
    newPostDiv.removeChild(postEdtrContainer);
  } else {
    const postEdtrContainer = writePostEditorContainer(
      null,
      newPostDiv
    );
    newPostBtn.innerHTML = 'Cancelar'
    newPostBtn.className = "header__btn header__btn--cancel noselect";
    newPostDiv.appendChild(postEdtrContainer);
  }
}

printPosts(2);
newPostBtn.addEventListener("click", showNewPostCard)
loadFiveBtn.addEventListener("click", () => printPosts(5));