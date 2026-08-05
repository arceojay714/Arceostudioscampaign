# Source index — private club world

Where leads, signals, and newsletters come from. Maintained by the research tasks in
`docs/cowork-playbook.md` §2.

**Status legend:** `verified` = confirmed to exist and reachable as of the date noted ·
`to-verify` = named from research, needs a first-run check for URL, paywall, and cadence.

---

## Tier 1 — National club directories (this is how "every club" becomes tractable)

There are roughly **5,659 private clubs in the US** across golf, country, city, athletic,
yacht and racquet — about **1,602 of them country clubs**. That's the real size of the
universe. Nobody needs to discover them one search at a time; several bodies have already
compiled them.

| Source | What it gives us | Status |
|---|---|---|
| **privateIQ** (privateiq.golf) | Directory of ~2,896 clubs across 1,722 cities in 49 states, typed by club category | verified 2026-08-05 |
| **National Club Association** (nationalclub.org) | Member directory — clubs that pay dues to a national body are clubs that take governance seriously | verified 2026-08-05 |
| **Club Benchmarking** (clubbenchmarking.com/member-list) | Published member list; these clubs measure themselves, so they respond to data-led pitches | verified 2026-08-05 |
| **Platinum Clubs of America** | The top tier by reputation. Small list, high prestige, long sales cycle | verified 2026-08-05 |
| **Distinguished Clubs** (distinguishedclubs.com/official-list) | Annual official list | verified 2026-08-05 |
| **CMAA chapter directories** | ~40 professional chapters, each with a member roster of *named GMs* | verified 2026-08-05 |

### The best one, and it's the least obvious

**Reciprocal club lists.** Private clubs publish PDF one-sheets of every club their members
get reciprocal access to — nationally, sometimes internationally. Confirmed examples:
the St. Louis Club's reciprocal one-sheet and the Washington Athletic Club's national clubs
page. These lists are:

- already curated to city/athletic/social clubs, which is exactly our buyer,
- organized by state,
- published as public PDFs, no scraping ethics problem,
- and implicitly a quality filter, because clubs only grant reciprocity to peers.

Chain them. One club's reciprocal list names forty clubs; each of those publishes its own.
Three hops covers most of the national city-club world. **This is the primary Tier C
discovery method** — start with the WAC list since Seattle is already in our footprint.

## Tier 2 — Management companies (one relationship, many clubs)

The single highest-leverage target class. Instead of selling one club at a time, sell the
operator that runs hundreds.

| Company | Scale | Note |
|---|---|---|
| **Invited** (formerly ClubCorp) | 200+ owned/operated clubs, 400,000+ members | Sold its *third-party management* business to Troon; still owns its own portfolio |
| **Troon** | 579+ managed courses after the Invited deal; 760+ 18-hole equivalents worldwide | Largest golf management company in the world |
| **KemperSports**, **Bobby Jones Links**, **Century Golf**, **Hampton Golf**, **OB Sports**, **Landscapes Management** | Mid-size portfolios | Ranked annually by Golf Inc.'s largest-management-companies feature |

A member-portrait program that works at one Invited club works at all of them. The pitch to
a management company is different from the pitch to a club — it's about a repeatable member
benefit that deploys across a portfolio, with us as the standard vendor. Longer sale, far
bigger prize. Worth a dedicated, patient track separate from the club-by-club engine.

## Tier 3 — Trade press & industry bodies

| Source | Why | Status |
|---|---|---|
| Club + Resort Business | Operations and vendor news | to-verify |
| BoardRoom Magazine | Governance, board-level concerns, GM moves | to-verify |
| Golf Inc. | Management company rankings, ownership changes | verified 2026-08-05 |
| CMAA news room | Industry economic-impact data, useful as proposal evidence | verified 2026-08-05 |
| National Club Association | Policy and industry advocacy | verified 2026-08-05 |

**GM and Membership Director hires are the highest-value trigger in the entire system.**
A new GM is rebuilding their picture of the club, has a mandate to show early wins, and has
no incumbent photographer loyalty. CMAA chapter newsletters and BoardRoom announce these.

## Tier 4 — Club-published newsletters

The richest and least contested source we have. Most private clubs post their member
newsletter or magazine as a **public PDF on their own website**, often without any login.
They contain: directory projects, anniversary planning, new staff, gala dates, board
elections, member profiles, and the name of the person who edits the thing.

Harvested per club by task 2.3. Recorded in `outreach/prospects.csv` as `newsletter_url`
and `newsletter_cadence`.

## Tier 5 — Local press (Tier A markets)

Clubs announce renovations and anniversaries locally long before trade press picks it up.

- **Olympia** — The Olympian, ThurstonTalk, Experience Olympia, Thurston County Chamber
- **Kent / South King** — Kent Reporter, Puget Sound Business Journal, Kent Chamber
- **Cameron Park / El Dorado** — Mountain Democrat, Sacramento Business Journal, El Dorado County Chamber, El Dorado Hills Chamber, Visit El Dorado
- **Piedmont / East Bay** — Piedmont Exedra, Piedmont Post, East Bay Times, Piedmont Chamber

## Adjacent org types

Same directory argument, smaller budgets, much shorter sales cycle, and almost no vendor
competition: Rotary, Elks, Masonic lodges, Junior League chapters, university and alumni
clubs, historical societies, sailing and yacht clubs, bar and medical associations.

---

## Sources consulted to build this file

- [privateIQ — private clubs in the United States](https://www.privateiq.golf/clubs)
- [CMAA — Who We Are](https://www.cmaa.org/about-cmaa/who-we-are/) · [Chapter Directory](https://www.cmaa.org/membership/chapters/chapter-directory/) · [Private Club Industry Economic Impact Report](https://www.cmaa.org/media/01hnzs2i/economic-impact-report_executive-summary.pdf)
- [National Club Association member directory](https://nationalclub.org/)
- [Club Benchmarking member list](https://www.clubbenchmarking.com/member-list)
- [Platinum Clubs of America](https://www.platinumclubsofamerica.com/)
- [Distinguished Clubs official list](https://www.distinguishedclubs.com/official-list/)
- [ClubCorp / Invited](https://en.wikipedia.org/wiki/ClubCorp) · [Troon acquires Invited's third-party management business](https://www.golfdaily.com/troon-acquires-inviteds-third-party-management-business/)
- [Golf Inc. — largest management companies](https://bluetoad.com/publication/?i=795807&article_id=4604329&view=articleBrowser)
- [Washington Athletic Club — national reciprocal clubs](https://www.wac.net/membership/reciprocal-clubs/national-clubs/) · [St. Louis Club reciprocal one-sheet (PDF)](https://www.stlclub.com/files/STL%20Club%20Reciprocal%20Clubs-OneSheet_090925.pdf)
