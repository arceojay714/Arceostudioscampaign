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

Cadence labels: **D** daily · **W** weekly · **M** monthly · **E** event-driven.

---

## 1. Club outreach engine

The big one. Full design in `club-outreach-pipeline.md`. Five tasks, run in order,
each feeding the next.

### 1.1 — Prospect discovery (W, then M once the list is built)

> Research private clubs within 45 minutes' drive of Olympia WA, Kent WA, Cameron Park CA,
> and Piedmont CA. Include: country clubs, golf clubs, yacht/sailing clubs, athletic and
> city clubs, tennis/racquet clubs, social and dining clubs, university clubs, Elks/Rotary/
> Masonic lodges, and Junior League chapters. For each, add a row to
> `outreach/prospects.csv` using the schema in `docs/club-outreach-pipeline.md`.
> Skip any club already in the file. Report only what's new.

### 1.2 — Contact enrichment (W)

> For every row in `outreach/prospects.csv` with `contact_status = new`, find the General
> Manager, Membership Director, and Communications/Newsletter editor by name. Find a
> public email or the club's contact form URL, plus the club's physical mailing address.
> Note the source URL for each field. Do not guess or pattern-match an email address —
> if you can't find it published, mark `email_status = needs_mail` and move on.
> That's the signal to reach them by post instead.

### 1.3 — Signal scan (D)

The hook that makes a proposal specialized instead of generic.

> Check the news, newsletters, and club websites listed in `docs/club-outreach-pipeline.md`
> for these triggers, and append hits to `outreach/signals.md` with date and source link:
> new or rebuilt member directory, clubhouse renovation or reopening, milestone
> anniversary (25/50/75/100 years), new GM or Membership Director, membership drive or
> waitlist opening, annual gala or member appreciation event, board elections, new club
> app or member portal, and any mention of member photos or headshots.

### 1.4 — Proposal drafting (E — fires when a club has a signal)

> For [CLUB], write a one-page proposal using the structure and voice rules in
> `docs/club-outreach-pipeline.md`. Lead with the specific signal we found, not with us.
> Save as `outreach/proposals/<club-slug>.md`. Then produce two versions: a Gmail draft
> addressed to the named contact, and a print-ready letter PDF if `email_status = needs_mail`.
> Leave both unsent.

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

## 6. Things not on your list that probably should be

- **A club season calendar.** Directory rebuilds cluster in fall, galas in spring,
  anniversaries are fixed dates you can look up years ahead. A task that maintains
  `ops/club-calendar.md` means you're pitching a club three months before they know they
  need you, instead of the week after they hired someone else.
- **A referral engine.** Every satisfied sitter belongs to at least one other club, board,
  or organization. A monthly task that reads `ops/sessions.csv` and drafts a specific
  "who else should I be talking to" ask is cheaper than any cold outreach.
- **A proposal component library.** Rather than writing each proposal from scratch, keep
  `outreach/blocks/` — reusable sections for pricing, the directory argument, the
  no-sitting-fee structure, insurance and COI language, on-site logistics, turnaround
  times. Proposals become assembly, and quality stops varying with how tired you were.
- **Contract, COI, and W-9 readiness.** Clubs are institutional buyers. The first thing a
  GM asks for after "yes" is a certificate of insurance and a signed agreement. Having
  those staged as templates converts a warm yes faster.
- **Weekly business dashboard.** Sessions booked, sessions shot, revenue, average order
  value, ad spend, cost per booking, outreach touches sent, replies received. One page,
  Mondays. Trends are invisible without it.
- **CRM hygiene.** A monthly pass that catches duplicate contacts, missing emails, sitters
  with no session record, and clubs whose named contact has left. Outreach lists rot at
  roughly 25% a year.
- **An "assumptions I'm working from" file.** Every task above encodes guesses about the
  business. A monthly task that surfaces them for correction keeps the automation from
  drifting away from reality quietly.

---

## Where to start

Don't launch all of this. Three tasks, this week:

1. **1.1 Prospect discovery** — nothing else in section 1 can run until the list exists.
2. **2.3 Newsletter harvesting** — the highest-signal, lowest-competition research we can
   do, and it directly answers "find private club sources and newsletters."
3. **3.1 Meta campaign health check** — the moment the 11 ads publish, this stops you
   having to open Ads Manager on your phone.

Add 4.1 and 4.5 once bookings are flowing, and section 5 once there are deliveries to
ask about. Sequence matters: a review-request task with no deliveries just runs and
reports nothing every day until you stop trusting it.
