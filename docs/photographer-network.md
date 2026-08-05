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
That's an unusually good position, and with a trained roster that sells in person, most of
what normally sinks this shape of business is already handled.

## The model as it actually stands

Three things resolved that change the economics materially:

- **Sales are in-person, not gallery-led.** The photographer sells in the room, right after
  the sitting. Galleries are an addition, not the mechanism. IPS converts at a different
  order of magnitude than gallery follow-up, and it means the photographer's earnings are
  in their own hands rather than downstream of a central process they can't influence.
- **There is a per-session fee** on top of commission, so nobody is working a slow day for
  nothing.
- **The roster is trained, not recruited cold.** All ten are former colleagues from EA who
  learned this way of working from Jay directly. They shoot *and* they sell — the second
  half being the part most photographer networks never solve.

That combination removes the usual reason these networks fail. The remaining risk is not
motivation; it's consistency at distance.

**Territory exclusivity still needs deciding.** It costs nothing and is worth a lot to a
photographer. Four of the ten are in Orange County and will collide without a split.

## The one thing still worth building: the capture standard

Trained people still drift apart over a year in eight cities without a written reference —
not from carelessness, but because there's nothing to check against. Lifetouch's rigid
capture spec is why their directories looked consistent across thousands of churches and
hundreds of photographers.

Since the roster already knows the method, this is a *transcription* job rather than a
training programme, and Jay is the only person who can write it. It's the highest-leverage
document in the plan and probably a day's work:

- **A capture standard** — lighting setup, backdrop, focal length, framing, exposure, the
  shot sequence for an individual, a couple, and a family group.
- **A direction standard.** The posing-is-not-your-job promise is a *behavior*, not a
  setting. It has to be taught, because it's the actual product.
- **The sales conversation**, since they already do it — what gets shown, in what order, how
  the complimentary print is framed. Written down, it becomes teachable to photographer
  eleven and twelve.
- **Central retouching**, at least at first. Cheapest way to make ten photographers' output
  look like one studio's.

It also becomes the field knowledge base — see `docs/system-architecture.md` §10. A
photographer texting from a job with an awkward room gets an answer out of this document.

## Who does what

The division of labor is the whole reason this scales:

| Function | Where it lives |
|---|---|
| Prospecting and outreach | **Central.** The Cowork engine, all metros. |
| Booking the organization | **Central.** |
| Member/family scheduling | **Central** — the self-serve booking page. |
| Shooting | **Local photographer.** |
| Retouching | **Central.** |
| Sales | **Local photographer, in person, at the session.** |
| Order processing, print and fulfilment | **Central.** |
| Client relationship | **Central**, with the photographer as the face on the day. |

Photographers shoot and sell. They should not have to prospect, quote, chase payment, or
build a client base. **What's on offer is booked work in their own city, with the finding
and the fulfilment handled.** For a photographer who wants shoot days rather than a
business, that's a genuinely good deal.

## How the prints actually sell

In person, at the session, by the photographer. That's the mechanism.

One segment inverts it. **In senior living the resident sits and the adult children buy —
usually remotely, often several of them.** There is frequently nobody in the room with a
credit card and an emotional stake. That segment needs a gallery and a family follow-up
sequence bolted onto the IPS process, not instead of it, and it's worth designing
deliberately because the per-session value there is the highest in the plan.

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
