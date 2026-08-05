# The system — what can actually be automated

The goal, stated plainly: **Jay shows up to meet organizers. Everything either side of that
runs itself.**

That is achievable for most of the list. The honest answer is that the limit isn't what an
agent can think about — it's where the data lives and what it's allowed to touch. This
document maps every capability to what it really needs, and says clearly which parts are
ready now, which need a tool connected, and which shouldn't be automated even though they
could be.

## The one architectural decision that matters

**Do not build a custom system for the parts that already have mature, cheap software.**

An order pipeline, a gallery, in-person sales, payments, contracts, multi-photographer
scheduling — these are solved problems with fifteen years of competition behind them. A
bespoke version would take a year and be worse than a $50/month subscription.

The right split:

```
     FRONT HALF                    BACK HALF
  find → prospect → propose     shoot → sell → fulfill → pay
  → book → schedule → brief
         ▲                              ▲
    Cowork owns this            Off-the-shelf tools own this
                    ▲                    │
                    └── Cowork reads from it for
                        reporting, retention, P&L,
                        newsletters, review chasing
```

Cowork is the connective tissue and the brain: research, prospecting, writing, scheduling,
monitoring, analysis, chasing. It should not be the database of record for money or images.

The current repo — CSV files in git — is genuinely fine for the front half and for research.
It will break somewhere around 20–30 active organizations, and it was never going to hold
orders or payments. Plan the migration before it hurts, not after.

## Capability by capability

Legend: **Ready** = buildable now with what's connected · **Needs tool** = requires an
integration or account · **Human** = should not be fully automated.

### 1. Search for communities in range — **Ready**

Per metro, from `network/photographers.csv`. Churches, senior living, 55+, HOAs, lodges,
small clubs. Already specified as playbook task 1.4a.

### 2. Research and prospect — **Ready**

Size, denomination or operator, last directory year, staff, signals. The community segment
publishes all of this.

### 3. Gather contact information — **Ready**

Public for the community segment, which is exactly why it's the volume engine. Clubs still
run mail-then-call per `contact-sequence.md`.

### 4. Create custom proposals — **Ready**

Assembled from `outreach/blocks/` with a fresh, signal-specific opening. Already working —
see `outreach/proposals/olympia-country-golf.md`.

### 5. Send proposals — **Needs tool**

- **Email:** Gmail is connected. Drafting works today. Sending is a permission decision, not
  a capability gap.
- **Physical mail:** needs a print-and-mail API — Lob, PostGrid, or Click2Mail. This is the
  one place in the whole system where an automated step spends money on its own, so it gets
  a hard spend cap and a daily volume cap.

**Recommendation: keep the first ~50 sends human-reviewed.** Not out of caution — because
that's how you find out which opening lines actually get replies. Once a template has a
measured reply rate, automate that template and keep reviewing new ones. Automating an
unproven template just scales a guess.

### 6. Handle responses — **Needs tool, then Ready**

Inbox monitoring, classification (interested / not now / no / question / complaint), and a
drafted reply per class. Gmail supports all of it.

Tiered permission is the sane design:

| Reply type | Handling |
|---|---|
| Scheduling a meeting | **Auto-send.** Low risk, high volume, time-sensitive. |
| Simple factual question already answered in a block | **Auto-send** from approved copy. |
| Pricing, custom scope, anything with a number in it | **Draft, Jay approves.** |
| Complaint, refund, anything unhappy | **Draft, Jay approves.** Always. |
| Anything touching senior living consent | **Human. Never automated.** |

### 7. Set up meetings — **Ready**

Google Calendar is connected. Offer times, book, send invites, send reminders, handle
reschedules. This is the capability that most directly buys back Jay's time, and it's
available right now.

### 8. Schedule and plan for photographers — **Ready, then Needs tool**

Assignment by metro from the roster, travel time, capacity check against the pipeline,
day-before brief, run sheet. Playbook §4.2 and §4.3 already specify the briefs.

At volume this wants real scheduling software rather than CSVs — but the *logic* (who's
free, who's cleared for this segment, who's closest) stays here.

### 9. Marketing campaigns — **Partly ready**

Content, copy, sequencing, calendars: ready. Newsletter and social drafting: ready.

**Meta is the exception.** A scheduled agent has no Ads Manager login, so daily campaign
checks can't run headlessly — they need either the Marketing API with a token, or they stay
something Jay triggers from a logged-in session. Same for any platform without an API.

### 10. Help the photographer on the job — **Ready, and underrated**

A photographer texting *"the room has a huge window and I'm fighting the light, what do I
do"* and getting a real answer in thirty seconds is one of the highest-value things here,
and nobody builds it.

What it needs: a field knowledge base (the capture standard, per-venue notes, the pricing
sheet, the consent rules, the escalation path) plus a channel photographers can actually
reach on a shoot day. It also compounds — every question asked becomes a documented answer,
so the tenth photographer onboards faster than the first.

### 11. Process orders — **Needs tool**

This is the real gap, and the answer depends on what's already in use. IPS specifically
wants software built for it — ProSelect and similar exist for exactly this. Galleries and
fulfillment: ShootProof, Pixieset. Studio management, invoicing and workflow: Táve, Studio
Ninja, Sprout Studio.

Cowork's role once one is chosen: chase stuck orders, reconcile, report, notify. Not store.

### 12. Send confirmations — **Ready**

Booking, session, delivery, payment. Templated, triggered, low risk.

### 13. Close accounts — **Ready**

Define "closed" precisely — delivered, paid, reviewed, archived — and a task can drive
every open engagement to that state and report what's stuck.

### 14. Profit and loss — **Ready once data lands**

Revenue per session, per photographer, per organization, per segment. Costs: lab, travel,
per-session fees, commission, postage, ad spend. **Requires the order system to exist
first** — P&L on invented numbers is worse than no P&L.

The number that matters most: **print revenue per session by segment and by photographer.**
It tells you which segment to push and whether the commission structure holds.

### 15. Reviews and retention — **Ready**

Review ladder (playbook §5.1), monitoring (§5.2), testimonials to content (§5.3).

Retention is the part worth designing deliberately: organizations rebuild directories every
two to three years. **An organization photographed in 2026 is a warm rebooking in 2028 —
that's not outreach, it's a calendar entry made the day you deliver.** Set the follow-up
date at close, not later. Also: annual new-member sittings, and every family who bought
once becoming a holiday reorder.

### 16. Newsletters — **Needs tool**

Drafting is ready. Sending at volume needs a real ESP (Mailchimp, Brevo, Resend) — sending
bulk newsletters from Gmail damages the domain you rely on for outreach. Keep the two
streams on separate sending infrastructure.

## What stays human

Short list, and it's the point of the whole design:

- **The organizer meeting.** Already how you want it.
- **In-person sales.** The room is the product.
- **The shoot.**
- **Complaints, refunds, pricing exceptions.**
- **Senior living consent** — resident or responsible party, never staff, never automated.
- **Anything with a signature on it.**

## Build order

**Phase 1 — now, with what's already connected.**
Discovery, research, prospecting, proposal drafting, Gmail drafts, Calendar booking and
reminders, photographer briefs, the field knowledge base. This is most of the front half
and it needs nothing new bought.

**Phase 2 — pick the back-half tools.**
Order/gallery/IPS software, then an ESP. Once chosen, Cowork connects to them and order
chasing, confirmations, P&L, and newsletters all come online together. **This phase is
blocked on one decision, not on any technical work.**

**Phase 3 — measured automation.**
Turn on auto-send per message type once each template has a measured reply rate. Add the
mail API with spend caps. Add Meta via the Marketing API if the daily check is worth a
token.

**Phase 4 — scale the system of record.**
When CSVs strain, move prospects and sessions to a real database or CRM. The task
definitions stay; only the storage changes.

## The open question blocking Phase 2

**What is currently used for booking, galleries, in-person sales, orders, and payments?**

If tools are already in place, Cowork connects to them and Phase 2 is short. If not, that's
a decision to make deliberately — it determines how orders, P&L, confirmations, retention
and newsletters all get built, and choosing wrong is expensive to unwind.

Everything in Phase 1 proceeds regardless.
