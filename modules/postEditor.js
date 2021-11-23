function getPostEditorWrapper(id) {
    id = id || 0;

    const postEditorWrapper = document.createElement('div');
    postEditorWrapper.className = 'post-editor__wrapper';
    postEditorWrapper.id = `post-editor__wrapper${id}`;
    return postEditorWrapper;
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

function getPostEditorBtn() {
    const postEditorBtn = document.createElement('div');
    postEditorBtn.className = 'post-editor__btn noselect';
    postEditorBtn.innerHTML = 'Enviar';
    return postEditorBtn;
}

export function writePostEditorWrapper(post) {
    post = post || { id: 0 };

    const newPostEditorWrapper = getPostEditorWrapper(post.id);
    newPostEditorWrapper.appendChild(getPostTitleInput(post.title));
    newPostEditorWrapper.appendChild(getPostContentInput(post.content));
    newPostEditorWrapper.appendChild(getPostEditorBtn());
    return newPostEditorWrapper;
}