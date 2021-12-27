const getAllPosts = async () => {
  window.postsArray = await fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json());
};

export {
  getAllPosts
};
