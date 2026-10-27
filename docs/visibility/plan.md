# Search and AI visibility plan: Julian Arceo and Arceo Studio Collective

Started **27 October 2026**. The goal is to get Julian and the studio recognized by Google
(a knowledge panel for each) and recommended by AI tools when people at private clubs ask
about member recognition and community.

## Where we're starting

On 27 October 2026, web searches for **"Arceo Studio Collective"** and **"Julian Arceo"
photographer** returned nothing about either one. The results were all about other people
named Arceo, such as a Chicago printmaker. Google has nothing to build a panel from, and AI
tools have nothing to recommend. Every step below is meant to fix that.

`arceostudiocollective.com` is blocked from inside Claude Code sessions (see
`campaign-state.md`), so the live site hasn't been audited. Run the Phase 1 checks by hand.

## What a "Lindy Panel" actually is

"Lindy Panel" is Lindy Panels' brand name for a **Google knowledge panel**, the box Google
shows beside the results when it's confident a name refers to one specific person or
company. Nobody can create one directly, Lindy Panels included. Google builds a panel when
enough sources it trusts agree on the same facts. What we control is getting those facts,
consistently, into places Google trusts. Once a panel appears, you claim it.

There are two panels, and they come from two different places:

| | Business panel (Arceo Studio Collective) | Personal panel (Julian Arceo) |
|---|---|---|
| Where it comes from | Google Business Profile | Google's Knowledge Graph |
| Who controls it | You, once the profile is verified | Google |
| Rough timing (an estimate, not a promise) | Days to weeks after verification | Usually months, and not guaranteed |
| Main lever | Verifying the Business Profile | An entity home page, matching profiles, and independent coverage |

## How AI tools decide whom to recommend

1. **They search live.** ChatGPT, Perplexity, Google's AI Mode, Gemini, Copilot, and Claude
   can all search the web before answering. You need pages indexed in both Google and Bing,
   AI crawlers allowed on the site, and text that answers the question in the words a club
   manager would type.
2. **They cross-check.** A vendor named by a trade magazine, an association, a client club,
   and LinkedIn looks real. A vendor that only describes itself looks unverified. That's
   Phase 2.
3. **They quote plain sentences.** "Members pay no sitting fee" is easy to lift into an
   answer. Brand language like "timeless legacy imagery" isn't. The page copy is written
   answer-first for that reason.
4. **They match the asker's words.** Club managers ask about *member recognition*, *staff
   learning member names*, *member photos for the POS*, and *directory photos*. They rarely
   ask about "portraiture", so the pages use their phrases.

## The one rule

**Use the same facts everywhere.** One name, one title, one description, and one website.
They all live in `entity-facts.md`. Copy every profile and bio from that file rather than
retyping it.

## The files and where they go

| File | Where it goes |
|---|---|
| `docs/visibility/entity-facts.md` | Fill this first. Everything else copies from it. |
| `site/schema/sitewide.html` | Squarespace Code Injection, **Header** (every page) |
| `site/pages/private-clubs.md` | New page at `/private-clubs`, the main page for AI search |
| `site/schema/private-clubs.html` | Header code injection on that page |
| `site/pages/julian-arceo.md` | New page at `/julian-arceo`, the person's entity home |
| `site/schema/julian-arceo.html` | Header code injection on that page |
| `site/pages/about.md` | Rewrite of `/about`, the business's entity home |
| `site/pages/guide-member-recognition.md` | New page at `/guides/member-recognition`, the page most likely to be cited |
| `site/llms.txt` | Squarespace's llms.txt setting, if your plan has one (see step 9) |

This plan assumes the site runs on Squarespace (the Acuity booking points that way). If it
doesn't, every step has an equivalent on other platforms, and the files work on any of them.

---

## Phase 1: Foundation (weeks 1–2). These steps need your logins.

- [ ] **1. Fill `entity-facts.md`.** Choose the name first. Or send the answers in chat and
      Claude will fill every file at once.
- [ ] **2. Unblock AI crawlers.** In Squarespace, search the admin for **Crawlers**. Make sure
      **Block known artificial intelligence crawlers** is **unchecked**, and that search
      engines aren't blocked either. Plenty of photographers turned this on after it launched
      in 2023. While it's on, ChatGPT, Claude, and Perplexity can't read the site at all. The trade-off is that
      the setting is all-or-nothing, so allowing AI search also allows AI training crawlers
      to read the site's images.
- [ ] **3. Google Search Console.** Verify `arceostudiocollective.com` and submit
      `https://arceostudiocollective.com/sitemap.xml`. Search Console is also one of the
      accounts Google accepts when you claim a knowledge panel later.
- [ ] **4. Bing Webmaster Tools.** Sign in and use **Import from Google Search Console**.
      Copilot and other AI search tools draw on Bing's index.
- [ ] **5. Google Business Profile.** Create or claim **Arceo Studio Collective** as a
      **service-area business** with the address hidden, using the categories and
      description in `entity-facts.md`. Verify it, which is often by video now. This is the
      fastest route to a business panel.
- [ ] **6. Publish the four pages** in `site/pages/`, after replacing every FILL.
- [ ] **7. Paste the schema** (`site/schema/`), then run each live page through
      [validator.schema.org](https://validator.schema.org) and Google's
      [Rich Results Test](https://search.google.com/test/rich-results).
- [ ] **8. Link the new pages.** Add `/private-clubs` to the main navigation, and add
      `/julian-arceo` and `/about` to the footer. A page nothing links to is hard to find.
- [ ] **9. llms.txt.** Search the Squarespace admin for **llms**. If a setting exists,
      paste `site/llms.txt`. If not, skip it. It's a proposed standard, and the evidence
      that AI tools use it is thin, so give it ten minutes at most.
- [ ] **10. LinkedIn.** Update the personal profile (headline, About, experience) and create
      the company page, both from `entity-facts.md`. Club GMs and membership directors are
      there, and LinkedIn profiles and posts show up in the Google and Bing results that AI
      search tools draw on.
- [ ] **11. Instagram and Facebook.** Set the Name field, bio, and link on `@thearceostudio`.
      Connect it to the business portfolio, which also fixes the identity problem in the
      Meta ads. Update the Facebook Page intro and website.
- [ ] **12. YouTube.** Create the channel and post one 2–3 minute video: *How a member
      portrait program works at a private club*. Show the setup, a directed sitting (with
      permission), and the review. YouTube videos appear in Google results and AI Overviews,
      and the channel is one of the accounts Google accepts when you claim a panel.
- [ ] **13. Request indexing.** In Search Console, use URL Inspection → Request indexing for
      each new page.

## Phase 2: Get named by the club world (months 1–3)

This is the phase that gets you **recommended**, as opposed to merely findable. AI tools
recommend vendors that independent sources in the industry mention.

- [ ] **Ask client clubs for a public mention.** A line in a club's public news page or
      newsletter, with a link, saying "Member portraits by Arceo Studio Collective". A
      mention on a client club's own site counts for a lot because it's independent. Only
      with the club's OK.
- [ ] **Ask each client GM for a Google review and a LinkedIn recommendation.** Reviews
      that mention "member directory" or "staff learning names" add relevance. Don't offer
      anything in exchange, since Google's policy forbids incentives.
- [ ] **One case study, written with a client club.** Cover the problem, how the program ran,
      and what changed, using real numbers the club will stand behind. It becomes a page on
      the site, a pitch to the trade press, and a talk.
- [ ] **Pitch one bylined article** to a trade publication (targets below). A byline gives
      Julian an author bio on an independent site, which is a direct input to a person
      panel.
- [ ] **Join the CMAA chapter in each region where you work.** Many chapters take vendor or
      associate members (check each one). That means a listing on the chapter site, and a
      room full of GMs at each meeting. Ask about an education slot.
- [ ] **Post on LinkedIn twice a week** about member recognition: a staff-training tip, a
      before-and-after of a roster (with permission), a short clip from YouTube. Keep the
      phrases consistent.
- [ ] **Create a Crunchbase profile** (free) for the studio and for Julian, from
      `entity-facts.md`.

## Phase 3: The Knowledge Graph (month 3 onward)

- [ ] **Create the Wikidata items** for the studio and Julian once at least two independent
      sources exist. The fields are in `entity-facts.md`. Doing it earlier gets them deleted.
- [ ] **Check for a panel every month.** Search `Julian Arceo` and `Arceo Studio Collective`
      in a private window, signed out.
- [ ] **Claim the panel when it appears.** Click **Claim this knowledge panel** at the bottom
      of the panel, then sign in with one of the accounts Google lists, such as Search
      Console or YouTube ([Google's instructions](https://support.google.com/knowledgepanel/answer/7534902)).
      Once verified, you can suggest edits to the panel. The business panel is managed
      through the Business Profile instead.
- [ ] **Wikipedia: not now.** An article needs substantial independent coverage first.
      Writing one about yourself, or paying someone to, breaks Wikipedia's rules, and such
      articles get deleted. Revisit only if real press coverage piles up.

## Don't

- Don't add keywords to the Business Profile name, such as "Arceo Studio Collective –
  Country Club Photographer". Google can suspend the profile for it.
- Don't buy reviews or offer anything for them.
- Don't name a club as a client without its written OK. PDC is still a proposal.
- Don't publish numbers you can't back up. This repo's rule for ad copy applies to every
  page and profile too.
- Don't create Wikidata items before independent sources exist.
- Don't spread different bios across platforms. Copy them from `entity-facts.md`.

---

## Measuring it: the AI prompt tracker

Run these prompts once a month in **ChatGPT, Claude, Perplexity, Gemini, Google AI Mode, and
Copilot**. Use a fresh chat each time, signed out where possible. For each prompt, record
whether Arceo Studio Collective is **mentioned** (M), whether the facts are **accurate** (A),
and whether it's **linked** (L).

**Questions a club manager would ask:**

1. How can our country club help staff learn members' names?
2. What's the best way to get photos of all our members for the club directory?
3. Who photographs members for private club directories?
4. How do private clubs improve member recognition?
5. How can a private club build a stronger sense of community among members?
6. How do we get member photos into our club's POS system?
7. Ideas for a member portrait day at our club
8. How do we make new members feel known at a private club?
9. Member recognition training for country club staff
10. Best photographer for a country club member directory in FILL (one prompt per region you
    work in)

**Brand checks:**

11. Who is Julian Arceo?
12. What is Arceo Studio Collective?
13. Is Arceo Studio Collective legitimate?

| Month | ChatGPT | Claude | Perplexity | Gemini | AI Mode | Copilot | Notes |
|---|---|---|---|---|---|---|---|
| Nov 2026 (baseline) | | | | | | | Record a score for each prompt, e.g. `3: M A L` |
| Dec 2026 | | | | | | | |
| Jan 2027 | | | | | | | |

**Other signals:**

- **Search Console → Performance:** impressions for "Julian Arceo", "Arceo Studio
  Collective", and member-directory queries.
- **Site analytics → referrers:** visits from `chatgpt.com`, `perplexity.ai`, `claude.ai`,
  `gemini.google.com`, and `copilot.microsoft.com`. These show AI tools sending people to
  you.

Rough timing, as estimates rather than promises. Search-based AI answers (Perplexity,
ChatGPT search, AI Mode) can start citing a new page within weeks of it being indexed.
What a model knows without searching changes only when it's retrained, which can take many
months. A personal knowledge panel depends on how fast Phase 2 coverage builds.

---

## Outreach targets

| Target | What it is | The ask |
|---|---|---|
| **CMAA** (Club Management Association of America), [cmaa.org](https://www.cmaa.org) | The club managers' association. Its *Club Management* magazine says it reaches about 7,750 decision makers at more than 3,000 private clubs (2024 media planner). | A bylined article in *Club Management*. Membership in the regional chapters. |
| **CMAA World Conference & Club Business Expo**, 7–11 February 2027, Chicago | CMAA's centennial conference | Go and meet GMs, or exhibit at the Business Expo. Exhibitor listings are indexed pages that name you. |
| **BoardRoom magazine** | Official publication of the Association of Private Club Directors, read by club boards, owners, and GMs. Runs the Excellence in Achievement awards and the Distinguished Club designation. | A case study with a client club. The club could also enter its member-recognition work in BoardRoom's awards, crediting the program. |
| **Club + Resort Business**, [clubandresortbusiness.com](https://clubandresortbusiness.com) | A trade publication for private club and resort leaders, covering management, membership, and F&B | A contributed how-to article, adapted from the member-recognition guide |
| **National Club Association** | The private clubs' trade association | Check for vendor or partner programs |
| **Club-industry news sites** such as First Call Golf's Industry News | They publish club-industry press releases | A release when a club launches its program, with the club's OK |
| **Each client club** | Its public news page, newsletter, and social accounts | A credited mention with a link (Phase 2) |

**Pitch angle:** *"Every name is on file. Most faces aren't."* A club's roster holds every
member's name, but often not a current face, and recognition at the door suffers for it. The
article teaches the four steps from the guide and uses one client club as the example. It's
useful to readers who never hire you, and that's why an editor will run it.

**Pitch email draft** (to a magazine editor):

> Subject: Article idea: how club staff learn every member's name
>
> Hi FILL,
>
> I run member portrait programs for private clubs, and I'd like to pitch a practical piece on a problem every club manager knows: getting new staff to greet members by name. A club has every member's name on file, but often not a current face, so recognition depends on who has worked there longest.
>
> I'd like to write a practical piece for *FILL publication* covering four steps any club can take: putting a current photo in the systems staff use, building names into onboarding and pre-shift briefings, introducing members to each other, and keeping it current. FILL: one line about the client club example, if they've agreed.
>
> It would be about FILL words, and it isn't a sales piece. Happy to adjust to your guidelines.
>
> Julian Arceo
> Owner and Head Photographer, Arceo Studio Collective
> julian@arceostudiocollective.com · FILL phone
