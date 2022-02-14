import { stopEdt } from "../postEditor/postEditorSetup.js";

const updatePost = async (post) => {
  try {
    if (post.id > 100) {
      alert("A API não suporta edição de posts novos :(");
      stopEdt(post.id);
      return;
    }

    const updatedPostResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const updatedPost = await updatedPostResponse.json();
    updateHTMLPostTitle(updatedPost);
    updateHTMLPostContent(updatedPost);
    updateArrayPostTitle(updatedPost);
    updateArrayPostContent(updatedPost);
    stopEdt(updatedPost.id);
  } catch (error) {
    console.error(`Erro ao fazer o update do post!\n${error}`);
  }
};

const updateHTMLPostTitle = ({ id, title }) => {
  const postTitle = document.getElementById(`card__post-title${id}`);
  postTitle.innerHTML = title;
};

const updateHTMLPostContent = ({ id, body }) => {
  const postContent = document.getElementById(`card__post-content${id}`);
  postContent.innerHTML = body;
};

const updateArrayPostTitle = ({ id, title }) => {
  window.postsArray[id - 1].title = title;
};

const updateArrayPostContent = ({ id, body }) => {
  window.postsArray[id - 1].body = body;
};

export { updatePost };
