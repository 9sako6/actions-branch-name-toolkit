import { getCurrentBranch, isTag } from "../../src/index";
import { expect, test, describe } from "vitest";

describe("push", () => {
  test("isTag", () => {
    expect(isTag()).toBe(true);
  });

  test("getCurrentBranch", () => {
    expect(getCurrentBranch()).toEqual("");
  });
});
