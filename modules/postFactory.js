import commentFactory from "./commentFactory.js";

function postFactory(post, destination) {
    const postContainer = makeContainer();
    const commentWrapper = makeCommentWrapper();
    let hasCommentsCache = false;
    let showComments = true;

    function makeContainer() {
        const container = document.createElement('article');
        container.className = 'post-container';
        return container;
    }

    function makeTitle(titleContent) {
        const title = document.createElement('h1');
        title.className = 'post-title';
        title.innerHTML = titleContent;
        return title;
    }

    function makeParagraph(paragraphContent) {
        const paragraph = document.createElement('p');
        paragraph.className = 'post-content';
        paragraph.innerHTML = paragraphContent;
        return paragraph;
    }

    function makeFooter(footerContent) {
        const footer = document.createElement('footer');
        footer.className = 'post-footer';
        footer.innerHTML = footerContent;
        return footer;
    }

    function makeCommentWrapper() {
        const commentWrapper = document.createElement('div');
        commentWrapper.className = 'comment-wrapper';
        commentWrapper.style.display = 'none';

        const title = document.createElement('h1');
        title.className = 'comment-wrapper-title';
        title.innerHTML = 'Comentários: ';

        commentWrapper.appendChild(title);

        return commentWrapper;
    }

    async function commentsController(id) {
        if (!hasCommentsCache) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const commentArray = await response.json();
    
            for (let commentID in commentArray) {
                const comment = commentArray[commentID];
                commentFactory(comment, commentWrapper);
            }
    
            postContainer.appendChild(commentWrapper);
            hasCommentsCache = true;
        }

        if (!showComments) {
            commentWrapper.style.display = 'none';
            showComments = true;
        } else {
            commentWrapper.style.display = '';
            showComments = false;
        }
    }

    postContainer.appendChild(makeTitle(post.title));
    postContainer.appendChild(makeParagraph(post.body));
    postContainer.appendChild(makeFooter(post.id));
    postContainer.appendChild(commentWrapper);
    postContainer.addEventListener('click', () => commentsController(post.id));
    destination.appendChild(postContainer);
}

export default postFactory;