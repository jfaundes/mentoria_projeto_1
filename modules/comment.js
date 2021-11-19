function getContainerElement(cmntID) {
    const container = document.createElement('section');
    container.className = 'cmnt-wrapper';
    container.id = `cmnt-wrapper${cmntID}`;
    return container;
}

function getTitleElement(titleContent) {
    const title = document.createElement('h1');
    title.className = 'cmnt-wrapper__title';
    title.innerHTML = titleContent;
    return title;
}

function getParagraphElement(paragraphContent) {
    const paragraph = document.createElement('p');
    paragraph.className = 'cmnt-wrapper__content';
    paragraph.innerHTML = paragraphContent;
    return paragraph;
}

function getEmailElement(emailContent) {
    const email = document.createElement('span');
    email.className = 'cmnt-wrapper__email';
    email.innerHTML = emailContent;
    return email;
}

function getFooterElement(footerContent) {
    const footer = document.createElement('footer');
    footer.className = 'comnt-wrapper__footer';
    footer.innerHTML = footerContent;
    return footer;
}

function writeCmnt(cmnt, destination) {
    
    const container = getContainerElement(cmnt.id);
    
    container.appendChild(getTitleElement(cmnt.name));
    container.appendChild(getEmailElement(cmnt.email));
    container.appendChild(getParagraphElement(cmnt.body));
    destination.appendChild(container);
}

export default writeCmnt;