const deletePost = async post => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'DELETE',
    });
    removePostFromHTML(post.id)
  } catch (error) {
    console.log(`Deu erro! ${error}`);
  }
}

const removePostFromHTML = id => {
  const postCard = document.getElementById(`card${id}`);
  postCard.remove();
}

export {
  deletePost
};
