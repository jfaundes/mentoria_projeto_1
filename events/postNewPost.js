import postSetup from "../modules/post.js";
import { showNewPostCard } from "../script.js";

const postNewPost = async post => {
    const novoPost = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
    console.log(novoPost);
    // Definir como o novoPost será inserido na página e fazer com que isso
    // só aconteça depois de ser enviado com sucesso para a API.
    postSetup(novoPost);
    showNewPostCard();
}

export { postNewPost };