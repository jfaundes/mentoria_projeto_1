import postSetup from "../modules/post.js";
import { showNewPostCard } from "../script.js";

const postNewPost = async post => {
    try {
        const newPost = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        postSetup(await newPost.json());
        showNewPostCard();
    } catch (error) {
        console.log(error);
        alert('deu erro');
    }
}

export { postNewPost };