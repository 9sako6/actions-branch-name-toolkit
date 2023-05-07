import { beforeEach, expect, test, vi, describe } from "vitest";
import { getEventPayload } from "../../src/event";

describe("getEventPayload", () => {
  const mocks = vi.hoisted(() => {
    return {
      readFileSyncMock: vi.fn(),
    };
  });

  vi.mock("fs", () => {
    return {
      readFileSync: mocks.readFileSyncMock,
    };
  });

  const eventPath = "/tmp/event.json";
  const pushEvent = {
    push: {
      base_ref: null,
      ref: "refs/heads/develop",
    },
  };

  beforeEach(() => {
    mocks.readFileSyncMock.mockReturnValueOnce(JSON.stringify(pushEvent));
  });

  test("getEventPayload should cache the result and call readFileSync only once", () => {
    vi.stubEnv("GITHUB_EVENT_PATH", eventPath);

    const event1 = getEventPayload();
    const event2 = getEventPayload();

    expect(mocks.readFileSyncMock).toHaveBeenCalledTimes(1);
    expect(mocks.readFileSyncMock).toHaveBeenCalledWith(eventPath, "utf8");
    expect(event1).toEqual(pushEvent);
    expect(event2).toEqual(pushEvent);
  });
});
