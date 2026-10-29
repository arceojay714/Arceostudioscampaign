# LinkedIn ad — Arceo Studio Collective club program

Audience: club general managers, membership / marketing directors, committee chairs.
This is club-facing, unlike the Meta retargeting ads, which are member-facing.
The Meta rules in `CLAUDE.md` (ad account ID, Purity Palm identity, Book Now CTA) do not apply here.

Source for the program: the club marketing kit handoff brief (Julian Arceo, from the Cedar Rapids,
Cameron Park and Willoughby calls). Golf and racket-sport incentives are deliberately left out;
that is a separate handoff.

## Creative

| Size | File | Use |
|---|---|---|
| 1200 × 627 (1.91:1) | `out/arceo-linkedin-1200x627.png` | Sponsored content, desktop and feed |
| 1200 × 1200 (1:1) | `out/arceo-linkedin-1200x1200.png` | Sponsored content, mobile feed |

Re-render after any edit to `ad.html`: `node linkedin/render.js`

## Intro text (LinkedIn max 600 chars)

Shown before "see more" (115 chars):

> Bring a portrait residency to your club at no cost. Members book a private session themselves, with no sitting fee.

Full text (538 chars):

```
Bring a portrait residency to your club at no cost. Members book a private session themselves, with no sitting fee.

What your club gets:
• No cost to the club, and no sitting fee for members
• A complimentary 5x7 for every group that sits
• Staff book first, so members see the calendar filling
• Optional dining tie-in: a special menu and a dinner reservation right after the session
• Optional club yearbook: your committees, member clubs, couples and families in one book

Members choose any purchases after their own private session.
```

## Headline (pick one; 70 chars shows in full)

1. **A portrait residency that costs your club nothing** (49) — matches the image
2. Give your club a yearbook again (31) — yearbook-led variant
3. Staff book first. Members follow. (33) — operations-led variant

Suggested test: run headline 1 against 2 with the same image.

## CTA and destination

- CTA button: **Learn More**
- Destination URL: **to confirm.** The member booking page (`arceostudiocollective.com/appointments`) is
  written for members, not GMs. A club-facing page is a better landing spot.

## What this copy deliberately does not say

- No club names (Cedar Rapids, Cameron Park, Willoughby, Olympia, Kent, Piedmont). The brief says the
  plan was laid out on those calls, not that each club has signed, and the Meta creative is also name-free.
- No years in business, number of clubs, number of clients, or "hand-painted" / backdrop-partnership claims.
  Those are the specific claims the 2026-09-16 demand letter says are misleading. Re-verify before
  adding any of them.
- No phone-outreach, member-incentive, golf or racket-sport language (ground rules in the handoff brief).
- The ad says members "choose any purchases" after their session, so it is clear where revenue comes from.

## Photos

The ad as shipped contains **no photographs of people.** The yearbook tiles are painted-color fills.

To put a photo in a tile, save it as `linkedin/photos/<name>.jpg` using the filenames in `ad.html`
(`yearbook-board.jpg`, `yearbook-committees.jpg`, `yearbook-member-clubs.jpg`, `yearbook-couples.jpg`,
`yearbook-families.jpg`, `yearbook-staff.jpg`), then re-render. Only use a photo when **every person in it
has signed a release to you / Arceo Studio Collective for advertising use**, and for any minor,
a parent or guardian has. A release written to another company (for example the EA Photographers
Information Card) does not carry over.
