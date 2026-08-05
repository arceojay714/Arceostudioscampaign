# Club outreach pipeline

How we go from "there are private clubs near us" to "a named person at that club is
reading a proposal written for them." Referenced by `cowork-playbook.md` §1.

**Scope: every private club in the country.** Roughly 5,659 of them, about 1,602 country
clubs, plus city, athletic, yacht and racquet clubs. The list is national. What's *not*
national is how we work it — that's what the tier system below is for.

## The shape of it

```
discover → enrich → wait for a signal → write to the signal → send → follow up 3x → dormant
```

The step people skip is **wait for a signal**. A proposal that arrives the month a club is
rebuilding its member directory reads as helpful. The identical proposal sent in a random
week reads as spam. Same document, completely different outcome — the timing is the pitch.

Our Meta creative already argues this exact thing to members (`name-in-it`,
`still-missing`, `everything-on-file`). The club-side pitch is the same argument aimed one
level up: *your directory is incomplete, and completing it is a member benefit you can
offer at no cost to the club.*

## The three tiers

A national list and a one-photographer studio are only compatible if the list is tiered.
Discovery is national; effort is not.

### Tier A — in-person reachable

**Anything drivable from a metro where a photographer lives.** See
`network/photographers.csv`. This definition replaces the original "drivable from Jay's
four markets," and the change promotes a large amount of the country in one move:

| Metro | Photographer(s) |
|---|---|
| Olympia / Kent, WA | Julian |
| Cameron Park / Piedmont, CA | Julian |
| Sacramento, CA | Valerie Mahood |
| Orange County, CA | Isaac Medina, Elysha Holborow, Marion, Kole Page |
| Greater LA / San Fernando Valley | Jacob Medina |
| Atlanta, GA | David Wagner |
| Nashville, TN | Richard Yoon |
| Raleigh–Durham, NC | Lamont Johnson |
| Connecticut | Christian Romero |

Clubs in all nine are now Tier A, not Tier B or C. Only the 22 WA/CA clubs are seeded so
far — the discovery task needs to run against the other metros.

Tier A clubs get the **free management shoot** (block `03-free-management-shoot`) —
the GM, department heads, and board officers photographed at the club, free, no obligation.
Delivered by the local photographer, which is only credible once that photographer has
cleared the standards in `docs/photographer-network.md`. A free management shoot is a
demonstration of quality; sending an unreviewed photographer to one inverts its purpose.

That offer is the single strongest thing in this entire pipeline, and it's the reason the
local clubs are priority rather than merely convenient. It converts the decision from
"should we hire a photographer for our members" into "should we accept something free,"
which is a decision a GM can make alone, in a minute, without a board. It also puts Julian
in the building, makes the decision-makers the subjects, and produces a local reference
list from nothing.

Work Tier A hard, in person, first. Everything else is downstream of having three clubs
that will vouch for us.

### Tier B — travel-viable clusters

Metros far enough to need a trip, close enough to justify one. A Tier B club is not worked
individually — it's worked as part of a cluster. **The rule: no trip until three clubs in
one metro are warm, or one has committed.** A single club is never worth a flight; three
clubs and a management-team shoot each is a week that pays for itself.

Tier B is where Tier C leads go when enough of them cluster geographically. That promotion
is the whole point of maintaining a national list.

### Tier C — the national long tail

Everything else. Mail and email only, signal-driven, low volume, patient. Tier C is not a
sales pipeline — it is a **signal net**. Its job is to notice when a club anywhere in the
country announces a directory rebuild, a centennial, or a new GM, and to put that club on
the map. Most Tier C clubs are never contacted at all. The ones that are, are contacted
because something happened at that specific club.

Tier C converts three ways: a club replies and becomes a standalone job worth traveling
for; enough clubs in one metro warm up and the cluster promotes to Tier B; or the list
teaches us which signals actually predict interest, which makes Tier A better.

### The fourth track — management companies

Separate from the tiers and worth its own patience. **Invited** owns 200+ clubs with
400,000+ members. **Troon** manages 579+ courses after acquiring Invited's third-party
management business. A member-portrait program that works at one club in a portfolio works
at all of them.

This is a different sale — a repeatable member benefit deployed across a portfolio, with us
as the standard vendor — and a much longer one. It is also the only path where the ceiling
isn't set by how many days Julian can drive. Don't let it crowd out Tier A, and don't drop
it either. See `research/sources.md` §Tier 2.

## Volume, honestly

A national list is not a mailing list. Ten well-researched contacts a month beats four
hundred generic ones, and it's the only version that doesn't torch the domain's sending
reputation or the studio's name in a club world where GMs sit on each other's boards and
publish each other's reciprocal lists.

The list being national changes *discovery* volume, not *contact* volume. Contact volume is
capped by one photographer's ability to actually deliver, and overselling capacity is worse
than underselling it.

**The contact channel is mail, then a call, then email** — not email first. Clubs hide
staff contacts deliberately, so hunting for a GM's address is wasted effort. See
`docs/contact-sequence.md`, which supersedes the email-first assumptions below. Because
every email in that sequence is solicited, the deliverability ceiling is much softer than
the original guardrails assumed; the real ceiling is how many calls get made and how many
free shoots can actually be delivered.

Practical guardrails:

- **Letters are limited by hand, not by policy.** Print, sign, stamp. A wet signature
  outperforms, and the effort is a useful governor — you will not mail more than you can
  follow up by phone.
- **Two call attempts per letter**, then dormant for six months. The call ceiling is the
  real constraint on this pipeline: a letter with no follow-up call is wasted postage.
- **Three touches maximum** across all channels before dormant.
- **Never guess an email or a website.** Blank is correct. For clubs, blank is expected.
- **Any commercial email still carries a real postal address and a working opt-out**, per
  CAN-SPAM — including solicited ones. Routine hygiene, not a constraint on volume.

## Prospect record schema

`outreach/prospects.csv`:

| field | notes |
|---|---|
| `club_slug` | stable id, e.g. `olympia-country-golf` |
| `club_name` | full legal/display name |
| `club_type` | country · golf · yacht · athletic · city · tennis · social · lodge · other |
| `tier` | A (drivable) · B (travel cluster) · C (national long tail) |
| `market` | olympia · kent · cameron-park · piedmont for Tier A; metro name for B and C |
| `city`, `state` | |
| `drive_minutes` | from the nearest market anchor |
| `member_count_est` | and where the estimate came from |
| `founded_year` | drives the anniversary trigger |
| `website` | |
| `newsletter_url` | public member newsletter/magazine if one exists |
| `newsletter_cadence` | monthly · quarterly · none-found |
| `gm_name`, `membership_director`, `comms_contact` | named humans where findable. **Not required to contact** — the letter goes to "General Manager" by title without one. |
| `phone` | main club number. Required — this is what the call step runs on. |
| `email`, `email_source` | output of the call, not an input to the letter |
| `email_status` | **`unknown` is the expected default** · `given` (handed over on a call) · `found` (genuinely published) |
| `mailing_address` | **the one field that must be right** |
| `contact_status` | new · enriched · signal-waiting · contacted · replied · won · dormant |
| `last_touch_date`, `touch_count` | |
| `signal_notes` | link to the entry in `signals.md` |
| `owner_notes` | anything Jay knows that research can't find |

`outreach/log.csv` records each touch separately: `club_slug`, `date`, `channel`,
`touch_number`, `what_was_sent`, `call_outcome`, `gatekeeper_name`, `best_time_to_call`,
`response`, `next_action_date`. Keeping touches out of the prospect row is what makes the
follow-up task reliable — and `gatekeeper_name` plus `best_time_to_call` are what make a
second call land when the first one didn't.

The community segment uses a separate file with a different schema —
`outreach/community-prospects.csv`, documented in `docs/community-segment.md`. Those
organizations publish their contacts, so that list is enriched at discovery time and skips
the letter step entirely.

## Sources

**The full source index lives in `research/sources.md`** — national directories, management
companies, trade press, club newsletters, and local press, each marked `verified` or
`to-verify`. Don't duplicate it here; it's maintained by the research tasks.

Two things from it are worth repeating because they change how discovery works at national
scale:

**Reciprocal club lists are the best discovery method we have.** Clubs publish public PDF
one-sheets of every club their members get reciprocal access to, organized by state. Those
lists are pre-filtered to exactly our buyer, and each club named on one publishes its own.
Chain them three hops and you've covered most of the national city-club world without a
single guess. Start from the Washington Athletic Club's list, since Seattle is already in
our footprint.

**A new GM or Membership Director is the highest-value trigger in the system.** They're
rebuilding their picture of the club, they need an early win, and they have no incumbent
photographer loyalty. CMAA chapter newsletters and BoardRoom announce these moves. A club
that just hired a GM jumps the queue regardless of tier.

## Proposal structure

One page. If it's two pages a GM forwards it to nobody.

Assembled from `outreach/blocks/` — see that directory's README for which block to use
when. The opening paragraph is always written fresh; if the letter could be sent to any
club, it isn't ready.

1. **The signal, first sentence.** "I saw the club is rebuilding the member directory for
   the centennial." If there's no signal worth naming, the proposal isn't ready to send.
2. **The gap, one sentence.** Names in the directory, no faces beside them.
   (`01-directory-argument`)
3. **What it costs the club.** Nothing. Members sit free, complimentary 5x7, club provides
   a room and a newsletter mention. That structure is what gets a yes without a board vote.
   (`02-costs-the-club-nothing`)
4. **Tier A only: the free management shoot.** (`03-free-management-shoot`) In a Tier A
   letter this *replaces* the proof paragraph, because it is better than proof — it's an
   offer to demonstrate rather than a claim to be believed. Lead the ask with it.
5. **Tier B/C: proof.** One line naming clubs served, or if that list is thin, one line
   about Julian directing people who believe they photograph badly — which every board
   member privately is.
6. **One ask.** (`08-the-ask`) Never a menu of options.
7. **Signature block** with postal address and opt-out if it's email.

Voice: plain, unhurried, no exclamation marks, no "excited to," no em dashes. Same
register as the ad copy — the confidence in that deck comes from short declaratives, not
enthusiasm.

Worked example: `outreach/proposals/olympia-country-golf.md`.

## Mail, specifically

For `email_status = needs_mail` clubs, the task produces a print-ready PDF letter plus an
address block. Two viable paths from there:

- **Manual** — print, sign, stamp. Under ten a week this is genuinely fine, and a wet
  signature outperforms.
- **Print-and-mail API** (Lob, PostGrid, Click2Mail) — hands off physical fulfillment.
  Worth setting up only once volume is steady. Note that this is the one place in the
  playbook where a task would spend money on its own, so it stays human-triggered.

A letter to a club GM should include a physical proof — one printed portrait, or a card
with real print quality. The medium is the argument for a print business.

## What "won" looks like

A signed portrait week: a date on the club calendar, a room, and a newsletter mention.
Everything after that is `cowork-playbook.md` §5.5 — filling the slots — which is a
completely different and much easier problem.
