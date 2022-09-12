---
title: Frictionless Process
---

# Frictionless Process

This document proposes a process to work on the technical side of the Frictionless Data project. The goal - have things manageable for a minimal price.

## Project

The specific of the project is a huge amount of components and actors (repositories, issues, contributors etc). The process should be effective in handling this specific.

## Process

The main idea to focus on getting things done and reduce the price of maintaining the process instead of trying to fully mimic some popular methodologies. We use different ideas from different methodologies.

## Roles

- Product Owner (PO)
- Product Manager (PM)
- Developer Advocate (DA)
- Technical Lead (TL)
- Senior Developer (SD)
- Junior Developer (JD)

## Board

We use a kanban board located at https://github.com/orgs/frictionlessdata/projects/2?fullscreen=true to work on the project. The board has following columns (ordered by issue stage):
- Backlog - unprocessed issues without labels and processed issues with labels
- Priority - prioritized issues planned for the next iterations (estimated and assigned)
- Current - current iteration issues promoted on iteration planning (estimated and assigned)
- Review - issues under review process
- Done - completed issues

## Workflow

The work on the project is a live process splitted into 2 weeks iterations between iteration plannings (including retrospection):
- Inside an iteration assigned persons work on their current issues and subset of roles do issues processing and prioritizing
- During the iteration planning the team moves issues from the Priority column to the Current column and assign persons. Instead of issue estimations assigned person approves amount of work for the current iteration as a high-level estimation.

## Milestones

As milestones we use concrete achievements e.g. from our roadmap. It could be tools or spec versions like “spec-v1”. We don’t use the workflow related milestones like “current” of “backlog” managing it via the board labeling system.

## Labels

Aside internal waffle labels and helpers labels like “question” etc we use core color-coded labels based on SemVer. The main point of processing issues from Inbox to Backlog is to add one of this labels because we need to plan releases, breaking announces etc:

![labels](https://cloud.githubusercontent.com/assets/557395/17673693/f6391676-632a-11e6-9971-945623b68e16.png)

## Assignments

Every issue in the Current column should be assigned to some person with meaning “this person should do some work on this issue to unblock it”. Assigned person should re-assign an issue for a current blocker. It provides a good real-time overview of the project.

## Analysis

After planning it’s highly recommended for an assigned person to write a short plan of how to solve the issue (could be a list of steps) and ask someone to check. This work could be done on some previous stages by subset of roles.

## Branching

We use Git Flow with some simplifications (see OKI coding standards). Master branch should always be “green” on tests and new features/fixes should go from pull requests. Direct committing to master could be allowed by subset of roles in some cases.

## Pull Requests

A pull request should be visually merged on the board to the corresponding issue using “It fixes #issue-number” sentence in the pull request description (initial comment). If there is no corresponding issue for the pull request it should be handled as an issue with labeling etc.

## Reviews

After sending a pull request the author should assign the pull request to another person “asking” for a code review. After the review code should be merged to the codebase by the pull request author (or person having enough rights).

## Documentation

By default documentation for a tool should be written in README.md not using additional files and folders. It should be clean and well-structured. API should be documented in the code as docstrings. We compile project level docs automatically.

## Testings

Tests should be written using OKI coding standards. Start write tests from top (match high-level requirements) to bottom (if needed). The most high-level tests are implemented as testsuites on project level (integration tests between different tools).

## Releasing

We use SemVer for versioning and Github Actions for testing and releasing/deployments. We prefer short release cycle (features and fixes could be released immediately). Releases should be configured using tags based on package examples workflow provided by OKI.

The release process:
- merge changes to the main branch on GitHub
  - use "Squash and Merge"
  - use clean commit message
- pull the changes locally
- update the software version according to SemVer rules
  - in Python projets we use `<name>/assets/VERSION`
  - in JavaScript projects we use standard `package.json`
- update a CHANGELOG file adding info about new feature or important changes
- run `main release` (it will release automatically)

## References

- [Open Knowledge International Coding Standards](https://github.com/okfn/coding-standards)
- [MUI Versioning Strategy](https://mui.com/versions/#versioning-strategy)
