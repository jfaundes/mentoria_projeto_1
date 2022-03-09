import { getCmnts } from "../../fetch/getCmnts.js";
import { writeCmnt } from "../comntsSetup.js";

const toggleCmnts = (id) => {
  const cmntsContainer = document.getElementById(`card__cmnts-container${id}`);
  const showCmntsBtn = document.getElementById(`card__cmnts-post-btn${id}`);
  if (cmntsContainer.style.display) {
    cmntsContainer.style.display = "";
    showCmntsBtn.innerHTML = "Esconder Comentários";
  } else {
    cmntsContainer.style.display = "none";
    showCmntsBtn.innerHTML = "Mostrar Comentários";
  }
};

async function cmntsHandler(id) {
  const card = document.getElementById(`card${id}`);

  if (!card.hasCmntsCache) {
    const cmntArray = await getCmnts(id);
    cmntArray.map((cmnt) => writeCmnt(cmnt, id));
    card.hasCmntsCache = true;
  }

  toggleCmnts(id);
}

export { cmntsHandler };
