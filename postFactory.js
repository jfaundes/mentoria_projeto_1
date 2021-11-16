function postFactory(post, destination) {
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

    const container = makeContainer();
    container.appendChild(makeTitle(post.title));
    container.appendChild(makeParagraph(post.body));
    container.appendChild(makeFooter(post.id));
    destination.appendChild(container);
}

export default postFactory;