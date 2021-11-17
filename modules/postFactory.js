import commentFactory from "./commentFactory.js";

function postFactory(post, destination) {
    let hasCommentsCache = false;
    let showComments = true;

    function makeWrapper() {
        const wrapper = document.createElement('div');
        wrapper.className = 'post-wrapper';
        return wrapper;
    }

    function makeContainer(postID) {
        const container = document.createElement('article');
        container.id = `container-post${postID}`;
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

    function makeFooter() {
        const footer = document.createElement('footer');
        footer.className = 'post-footer noselect';
        footer.innerHTML = 'Mostrar Comentários';
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
    
            hasCommentsCache = true;
        }

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

    const postWrapper = makeWrapper();
    const postContainer = makeContainer(post.id);
    const commentWrapper = makeCommentWrapper();
    
    const footer = makeFooter();
    footer.addEventListener('click', () => commentsController(post.id, footer));

    postContainer.appendChild(makeTitle(post.title));
    postContainer.appendChild(makeParagraph(post.body));
    postContainer.appendChild(footer);

    postWrapper.appendChild(postContainer);
    postWrapper.appendChild(commentWrapper);

    destination.appendChild(postWrapper);
}

export default postFactory;