import { postNewPost } from "../fetch/postNewPost.js";
import { updatePost } from "../fetch/updatePost.js";
import {
  getPostEditorContainer,
  getPostTitleInput,
  getPostContentInput,
  getBtnsContainer,
  getSubmitEdtBtn,
  getNewPostContent,
  getCancelEdtBtn,
} from "./getElements/postEdtrElements.js";

function stopEdt(id) {
  const editorWrapper = document.getElementById(`post-editor__wrapper${id}`);
  const postEditorContainer = document.getElementById(
    `post-editor__container${id}`
  );

  editorWrapper.removeChild(postEditorContainer);

  if (id === -1) {
    const headerCancelBtn = document.getElementById("new-post-btn");
    headerCancelBtn.innerHTML = "New Post";
    headerCancelBtn.className = "header__btn noselect";
  } else {
    const postWrapper = document.getElementById(`card__post-wrapper${id}`);
    postWrapper.style.display = "";
  }
}

function writePostEditorContainer(id = -1) {
  const cancelEdtBtn = getCancelEdtBtn(id);
  cancelEdtBtn.addEventListener("click", () => stopEdt(id));

  const submitEdtBtn = getSubmitEdtBtn(id);
  submitEdtBtn.addEventListener("click", () => {
    const newPostContent = getNewPostContent(id);

    if (newPostContent.id === -1) {
      try {
        postNewPost(newPostContent);
      } catch (error) {
        console.error("Erro ao postar novo post:", error);
      }
    } else {
      try {
        updatePost(newPostContent);
      } catch (error) {
        console.error("Erro ao editar novo post:", error);
      }
    }
  });

  const btnsContainer = getBtnsContainer(id);
  btnsContainer.appendChild(submitEdtBtn);
  btnsContainer.appendChild(cancelEdtBtn);

  const newPostEditorContainer = getPostEditorContainer(id);
  newPostEditorContainer.appendChild(getPostTitleInput(id));
  newPostEditorContainer.appendChild(getPostContentInput(id));
  newPostEditorContainer.appendChild(btnsContainer);

  return newPostEditorContainer;
}

export { writePostEditorContainer, stopEdt };
