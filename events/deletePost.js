const deletePost = async post => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'DELETE',
    });
    removePostFromHTML(post.id);
    removePostFromArray(post.id);
  } catch (error) {
    console.error(`Deu erro! ${error}`);
  }
}

const removePostFromHTML = id => {
  const postCard = document.getElementById(`card${id}`);
  postCard.remove();
}

const removePostFromArray = id => {
  window.postsArray[id-1] = {};
}

export {
  deletePost
};
