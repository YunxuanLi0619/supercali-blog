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
