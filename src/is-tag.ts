import { getEventPayload, isPushEvent } from "./event";

export const isTag = () => {
  const event = getEventPayload();

  return isPushEvent(event) && event.push.ref.startsWith("refs/tags/");
};
