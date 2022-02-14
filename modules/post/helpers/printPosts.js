import { postSetup } from "../postSetup.js";

const printPosts = async (nPosts) => {
  try {
    for (let i = 0; i < nPosts; i++) {
      postSetup(window.currentId);
      window.currentId++;
    }
  } catch (e) {
    console.error(e);
  }
};

export { printPosts };
