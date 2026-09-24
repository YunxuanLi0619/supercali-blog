---
title: On building with LLMs
date: 2026-02-11
tags:
  - en
  - llm
  - agent
---

A few months into building agent-shaped things on top of LLMs, the pattern that keeps paying off is small, composable tools plus a tight feedback loop — not a bigger prompt.

The failure mode I see most often isn't the model being "dumb," it's giving it too much ambiguous context and too few ways to check its own work. Narrow the tool surface, make failures loud, and the rest tends to follow.
