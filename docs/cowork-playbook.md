# Cowork playbook — what runs while Jay is out

Background tasks for Arceo Studio Collective. Each entry is written to be pasted into
Cowork as a task prompt with little or no editing.

**Two rules that apply to every task below.**

1. **Nothing leaves the building on its own.** No task sends an email, posts to a social
   account, replies to a review, or spends money. Tasks produce *drafts, queues and briefs*.
   A human presses send. This is not caution for its own sake — one bad automated cold
   email to a club GM burns that club permanently, and there are maybe 60 of them in range.
2. **Every task writes its output to this repo or to a Drive doc**, so the next run can read
   what the last run did. A task that only posts a summary into a chat window has no memory
   and will re-do work and re-contact people.
3. **Never guess a contact detail.** No pattern-matched emails, no assumed URLs. A blank
   field is correct and costs nothing; an invented one bounces, or worse, reaches a
   stranger. For clubs specifically, a missing email is the *expected* result — see
   `docs/contact-sequence.md`.

Cadence labels: **D** daily · **W** weekly · **M** monthly · **E** event-driven.

---

## 1. Club outreach engine

The big one. Full design in `club-outreach-pipeline.md`.

**Scope is national — every private club in the country, roughly 5,659 of them.** Effort is
tiered, because one photographer cannot work a national list evenly:

- **Tier A** — drivable from Olympia, Kent, Cameron Park, Piedmont. 22 clubs seeded in
  `outreach/prospects.csv`. These get the **free management shoot**: Julian photographs the
  GM, department heads and board officers at the club, free, no obligation. It turns a
  months-long institutional decision into a GM accepting something free, and it puts him in
  the building. Work these first and in person.
- **Tier B** — metros worth a trip, but only once three clubs there are warm.
- **Tier C** — the national long tail. A signal net, not a mailing list. Most are never
  contacted; the ones that are, are contacted because something happened at that club.

Tasks run in order, each feeding the next.

### 1.1 — Prospect discovery (W)

Two modes. Run **Tier A first** until that list is exhausted, then switch to national.

**Tier A mode:**

> Find private clubs within 45 minutes' drive of Olympia WA, Kent WA, Cameron Park CA, and
> Piedmont CA that are not already in `outreach/prospects.csv`. Include country, golf,
> yacht/sailing, athletic, city, tennis/racquet, social and dining clubs, university clubs,
> Elks/Rotary/Masonic lodges, and Junior League chapters. Add each as `tier = A` using the
> schema in `docs/club-outreach-pipeline.md`. Report only what's new.

**National mode (Tier C):**

> Working from the national directories in `research/sources.md` §Tier 1, add private clubs
> to `outreach/prospects.csv` as `tier = C`, 50 per run, with `market` set to their metro.
> Prioritize the reciprocal-club-list method: take a club already in our file that publishes
> a reciprocal list, and add every club named on it. Skip duplicates by `club_slug`.
> Do not enrich or contact anything in Tier C — this pass is building the signal net only.

### 1.2 — Contact enrichment (W) — **Tier A and B only**

Never enrich Tier C in bulk. A Tier C club gets enriched when it produces a signal, not
before, or we spend all our time researching clubs we will never contact.

**Clubs hide staff emails on purpose. Do not hunt for them.** Full reasoning in
`docs/contact-sequence.md` — the channel is mail, then a call, then email. This task's job
is to make a club *mailable and callable*, and then stop.

> For every row in `outreach/prospects.csv` with `tier` A or B and `contact_status = new`,
> confirm: the club's real website, the exact mailing address, the main phone number, the
> General Manager's name if it appears in one or two sources (CMAA chapter rosters,
> BoardRoom or Club + Resort hiring announcements, LinkedIn, club newsletters, local press),
> and any public member newsletter URL. Note the source for each.
> Do not guess or pattern-match a website or an email address. Leave `email` blank and
> `email_status = unknown` — that is the expected state, not a failure, and it does not
> block anything. A club with a verified address and a phone number is fully ready to
> contact. Several seeded rows have `[website not yet verified]` in `owner_notes`; clear
> that note once the real URL is confirmed. Set `contact_status = enriched`.

### 1.2b — Letter → call → email queue (D)

The engine that actually moves clubs. Reads `docs/contact-sequence.md` and
`outreach/call-script.md`.

> Three passes over `outreach/log.csv` and `outreach/prospects.csv`:
> **(a)** Clubs at `enriched` with a signal and no touches — draft the letter, print-ready,
> addressed to the GM by name or to "General Manager" by title. Queue it, don't send it.
> **(b)** Clubs whose letter went out 5+ business days ago with no logged call — put them
> on today's call list with the club's phone number, the letter's opening line, the
> gatekeeper's name if we have one, and `best_time_to_call` if logged.
> **(c)** Clubs where a call produced an email address — draft the follow-up email
> containing exactly what was promised on the call and nothing else. Leave it unsent.
> Never more than two call attempts per letter. After that, dormant for six months.

### 1.3 — Signal scan (D)

The hook that makes a proposal specialized instead of generic. Runs across the **whole**
list — this is the one task where Tier C earns its keep.

> Check the sources in `research/sources.md` and the club websites in
> `outreach/prospects.csv` for these triggers, and append hits to `outreach/signals.md`
> with date and source link: new or rebuilt member directory, clubhouse renovation or
> reopening, milestone anniversary, new GM or Membership Director, membership drive or
> waitlist opening, annual gala or member appreciation event, board elections, new club app
> or member portal, and any mention of member photos or headshots.
> Weight new-GM and new-Membership-Director hires highest — those jump the queue regardless
> of tier. Set the club's `contact_status` to `signal-waiting`. If three or more clubs in
> one metro are `signal-waiting`, say so explicitly: that cluster is a Tier B trip.

### 1.4 — Proposal drafting (E — fires when a club has a signal)

> For [CLUB], assemble a one-page proposal from `outreach/blocks/`, following the structure
> and voice rules in `docs/club-outreach-pipeline.md`. Write the opening paragraph fresh
> around the specific signal we found — if it could be sent to any club, it isn't ready.
> Tier A letters must include the free management shoot block and lead the ask with it.
> Verify any factual claim about the club (founding year, milestone, staff names) against
> the club's own materials before it goes in the letter.
> Save as `outreach/proposals/<club-slug>.md`, then produce a Gmail draft to the named
> contact, and a print-ready letter PDF if `email_status = needs_mail`. Leave both unsent.

### 1.4a — Community segment discovery (W) — **the volume engine**

Churches, senior living, 55+ and HOA communities, lodges, small clubs. Separate list,
separate rules, public contact info. Full reasoning in `docs/community-segment.md` —
including why this segment got more urgent: **Lifetouch closed its church photography
division in May 2021**, so the national incumbent in church pictorial directories is gone
and the buyers already understand the free-sitting model.

> Add organizations to `outreach/community-prospects.csv` within 45 minutes of Olympia,
> Kent, Cameron Park, or Piedmont. Rotate the type each run so no one category dominates:
> churches and congregations, senior living and CCRC communities, 55+ and HOA communities,
> Elks/Rotary/Kiwanis/Masonic/VFW/Grange, historical societies.
> Because these publish their contacts, fill them in during discovery: named contact and
> role (pastor, church administrator, directory coordinator, life enrichment or activity
> director, HOA activities chair), phone, email with source, mailing address, and size
> estimate. Where a church's site shows a pictorial directory, record its year in
> `last_directory_year` — **anything 2021 or earlier is a live lead**, because that's when
> the national vendor disappeared.
> Do not contact anyone. Research and record only.

### 1.4b — Management company track (M)

Slow, separate, and the only path whose ceiling isn't set by driving distance.

> Research the club management companies in `research/sources.md` §Tier 2 — Invited, Troon,
> KemperSports, Bobby Jones Links, Century Golf, Hampton Golf, OB Sports. For one company
> per month: who owns member experience or member benefits, what their club count and
> footprint is now, and whether they already have a photography vendor relationship. Draft
> a portfolio-level pitch — a repeatable member benefit deployed across many clubs — not
> the single-club letter. Log findings to `research/management-companies.md`.

### 1.5 — Follow-up ladder + reply watch (D)

> Check `outreach/log.csv` for any club contacted 7, 21, or 45 days ago with no reply, and
> draft the corresponding follow-up (touch 2 / touch 3 / dormant-file note). Then scan the
> inbox for replies from any club in `outreach/prospects.csv`, summarize each, flag anything
> that reads as interest, and update the club's row. Never send. Never follow up more than
> three times.

---

## 2. Daily research & sources

### 2.1 — Private club industry digest (D, weekday mornings)

> Read today's items from the source list in `docs/club-outreach-pipeline.md` §Sources.
> Give me five bullets max, each one sentence, each with a link, ranked by whether it's
> actionable for Arceo this week. Skip anything that's pure golf-course agronomy or
> F&B operations — that's not our lane. Append to `research/digest.md`.

### 2.2 — Local signal sweep (D)

Same idea, narrower: The Olympian, Kent Reporter, Mountain Democrat, Piedmont Exedra,
the four chambers of commerce, and the local business journals. Clubs announce their
anniversaries and renovations in local press long before it hits trade press.

### 2.3 — Newsletter harvesting (W)

Most private clubs publish their member newsletter as a public PDF on their own website.
That is the single richest source we have and nobody is reading it.

> For each club in `outreach/prospects.csv`, look for a publicly posted member newsletter
> or magazine on the club's site. Record the URL and publication cadence in the prospect
> row. Where one exists, read the newest issue and log anything matching the trigger list
> in task 1.3, plus: the editor's name, whether they run member profiles, and whether they
> accept sponsor or vendor pages.

### 2.4 — Competitor & pricing watch (M)

> Find portrait, headshot, and family photography studios marketing to private clubs in
> WA and Northern CA. Record their positioning, package structure, and any published
> pricing in `research/competitors.md`. Flag anything that's a genuine change since last
> month — don't re-report the same landscape.

---

## 3. Campaign & site monitoring

### 3.1 — Meta campaign health check (D, once the 11 ads publish)

> Check account **1570584327857179** (verify the picker reads `(15705…)` — see CLAUDE.md).
> Report spend vs the $18/day plan, landing page views and cost per view by tier, and any
> ad in learning limited, rejected, or zero-delivery state. Flag if any ad's advertiser
> name is showing as Purity Palm. Do not change budgets, pause ads, or edit creative —
> report and wait.

### 3.2 — Pixel & funnel integrity (W)

> Confirm pixel `4638667999697613` is still receiving PageView and the appointments-page
> event. Confirm `https://arceostudiocollective.com/appointments` loads and the booking
> widget renders. If the booking pages have been split to `/appointments/olympia` etc.,
> confirm the audience rules still match (they use `contains .../appointments`, so
> sub-paths should still qualify) and tell me if that assumption has broken.

### 3.3 — Audience size watch (W)

The three retargeting audiences are all under 1,000 people, which is why Meta is warning
about delivery. Track whether they're growing. If they're flat after two weeks, the
problem is upstream traffic, not the creative — and that's a different fix.

---

## 4. Booking → shoot → delivery

### 4.1 — Booking watch (D)

> Check for new appointments since the last run. For each: confirm it's on the calendar,
> check it doesn't collide with another booking or travel time between clubs, and draft a
> confirmation email if one hasn't gone out. Flag same-day and next-day bookings
> immediately rather than in the summary.

### 4.2 — Session prep brief (E, 48h before each shoot)

> For tomorrow-plus-one's sessions, produce a one-page brief: who's coming, club and room,
> call time, party size and ages, anything they said at booking, whether they're a repeat
> sitter, and the shot list implied by the package. Include the drive time and load-in
> notes for that club.

### 4.3 — Shoot-day run sheet (E, morning of)

> Today's run-of-show: sitting times back to back with buffers, gear checklist, backup
> gear, card and battery count, and the club contact's name and mobile. One page. Send by
> 7am.

### 4.4 — Post-shoot recap (E, evening of)

> Log to `ops/sessions.csv`: date, club, sitter name, party size, frames shot, package
> sold, anything promised verbally, and anything that went wrong. This file is what the
> review-request and reorder tasks read from.

### 4.5 — Order pipeline chase (D)

> For every session in `ops/sessions.csv` past shoot date: where is it? Not culled, not
> retouched, proofs not sent, proofs sent but no selection after 7 days, selection made but
> not sent to print, at the lab, shipped, delivered. Show me only the ones that are stuck,
> and draft the nudge email for each stuck client.

### 4.6 — Reorder & holiday window (M, weekly Oct–Dec)

Anyone who sat this year is a warm reorder in November. Draft the campaign, don't send it.

---

## 5. Members, reviews, and content

### 5.1 — Review request ladder (E, 5 days after delivery)

> For each delivery in `ops/sessions.csv` marked delivered 5+ days ago with
> `review_asked = no`, draft a review request. Route sitters who were visibly delighted
> to Google; route everyone else to a private feedback form first, so a lukewarm
> experience becomes information rather than a three-star review. Mark the row when drafted.

### 5.2 — Review monitoring (D)

> Check Google, Facebook, and Yelp for new reviews of Arceo Studio Collective. Summarize
> anything new and draft a reply. Anything under four stars: flag it to me directly, don't
> just log it.

### 5.3 — Feedback → testimonial → post (W)

> Pull the strongest lines from this week's feedback responses and reviews. For each,
> draft a post: the quote, the suggested image from that session, and a caption in
> the brand voice. Note that we need written permission from the sitter before any of
> these run — include the permission-request draft alongside each one.

### 5.4 — LinkedIn pipeline (W)

Julian's LinkedIn is the B2B channel that actually reaches club GMs and boards. The club
outreach engine and this task feed each other — a post about a club directory rebuild is
warm-up for the letter that follows.

> Draft two LinkedIn posts for the week from this menu, rotating so we don't repeat a
> format twice in a row: a club-directory / institutional-memory argument, a
> behind-the-scenes from a recent shoot, a short piece on why people think they photograph
> badly, a member testimonial, a data point from the industry digest, or a seasonal
> reminder. 150–200 words, no hashtag spam, no em dashes, first person. Save to
> `content/linkedin/<date>.md`.

### 5.5 — Member-facing outreach inside a signed club (E)

Once a club signs, the job changes from selling the club to filling the slots.

> For [CLUB]'s portrait week: draft the newsletter blurb, the lobby-signage copy, the
> member email, the three reminder emails at T-14 / T-7 / T-2, and the slot-fill message
> for when the schedule has gaps. Track sign-ups against capacity daily and tell me when
> we're under 60% booked with a week to go.

---

## 6. The things not on your list — now built

These were the gaps. Each one now has a file, so the tasks that maintain them have
somewhere to write.

### 6.1 — Club season calendar (M) → `ops/club-calendar.md`

Directory rebuilds cluster in fall, galas in spring, anniversaries are fixed dates you can
look up decades ahead. **Already produced two live findings**: Olympia Country & Golf Club
appears to hit its centennial in 2026, and Claremont its 130th — both Tier A, both need
verifying against club materials before anything is sent.

> Update `ops/club-calendar.md`: add `founded_year` for newly enriched prospects, recompute
> the milestone table, and move any club with a milestone inside 12 months to
> `signal-waiting`. Verify each milestone against the club's own website or newsletter.

### 6.2 — Referral engine (M)

Every satisfied sitter belongs to at least one other club, board, or organization. Cheaper
than any cold outreach and it warms Tier B and C clubs we'd otherwise never reach.

> Read `ops/sessions.csv` for delivered sessions with positive feedback. For each, draft a
> specific referral ask naming the clubs or boards that person is plausibly connected to.
> Cross-reference against `outreach/prospects.csv` — a referral into a club already on our
> list is worth far more than a general ask.

### 6.3 — Proposal blocks → `outreach/blocks/`

Nine files, assembled per proposal. The strongest is `03-free-management-shoot`.

### 6.4 — Club readiness → `ops/club-readiness.md`

COI, W-9, services agreement, model release, sample spread. **All currently unstaged**,
which means a warm yes today would stall on paperwork. This is the cheapest item in the
whole playbook to fix and it's pure downside until it's done.

### 6.5 — Weekly dashboard (W) → `ops/dashboard.md`

One page, Mondays, from the template. Report trends, not single-week numbers.

### 6.6 — List hygiene (M)

> Pass over `outreach/prospects.csv` and `ops/sessions.csv`: duplicate slugs, missing
> emails, sitters with no session record, contacts whose named GM has moved on. A departed
> GM is not just a stale row — it's a new-GM signal at that club, so file it as one.

### 6.7 — Assumptions review (M) → `ops/assumptions.md`

Every task here encodes guesses about the business. The file lists them plus five open
questions that need Jay's answers, not research. Left unchecked, the automation drifts from
reality quietly and keeps running as though nothing changed.

---

## Where to start

Don't launch all of this. Three tasks, this week:

1. **1.4a Community segment discovery** — the volume engine, public contacts, no
   gatekeepers, and a national incumbent that vacated the church market in 2021. It pays
   sooner than the club track and it builds the reference list the club track needs.
2. **1.2 Contact enrichment** — 22 Tier A clubs seeded, 13 missing a verified website, all
   missing an address-and-phone check. Scoped to mailable-and-callable, not email hunting.
3. **2.3 Newsletter harvesting** — highest-signal, least-contested research available, and
   it directly answers "find private club sources and newsletters."

Then **1.2b** once the first letters are drafted, and **1.1 in national mode** to start
building the Tier C signal net.

Add 4.1 and 4.5 once bookings are flowing, and section 5 once there are deliveries to ask
about. Sequence matters: a review-request task with no deliveries just runs and reports
nothing every day until you stop trusting it.

**Before any letter goes out**, stage the items in `ops/club-readiness.md` and answer the
open questions in `ops/assumptions.md`. Both are quick, and both are load-bearing for
everything above. Senior living adds two more readiness items — background check and
vaccination records — that some communities require before a vendor sets foot on site.
