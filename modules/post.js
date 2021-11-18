import writeComment from "./comment.js";

function getWrapper() {
    const wrapper = document.createElement('div');
    wrapper.className = 'post-card';
    return wrapper;
}

function getContainer(postID) {
    const container = document.createElement('article');
    container.id = `container-post${postID}`;
    container.className = 'post-container';
    return container;
}

function getTitle(titleContent) {
    const title = document.createElement('h1');
    title.className = 'post-title';
    title.innerHTML = titleContent;
    return title;
}

function getParagraph(paragraphContent) {
    const paragraph = document.createElement('p');
    paragraph.className = 'post-content';
    paragraph.innerHTML = paragraphContent;
    return paragraph;
}

function getFooter() {
    const footer = document.createElement('footer');
    footer.className = 'post-footer noselect';
    footer.innerHTML = 'Mostrar Comentários';
    return footer;
}

function getCommentWrapper() {
    const commentWrapper = document.createElement('div');
    commentWrapper.className = 'comment-wrapper';
    commentWrapper.style.display = 'none';

    const title = document.createElement('h1');
    title.className = 'comment-wrapper-title';
    title.innerHTML = 'Comentários: ';

    commentWrapper.appendChild(title);

    return commentWrapper;
}

function postSetup(post, destination) {
    const postWrapper = getWrapper();
    const postContainer = getContainer(post.id);
    const commentWrapper = getCommentWrapper();
    let hasCommentsCache = false;
    let showComments = true;
    
    const footer = getFooter();
    footer.addEventListener('click', () => commentsHandler(post.id, commentWrapper));

    async function commentsHandler(id) {
        if (!hasCommentsCache) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const commentArray = await response.json();

            commentArray.map(comment => writeComment(comment, commentWrapper));

            hasCommentsCache = true;
        }''
    
        if (!showComments) {
            commentWrapper.style.display = 'none';
            footer.innerHTML = 'Mostrar Comentários';
            showComments = true;
        } else {
            commentWrapper.style.display = '';
            footer.innerHTML = 'Esconder Comentários';
            showComments = false;
        }
    }
    
    postContainer.appendChild(getTitle(post.title));
    postContainer.appendChild(getParagraph(post.body));
    postContainer.appendChild(footer);

    postWrapper.appendChild(postContainer);
    postWrapper.appendChild(commentWrapper);

    destination.appendChild(postWrapper);
}

export default postSetup;