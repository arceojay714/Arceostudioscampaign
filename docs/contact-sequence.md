# Contact sequence — mail, then call, then email

Supersedes the email-first assumption in the first draft of the outreach pipeline. That
draft treated a physical letter as the fallback when no email could be found. That was
backwards for private clubs.

## Why mail is the primary channel, not the fallback

Private clubs deliberately do not publish staff contact information. That is not an
oversight in their website — it is the product. A club whose value proposition is
discretion is not going to list the General Manager's direct email for vendors to harvest.

So the honest position is: **for most clubs, no amount of research will produce an email
address, because one does not exist publicly.** A research task that keeps hunting for one
is burning time against a wall.

What *is* public, reliably:

- **The mailing address.** Every club has one, and it's on every listing.
- **The main phone number.** Same.
- **The GM's name, often.** Not from the club's own site, but from CMAA chapter rosters,
  BoardRoom and Club + Resort hiring announcements, LinkedIn, club newsletters, and local
  press. Worth looking for. Not worth blocking on.

That is enough to run the sequence.

## The sequence

```
1. LETTER  →  2. CALL (5-7 business days later)  →  3. EMAIL (now solicited)
```

### 1. The letter

Goes to a named person where we have one, and to **"General Manager"** by title where we
don't. A letter addressed to a title still gets opened and still reaches the right desk.
An email to `info@` does neither.

Tier A letters lead with the free management shoot. Everything else follows the structure
in `club-outreach-pipeline.md`.

Log it: `channel = mail`, `touch_number = 1`, and set `next_action_date` to five business
days out. That date is what puts the call on the list.

### 2. The call

**This is the step that makes the whole thing work, and it is not a cold call.** A letter
arrived a week ago with the club's name and, ideally, a centennial in the first line. The
call has a reason to exist:

> "I sent a letter to [NAME / the General Manager] last week about the club's centennial —
> I wanted to make sure it reached the right desk."

That sentence does three jobs: it is true, it is specific to that club, and it gives the
front desk something to do other than deflect. See `outreach/call-script.md`.

Three outcomes, all of them useful:

- **Reached them.** Offer the free management shoot on the spot. Ask for the email to send
  dates.
- **Didn't reach them, but got the email.** That's the win condition for this call. The
  gatekeeper will often give you a GM's email once there's a letter to reference, because
  now they're routing something rather than admitting a stranger.
- **Neither.** Get a name, get a better time to call, log it, try once more.

### 3. The email

Only after the call, and only to an address someone gave us.

This solves the problem the first draft was worrying about. **Every email in this sequence
is solicited**, so the deliverability risk mostly evaporates, the CAN-SPAM exposure drops
to routine commercial-message hygiene, and the reply rate is not comparable to cold email
because it isn't cold email. The ten-contacts-a-week ceiling was a cold-email constraint
and it does not apply here. The real ceiling is how many calls Jay can make and how many
free shoots he can actually deliver.

Send what was promised on the call. Nothing extra, no attachments the club didn't ask for.

## What this changes in the files

`prospects.csv` field meanings shift:

| Field | Was | Now |
|---|---|---|
| `email_status` | found · needs_mail · form-only | **`unknown` is the expected default.** Becomes `given` only when a human hands it over on the call. `found` only if genuinely published. |
| `email` | target of enrichment | output of the call, not an input to the letter |
| `gm_name` | required to contact | nice to have; letter goes to the title without it |
| `mailing_address` | one field among many | **the one field that must be right** |

New fields for `log.csv`: `channel` already covers mail/call/email. Add `call_outcome`,
`gatekeeper_name`, and `best_time_to_call` — the last two are what make a second call work.

## Enrichment, retargeted

The weekly enrichment task stops hunting for emails and instead confirms, per club:
verified website · exact mailing address · main phone · GM name if findable in one or two
sources · newsletter URL. Then it stops. A club with an address and a phone number is
fully ready to contact, and further research on it is procrastination.
