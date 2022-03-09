import {
  getContainerElement,
  getTitleElement,
  getEmailElement,
  getParagraphElement,
} from "./getElements/comntElements.js";

function writeCmnt(cmnt, postId) {
  const { id, name, email, body } = cmnt;
  const wrapper = getContainerElement(id);
  const cmntsContainer = document.getElementById(`card__cmnts-container${postId}`);

  wrapper.appendChild(getTitleElement(name));
  wrapper.appendChild(getEmailElement(email));
  wrapper.appendChild(getParagraphElement(body));
  cmntsContainer.appendChild(wrapper);
}

export { writeCmnt };
