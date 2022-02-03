import { getAllPosts } from "./modules/events/getAllPosts.js";
import { printPosts } from "./modules/helpers/printPosts.js";
import { showNewPostCard } from "./modules/helpers/showNewPostCard.js"

const loadFiveBtn = document.getElementById("load-five-btn");
const newPostBtn = document.getElementById("new-post-btn");
window.currentId = 0;

await getAllPosts();

printPosts(2);
newPostBtn.addEventListener("click", showNewPostCard);
loadFiveBtn.addEventListener("click", () => printPosts(5));
