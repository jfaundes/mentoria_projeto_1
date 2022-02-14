import { writePostEditorContainer } from "../postEditorSetup.js";

function togglePostEdtr(id) {
  const postEdtrWrapper = document.getElementById(`post-editor__wrapper${id}`);
  const postWrapper = document.getElementById(`card__post-wrapper${id}`);
  const postEditorContainer = writePostEditorContainer(id);

  postEdtrWrapper.appendChild(postEditorContainer);
  postWrapper.style.display = "none";
}

export { togglePostEdtr };
