import { writePostEditorContainer } from "./postEditorSetup.js";
import { getCmnts } from "./events/getCmnts.js";
import { writeCmnt } from "./comntsSetup.js";
import { deletePost } from "./events/deletePost.js";
import {
  getCard,
  getWrapper,
  getCmntContainer,
  getPostEdtrWrapper,
  getBtnsContainer,
  getDeletePostBtn,
  getEditPostBtn,
  getShowCmntsBtn,
  getTitle,
  getContent,
} from "./getElements/postElements.js";

function togglePostEdtr(id, postEdtrWrapper) {
  const postEditorContainer = writePostEditorContainer(id - 1);
  postEdtrWrapper.appendChild(postEditorContainer);

  const postWrapper = document.getElementById(`card__post-wrapper${id}`);
  postWrapper.style.display = "none";
}

function postSetup(position) {
  const post = window.postsArray[position];
  if (!Object.keys(post).length) {
    console.error(`O post na posição ${position} está vazio!`);
    return;
  }

  const { id, title, body } = post;
  const postsContainer = document.getElementById("posts-container");
  const postCard = getCard(id);
  const postWrapper = getWrapper(id);
  const cmntContainer = getCmntContainer(id);
  const postEdtrWrapper = getPostEdtrWrapper(id);
  const btnsContainer = getBtnsContainer(id);

  let hasCmntsCache = false;

  const deletePostBtn = getDeletePostBtn(id);
  deletePostBtn.addEventListener("click", () => deletePost(post));

  const editPostBtn = getEditPostBtn(id);
  editPostBtn.addEventListener("click", () =>
    togglePostEdtr(id, postEdtrWrapper)
  );

  const showCmntsBtn = getShowCmntsBtn(id);
  showCmntsBtn.addEventListener("click", () => cmntsHandler(id, cmntContainer));

  async function cmntsHandler(id) {
    if (!hasCmntsCache) {
      const cmntArray = await getCmnts(id);
      cmntArray.map((cmnt) => writeCmnt(cmnt, cmntContainer));
      hasCmntsCache = true;
    }

    if (cmntContainer.style.display) {
      cmntContainer.style.display = "";
      showCmntsBtn.innerHTML = "Esconder Comentários";
    } else {
      cmntContainer.style.display = "none";
      showCmntsBtn.innerHTML = "Mostrar Comentários";
    }
  }

  btnsContainer.appendChild(showCmntsBtn);
  btnsContainer.appendChild(editPostBtn);
  btnsContainer.appendChild(deletePostBtn);

  postWrapper.appendChild(getTitle(id, title));
  postWrapper.appendChild(getContent(id, body));
  postWrapper.appendChild(btnsContainer);

  postCard.appendChild(postWrapper);
  postCard.appendChild(postEdtrWrapper);
  postCard.appendChild(cmntContainer);

  postsContainer.prepend(postCard);
}

export { postSetup };
