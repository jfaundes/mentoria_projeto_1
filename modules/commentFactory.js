function commentFactory(comment, destination) {
    function makeContainer(commentID) {
        const container = document.createElement('article');
        container.id = `comment-container${commentID}`;
        container.className = 'comment-container';
        return container;
    }

    function makeTitle(titleContent) {
        const title = document.createElement('h1');
        title.className = 'comment-title';
        title.innerHTML = titleContent;
        return title;
    }

    function makeParagraph(paragraphContent) {
        const paragraph = document.createElement('p');
        paragraph.className = 'comment-content';
        paragraph.innerHTML = paragraphContent;
        return paragraph;
    }

    function makeEmail(emailContent) {
        const email = document.createElement('span');
        email.className = 'comment-email';
        email.innerHTML = emailContent;
        return email;
    }

    function makeFooter(footerContent) {
        const footer = document.createElement('footer');
        footer.className = 'comment-footer';
        footer.innerHTML = footerContent;
        return footer;
    }

    const container = makeContainer(comment.id);

    container.appendChild(makeTitle(comment.name));
    container.appendChild(makeEmail(comment.email));
    container.appendChild(makeParagraph(comment.body));
    destination.appendChild(container);
}

export default commentFactory;