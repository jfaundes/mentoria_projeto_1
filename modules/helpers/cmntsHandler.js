import { getCmnts } from "../events/getCmnts.js";
import { writeCmnt } from "../comntsSetup.js";

async function cmntsHandler(id) {
  const card = document.getElementById(`card${id}`);
  const cmntsContainer = document.getElementById(`card__cmnts-container${id}`);
  const showCmntsBtn = document.getElementById(`card__cmnts-post-btn${id}`);
  
  if (!card.hasCmntsCache) {
    const cmntArray = await getCmnts(id);
    cmntArray.map((cmnt) => writeCmnt(cmnt, id));
    card.hasCmntsCache = true;
  }

  if (cmntsContainer.style.display) {
    cmntsContainer.style.display = "";
    showCmntsBtn.innerHTML = "Esconder Comentários";
  } else {
    cmntsContainer.style.display = "none";
    showCmntsBtn.innerHTML = "Mostrar Comentários";
  }
}

export { cmntsHandler };
