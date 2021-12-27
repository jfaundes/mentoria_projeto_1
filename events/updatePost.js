import {
  stopEdt
} from "../modules/postEditor.js";

const updatePost = async post => {
  try {
    const updatedPostResponse =
      await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

    const updatedPost = await updatedPostResponse.json()
    updateHTMLPostTitle(updatedPost);
    updateHTMLPostContent(updatedPost);
    updateArrayPostTitle(updatedPost);
    updateArrayPostContent(updatedPost);
    stopEdt(updatedPost.id);
  } catch (error) {
    console.error(`Erro ao fazer o update do post!\n${error}`);
  }
}

const updateHTMLPostTitle = updatedPost => {
  const postTitle = document.getElementById(`card__post-title${updatedPost.id}`);
  postTitle.innerHTML = updatedPost.title;
}

const updateHTMLPostContent = updatedPost => {
  const postContent = document.getElementById(`card__post-content${updatedPost.id}`);
  postContent.innerHTML = updatedPost.body;
}

const updateArrayPostTitle = ({ id, title }) => {
  window.postsArray[id-1].title = title;
}

const updateArrayPostContent = ({id, body}) => {
  window.postsArray[id-1].body = body;
}

export {
  updatePost
}
