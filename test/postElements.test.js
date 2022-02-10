import {
  getCard,
  getWrapper,
  getTitle,
  getContent,
  getBtnsContainer,
  getShowCmntsBtn,
  getEditPostBtn,
  getDeletePostBtn,
  getCmntContainer,
  getPostEdtrWrapper,
} from "../modules/getElements/postElements.js";

describe("getCard", () => {
  test("Não deve aceitar o id vazio.", () => {
    expect(() => {
      getCard();
    }).toThrow();
  });

  test("Deve renderizar o card.", () => {
    const card = getCard(1);
    expect(card.tagName).toBe("DIV");
    expect(card.className).toBe("card");
    expect(card.id).toBe("card1");
  });
});

describe("getWrapper", () => {
  test("Não deve aceitar o id vazio.", () => {
    expect(() => {
      getWrapper();
    }).toThrow();
  });

  test("Deve renderizar o wrapper.", () => {
    const wrapper = getWrapper(1);
    expect(wrapper.tagName).toBe("ARTICLE");
    expect(wrapper.className).toBe("card__post-wrapper");
    expect(wrapper.id).toBe("card__post-wrapper1");
  });
});

describe("getTitle", () => {
  test("Não deve aceitar o id vazio.", () => {
    expect(() => {
      getTitle();
    }).toThrow();
  });

  test("Não deve aceitar o título vazio.", () => {
    expect(() => {
      getTitle(0);
    }).toThrow();
  });

  test("Deve renderizar o título do post.", () => {
    const title = getTitle(1, "teste");
    expect(title.tagName).toBe("H1");
    expect(title.className).toBe("card__post-title");
    expect(title.id).toBe("card__post-title1");
    expect(title.innerHTML).toBe("teste");
  });
});

describe("getContent", () => {
  test("Não deve aceitar id vazio.", () => {
    expect(() => {
      getContent();
    }).toThrow();
  });

  test("Não deve aceitar body vazio.", () => {
    expect(() => {
      getContent(0);
    }).toThrow();
  });

  test("Deve renderizar o conteúdo do post.", () => {
    const conteudo = getContent(1, "teste");
    expect(conteudo.tagName).toBe("P");
    expect(conteudo.className).toBe("card__post-content");
    expect(conteudo.id).toBe("card__post-content1");
    expect(conteudo.innerHTML).toBe("teste");
  });
});

describe("getBtnsContainer", () => {
  test("Não deve aceitar id vazio.", () => {
    expect(() => {
      getBtnsContainer();
    }).toThrow();
  });

  test("Deve renderizar o container de botões", () => {
    const container = getBtnsContainer(1);
    expect(container.tagName).toBe("DIV");
    expect(container.className).toBe("card__post-btns-container");
    expect(container.id).toBe("card__post-btns-container1");
  });
});

// describe("getShowCmntsBtn", () => {
//   test("Não deve aceitar id vazio.")
// })