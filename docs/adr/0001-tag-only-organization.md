# Tag-only content organization, no folder categories

Quartz's Explorer component and its own demo sites (including the one used as this project's visual reference) are built around nested folder categories (e.g. `computer_sci/llm/agent`), which give the Explorer sidebar a multi-level, drill-down structure. We deliberately chose flat, tag-only organization instead: every Post lives at the top level and is classified purely by Tag, so the Explorer sidebar renders as a flat list rather than a folder tree.

We picked this over folder categories because the author didn't want to commit to a fixed topic taxonomy up front, and tags are cheaper to add, combine, and retag after the fact. The trade-off: the site's Explorer sidebar will look visually different (flatter) from the folder-nested reference screenshot — this is intentional, not an unfinished feature.
