import { getEventPayload, isPushEvent } from "./event";

export const isTag = () => {
  const event = getEventPayload();

  return (
    !isPushEvent(event) && "ref" in event && event.ref.startsWith("refs/tags/")
  );
};
