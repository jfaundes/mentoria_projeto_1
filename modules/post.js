import writeCmnt from "./comment.js";

function getWrapper() {
    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    return wrapper;
}

function getContainer(postID) {
    const container = document.createElement('article');
    container.className = 'card__post-wrapper';
    container.id = `card__post-wrapper${postID}`;
    return container;
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

function getFooter() {
    const footer = document.createElement('footer');
    footer.className = 'card__post-footer noselect';
    footer.innerHTML = 'Mostrar Comentários';
    return footer;
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

function postSetup(post, destination) {
    const postWrapper = getWrapper();
    const postContainer = getContainer(post.id);
    const cmntWrapper = getCmntWrapper();
    let hasCmntsCache = false;
    let showCmnts = true;
    
    const footer = getFooter();
    footer.addEventListener('click', () => cmntsHandler(post.id, cmntWrapper));

    async function cmntsHandler(id) {
        if (!hasCmntsCache) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const cmntArray = await response.json();

            cmntArray.map(cmnt => writeCmnt(cmnt, cmntWrapper));

            hasCmntsCache = true;
        }
    
        if (!showCmnts) {
            cmntWrapper.style.display = 'none';
            footer.innerHTML = 'Mostrar Comentários';
            showCmnts = true;
        } else {
            cmntWrapper.style.display = '';
            footer.innerHTML = 'Esconder Comentários';
            showCmnts = false;
        }
    }
    
    postContainer.appendChild(getTitle(post.title));
    postContainer.appendChild(getParagraph(post.body));
    postContainer.appendChild(footer);

    postWrapper.appendChild(postContainer);
    postWrapper.appendChild(cmntWrapper);

    destination.appendChild(postWrapper);
}

export default postSetup;