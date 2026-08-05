# The stack

What's in use, what connects, and where the gaps are. Answers the Phase 2 question in
`docs/system-architecture.md`.

## Current

| Function | Tool | Automation outlook |
|---|---|---|
| Website | arceostudiocollective.com | — |
| Booking | **Acuity Scheduling** | **Good.** Real API and webhooks. Appointments can be read, created, and rescheduled programmatically. |
| Galleries and delivery | **PASS (Pass Gallery)** | **Partial.** Handles ordering and lab fulfillment. API is limited — expect manual or semi-manual for some steps. |
| In-person card payments | **Chase DX8000 terminal** | **Manual by design.** Orders captured on a written form. See below. |
| Print fulfillment | **Bay Photo**, ordered manually, or automatically via PASS | **Fixable.** |

The back half exists. That's better than starting from nothing and it means Phase 2 is
mostly integration, not selection.

## Payment capture — settled

The DX8000 stays. Sales are captured on a written order form and processed manually, and
Jay is comfortable running it that way.

The one thing to carry forward: **the order form is the data source** for commission,
segment P&L, and print conversion per photographer. Whatever fields those numbers need have
to be on the form, filled in on the day, and collected centrally. Getting the form right
once is much cheaper than reconstructing a quarter of sales later, and at ten photographers
on commission the arithmetic has to be reproducible from something both sides can see.

Worth designing the order form deliberately before the roster starts selling: organization,
date, photographer, session, line items, total, payment method. That is enough for every
report in the playbook.

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

**Phase 2b — settle the order form.** Fields fixed and collected centrally, so commission,
segment P&L and per-photographer conversion are all computable from one source.

**Phase 2c — PASS integration and automated Bay Photo ordering.** Removes the manual step
that scales with volume.

**Phase 3 — ESP**, for member intake series and newsletters.

**Phase 4 — measured auto-send, mail API, database migration** as previously described.
