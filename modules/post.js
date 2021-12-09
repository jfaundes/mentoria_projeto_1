import { writePostEditorContainer } from "./postEditor.js";
import { getCmnts } from "../events/getCmnts.js";
import writeCmnt from "./comment.js";
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

function getTitle(post) {
    const title = document.createElement('h1');
    title.className = 'card__post-title';
    title.id = `card__post-title${post.id}`;
    title.innerHTML = post.title;
    return title;
}

function getParagraph(post) {
    const paragraph = document.createElement('p');
    paragraph.className = 'card__post-content';
    paragraph.id = `card__post-content${post.id}`;
    paragraph.innerHTML = post.body;
    return paragraph;
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
    const postsContainer = document.getElementById("posts-container");
    const postCard = getCard(post.id);
    const postWrapper = getWrapper(post.id);
    const cmntContainer = getCmntContainer(post.id);
    const postEdtrWrapper = getPostEdtrWrapper(post.id);
    const btnsContainer = getBtnsContainer(post.id);

    let hasCmntsCache = false;

    const deletePostBtn = getDeletePostBtn(post.id);
    deletePostBtn.addEventListener(
        'click',
        () => deletePost(post)
    );

    const editPostBtn = getEditPostBtn(post.id);
    editPostBtn.addEventListener(
        'click',
        () => togglePostEdtr(post, postEdtrWrapper)
    );

    const showCmntsBtn = getShowCmntsBtn(post.id);
    showCmntsBtn.addEventListener(
        'click', 
        () => cmntsHandler(post.id, cmntContainer)
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

    postWrapper.appendChild(getTitle(post));
    postWrapper.appendChild(getParagraph(post));
    postWrapper.appendChild(btnsContainer);

    postCard.appendChild(postWrapper);
    postCard.appendChild(postEdtrWrapper);
    postCard.appendChild(cmntContainer);

    postsContainer.prepend(postCard);
}

export default postSetup;