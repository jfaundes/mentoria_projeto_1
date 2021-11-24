import { writePostEditorContainer } from "./postEditor.js";
import { getCmnts } from "../events/getCmnts.js";
import writeCmnt from "./comment.js";

function getCard() {
    const card = document.createElement('div');
    card.className = 'card';
    return card;
}

function getWrapper(postID) {
    const wrapper = document.createElement('article');
    wrapper.className = 'card__post-wrapper';
    wrapper.id = `card__post-wrapper${postID}`;
    return wrapper;
}

function getTitle(titleContent) {
    const title = document.createElement('h1');
    title.className = 'card__post-title';
    title.innerHTML = titleContent;
    return title;
}

function getParagraph(paragraphContent) {
    const paragraph = document.createElement('p');
    paragraph.className = 'card__post-content';
    paragraph.innerHTML = paragraphContent;
    return paragraph;
}

function getBtnsContainer() {
    const btnsContainer = document.createElement('div');
    btnsContainer.className = 'card__post-btns-container';
    return btnsContainer;
}

function getShowCmntsBtn() {
    const showComntsBtn = document.createElement('div');
    showComntsBtn.className =
        'card__post-btn noselect';
    showComntsBtn.innerHTML = 'Mostrar Comentários';
    return showComntsBtn;
}

function getEditPostBtn() {
    const editPostBtn = document.createElement('div');
    editPostBtn.className =
        'card__post-btn noselect';
    editPostBtn.innerHTML = 'Editar Post';
    return editPostBtn;
}

function getCmntWrapper() {
    const cmntWrapper = document.createElement('div');
    cmntWrapper.className = 'card__cmnts-container';
    cmntWrapper.style.display = 'none';

    const title = document.createElement('h1');
    title.className = 'card__cmnt-container__title';
    title.innerHTML = 'Comentários: ';

    cmntWrapper.appendChild(title);

    return cmntWrapper;
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
    const postCard = getCard();
    const postWrapper = getWrapper(post.id);
    const cmntWrapper = getCmntWrapper();
    const postEdtrWrapper = getPostEdtrWrapper(post.id);
    const btnsContainer = getBtnsContainer();

    let hasCmntsCache = false;

    const editPostBtn = getEditPostBtn();
    editPostBtn.addEventListener(
        'click',
        () => togglePostEdtr(post, postEdtrWrapper)
    );

    const showCmntsBtn = getShowCmntsBtn();
    showCmntsBtn.addEventListener(
        'click', 
        () => cmntsHandler(post.id, cmntWrapper)
    );

    async function cmntsHandler(id) {
        if (!hasCmntsCache) {
            const cmntArray = await getCmnts(id);
            cmntArray.map(cmnt => writeCmnt(cmnt, cmntWrapper));
            hasCmntsCache = true;
        }

        if (cmntWrapper.style.display) {
            cmntWrapper.style.display = '';
            showCmntsBtn.innerHTML = 'Esconder Comentários';
        } else {
            cmntWrapper.style.display = 'none';
            showCmntsBtn.innerHTML = 'Mostrar Comentários';
        }
    }

    btnsContainer.appendChild(showCmntsBtn);
    btnsContainer.appendChild(editPostBtn);

    postWrapper.appendChild(getTitle(post.title));
    postWrapper.appendChild(getParagraph(post.body));
    postWrapper.appendChild(btnsContainer);

    postCard.appendChild(postWrapper);
    postCard.appendChild(postEdtrWrapper);
    postCard.appendChild(cmntWrapper);

    postsContainer.appendChild(postCard);
}

export default postSetup;