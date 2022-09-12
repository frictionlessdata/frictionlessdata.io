---
title: Orchestrate Data Platform
tagline: Scheduling, deployment and monitoring of the other steps.
description: Once the pipeline starts to grow, you need ways to manage all the tasks and to ensure everything remains running as expected.
pain: Initially, you may do this in a single machine, scheduling tasks using cron. Over time, you will want to have one place to monitor what's currently running and logs of old processes.
context: You usually add orchestration when it's proven that the project will continue to scale over time.
hexagon: orchestrate data platform
layout: job
---

## Examples

```
python my-pipeline-as-script.py
 
cron *   *   *  * my-pipeline-as-script.py
```
