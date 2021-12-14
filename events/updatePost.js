import { stopEdt } from "../modules/postEditor.js";

const updatePost = async post => {
    try {
        const updatedPostResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const updatedPost = await updatedPostResponse.json()
        updateHTMLPostTitle(updatedPost);
        updateHTMLPostContent(updatedPost);
        stopEdt(updatedPost.id);
    } catch (error) {
        console.log(`Erro ao fazer o update do post!\n${error}`);
    }
}

const updateHTMLPostTitle = post => {
    const postTitle = document.getElementById(`card__post-title${post.id}`);
    postTitle.innerHTML = post.title;
}

const updateHTMLPostContent = post => {
    const postContent = document.getElementById(`card__post-content${post.id}`);
    postContent.innerHTML = post.body;
}

export { updatePost }