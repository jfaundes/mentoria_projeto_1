import { writePostEditorContainer } from "./postEditor.js";
import { getCmnts } from "../events/getCmnts.js";
import { writeCmnt } from "./comment.js";
import { deletePost } from "../events/deletePost.js";

function getCard(id) {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `card${id}`;
    return card;
}

function getWrapper(id) {
    const wrapper = document.createElement('article');
    wrapper.className = 'card__post-wrapper';
    wrapper.id = `card__post-wrapper${id}`;
    return wrapper;
}

function getTitle(id, postTitle) {
    const title = document.createElement('h1');
    title.className = 'card__post-title';
    title.id = `card__post-title${id}`;
    title.innerHTML = postTitle;
    return title;
}

function getContent(id, body) {
    const content = document.createElement('p');
    content.className = 'card__post-content';
    content.id = `card__post-content${id}`;
    content.innerHTML = body;
    return content;
}

function getBtnsContainer(id) {
    const btnsContainer = document.createElement('div');
    btnsContainer.className = 'card__post-btns-container';
    btnsContainer.id = `card__post-btns-container${id}`;
    return btnsContainer;
}

function getShowCmntsBtn(id) {
    const showComntsBtn = document.createElement('div');
    showComntsBtn.className =
        'card__post-btn noselect';
    showComntsBtn.id = `card__cmnts-post-btn${id}`;
    showComntsBtn.innerHTML = 'Mostrar Comentários';
    return showComntsBtn;
}

function getEditPostBtn(id) {
    const editPostBtn = document.createElement('div');
    editPostBtn.className =
        'card__post-btn noselect';
    editPostBtn.id = `card__edt-post-btn${id}`;
    editPostBtn.innerHTML = 'Editar Post';
    return editPostBtn;
}

function getDeletePostBtn(id) {
    const deletePostBtn = document.createElement('div');
    deletePostBtn.className = 'card__post-btn noselect';
    deletePostBtn.id = `card__delete-post-btn${id}`;
    deletePostBtn.innerHTML = `Deletar Post`;
    return deletePostBtn;
}

function getCmntContainer(id) {
    const cmntContainer = document.createElement('div');
    cmntContainer.className = 'card__cmnts-container';
    cmntContainer.id = `card__cmnts-container${id}`;
    cmntContainer.style.display = 'none';

    const title = document.createElement('h1');
    title.className = 'card__cmnt-container__title';
    title.id = `card__cmnt-container__title${id}`;
    title.innerHTML = 'Comentários: ';

    cmntContainer.appendChild(title);

    return cmntContainer;
}

function getPostEdtrWrapper(id) {
    const postEdtrWrapper = document.createElement('div');
    postEdtrWrapper.className = 'post-editor__wrapper';
    postEdtrWrapper.id = `post-editor__wrapper${id}`
    return postEdtrWrapper;
}

function togglePostEdtr(post, postEdtrWrapper) {
    const postEditorContainer = writePostEditorContainer(post);
    postEdtrWrapper.appendChild(postEditorContainer);
    
    const postWrapper = document.getElementById(`card__post-wrapper${post.id}`);
    postWrapper.style.display = 'none';
}

function postSetup(post) {
    const { id, title, body } = post;
    const postsContainer = document.getElementById("posts-container");
    const postCard = getCard(id);
    const postWrapper = getWrapper(id);
    const cmntContainer = getCmntContainer(id);
    const postEdtrWrapper = getPostEdtrWrapper(id);
    const btnsContainer = getBtnsContainer(id);

    let hasCmntsCache = false;

    const deletePostBtn = getDeletePostBtn(id);
    deletePostBtn.addEventListener(
        'click',
        () => deletePost(post)
    );

    const editPostBtn = getEditPostBtn(id);
    editPostBtn.addEventListener(
        'click',
        () => togglePostEdtr(post, postEdtrWrapper)
    );

    const showCmntsBtn = getShowCmntsBtn(id);
    showCmntsBtn.addEventListener(
        'click', 
        () => cmntsHandler(id, cmntContainer)
    );

    async function cmntsHandler(id) {
        if (!hasCmntsCache) {
            const cmntArray = await getCmnts(id);
            cmntArray.map(cmnt => writeCmnt(cmnt, cmntContainer));
            hasCmntsCache = true;
        }

        if (cmntContainer.style.display) {
            cmntContainer.style.display = '';
            showCmntsBtn.innerHTML = 'Esconder Comentários';
        } else {
            cmntContainer.style.display = 'none';
            showCmntsBtn.innerHTML = 'Mostrar Comentários';
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