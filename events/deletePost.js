const deletePost = async post => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'DELETE',
    }).then((response) => console.log(response))
    .catch((error) => console.log(`Deu erro! ${error}`));
}

export { deletePost };