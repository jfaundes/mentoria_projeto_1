const getCmnts = async id => {
    return await
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json());
}

export {getCmnts};