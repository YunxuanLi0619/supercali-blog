# Two-tier unpublished content: Draft vs. Private note

The repo (`supercali-blog`) is public, so anything git-committed is visible in its history regardless of whether Quartz renders it. We deliberately kept two separate mechanisms rather than one: `content/*.md` with `draft: true` (via the already-enabled `remove-draft` plugin) for posts that are finished-but-not-yet-live and fine to have in public git history, and the git-ignored `private/` folder for long-lived personal notes that must never reach the public repo at all, not even as an unrendered file.

We rejected using `draft: true` for everything, since that would silently leak the full text of personal notes into a public repo the moment they're written, long before the author intends to publish anything.
