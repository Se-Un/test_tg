## Stack

- [TS](https://www.typescriptlang.org/)
- [Next](https://nextjs.org/) ([App router](https://nextjs.org/docs/app))
- SCSS
- Eslint + GIT hooks

## Project workflow

1. Decompose tasks into subtasks
2. Task distribution
3. We discuss, ask questions, keep each other informed about problems and successes
4. When the task is ready:
   1. Pull changes from the main branch to your task branch
   2. Do a local merge
   3. Check functionality
   4. Create a PR (pull request), this PR should not have conflicts with the working branch
   5. According to PR template describe the content of the task at PR test part
   6. To check PR, we attach 1-2 participants to conduct a code review, without their approval we do not merge this PR (except for emergency cases, which are discussed separately in the chat)
   7. After approval, merge the feature branch into the working one (develop), select **Squash and merge**
   8. Delete the feature branch

**All correspondence in the repository, names of commits, PR, etc. conducted in English.**

## Project structure

### GIT:

- The **main** branch - for sending code to product
- The **develop** branch is a working branch, from which we create branches to perform our tasks
- Feature branches are called like **747-feat/task-name**
- Other branches in the same style - **748-fix/issue-name** (doc, refactor etc.)
- PR name - **747-feat Task name** e.g. **747-feat Header button colors**
  **Where number e.g. 747 or 748 is the same as task number at Leantime.**

Commit names - follow [commit convention](https://www.conventionalcommits.org/en/v1.0.0/) (Russian transation of this [convention](https://gist.github.com/Voloshin-Sergei/ffbec67c6d9fcb32b0df014ababba0e9)), e.g. `747-feat: add submit button` or `748-fix: some error`

p.s. We try to stick to this style. The main point is to have meaningful names.

### Structure: follow[./STYLEGUIDE.md]
