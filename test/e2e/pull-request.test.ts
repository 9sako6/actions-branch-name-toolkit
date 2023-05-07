import { getCurrentBranch, isTag } from "../../src/index";
import { expect, test, describe } from "vitest";

describe("push", () => {
  test("isTag", () => {
    expect(isTag()).toBe(false);
  });

  test("getCurrentBranch", () => {
    if (process.env.ACT) {
      expect(getCurrentBranch()).toEqual("pr/sample-branch-name");
    } else {
      expect(getCurrentBranch()).toBeTruthy();
    }
  });
});
