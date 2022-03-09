import { writePostEditorContainer } from "../../postEditor/postEditorSetup.js";

const newPostDiv = document.getElementById(`post-editor__wrapper${-1}`);
const newPostBtn = document.getElementById("new-post-btn");

const showNewPostCard = () => {
  if (newPostDiv.childNodes.length !== 0) {
    const postEdtrContainer = document.getElementById(
      `post-editor__container${-1}`
    );
    newPostBtn.innerHTML = "New Post";
    newPostBtn.className = "header__btn noselect";
    newPostDiv.removeChild(postEdtrContainer);
  } else {
    const postEdtrContainer = writePostEditorContainer();
    newPostBtn.innerHTML = "Cancelar";
    newPostBtn.className = "header__btn header__btn--cancel noselect";
    newPostDiv.appendChild(postEdtrContainer);
  }
};

export { showNewPostCard };
