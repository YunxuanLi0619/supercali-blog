---
title: Notes on agent tool-use
date: 2026-03-22
tags:
  - en
  - llm
  - tool-use
---

Tool-use is where most of the reliability work in agent systems actually lives. A few things that have held up across projects:

- **Fewer, sharper tools beat many overlapping ones.** If two tools could plausibly handle the same request, the model will occasionally pick the wrong one.
- **Errors should read like documentation.** A tool that fails with a vague message teaches the model nothing; a tool that fails with "missing required field `date`" gets self-corrected on the next turn.
- **Idempotency matters more than it seems.** Agents retry. Tools that aren't safe to call twice cause the strangest bugs.

None of this is specific to any one framework — it's just what falls out of watching enough transcripts.
