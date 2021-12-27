import {
  postNewPost
} from "../events/postNewPost.js";
import {
  updatePost
} from "../events/updatePost.js";

function getPostEditorContainer(id) {
  const postEditorContainer = document.createElement('div');
  postEditorContainer.className = 'post-editor__container';
  postEditorContainer.id = `post-editor__container${id}`;
  return postEditorContainer;
}

function getPostTitleInput(id) {
  const postTitleLabel = document.createElement('label');
  postTitleLabel.className = 'post-editor__label';
  postTitleLabel.id = `post-editor__label--title${id}`;
  postTitleLabel.for = `title-input${id}`;
  postTitleLabel.innerHTML = 'Título do Post: ';

  const postTitleInput = document.createElement('input');
  let postTitleContent = ``;
  if (id) postTitleContent = window.postsArray[id-1].title;
  postTitleInput.className = 'post-editor__input';
  postTitleInput.type = 'text';
  postTitleInput.id = `title-input${id}`;
  postTitleInput.value = postTitleContent;
  postTitleInput.placeholder = 'Título';

  postTitleLabel.appendChild(postTitleInput);
  return postTitleLabel;
}

function getPostContentInput(id) {
  const postContentLabel = document.createElement('label');
  postContentLabel.className = 'post-editor__label';
  postContentLabel.id = `post-editor__label--content${id}`;
  postContentLabel.for = 'content-input';
  postContentLabel.innerHTML = 'Conteúdo do Post: ';

  const postContentTextArea = document.createElement('textarea');
  let contentInputContent = ``;
  if (id) contentInputContent = window.postsArray[id-1].body;
  postContentTextArea.className = 'post-editor__textarea';
  postContentTextArea.id = `content-textarea${id}`;
  postContentTextArea.value = contentInputContent;
  postContentTextArea.placeholder = 'Era uma vez...';

  postContentLabel.appendChild(postContentTextArea);
  return postContentLabel;
}

function getBtnsContainer(id) {
  const btnsContainer = document.createElement('div');
  btnsContainer.className = 'post-editor__btns-container';
  btnsContainer.id = `post-editor__btns-container${id}`;
  return btnsContainer;
}

function getSubmitEdtBtn(id) {
  const postEditorBtn = document.createElement('div');
  postEditorBtn.className =
    'post-editor__btn post-editor__edtr-btn noselect';
  postEditorBtn.id = `post-editor__edtr-btn${id}`;

  if (id === 0) {
    postEditorBtn.innerHTML = 'Publicar';
  } else {
    postEditorBtn.innerHTML = 'Salvar Alteração';
  }

  return postEditorBtn;
}

function getNewPostContent(id) {
  const postTitleInput = document.getElementById(`title-input${id}`);
  const postContentInput = document.getElementById(`content-textarea${id}`);
  const newPostContent = {
    userId: 1,
    id: id,
    title: postTitleInput.value,
    body: postContentInput.value,
  }
  return newPostContent;
}

function getCancelEdtBtn(id) {
  const cancelEdtBtn = document.createElement('div');
  cancelEdtBtn.className =
    'post-editor__btn post-editor__cancel-btn noselect';
  cancelEdtBtn.id = `post-editor__cancel-btn${id}`;
  cancelEdtBtn.innerHTML = 'Cancelar';
  return cancelEdtBtn;
}

function stopEdt(id) {
  const editorWrapper = document.getElementById(`post-editor__wrapper${id}`);
  const postEditorContainer = document.getElementById(
    `post-editor__container${id}`
  )

  editorWrapper.removeChild(postEditorContainer);

  if (id === 0) {
    const headerCancelBtn = document.getElementById('new-post-btn');
    headerCancelBtn.innerHTML = 'New Post';
    headerCancelBtn.className = 'header__btn noselect';
  } else {
    const postWrapper = document.getElementById(`card__post-wrapper${id}`);
    postWrapper.style.display = '';
  }
}

function writePostEditorContainer(position = 0) {
  let id = 0;
  if (position) id = position + 1;

  const cancelEdtBtn = getCancelEdtBtn(id);
  cancelEdtBtn.addEventListener('click', () => stopEdt(id));

  const submitEdtBtn = getSubmitEdtBtn(id);
  submitEdtBtn.addEventListener('click', () => {
    const newPostContent = getNewPostContent(id);

    if (newPostContent.id === 0) {
      try {
        postNewPost(newPostContent);
      } catch (error) {
        console.error('Erro ao postar novo post:', error);
      }
    } else {
      try {
        updatePost(newPostContent);
      } catch (error) {
        console.error('Erro ao editar novo post:', error);
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

export {
  writePostEditorContainer,
  stopEdt
}
