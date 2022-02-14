const validatePost = (post) => {
  if (!post) {
    throw new Error("Post nulo ou indefinido.");
  }

  if (!Object.keys(post).length) {
    throw new Error("Post vazio.");
  }

  const { id, title, body } = post;

  if (!id && id !== 0) {
    throw new Error("Id inexistente.");
  }

  if (isNaN(id)) {
    throw new Error("Id não é um número.");
  }

  if (!title) {
    throw new Error("Título inexistente.");
  }

  if (!body) {
    throw new Error("Body inexistente.");
  }
};

export { validatePost };
