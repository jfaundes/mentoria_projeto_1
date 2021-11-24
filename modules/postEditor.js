import { postNewPost } from "../events/postNewPost.js";

function getPostEditorContainer(id) {
    id = id || 0;

    const postEditorContainer = document.createElement('div');
    postEditorContainer.className = 'post-editor__container';
    postEditorContainer.id = `post-editor__container${id}`;
    return postEditorContainer;
}

function getPostTitleInput(id, titleInputContent) {
    titleInputContent = titleInputContent || '';

    const postTitleLabel = document.createElement('label');
    postTitleLabel.className = 'post-editor__label';
    postTitleLabel.id = `post-editor__label--title${id}`;
    postTitleLabel.for = `title-input${id}`;
    postTitleLabel.innerHTML = 'Título do Post: ';

    const postTitleInput = document.createElement('input');
    postTitleInput.className = 'post-editor__input';
    postTitleInput.type = 'text';
    postTitleInput.id = `title-input${id}`;
    postTitleInput.value = titleInputContent;
    postTitleInput.placeholder = 'Título';

    postTitleLabel.appendChild(postTitleInput);
    return postTitleLabel;
}

function getPostContentInput(id, contentInputContent) {
    contentInputContent = contentInputContent || '';

    const postContentLabel = document.createElement('label');
    postContentLabel.className = 'post-editor__label';
    postContentLabel.id = `post-editor__label--content${id}`;
    postContentLabel.for = 'content-input';
    postContentLabel.innerHTML = 'Conteúdo do Post: ';

    const postContentTextArea = document.createElement('textarea');
    postContentTextArea.className = 'post-editor__textarea';
    postContentTextArea.id = `content-textarea${id}`;
    postContentTextArea.value = contentInputContent;
    postContentTextArea.placeholder = 'Era uma vez...';

    postContentLabel.appendChild(postContentTextArea);
    return postContentLabel;
}

function getBtnsContainer() {
    const btnsContainer = document.createElement('div');
    btnsContainer.className = 'post-editor__btns-container';
    return btnsContainer;
}

function getSubmitEdtBtn(id) {
    const postEditorBtn = document.createElement('div');
    postEditorBtn.className = 'post-editor__btn noselect';
    postEditorBtn.id = `post-editor__edtr-btn${id}`;
    postEditorBtn.innerHTML = 'Enviar';
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
    console.log(newPostContent);
    return newPostContent;
}

function getCancelEdtBtn(id) {
    const cancelEdtBtn = document.createElement('div');
    cancelEdtBtn.className = 'post-editor__btn noselect';
    cancelEdtBtn.id = `post-editor__cancel-btn${id}`;
    cancelEdtBtn.innerHTML = 'Cancelar';
    return cancelEdtBtn;
}

function cancelEdt(id, newPostEditorContainer) {
    const editorWrapper = document.getElementById(`post-editor__wrapper${id}`);
    editorWrapper.removeChild(newPostEditorContainer);

    if (id === 0) {
        const headerCancelBtn = document.getElementById('new-post-btn');
        headerCancelBtn.innerHTML = 'New Post';
        headerCancelBtn.className = 'header__btn noselect';
    } else {
        const postWrapper = document.getElementById(`card__post-wrapper${id}`);
        postWrapper.style.display = '';
    }
}

export function writePostEditorContainer(post) {
    post = post || { id: 0 };

    const newPostEditorContainer = getPostEditorContainer(post.id);

    const cancelEdtBtn = getCancelEdtBtn(post.id);
    cancelEdtBtn.addEventListener('click', () => cancelEdt(
        post.id, 
        newPostEditorContainer
    ));

    const submitEdtBtn = getSubmitEdtBtn(post.id);
    submitEdtBtn.addEventListener('click', () => {
        const newPostContent = getNewPostContent(post.id);

        if (newPostContent.id === 0) {
            try {
                console.log('entrei aqui');
                postNewPost(newPostContent);
            } catch (error) {
                console.log('Erro ao postar novo post:', error);
            }
        } else {
            try {
                //updatePost(newPostContent);
            } catch (error) {
                console.log('Erro ao editar novo post:', error);
            }
        }
    });

    const btnsContainer = getBtnsContainer();
    btnsContainer.appendChild(submitEdtBtn);
    btnsContainer.appendChild(cancelEdtBtn);

    newPostEditorContainer.appendChild(getPostTitleInput(post.id, post.title));
    
    newPostEditorContainer.appendChild(getPostContentInput(post.id, post.body));
    newPostEditorContainer.appendChild(btnsContainer);

    return newPostEditorContainer;
}