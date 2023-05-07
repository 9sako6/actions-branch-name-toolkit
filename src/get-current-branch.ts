import { getEventPayload, isPullRequestEvent, isPushEvent } from "./event";

export const getCurrentBranch = () => {
  const event = getEventPayload();

  if (isPushEvent(event) && event.push.ref.startsWith("refs/tags/")) {
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
