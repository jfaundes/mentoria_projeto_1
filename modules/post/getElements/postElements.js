import { deletePost } from "../../fetch/deletePost.js";
import { togglePostEdtr } from "../../postEditor/helpers/togglePostEdtr.js";
import { cmntsHandler } from "../../comments/helpers/cmntsHandler.js";

function getCard(id) {
  if (!id && id !== 0) {
    throw new Error("ID inexistente!");
  }
  const card = document.createElement("div");
  card.className = "card";
  card.id = `card${id}`;
  card.hasCmntsCache = false;
  return card;
}

function getWrapper(id) {
  if (!id && id !== 0) {
    throw new Error("ID inexistente!");
  }
  const wrapper = document.createElement("article");
  wrapper.className = "card__post-wrapper";
  wrapper.id = `card__post-wrapper${id}`;
  return wrapper;
}

function getTitle(id, postTitle) {
  if (!id && id !== 0) {
    throw new Error("ID inexistente!");
  }

  if (!postTitle && postTitle !== 0) {
    throw new Error("Título inexistente!");
  }

  const title = document.createElement("h1");
  title.className = "card__post-title";
  title.id = `card__post-title${id}`;
  title.innerHTML = postTitle;
  return title;
}

function getContent(id, body) {
  if (!id && id !== 0) {
    throw new Error("ID inexistente!");
  }

  if (!body && body !== 0) {
    throw new Error("Conteúdo inexistente!");
  }
  const content = document.createElement("p");
  content.className = "card__post-content";
  content.id = `card__post-content${id}`;
  content.innerHTML = body;
  return content;
}

function getBtnsContainer(id) {
  if (!id && id !== 0) {
    throw new Error("id inexistente!");
  }

  const btnsContainer = document.createElement("div");
  btnsContainer.className = "card__post-btns-container";
  btnsContainer.id = `card__post-btns-container${id}`;
  return btnsContainer;
}

function getShowCmntsBtn(id) {
  const showCmntsBtn = document.createElement("div");
  showCmntsBtn.className = "card__post-btn noselect";
  showCmntsBtn.id = `card__cmnts-post-btn${id}`;
  showCmntsBtn.innerHTML = "Mostrar Comentários";
  showCmntsBtn.addEventListener("click", () => cmntsHandler(id));
  return showCmntsBtn;
}

function getEditPostBtn(id) {
  const editPostBtn = document.createElement("div");
  editPostBtn.className = "card__post-btn noselect";
  editPostBtn.id = `card__edt-post-btn${id}`;
  editPostBtn.innerHTML = "Editar Post";
  editPostBtn.addEventListener("click", () => togglePostEdtr(id));
  return editPostBtn;
}

function getDeletePostBtn(id) {
  const deletePostBtn = document.createElement("div");
  deletePostBtn.className = "card__post-btn noselect";
  deletePostBtn.id = `card__delete-post-btn${id}`;
  deletePostBtn.innerHTML = `Deletar Post`;
  deletePostBtn.addEventListener("click", () => deletePost(window.postsArray[id -1]));
  return deletePostBtn;
}

function getCmntContainer(id) {
  const cmntContainer = document.createElement("div");
  cmntContainer.className = "card__cmnts-container";
  cmntContainer.id = `card__cmnts-container${id}`;
  cmntContainer.style.display = "none";

  const title = document.createElement("h1");
  title.className = "card__cmnt-container__title";
  title.id = `card__cmnt-container__title${id}`;
  title.innerHTML = "Comentários: ";

  cmntContainer.appendChild(title);

  return cmntContainer;
}

function getPostEdtrWrapper(id) {
  const postEdtrWrapper = document.createElement("div");
  postEdtrWrapper.className = "post-editor__wrapper";
  postEdtrWrapper.id = `post-editor__wrapper${id}`;
  return postEdtrWrapper;
}

export {
  getCard,
  getWrapper,
  getTitle,
  getContent,
  getBtnsContainer,
  getShowCmntsBtn,
  getEditPostBtn,
  getDeletePostBtn,
  getCmntContainer,
  getPostEdtrWrapper,
};
