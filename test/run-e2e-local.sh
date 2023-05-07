#!/bin/sh
set -e

act push --eventpath test/e2e/events/push.json
act push --eventpath test/e2e/events/push-tag.json
act pull_request --eventpath test/e2e/events/pull-request.json
act pull_request_target --eventpath test/e2e/events/pull-request-target.json
act workflow_dispatch --eventpath test/e2e/events/workflow-dispatch.json
