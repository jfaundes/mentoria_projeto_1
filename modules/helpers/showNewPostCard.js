import { writePostEditorContainer } from "../postEditorSetup.js";

const newPostDiv = document.getElementById(`post-editor__wrapper${0}`);
const newPostBtn = document.getElementById("new-post-btn");

const showNewPostCard = () => {
  if (newPostDiv.childNodes.length !== 0) {
    const postEdtrContainer = document.getElementById(
      `post-editor__container${0}`
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
