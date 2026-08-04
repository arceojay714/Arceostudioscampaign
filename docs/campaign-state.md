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

## Open threads

- **Booking pages splitting** to `/appointments/olympia` and `/appointments/kent`.
  **No audience changes needed** — every rule uses `contains arceostudiocollective.com/appointments`,
  so sub-paths still match. Do **not** edit those five audiences. Add new ones alongside if you
  want club-level control.
- **Piedmont** becomes a separate campaign once the pages are split
  (`URL contains /appointments/piedmont`).
- **`@thearceostudio`** isn't connected to the business — Instagram runs under the Facebook Page identity.
- **Google Ads import** still pending: CSV ready, needs a 1:1 logo.
