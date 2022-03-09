import { postSetup } from "../modules/post/postSetup.js";

global.postsArray = [
  {},
  { id: 1, title: "amoeba", body: "Geleca de brincar." },
];

describe("postSetup", () => {
  // Verifica se o validate está funcionando.
  test("Should not accept empty post.", () => {
    expect(() => {
      postSetup(0);
    }).toThrow();
  });


});
