# Arceo Studio Collective — campaign repo

Read this before touching anything in the Meta ad account.

## ⚠️ The account trap — verify first, every session

Two ad accounts share the **display name** `161416617618956`. The name is not the ID.

- **Correct ad account: `1570584327857179`** (portfolio: G.L.O)
- Direct link: `https://adsmanager.facebook.com/adsmanager/manage/campaigns?act=1570584327857179`
- The account picker must show **`(15705…)`** in parentheses.
- If it shows **`(16141…)`** you are in the wrong account and none of the campaign state below exists there.

## ⚠️ Identity defaults to the wrong brand

Every new ad opens with Facebook Page = **Purity Palm** and Instagram = **puritypalm** (leftover G.L.O page).
Must be changed on **every single ad** to:

- Facebook Page → **Arceo Studio Collective**, ID `1037096422811161`
- Instagram profile → **Use Facebook Page**
- Threads profile → **Use Facebook Page**

`@thearceostudio` is not connected to the business, so Instagram placements ride the Facebook Page identity.

This is the single most likely thing to slip. Check it in the ad preview: the advertiser name above the ad must read *Arceo Studio Collective*.

## ⚠️ Close, never Publish

Meta shows a "Publish draft items?" prompt on closing the editor. Press **Close**, not **Publish**, until all 11 ads are filled. Publishing an imageless ad sends a broken ad to review.

## Hard rules

- **Advantage+ audience: OFF.** The "Apply recommendation: Advantage+ audience" checkbox is pre-checked on every duplicate. Leaving it on spends retargeting budget on strangers.
- **Advantage+ creative enhancements: OFF** — image expansion, touch-ups, overlays, animation. They violate the design spec.
- CTA is always **Book Now**. Meta's button text is a fixed dropdown; the COPY_DECK button strings (e.g. "ADD YOUR PORTRAIT") live *inside the image art*, so the two never need to match.
- URL is always `https://arceostudiocollective.com/appointments`.

## Client gallery

Our own custom-built online gallery (not Pixieset/ShootProof/etc.): **https://gallery.arceoclubs.com**

- Its code is not in this repo. Before changing it, find its repo and attach it to the session.
- Planned feature: **"Collections By Julian"**, a same-day bundled price held for two weeks while a client's gallery is open. Bundle price + shipping + tax; digitals do not count toward shipping. Multiple collections per gallery. Client still texts/emails Julian to finalize shots and print crops; digitals are released into the gallery after selections.

## Where the detail lives

- `docs/meta-ad-build-guide.md` — all 11 ads, every field, paste-ready
- `docs/campaign-state.md` — what's built, what's open

## Pixel

`4638667999697613` — live, receiving events.
