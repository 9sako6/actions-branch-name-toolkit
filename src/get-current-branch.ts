import { getEventPayload, isPullRequestEvent, isPushEvent } from "./event";
import { isTag } from "./is-tag";

export const getCurrentBranch = () => {
  const event = getEventPayload();

  if (isTag()) {
    return "";
  }

  if (isPushEvent(event)) {
    return event.push.ref.replace(/^refs\/heads\//, "");
  } else if (isPullRequestEvent(event)) {
    return event.pull_request.head.ref;
  } else {
    return event.ref.replace(/^refs\/heads\//, "");
  }
};
