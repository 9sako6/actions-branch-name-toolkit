# actions-branch-toolkit

`actions-branch-toolkit` is a simple npm package that allows you to easily retrieve branch names in your GitHub Actions workflow, regardless of the triggering event.
Enabling users to get the current branch name without dealing with the complexity of different event types.

Inspired by [tj-actions/branch-names](https://github.com/tj-actions/branch-names).

## Features

- Retrieves the current branch name without the `/ref/*` prefix.
- Simplifies the process of getting branch names in GitHub Actions workflows.

# Installation

Install the package using npm:

```bash
npm install actions-branch-toolkit
```

# Usage

Import the package and use the provided function to retrieve the branch name:

```typescript
import { getCurrentBranch } from "actions-branch-toolkit";

const branchName = getCurrentBranch(); // feature/add-new-function
console.log(`Current branch: ${branchName}`);

if (isTag()) {
  console.log("This event is triggered by a tag push.");
} else {
  console.log("This event is not triggered by a tag push.");
}
```

This will output the current branch name, like `feature/add-new-function`, depending on the triggering event in the GitHub Actions workflow.

If the event is triggered by a tag push, the branch name will be empty, and `isTag()` will return true.

# Contributing

Please feel free to open issues or submit pull requests if you have any suggestions, improvements, or bug reports.
