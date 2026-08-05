# Club season calendar

Two things drive club portrait work, and both are predictable years in advance. This file
exists so we pitch three months early instead of a week late.

Maintained monthly. Seeded 2026-08-05.

---

## The annual rhythm

| Window | What clubs are doing | What we pitch |
|---|---|---|
| **Jan–Feb** | Budgets set, new board seated, annual meeting | Get on the calendar for the year. Cheapest month to be remembered. |
| **Mar–May** | Spring galas, member drives, new-member receptions | Portrait week tied to a member event |
| **Jun–Aug** | Peak club usage, families on site, junior programs | Family sittings — `every-generation` is a summer argument |
| **Sep–Oct** | **Directory rebuild season.** Rosters refresh for the new club year | The core pitch. This is the window everything else is warm-up for |
| **Nov–Dec** | Holiday parties, member appreciation, gift buying | Reorders, gift prints, holiday cards |

**Fall is the whole game.** A club deciding in September who photographs the new directory
made that decision informally in June. Contact in May and June, not September.

## Anniversary triggers

A milestone year is the single best cold-open we have — it is specific, flattering,
verifiable, and it gives the club a *reason* to want good portraits on file. Founding years
are public record, so this list can run decades ahead.

### Live right now — act in 2026

| Club | Founded | 2026 milestone | Status |
|---|---|---|---|
| **Olympia Country & Golf Club** | 1926 | **100th — centennial** | Verify founding year, then treat as top priority. Ten minutes from home base. |
| **Claremont Country Club** (Oakland) | 1896 | **130th** | Adjacent to Piedmont. Pre-eminent Bay Area club. |

A centennial in our closest market is the best outreach opening this business will get for
years. A club marking 100 years is commissioning history: books, walls, displays,
directories. Both of these need confirming against the club's own materials before we lead
a letter with the number — getting a club's founding year wrong in the first sentence
is a self-inflicted disqualification.

### Coming up — set reminders

| Club | Founded | Milestone | Year |
|---|---|---|---|
| Cameron Park Country Club | 1962 | 65th | 2027 |
| The Rainier Club (Seattle) | 1888 | 140th | 2028 |
| Sequoyah Country Club (Oakland) | 1913 | 115th | 2028 |
| Olympia Yacht Club | 1889 | 140th | 2029 |
| The Sutter Club (Sacramento) | 1889 | 140th | 2029 |
| Tacoma Country & Golf Club | 1894 | 135th | 2029 |
| Washington Athletic Club (Seattle) | 1930 | 100th — centennial | 2030 |

Tacoma Country & Golf Club carries a second, better hook independent of the date: it is the
**oldest continuously operating golf club in the West**. Heritage is its identity, and
portraits are heritage.

## How this file gets used

- The monthly maintenance task adds `founded_year` for every newly enriched prospect and
  recomputes the milestone table.
- Anything landing within **12 months** moves that club to `contact_status = signal-waiting`
  and triggers a proposal draft.
- Milestones are checked against the club's own website or newsletter before they appear in
  any outbound letter.
