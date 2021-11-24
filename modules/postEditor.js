function getPostEditorContainer(id) {
    id = id || 0;

    const postEditorContainer = document.createElement('div');
    postEditorContainer.className = 'post-editor__container';
    postEditorContainer.id = `post-editor__container${id}`;
    return postEditorContainer;
}

function getPostTitleInput(titleInputContent) {
    titleInputContent = titleInputContent || '';

    const postTitleLabel = document.createElement('label');
    postTitleLabel.className = 'post-editor__label';
    postTitleLabel.for = 'title-input';
    postTitleLabel.innerHTML = 'Título do Post: ';

    const postTitleInput = document.createElement('input');
    postTitleInput.className = 'post-editor__input';
    postTitleInput.type = 'text';
    postTitleInput.id = 'title-input';
    postTitleInput.value = titleInputContent;
    postTitleInput.placeholder = 'Título';

    postTitleLabel.appendChild(postTitleInput);
    return postTitleLabel;
}

function getPostContentInput(contentInputContent) {
    contentInputContent = contentInputContent || '';

    const postContentLabel = document.createElement('label');
    postContentLabel.className = 'post-editor__label';
    postContentLabel.for = 'content-input';
    postContentLabel.innerHTML = 'Conteúdo do Post: ';

    const postContentTextArea = document.createElement('textarea');
    postContentTextArea.className = 'post-editor__textarea';
    postContentTextArea.id = 'content-textarea';
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

function getPostEditorBtn(id) {
    const postEditorBtn = document.createElement('div');
    postEditorBtn.className = 'post-editor__btn noselect';
    postEditorBtn.id = `post-editor__edtr-btn${id}`;
    postEditorBtn.innerHTML = 'Enviar';
    return postEditorBtn;
}

function getCancelEdtBtn(id) {
    const cancelEdtBtn = document.createElement('div');
    cancelEdtBtn.className = 'post-editor__btn noselect';
    cancelEdtBtn.id = `post-editor__cancel-btn${id}`;
    cancelEdtBtn.innerHTML = 'Cancelar';
    return cancelEdtBtn;
}

function cancelEdt(id, showPostEdtr, newPostEditorContainer) {
    const editorWrapper = document.getElementById(`post-editor__wrapper${id}`);
    editorWrapper.removeChild(newPostEditorContainer);
    showPostEdtr.value = false;

    if(id == 0) {
        const headerCancelBtn = document.getElementById('new-post-btn');
        headerCancelBtn.innerHTML = 'New Post';
        headerCancelBtn.className = 'header__btn noselect';
    }
}

export function writePostEditorContainer(post, showPostEdtr) {
    post = post || { id: 0 };
    const newPostEditorContainer = getPostEditorContainer(post.id);

    const cancelEdtBtn = getCancelEdtBtn(post.id);
    cancelEdtBtn.addEventListener('click', () => cancelEdt(post.id, showPostEdtr, newPostEditorContainer));

    const btnsContainer = getBtnsContainer();
    btnsContainer.appendChild(getPostEditorBtn(post.id));
    btnsContainer.appendChild(cancelEdtBtn);

    newPostEditorContainer.appendChild(getPostTitleInput(post.title));
    newPostEditorContainer.appendChild(getPostContentInput(post.body));
    newPostEditorContainer.appendChild(btnsContainer);

    return newPostEditorContainer;
}