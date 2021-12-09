const deletePost = async post => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'DELETE',
    }).then(() => removePostFromHTML(post.id))
    .catch((error) => console.log(`Deu erro! ${error}`));
}

const removePostFromHTML = async id => {
    const postCard = document.getElementById(`card${id}`);
    postCard.remove();
}

export { deletePost };