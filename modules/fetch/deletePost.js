const deletePost = async (post) => {
  try {
    if (isNaN(post.id)) {
      throw new Error(`post.id: ${post.id} não é um número!`);
    }
    await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "DELETE",
    });
    removePostFromHTML(post.id);
    removePostFromArray(post.id);
  } catch (error) {
    console.error(`Deu erro! ${error}`);
  }
};

const removePostFromHTML = (id) => {
  const postCard = document.getElementById(`card${id}`);
  postCard && postCard.remove();
};

const removePostFromArray = (id) => {
  window.postsArray[id - 1] = {};
};

export { deletePost };
