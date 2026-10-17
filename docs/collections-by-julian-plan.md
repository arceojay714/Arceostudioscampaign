# Collections By Julian: design draft (not built)

Gallery repo: `arceojay714/arceo-gallery` (Flask, `server.py`, `gallery.html`, `frames.html`, `checkout.html`, `catalog.py`).
Status: plan only. Nothing in the gallery has been changed.

## Naming collision to avoid
"collections" already means two things in the gallery code: the photo tabs (Printed / Lettered / Pinned / Remaining,
`g["collections"]`) and the club staff headshot galleries (`kind: "collections"`). The new feature is called **offers**
internally (`g["offers"]`, `kind: "offer"` cart lines, `/api/admin/offers`). Client-facing name stays "Collections By Julian".

## Data
`gallery.json` gets `offers: [...]`:

    {"id": "c1", "title": "Collection 1", "price": 650,
     "items": [
       {"type": "print", "sku": "PS-1114", "qty": 2, "shots": ["A", "E"]},
       {"type": "digital", "qty": 4, "choice": true},
       {"type": "print", "sku": "PS-46", "qty": 2, "choice": true}],
     "note": "optional line from Julian"}

A "whole retouched gallery" collection uses `{"type": "digital_all"}`.
The hold ends when the gallery closes (`gallery_state`, 14 days from creation), so no second clock.

## Checkout
- Browser sends only `{kind: "offer", offer_id}`. `catalog.reprice_cart` looks the offer up on the gallery and charges
  `offer.price`. The browser never supplies a price.
- Shipping: `shipping_for` uses the book value of the offer's PRINT items (digitals excluded) times 3.5%, cap $100,
  waived if the bundle holds a 20x24 or larger. Same rule as today.
- Tax: the app does not compute tax today (terms say it applies by delivery address). Offers follow whatever happens now.
- One of each offer per order. Offer digitals are not also priced through DIG_BUNDLES.
- Order record is flagged `needs_finalization` (shots and crops) and `digitals_pending`.

## Where it shows
- Gallery main page: a "Collections By Julian" panel above the photo tabs, only on galleries that have offers.
  Shows contents, bundle price, book value, "held through <close date>".
- Frame Studio: a slim banner and cart-peek rendering of the offer line, injected through `serve_ported()` so
  `frames.html` stays in sync with the proof printer.
- Checkout: line item with its contents, the hold date, and "Julian will contact you to finalize your shots and crops."

## Per-client routine
1. Julian tells Claude: client, gallery, collections (as he labels them).
2. `tools_set_offers.py --token T --offers offers.json` posts to `/api/admin/offers` (admin key).
3. Claude drafts the gallery email (offers block, held-through date) as a Gmail draft. Julian sends it.
