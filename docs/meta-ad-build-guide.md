# Meta ad build guide — 11 ads

Source of truth for the copy deck. Transcribed from the build-guide artifact so it
survives without the artifact URL.

Tier 1 gets 5 ads · Tier 2 gets 3 · Tier 3 gets 3. **11 concepts, not 12** —
`hate-photos` was intentionally cut after review.

## Per-ad click path

1. **Ad name** — use the concept slug (`name-in-it`, `camera-roll`, …).
2. **Identity** — Facebook Page → Arceo Studio Collective (`1037096422811161`);
   Instagram → Use Facebook Page; Threads → Use Facebook Page.
   *Defaults to Purity Palm / puritypalm. Change on every ad.*
3. **Ad setup** → **Single image or video** (three sizes of the *same* concept, not a carousel).
4. **Add media** → select the 3 images from the library by filename.
5. **Edit placements** — map `1080x1350` → Feed, `1080x1080` → square, `1080x1920` → Stories/Reels only.
   The 9:16 file cuts off the Arceo logo if it lands in Feed.
   *Fallback:* the guide notes that attaching only `1080x1350` still ships a valid ad and Meta
   crops the rest — but that loses the logo-safe framing, so treat it as a last resort, not the plan.
6. **Text** — paste, don't retype. Limits: primary 125, headline 40, description 30.
7. **Website URL** `https://arceostudiocollective.com/appointments` · **CTA** Book Now.
8. **Turn OFF all Advantage+ creative enhancements** — image expansion, touch-ups, overlays, animation.
9. **Preview**, confirm advertiser name reads Arceo Studio Collective, then **Close** (not Publish).

To add the 2nd/3rd/4th ad to a tier: `···` next to the *ad set* name → **Create ad**.

## The eleven ads

Character counts are verified against Meta's limits.

### Tier 1 — Operational (0–3d) · 5 ads

**`name-in-it`**
- Images: `meta_name-in-it_1080x1350.jpg` · `meta_name-in-it_1080x1080.jpg` · `meta_name-in-it_1080x1920.jpg`
- Primary (93): The club directory is being rebuilt this fall. One portrait on file is all it needs from you.
- Headline (37): Your Name Is In It. Your Face Is Not.
- Description (20): One portrait on file

**`everything-on-file`**
- Images: `meta_everything-on-file_1080x1350.jpg` · `meta_everything-on-file_1080x1080.jpg` · `meta_everything-on-file_1080x1920.jpg`
- Primary (83): Your name, your account, your locker. The club directory is missing only one thing.
- Headline (36): Everything On File But Your Portrait
- Description (18): Complete your file

**`still-missing`**
- Images: `meta_still-missing_1080x1350.jpg` · `meta_still-missing_1080x1080.jpg` · `meta_still-missing_1080x1920.jpg`
- Primary (89): The club is rebuilding its directory this fall. A portrait on file is all it asks of you.
- Headline (32): Still Missing From the Directory
- Description (11): Take a slot

**`all-it-takes`**
- Images: `meta_all-it-takes_1080x1350.jpg` · `meta_all-it-takes_1080x1080.jpg` · `meta_all-it-takes_1080x1920.jpg`
- Primary (73): Staff greet you by name from day one. A portrait on file is all it takes.
- Headline (34): A Portrait on File Is All It Takes
- Description (17): Reserve your slot

**`know-each-other`**
- Images: `meta_know-each-other_1080x1350.jpg` · `meta_know-each-other_1080x1080.jpg` · `meta_know-each-other_1080x1920.jpg`
- Primary (79): A membership that recognizes itself. Your portrait is what makes that possible.
- Headline (23): Know Each Other By Name
- Description (17): Add your portrait

### Tier 2 — Hesitation (4–9d) · 3 ads

**`camera-roll`**
- Images: `meta_camera-roll_1080x1350.jpg` · `meta_camera-roll_1080x1080.jpg` · `meta_camera-roll_1080x1920.jpg`
- Primary (72): A camera roll is a pile of moments. A portrait is a decision to be seen.
- Headline (34): An Entire Camera Roll, No Portrait
- Description (13): Sit for yours

**`every-generation`**
- Images: `meta_every-generation_1080x1350.jpg` · `meta_every-generation_1080x1080.jpg` · `meta_every-generation_1080x1920.jpg`
- Primary (75): Spouse, children, grandchildren. Every one of them is welcome in the frame.
- Headline (29): Every Generation In One Frame
- Description (24): Every generation welcome

**`posing-is-not-your-job`**
- Images: `meta_posing-is-not-your-job_1080x1350.jpg` · `meta_posing-is-not-your-job_1080x1080.jpg` · `meta_posing-is-not-your-job_1080x1920.jpg`
- Primary (85): Almost everyone says they photograph badly. Directing you is Julian's job, not yours.
- Headline (22): Posing Is Not Your Job
- Description (19): Retouching included

### Tier 3 — Soft Close (10–14d) · 3 ads

**`room-still-open`**
- Images: `meta_room-still-open_1080x1350.jpg` · `meta_room-still-open_1080x1080.jpg` · `meta_room-still-open_1080x1920.jpg`
- Primary (88) — **rewritten**: Your portrait session at the club is still open. No sitting fee and a complimentary 5x7.
- Headline (22): The Room Is Still Open
- Description (14): No sitting fee

**`still-a-time`**
- Images: `meta_still-a-time_1080x1350.jpg` · `meta_still-a-time_1080x1080.jpg` · `meta_still-a-time_1080x1920.jpg`
- Primary (55) — **rewritten**: Slots remain at the club. Pick one that suits your day.
- Headline (29): There Is Still A Time For You
- Description (14): Pick your time

**`door-not-closed`**
- Images: `meta_door-not-closed_1080x1350.jpg` · `meta_door-not-closed_1080x1080.jpg` · `meta_door-not-closed_1080x1920.jpg`
- Primary (82): No rush and no obligation. Whenever you are ready, the room is set up and waiting.
- Headline (23): The Door Has Not Closed
- Description (22): Whenever you are ready

## Rewrites

The two **rewritten** primary texts (`room-still-open`, `still-a-time`) are approved changes that
strip "Olympia" and "Butler Cove Room" so the ad is safe to show a Kent or Cameron Park member.
Everything else is verbatim from COPY_DECK.

## Source files

Local export path: `/Users/eaphoto/Downloads/output/<tier folder>/`

- Tier 1 → `tier1-operational/`
- Tier 2 → `tier2-hesitation/`
- Tier 3 → `tier3-soft-close/`

Ignore every `google_` file — those are for the Google import, not Meta.

## Pre-launch checklist

- Every ad's preview reads **Arceo Studio Collective**, never Purity Palm.
- Tier 1 holds 5 ads, Tier 2 holds 3, Tier 3 holds 3.
- Each ad set still shows its own audience: 0-3d / 4-9d / 10-14d, each with **Booked 30d** excluded.
- No ad set has **Advantage+ custom audience** checked.
- Then **Review and publish**, and read Meta's summary before confirming.

**Expect a delivery warning.** All three audiences are under 1,000 people, so Meta flags
"Your custom audience is too small." The ads will publish; delivery may be thin until the
newsletter drives more traffic. That's volume, not misconfiguration. Give it a few days
before judging the creative.
