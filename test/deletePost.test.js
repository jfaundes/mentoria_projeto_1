import { deletePost } from "../events/deletePost.js";

// mockando fetch
global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => {
      Promise.resolve({ id: 100 });
    },
  });
});

global.postsArray = [{ id: 1 }, { id: 2 }];

describe("deletePost", () => {
  test("should work", () => {
    deletePost({ id: 1 });
  });
});
