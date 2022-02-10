import { validatePost } from "../modules/helpers/validatePost.js";

describe("validatePost", () => {
  test("should not accept null or undefined post", () => {
    expect(() => {
      validatePost();
    }).toThrow();
  });

  test("should not accept empty post", () => {
    expect(() => {
      validatePost({});
    }).toThrow();
  });

  test("should not accept NAN id", () => {
    expect(() => {
      validatePost({ id: "amoeba" });
    }).toThrow();
  });
  
  test("should not accept empty/null id", () => {
    expect(() => {
      validatePost({ id: null});
    }).toThrow();
  });

  test("should not accept empty/null title", () => {
    expect(() => {
      validatePost({ id: 1, title: "" });
    }).toThrow();
  });

  test("should not accept empty/null body", () => {
    expect(() => {
      validatePost({ id: 1, title: "amoeba", body: "" });
    }).toThrow();
  });
});
