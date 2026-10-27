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

- ❌ **Sitting length is NOT twenty minutes.** 20 is the *floor of a range*.
  Sessions run **20 - 120 minutes**, set by session style and party size.

**Program facts** — all from the Arceo deck, `"No-contact" Program Condensed`
(Drive, `1EkoFtLa8fuGIj_xJXwikcgI-4mVjFKPwYPgIkxBhN9g`). Use this as the source
of truth for member-facing copy:

- **Two session styles**, chosen at booking:
  - *Business and Branding* — efficient; Office Space background, or White/Gray
    background for .PNG promotional use.
  - *Family and Legacy* — longer; pre-shoot consultation by text, multiple
    curated poses, thorough review, optional online gallery for families.
- Both styles produce **one shared hand-painted background portrait** for Club
  use: membership album, POS system, staff training directory.
- **No sitting fees.**
- **Complimentary "club-edit"** retouch — keeps members recognizable to team
  members while softening unwanted details. Extra retouching sold for personal use.
- **Review happens in the same session** and is usually the longest portion.
- **Optional packages from $150**, bundles and bulk discounts, no minimums.
- Booking via website, form, email, text, or call. Members get a **confirmation
  email plus a courtesy text** offering a pre-session consultation.

**PDC contact:** Dael Szuch, `dszuch@drivingclub.com` (handled the 2026-2027
proposal). Backup: Rachael Freedland, `rfreedland@drivingclub.com`. Both are
staff addresses — confirm what members should be given before publishing.

**Still unconfirmed** (marked `<span class="fill">`, gold highlight, cannot ship
unnoticed): dates, times, the Front Desk number, and the alternate-time contact.

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
- **Search and AI visibility** (knowledge panels for Julian and the studio, AI-search
  recommendations to private clubs) started 27 October 2026. See `docs/visibility/plan.md`.
  Blocked on the FILL items in `docs/visibility/entity-facts.md`. Connecting `@thearceostudio`
  to the business portfolio is step 11 there, and it also fixes the Instagram identity issue above.
