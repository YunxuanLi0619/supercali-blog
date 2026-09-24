import test, { describe } from "node:test"
import assert from "node:assert"
import { generateRSSFeed, Options } from "./rss"
import { GlobalConfiguration } from "../../cfg"
import { QuartzPluginData } from "../vfile"
import { FullSlug } from "../../util/path"

const cfg: GlobalConfiguration = {
  pageTitle: "Test Blog",
  baseUrl: "example.com",
} as GlobalConfiguration

const options: Options = {
  rssSlug: "index",
  rssLimit: 10,
  rssRecentPostsText: "Recent posts",
  rssLastFewPostsText: (count) => `Last ${count} posts`,
}

function makeEntry(
  slug: string,
  overrides: Partial<QuartzPluginData> = {},
): [unknown, { data: QuartzPluginData }] {
  const data: QuartzPluginData = {
    slug: slug as FullSlug,
    frontmatter: { title: slug },
    ...overrides,
  } as QuartzPluginData
  return [null, { data }]
}

function datedEntry(slug: string, date: string): [unknown, { data: QuartzPluginData }] {
  return makeEntry(slug, {
    defaultDateType: "published",
    dates: { published: new Date(date), created: new Date(date), modified: new Date(date) },
  })
}

describe("generateRSSFeed", () => {
  test("excludes virtual pages even though they'd otherwise sort first (no date -> would-be 'now')", () => {
    const content = [datedEntry("posts/old", "2020-01-01"), makeEntry("tags/llm")]
    const feed = generateRSSFeed(cfg, content, new Set(["tags/llm" as FullSlug]), options)

    assert.ok(feed.includes("posts/old"))
    assert.ok(!feed.includes("tags/llm"))
  })

  test("real Posts are ordered by their own date, newest first", () => {
    const content = [
      datedEntry("posts/older", "2020-01-01"),
      datedEntry("posts/newer", "2023-06-01"),
    ]
    const feed = generateRSSFeed(cfg, content, new Set(), options)

    assert.ok(feed.indexOf("posts/newer") < feed.indexOf("posts/older"))
  })

  test("excludes unlisted entries", () => {
    const content = [
      datedEntry("posts/visible", "2020-01-01"),
      makeEntry("posts/hidden", { unlisted: true } as Partial<QuartzPluginData>),
    ]
    const feed = generateRSSFeed(cfg, content, new Set(), options)

    assert.ok(feed.includes("posts/visible"))
    assert.ok(!feed.includes("posts/hidden"))
  })

  test("respects rssLimit after filtering out virtual pages", () => {
    const content = [
      datedEntry("posts/a", "2023-01-01"),
      datedEntry("posts/b", "2022-01-01"),
      makeEntry("tags/index"),
    ]
    const feed = generateRSSFeed(cfg, content, new Set(["tags/index" as FullSlug]), {
      ...options,
      rssLimit: 1,
    })

    assert.ok(feed.includes("posts/a"))
    assert.ok(!feed.includes("posts/b"))
  })
})
