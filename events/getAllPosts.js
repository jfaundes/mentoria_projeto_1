const getAllPosts = async () => {
    return await
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json());
  };

  export { getAllPosts };