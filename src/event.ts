import { readFileSync } from "fs";

// Webhook events and payloads
// https://docs.github.com/en/webhooks-and-events/webhooks/webhook-events-and-payloads

type PushEvent = {
  push: {
    base_ref: string | null;
    ref: string;
  };
};

type PullRequestEvent = {
  pull_request: {
    head: {
      ref: string;
    };
    base: {
      ref: string;
    };
  };
};

type WorkflowDispatchEvent = {
  ref: string;
};

type Event = PushEvent | PullRequestEvent | WorkflowDispatchEvent;

let cache: Event | null = null;

export const getEventPayload = () => {
  if (cache) return cache;

  const eventPath = process.env.GITHUB_EVENT_PATH;
  if (!eventPath) {
    throw new Error("GITHUB_EVENT_PATH is not defined");
  }

  const event = JSON.parse(readFileSync(eventPath, "utf8")) as Event;
  return (cache = event);
};

export function isPushEvent(event: Event): event is PushEvent {
  return "push" in event;
}

export function isPullRequestEvent(event: Event): event is PullRequestEvent {
  return "pull_request" in event;
}
