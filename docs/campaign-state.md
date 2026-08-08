# Campaign state — Arceo Retargeting (Pooled)

Last verified against the live account: **4 August 2026**.

## Campaign

**Arceo Retargeting – Pooled (Olympia, Kent, Cameron Park)** — in draft, nothing published.

- Objective: Traffic → landing page views
- Location: **United States** (deliberately not a single metro — one metro would silently
  filter out the other two clubs)
- Advantage+ audience: **deliberately OFF**
- Total budget: $18/day

## Ad sets — built, don't redo

| Ad set | Audience | Excludes | Budget |
|---|---|---|---|
| Tier 1 – Operational (0-3d) | Appointments visitors 0-3d | Booked 30d | $6/day |
| Tier 2 – Hesitation (4-9d) | Appointments visitors 4-9d | Booked 30d | $6/day |
| Tier 3 – Soft Close (10-14d) | Appointments visitors 10-14d | Booked 30d | $6/day |

Each ad set holds one empty placeholder ad named **New Traffic Ad**.

## Remaining work

11 ads, 3 images + copy each. See `meta-ad-build-guide.md`.
All 33 Meta images are already uploaded to the ad account media library — they're selected
from the library, no file dialog needed.

## Why pooling is safe

The redesigned creative carries **no crest, no date, no club name**, so one set runs across
Olympia, Kent and Cameron Park.

## Piedmont Driving Club (PDC) portrait page

Built as `pdc-appointments.html`, to the PDC branding guide (rev. January 2022).

**Confirmed facts:**

- Sittings take place in **The Georgian Room** (a Main Clubhouse private room).
- **No sitting fee.** One **complimentary 5x7** included. ("complimentary" — never
  "free" or "complementary", per the PDC style guide.)
- Main Clubhouse address: 1215 Piedmont Avenue NE, Atlanta, Georgia 30309.

**Corrected — do not reintroduce:**

- ❌ **Sitting length is NOT twenty minutes.** A draft asserted "twenty minutes"
  and "finished inside half an hour". Both were invented and are wrong. The real
  length is still unconfirmed — leave it as a `fill` slot until someone supplies it.

**Still unconfirmed** (marked `<span class="fill">` in the HTML, gold highlight so
they cannot ship unnoticed): dates, times, the review-and-select process, who sees
the frames, family booking method, wardrobe guidance, whether extra prints are
sold, and the alternate-time contact.

## Egress limitation — read before promising a site audit

`arceostudiocollective.com` is **blocked by the network egress proxy** in Claude
Code sessions (403 at the CONNECT tunnel). Neither `/appointments` nor
`/emailgallery` can be fetched, so the live site cannot be used as a source of
truth from inside a session. Anything from those pages — copy, image URLs, the
Acuity link — has to be pasted into the chat by hand.

## Open threads

- **Booking pages splitting** to `/appointments/olympia` and `/appointments/kent`.
  **No audience changes needed** — every rule uses `contains arceostudiocollective.com/appointments`,
  so sub-paths still match. Do **not** edit those five audiences. Add new ones alongside if you
  want club-level control.
- **Piedmont** becomes a separate campaign once the pages are split
  (`URL contains /appointments/piedmont`).
- **`@thearceostudio`** isn't connected to the business — Instagram runs under the Facebook Page identity.
- **Google Ads import** still pending: CSV ready, needs a 1:1 logo.
