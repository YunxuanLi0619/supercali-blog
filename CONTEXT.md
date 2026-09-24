# Supercalifragilisticexpialidocious' blog

A personal, public tech blog built on Quartz v5 and deployed to GitHub Pages. Organized as a chronological, tagged blog rather than a Quartz-style digital garden.

## Language

**Post**:
A single piece of writing, published with `title`, `date`, and `tags` frontmatter. Discrete and dated, not a living/continuously-revised document.
_Avoid_: Note, page, article, entry — Quartz's own docs call content "notes" (e.g. tag pages are described as "notes with a specific tag"), but this project treats each piece as a dated **post** in the blogging sense, not an evolving wiki note.

**Tag**:
The only content-organization mechanism. Lowercase, hyphenated (`llm`, `agent`, `tool-use`). Every Post carries one or more.
_Avoid_: Category, folder, section — this project deliberately has no folder-based or hierarchical categorization. See [ADR-0001](docs/adr/0001-tag-only-organization.md).

**Language tag** (`zh` / `en`):
A Tag that records which human language a given Post is written in. Posts are unpaired: a Post exists in exactly one language, with no required counterpart in the other and no in-page language switcher.
_Avoid_: Locale, translation — Quartz's own `locale` config is a site-wide setting for UI chrome text (search placeholder, date formatting, etc.), not a per-Post property. Don't conflate the two: the site's UI locale and a given Post's language tag are independent. See [ADR-0002](docs/adr/0002-unpaired-bilingual-posts.md).

**Vault**:
The Obsidian vault used to write and organize Posts — this repository's root directory itself, opened directly in Obsidian. `content/` is the published subset of the Vault; `private/` and `templates/` are Vault-only folders that never reach the built site or the public repo's git history. Folders are fine at the Vault level for the author's own organization, but `content/` itself stays flat per [ADR-0001](docs/adr/0001-tag-only-organization.md) — Vault folders are not a backdoor into folder-based Post categorization.
_Avoid_: Notes folder, workspace

**Draft**:
A Post that lives in `content/` — git-tracked and pushed to the public repo — but is excluded from the built site via `draft: true` frontmatter. Its markdown source is still publicly visible in the repo and its git history; only the rendered page is withheld.
_Avoid_: Private note, unpublished post — see Private note below for the mechanism that actually keeps content out of the public repo.

**Private note**:
A note that never leaves the Vault owner's machine: it lives under `private/`, which is both git-ignored and excluded from the Quartz build, so it never reaches the public repo at all — not even in git history. Used for long-lived personal notes that aren't meant to become a Post, as distinct from a Draft, which is a Post-in-waiting that's already public.
_Avoid_: Draft, hidden note
