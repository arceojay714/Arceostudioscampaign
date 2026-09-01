# Appointments page edits — requested 2026-09-01

Source: Sarah Lanier (slanier@drivingclub.com), email of September 1, 2026, on the
"2026-2027 Portrait Program for PDC Proposal" thread, plus the Willoughby Golf Club
thread ("Booking for next season", Stephanie Donovan).

Page: `https://arceostudiocollective.com/appointments` — "The Member Portrait Program",
the SELECT YOUR CLUB TO BOOK card row. Lives in Squarespace; this domain is blocked
from Claude Code sessions (see the egress note in campaign-state.md), so these edits
have to be clicked in by hand in the Squarespace editor.

Background: PDC's Acuity calendar had its password protection removed on August 27
and bookings are live (two member bookings confirmed by Lindsey Jordan, including
Brad Kibler). The page card was never updated to match.

---

## Edit 1 — Piedmont Driving Club card: passcode language out, open bookings in

Current card:

| Element | Current |
|---|---|
| Badge (top right) | PASSCODE REQUIRED |
| Club name | Piedmont Driving Club |
| Location | ATLANTA, GEORGIA |
| Italic line | Consultation first — contact us for access |
| Link | ENTER WITH PASSCODE → |

Change every one of those middle rows so the card reads exactly like Olympia's and
Kent's:

| Element | New |
|---|---|
| Badge (top right) | NOW BOOKING |
| Club name | Piedmont Driving Club (unchanged) |
| Location | ATLANTA, GEORGIA (unchanged) |
| Italic line | Sessions begin [DATE] — see note below |
| Link | BOOK YOUR APPOINTMENT → (pointing straight at the PDC Acuity calendar, no passcode gate in between) |

Italic line note: Olympia reads "Sessions begin August 24, 2026" and Kent reads
"Sessions begin October 13, 2026". The PDC session start date is not recorded
anywhere in this repo or the email thread, so it is NOT filled in here. Use the
first open date on the PDC Acuity calendar. If a date is not wanted yet,
"Bookings are now open" fits the card without inventing one.

Also check: if the passcode gate was a Squarespace page-level password on a PDC
sub-page (rather than only Acuity's), remove that too, or point the card link
directly at the calendar. Lindsey confirmed the calendar password itself was
already removed on August 27.

## Edit 2 — Re-add Willoughby Golf Club card

From the Stephanie Donovan thread (July 2026): Willoughby Golf Club,
3001 SE Doubleton Drive, Stuart, FL 34997. Julian is booked for **spring 2027**;
exact dates were not yet confirmed as of the last message on that thread, and no
Acuity calendar for Willoughby is referenced anywhere yet.

Card content, same pattern as the others:

| Element | Value |
|---|---|
| Logo | Willoughby Golf Club crest (the asset used when the card was on the page before) |
| Badge (top right) | SPRING 2027 |
| Club name | Willoughby Golf Club |
| Location | STUART, FLORIDA |
| Italic line | Sessions planned for spring 2027 |
| Link | Depends on booking state, below |

Link options, pick one:

- If a Willoughby Acuity calendar exists and is open: badge NOW BOOKING,
  link BOOK YOUR APPOINTMENT → to that calendar.
- If not (the likely case, since dates are unconfirmed): no booking link.
  Use DETAILS COMING SOON, or a mailto/contact link if members should be able
  to ask. Do not link a card to a calendar that is not accepting bookings.

Note the user request said "Willoughby country club"; the club's actual name per
its own staff signature is **Willoughby Golf Club** — use that on the card.

## Squarespace click path

1. Log in at squarespace.com, open the arceostudiocollective.com site.
2. Pages → Appointments → Edit.
3. If the card row is a Code Block: edit the block, apply the two edits above to
   the PDC card markup, and duplicate an existing club card's markup for
   Willoughby (swap name, location, badge, italic line, link, logo).
4. If the cards are native Squarespace blocks: edit the PDC text/button blocks per
   Edit 1, and duplicate the Kent card's block group for Willoughby per Edit 2.
5. Check both changes on mobile width before saving — the card row was designed
   three across and a fourth card will wrap.
6. Save. Confirm the live page no longer contains the words "passcode" or
   "consultation first" anywhere.
