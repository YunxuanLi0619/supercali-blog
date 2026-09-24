# Unpaired bilingual posts, no language switcher

The blog is written in both Chinese and English, but we chose not to require a paired Chinese+English version of every Post with a language switcher between them. Instead each Post is written once, in whichever language the author chooses at the time, and tagged `zh` or `en` accordingly.

We considered always publishing matched pairs (higher translation workload, guarantees parity) and driving the choice through Quartz's `locale` config (which only controls site-wide UI chrome text, not per-page content language, so it couldn't actually solve this). Unpaired posts were picked because they match how the author actually writes — one language at a time, as ideas come — without the drag of maintaining translation parity across the whole archive. The trade-off: a reader who prefers one language may not find every topic covered in it, and there's no automatic switcher UI a future contributor might otherwise expect on a "bilingual" site.
