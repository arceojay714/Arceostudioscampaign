# Club outreach pipeline

How we go from "there are private clubs near us" to "a named person at that club is
reading a proposal written for them." Referenced by `cowork-playbook.md` §1.

## The shape of it

```
discover → enrich → wait for a signal → write to the signal → send → follow up 3x → dormant
```

The step people skip is **wait for a signal**. A proposal that arrives the month a club is
rebuilding its member directory reads as helpful. The identical proposal sent in a random
week reads as spam. Same document, completely different outcome — the timing is the pitch.

Our Meta creative already argues this exact thing to members (`name-in-it`,
`still-missing`, `everything-on-file`). The club-side pitch is the same argument aimed one
level up: *your directory is incomplete, and completing it is a member benefit you can
offer at no cost to the club.*

## Volume, honestly

There are maybe 50–70 real prospects within range of the four markets. That's not a list
you blast — it's a list you work. Ten well-researched contacts a month beats four hundred
generic ones, and it's the only version that doesn't torch the domain's sending reputation
or the studio's name in a small regional club community where GMs talk to each other.

Practical guardrails:

- **Max 10 new cold contacts per week**, from one mailbox.
- **Three touches maximum**, then dormant for six months.
- **Every commercial email carries a real postal address and a working opt-out**, per
  CAN-SPAM. This isn't optional and it applies to B2B.
- **Never scrape or guess an email.** If it isn't published, that club gets a letter.
  Guessed addresses bounce, and bounces are what actually kill deliverability.
- **Physical mail has no such limits** and, for this audience, a better response rate.
  Lean into it.

## Prospect record schema

`outreach/prospects.csv`:

| field | notes |
|---|---|
| `club_slug` | stable id, e.g. `olympia-country-golf` |
| `club_name` | full legal/display name |
| `club_type` | country · golf · yacht · athletic · city · tennis · social · lodge · other |
| `market` | olympia · kent · cameron-park · piedmont |
| `city`, `state` | |
| `drive_minutes` | from the nearest market anchor |
| `member_count_est` | and where the estimate came from |
| `founded_year` | drives the anniversary trigger |
| `website` | |
| `newsletter_url` | public member newsletter/magazine if one exists |
| `newsletter_cadence` | monthly · quarterly · none-found |
| `gm_name`, `membership_director`, `comms_contact` | named humans, not "info@" |
| `email`, `email_source` | published address + the URL it was published on |
| `email_status` | found · needs_mail · form-only |
| `mailing_address` | |
| `contact_status` | new · enriched · signal-waiting · contacted · replied · won · dormant |
| `last_touch_date`, `touch_count` | |
| `signal_notes` | link to the entry in `signals.md` |
| `owner_notes` | anything Jay knows that research can't find |

`outreach/log.csv` records each touch separately: `club_slug`, `date`, `channel`,
`touch_number`, `what_was_sent`, `response`. Keeping touches out of the prospect row is
what makes the follow-up task reliable.

## Sources

**Verify each of these on the first research run** and record the working URL and cadence
in `research/sources.md`. Publications get renamed, merged, and paywalled; this list is a
starting set, not a verified index.

### Trade / industry
- Club + Resort Business
- BoardRoom Magazine — club governance and GM-level concerns
- National Club Association (NCA)
- Club Management Association of America (CMAA), and specifically its **regional chapters** —
  Pacific Northwest for Olympia/Kent, the Northern California chapters for Cameron Park and
  Piedmont. Chapter newsletters name new GMs, which is our single best trigger.
- Club Benchmarking — publishes membership-trend data useful as proposal evidence

### Local press (where clubs actually announce things)
- Olympia: The Olympian, Thurston County chamber
- Kent: Kent Reporter, Puget Sound Business Journal, Kent chamber
- Cameron Park: Mountain Democrat, Sacramento Business Journal, El Dorado County chamber
- Piedmont: Piedmont Exedra, Piedmont Post, East Bay Times, Piedmont chamber

### The clubs themselves — highest value, least contested
- Public member newsletters and club magazines posted on club websites
- Club event calendars — galas, member appreciation, new-member receptions
- Club social accounts, which announce renovations and anniversaries first
- Board minutes, where clubs post them

### Adjacent org types worth the same treatment
Rotary, Elks, Masonic lodges, Junior League chapters, university and alumni clubs, yacht
and sailing clubs, historical societies. Smaller budgets, but the directory argument lands
harder because they genuinely have no photographer relationship.

## Proposal structure

One page. If it's two pages a GM forwards it to nobody.

1. **The signal, first sentence.** "I saw the club is rebuilding the member directory for
   the centennial." If there's no signal worth naming, the proposal isn't ready to send.
2. **The gap, one sentence.** Names in the directory, no faces beside them.
3. **What we do on site.** A room at the club, a scheduled portrait week, members book
   their own slot. Say plainly what the club has to provide — a room and a newsletter
   mention — because "no work for your staff" is the actual product.
4. **What it costs the club.** Nothing. No sitting fee to members, complimentary 5x7,
   revenue comes from optional prints. That structure is already proven in the Tier 3
   creative and it's the thing that gets a yes from a board.
5. **Proof.** One line naming clubs served, or if that list is thin, one line about Julian
   directing people who believe they photograph badly — which every board member privately
   is.
6. **One ask.** A fifteen-minute call, or a date to hold. Never a menu of options.
7. **Signature block** with postal address and opt-out if it's email.

Voice: plain, unhurried, no exclamation marks, no "excited to," no em dashes. Same
register as the ad copy — the confidence in that deck comes from short declaratives, not
enthusiasm.

## Mail, specifically

For `email_status = needs_mail` clubs, the task produces a print-ready PDF letter plus an
address block. Two viable paths from there:

- **Manual** — print, sign, stamp. Under ten a week this is genuinely fine, and a wet
  signature outperforms.
- **Print-and-mail API** (Lob, PostGrid, Click2Mail) — hands off physical fulfillment.
  Worth setting up only once volume is steady. Note that this is the one place in the
  playbook where a task would spend money on its own, so it stays human-triggered.

A letter to a club GM should include a physical proof — one printed portrait, or a card
with real print quality. The medium is the argument for a print business.

## What "won" looks like

A signed portrait week: a date on the club calendar, a room, and a newsletter mention.
Everything after that is `cowork-playbook.md` §5.5 — filling the slots — which is a
completely different and much easier problem.
