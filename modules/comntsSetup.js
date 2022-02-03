import {
  getContainerElement,
  getTitleElement,
  getEmailElement,
  getParagraphElement,
} from "./getElements/comntElements.js";

function writeCmnt(cmnt, destination) {
  const { id, name, email, body } = cmnt;
  const wrapper = getContainerElement(id);

  wrapper.appendChild(getTitleElement(name));
  wrapper.appendChild(getEmailElement(email));
  wrapper.appendChild(getParagraphElement(body));
  destination.appendChild(wrapper);
}

export { writeCmnt };
