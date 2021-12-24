// import { postsPromise } from "../script.js";

const deletePost = async post => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'DELETE',
    });
    // await removePostFromArray(post.id);
    removePostFromHTML(post.id)
  } catch (error) {
    console.log(`Deu erro! ${error}`);
  }
}

const removePostFromHTML = id => {
  const postCard = document.getElementById(`card${id}`);
  postCard.remove();
}

// Estou com dificuldades em importar uma promisse e atualizar o array.

// const removePostFromArray = id => {
//     const postsArray = await postsPromise;
//     console.log(postsArray);
// }

export {
  deletePost
};
