# The photographer network

Ten photographers across eight metros turns this from a studio into a distribution
business. It also changes what the outreach engine is *for*: it stops being a way to fill
Jay's calendar and becomes a way to fill eight calendars.

## What you're actually building

You are rebuilding Lifetouch. That is not a criticism — it's the correct read, and it means
the playbook already exists and has 80 years of proof behind it.

Lifetouch's church division ran exactly this shape: centralized booking and sales, local
photographers dispatched to the organization, a standardized capture process so every
directory looked the same, centralized lab and fulfillment, free sitting, revenue from
print orders. It worked at enormous scale, and it died in May 2021 because COVID made
on-site work impossible and Shutterfly declined to restart it — not because the model
stopped working.

So the model is proven, the incumbent is gone, and the buyers still understand the offer.
That's an unusually good position. The risk isn't the idea. It's the two places this shape
of business reliably breaks.

## Failure mode one: pure commission burns the roster

The trap is subtle. A photographer on straight commission earns nothing until prints sell —
but in a centralized model **the photographer doesn't control the sales process**. They
shoot, and then their income depends on a gallery, a follow-up sequence, and a fulfillment
chain they have no hand in. When a month's sessions convert badly, they conclude the
program doesn't pay and take local work instead. You lose them right as the market is
warming up, and re-recruiting costs more than the floor would have.

**Recommendation: a per-session floor plus commission, not pure commission.** A modest
guaranteed rate per session or per shoot day, plus a percentage of net print revenue from
their own sessions. The floor is cheap — it's the difference between a photographer who
takes your Saturday booking and one who takes someone else's — and the commission is what
makes a big church worth their enthusiasm.

Pair it with **territory exclusivity**, which costs nothing and is worth a great deal to
them. One photographer per metro per segment. This matters immediately: four of your ten
are in Orange County and will collide on day one without it.

## Failure mode two: quality drift kills the pitch

Right now the entire competitive argument is *Julian directs you personally, and posing is
not your job*. The moment a network shoots the work, that argument is only true if every
photographer delivers it.

Lifetouch solved this with a rigid capture spec, and it's why their directories looked
consistent across thousands of churches and hundreds of photographers. You need the same
thing, and it's the highest-leverage document in this whole plan:

- **A capture standard** — lighting setup, backdrop, focal length, framing, exposure, the
  shot sequence for an individual, a couple, and a family group.
- **A direction standard.** The posing-is-not-your-job promise is a *behavior*, not a
  setting. It has to be taught, because it's the actual product.
- **A first-shoot review.** Every new photographer's first session gets looked at before
  the files go anywhere near a client.
- **Central retouching**, at least at first. It's the cheapest way to make ten
  photographers' output look like one studio's.

Do not send anyone to a paying organization before their sample work has been reviewed
against the standard. One bad church directory in Raleigh is a review, a refund, and a
market you can't re-enter.

## Who does what

The division of labor is the whole reason this scales:

| Function | Where it lives |
|---|---|
| Prospecting and outreach | **Central.** The Cowork engine, all metros. |
| Booking the organization | **Central.** |
| Member/family scheduling | **Central** — the self-serve booking page. |
| Shooting | **Local photographer.** |
| Retouching | **Central.** |
| Sales and ordering | **Central.** |
| Fulfillment and print | **Central.** |
| Client relationship | **Central**, with the photographer as the face on the day. |

Photographers are delivery capacity. They should not have to prospect, quote, sell, or
chase payment — if they wanted to do all that they'd have their own studio, and several of
them do. **What you're offering them is booked work in their own city with no sales
burden.** That's the pitch to the roster, and it's a genuinely good one for a photographer
who wants shoot days rather than a business.

## How the prints actually sell

This is where the volume model lives or dies, and the right answer differs by segment.

- **Churches and 55+ communities** — families are physically present on the day. An
  in-person viewing right after the sitting converts far better than any follow-up email,
  which is exactly how Lifetouch did it. This is worth building toward, but it needs
  training and it's the harder path to start on.
- **Senior living** — the resident sits and the **adult children buy, usually remotely and
  often several of them**. A central online gallery with a good follow-up sequence is
  genuinely the right tool here, not a compromise.

Start centralized and gallery-based across the board because it's controllable and it keeps
the sales burden off the roster. Layer in-person viewing into the church segment once one
photographer has proven it, then teach it to the rest.

## The classification problem — read this before writing a commission check

**Six of your ten photographers are in California, and this is the single biggest
structural risk to the model.**

Under California's AB5, a worker is presumed an employee unless the hiring entity satisfies
all three prongs of the ABC test. **Prong B requires the work to fall outside the hiring
entity's usual course of business.** A photography business engaging photographers to shoot
sessions it books, brands, prices and fulfills does not obviously clear that bar — the work
is the business. Prong B is where the majority of EDD misclassification assessments are
built, and penalties for willful misclassification run **$5,000 to $25,000 per violation**
before back taxes, benefits, and civil claims.

There is a real counterweight. **AB 2257 (signed September 2020) created a professional
services exemption covering still photographers, photojournalists, videographers and photo
editors**, and removed the old 35-submission cap. Where the exemption applies, the ABC test
is replaced by the older, far more forgiving **Borello** multi-factor test. Qualifying
requires a written contract specifying the rate of pay, the date by which payment will be
made, and the photographer's intellectual property rights.

Two things to be clear-eyed about:

1. **An exemption is not an automatic pass.** It only means you're judged under Borello
   instead — and Borello weighs *control*. This model centralizes booking, pricing,
   standards, retouching, sales and fulfillment. That's a lot of control, and control cuts
   toward employee.
2. **That exemption was written with editorial and freelance content work in mind.** Whether
   it covers "photographer shoots sessions the hiring company sourced, priced, and sells"
   is exactly the question a lawyer should answer, not a research task and not me.

Outside California: Georgia, Tennessee and North Carolina are considerably more permissive.
**Connecticut applies its own ABC test** for unemployment purposes, so Christian's
engagement carries similar questions to the California six.

**Action: talk to a California employment lawyer before the first commission check goes
out.** Not before you build the system, not before you do outreach — but before anyone gets
paid. Ask specifically whether the AB 2257 still-photographer exemption reaches this
arrangement, and what the contract has to say to preserve it. Getting this wrong at ten
photographers is survivable. Getting it wrong at fifty is the business.

None of this is a reason to slow down the outreach engine. It's a reason to have the
contract right before the roster starts earning.

## Onboarding a photographer

Before anyone's first paid session:

- Signed agreement — rate, payment timing, IP rights, territory, standards
- W-9
- Proof of their own general liability insurance, or written confirmation they're covered
  under ours
- **Background check** — required by many senior living operators before a vendor is
  admitted
- **Vaccination records** — same
- Equipment confirmed against the capture standard
- Sample work reviewed and signed off
- First shoot reviewed before delivery

Tracked per photographer in `network/photographers.csv`. A photographer missing any of the
first six cannot be assigned to a senior living booking, and that's the segment with the
best margins — so this list is not paperwork, it's revenue access.

## What the roster changes about the outreach engine

The tier system re-sorts entirely. **Tier A was "drivable from Jay's four markets." It is
now "a metro where a photographer lives."** That promotes a large amount of the country in
one move: Orange County, greater Los Angeles, Sacramento, Atlanta, Nashville, Raleigh and
Connecticut all become in-person markets, and the private clubs in them become Tier A
prospects eligible for the free management shoot — delivered by the local photographer.

Orange County deserves particular attention. Four photographers, an enormous population,
and an unusually high concentration of large 55+ and retirement communities. If any single
metro proves the volume model, it's that one — and you have the capacity there already.
