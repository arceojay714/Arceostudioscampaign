# The stack

What's in use, what connects, and where the gaps are. Answers the Phase 2 question in
`docs/system-architecture.md`.

## Current

| Function | Tool | Automation outlook |
|---|---|---|
| Website | arceostudiocollective.com | — |
| Booking | **Acuity Scheduling** | **Good.** Real API and webhooks. Appointments can be read, created, and rescheduled programmatically. |
| Galleries and delivery | **PASS (Pass Gallery)** | **Partial.** Handles ordering and lab fulfillment. API is limited — expect manual or semi-manual for some steps. |
| In-person card payments | **Chase DX8000 terminal** | **Poor. This is the real gap — see below.** |
| Print fulfillment | **Bay Photo**, ordered manually, or automatically via PASS | **Fixable.** |

The back half exists. That's better than starting from nothing and it means Phase 2 is
mostly integration, not selection.

## The one genuine bottleneck: the DX8000

A standalone card terminal is a dead end for automation. It authorizes a payment and prints
a receipt. It does not know what was sold, to whom, at which organization, by which
photographer — and none of that reaches any system that can read it. Transactions land in
Chase merchant reporting as amounts and timestamps, disconnected from everything else.

That breaks four things at once:

- **P&L** — revenue can't be attributed to a segment, an organization, or a photographer.
- **Commission** — if commission is a share of print sales, sales have to be attributable
  per photographer, per session. Right now they aren't.
- **Print conversion by photographer**, the single most important number in the volume
  model (playbook §5b.4). Not computable.
- **Order accuracy** — the sale exists on a receipt, the order gets keyed into Bay Photo
  separately, and nothing reconciles the two.

At one photographer this is annoying. **At ten, across eight metros, on commission, it is
the thing that causes disputes** — a photographer's pay depending on numbers nobody can
reconstruct is how good working relationships end.

Three ways out, cheapest first:

1. **Record the sale in PASS at the point of sale**, then take payment on the DX8000 as
   settlement. The order data lives somewhere readable; the terminal just moves money.
   Requires discipline in the room, no new hardware.
2. **Move card capture to a terminal with an API** — Square or Stripe both offer readers
   that attach a line-item order to each payment and expose it. Merchant fees are
   comparable; the data difference is total. This is the clean fix.
3. **Log sales manually** into a shared sheet at the end of each day, and have a task
   reconcile that against Chase settlements and PASS orders. Works, but it depends on ten
   people doing admin after a long shoot day, which is exactly the thing that stops
   happening in month three.

**Recommendation: option 2 before the roster starts selling.** Every month it's deferred is
a month of unattributable revenue, and commission-shaped disputes are retroactive.

## Manual Bay Photo ordering

PASS can push orders to Bay Photo directly. Every order keyed by hand is time and an error
surface, and it scales linearly with volume — which is the one thing this business model is
designed to avoid. Worth resolving before volume rather than after.

## What connects now

**Acuity** is the strongest integration point available and it unlocks a lot immediately:
booking watch, session prep briefs, run sheets, capacity checks against the roster,
confirmations, and reminders. Combined with Google Calendar (already connected), most of
playbook §4 is buildable now.

Where Acuity also matters: the proposal promises members book themselves through a private
link. That link *is* Acuity, so per-organization booking pages plus a self-serve flow is
both the client-facing promise and the data source the whole ops layer reads from. Set
those up per organization with consistent naming and the automation gets easier for free.

**PASS** covers galleries and delivery. Worth checking what its API actually exposes before
designing anything that depends on reading order data out of it.

**Still missing:** an ESP for newsletters and member-intake email series. The proposal's
recommended intake method — an email series with a private booking link, described as the
highest-participation option — needs real sending infrastructure. Do not send those from
the Gmail account used for outreach; keep the two streams separate so a bounce problem in
one never touches the other.

## Build order, revised

**Phase 1 — now.** Discovery, research, prospecting, proposal generation, Gmail drafts,
Calendar. Nothing new required.

**Phase 2a — Acuity.** Booking watch, prep briefs, run sheets, confirmations, capacity
checks. Biggest immediate win, one integration.

**Phase 2b — fix payment capture.** Option 2 above. Blocks commission, P&L, and conversion
reporting; everything downstream waits on it.

**Phase 2c — PASS integration and automated Bay Photo ordering.** Removes the manual step
that scales with volume.

**Phase 3 — ESP**, for member intake series and newsletters.

**Phase 4 — measured auto-send, mail API, database migration** as previously described.
