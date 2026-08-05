# The follow-up call

Five to seven business days after the letter. Not a cold call — a letter exists, and that
is the whole advantage. See `docs/contact-sequence.md`.

Call Tuesday through Thursday, mid-morning. Avoid Monday (the weekend's problems land then)
and Friday afternoon (events). Never call a club during a member event or a tournament.

## Opening — to whoever answers

> "Hi, this is Julian Arceo — I sent a letter to [NAME / your General Manager] last week
> about [the club's centennial / the member directory]. I wanted to make sure it reached
> the right desk. Is [NAME] the person who'd be looking at that?"

Do not open with what you do. Open with the letter. The letter is the credential — it
means you are following up, not intruding, and front desks route follow-ups all day.

## If they ask what it's about

> "I'm a portrait photographer here in [CITY]. The letter was an offer to photograph the
> management team at no charge — no obligation, nothing to sign. It's the simplest way for
> them to see the work."

Short. The free shoot is the whole message and it is easy for a gatekeeper to relay
accurately. A three-sentence description of a member portrait program is not.

## The gatekeeper

The front desk is not an obstacle to get past. They are the person who decides whether the
GM ever hears about this, and they are usually glad to help someone who is polite and
specific.

- Get their **name** and use it. Log it — the second call is a different call once you can
  open with "Hi Sarah, it's Julian again."
- If the GM is out: **"When's a good time to catch them?"** Not "can I leave a message."
  A time is actionable; a message is a coin flip.
- If they offer to take a message, accept it *and* still ask for the good time.
- If they say email is better: **that is the win.** "That'd be great — what's the best
  address for them?" This is the single most valuable sentence in the call, and it is the
  reason the sequence exists.

## Reaching the GM

Assume thirty seconds of attention.

> "I won't keep you. I sent a note last week — I'm a portrait photographer in [CITY], and
> I'd like to photograph your management team at the club one morning, at no charge and
> with nothing attached. You'd have finished portraits of you, your department heads, and
> your board officers to use however you like. If you don't like the work, you've lost a
> morning."

Then stop talking. The offer does not need defending and the silence does the work.

**If yes:** get a date on the call if you can. Otherwise get the email and send two or
three dates the same day.

**If "send me information":** that is a soft no dressed as a yes, unless you convert it.
> "Happy to. What's the best email? And can I ask — is a morning in the next few weeks
> realistic, or is this more of a spring conversation?"

The second question is the one that matters. It gets you a real timeline instead of a
polite filing.

**If no:** ask one question and get off the phone.
> "Understood. Do you already work with a photographer, or is it just not the year for it?"

Both answers are worth having. "We have someone" goes in `owner_notes` and that club
becomes a displacement target for later. "Not this year" is a date to come back on.

## Log every call

Into `outreach/log.csv`, same day, whether or not anyone picked up:

`channel = call` · `call_outcome` · `gatekeeper_name` · `best_time_to_call` · `response`

Set `next_action_date`. A call with no logged next step is a call you will make again by
accident in three weeks, which is how a warm prospect becomes an annoyed one.

## Ceilings

Two attempts to reach a GM by phone per letter. If two calls and a letter produce nothing,
that club goes dormant for six months. It is not a rejection — clubs are busy and timing is
most of this — but a third and fourth call converts a neutral club into one that knows your
name for the wrong reason.
