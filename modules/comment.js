function getContainerElement(commentID) {
    const container = document.createElement('article');
    container.id = `comment-container${commentID}`;
    container.className = 'comment-container';
    return container;
}

function getTitleElement(titleContent) {
    const title = document.createElement('h1');
    title.className = 'comment-title';
    title.innerHTML = titleContent;
    return title;
}

function getParagraphElement(paragraphContent) {
    const paragraph = document.createElement('p');
    paragraph.className = 'comment-content';
    paragraph.innerHTML = paragraphContent;
    return paragraph;
}

function getEmailElement(emailContent) {
    const email = document.createElement('span');
    email.className = 'comment-email';
    email.innerHTML = emailContent;
    return email;
}

function getFooterElement(footerContent) {
    const footer = document.createElement('footer');
    footer.className = 'comment-footer';
    footer.innerHTML = footerContent;
    return footer;
}

function writeComment(comment, destination) {
    
    const container = getContainerElement(comment.id);
    
    container.appendChild(getTitleElement(comment.name));
    container.appendChild(getEmailElement(comment.email));
    container.appendChild(getParagraphElement(comment.body));
    destination.appendChild(container);
}

export default writeComment;