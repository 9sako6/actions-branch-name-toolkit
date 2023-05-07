import { getEventPayload } from "./event";

export const isTag = () => {
  const event = getEventPayload();

  return "ref" in event && event.ref.startsWith("refs/tags/");
};
