# Owner confirmation checklist

Things this site needs from you that **must not be guessed**. Nothing on this
list was invented during the August 2026 audit pass — where a fact was missing,
the feature was gated off rather than filled in.

Work top to bottom: section 1 blocks launch, section 2 blocks a specific claim,
section 3 is upside.

---

## 1. Blocking — legal pages are not published until these exist

Fill `LEGAL` in [`src/config.ts`](src/config.ts). Until every required field is
non-empty, `/imprint` and `/privacy` are **not generated**, the footer shows no
legal links, and `npm run build` prints the missing field names.

| Field | What it must contain | Required |
| --- | --- | --- |
| `legalName` | Full legal name of the person or company operating the site | ✅ |
| `businessForm` | e.g. `Einzelunternehmen`, `GmbH`. May stay empty for a sole trader | — |
| `street` | Street and number. A PO box does not satisfy §5 DDG | ✅ |
| `postalCode` | | ✅ |
| `city` | | ✅ |
| `country` | | ✅ |
| `vatId` | USt-IdNr. per §27a UStG — **only if one has actually been issued**. Leave empty otherwise; the row disappears | — |
| `responsibleForContent` | Person responsible under §18 (2) MStV. Usually the same person | ✅ |

Then:

- [ ] Have the finished Impressum and privacy notice reviewed for your actual
      business setup. [`src/data/legal.ts`](src/data/legal.ts) describes only how
      *this site* behaves (no cookies, no analytics, no third-party scripts,
      GitHub Pages hosting, theme preference in `localStorage`) — all verifiable
      against the source. It is a factual description, not legal advice.
- [ ] Confirm `HOSTING_PROVIDER` in `src/data/legal.ts` still matches where the
      site is actually served from.
- [ ] Update `LEGAL_UPDATED` in the same file when you change the text.

**Reference:** [§5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html) ·
[GDPR Art. 13](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A02016R0679-20160504)

---

## 2. Claims currently on the site, or removed pending your confirmation

### Removed — decide before restoring

- [ ] **Years of experience.** `CAREER_START_YEAR` rendered "15 years" while
      marcocasanova.de and the CV both derive from 2015 and say "11+". The number
      is now gone from the site entirely rather than shipping a figure that
      contradicts your own portfolio. To restore it, pick one start year and make
      the site, the portfolio and the CV agree — the specific number matters far
      less than the three not disagreeing.

- [ ] **Case study links for `stratos-one`, `kin-relay` and `raumhub`.** All
      three returned 404 on marcocasanova.de (verified 13 Aug 2026), so
      `caseStudy: false` now suppresses the link on those cards. Publish the case
      studies and flip the flag, or leave them linkless. **Do not flip a flag
      without requesting the URL first.**

### Live — confirm they are accurate

- [ ] **"7 systems in production."** Derived from `inProduction` in
      [`src/data/projects.ts`](src/data/projects.ts). Excludes Stratos One
      (active development) and Bavarian Defence (personal project). Confirm all
      seven reached real users.
- [ ] **"11 interface languages."** Kin Relay. Confirm the count.
- [ ] **"4 reused foundations."** Auth, config, UI, utilities. Confirm.
- [ ] **Project statuses and version numbers** (`Released v1.0.1`, `v1.2.1`,
      `Production`, `Active development`) are each visible on a card.
- [ ] **"Under 48 hours" reply time** — appears on the home page and the contact
      page. It is a promise; confirm you can keep it.
- [ ] **AI and confidentiality policy** — published in full, in all three
      locales, in `principal.aiPolicy` and FAQ item `ai-tools`
      ([`src/i18n/ui.ts`](src/i18n/ui.ts), [`src/data/faq.ts`](src/data/faq.ts)).
      Confirmed as matching practice on 13 Aug 2026. Re-read it if your tooling
      changes.
- [ ] **Ownership and continuation terms** in the FAQ ("you own the code and
      documentation", "the diagnostic ends with a document, not a retainer").
      These are commercial terms — confirm they match what your contracts say.

### Still missing

- [ ] **Spoken and written client languages.** No claim about meeting fluency in
      any language appears anywhere on the site, deliberately. Confirm which
      languages you work in and a seventh FAQ entry can be added — the `where`
      item in `src/data/faq.ts` currently answers location and overlap only.

---

## 3. Not blocking, but each one is worth more than any copy change

- [ ] **Two approved testimonials**, with attribution you are allowed to publish.
      There is no testimonial section on the site at all right now, because an
      invented one is worse than none. Supply quotes and it becomes a section.
- [ ] **A fixed price for the Technical Delivery Diagnostic.** The offer data in
      [`src/data/offers.ts`](src/data/offers.ts) already carries a `price` field,
      `null` on all three offers. Set it and the price renders — no template
      change, no structured-data change. An entry offer without a published price
      still requires a conversation to find out what it costs, which is the
      friction the offer exists to remove.
- [ ] **Local case-study pages.** Six cards currently send the reader to
      marcocasanova.de, off the domain, at the highest-intent click on the page.
- [ ] **A working `@stratos-one.eu` address.** The site currently publishes
      `stratosone.apps@gmail.com` (your choice, 13 Aug 2026). A domain address
      with SPF, DKIM and DMARC reads as a more durable business and improves
      deliverability. Change one line in `SITE.email` once the mailbox works —
      it feeds the footer, the contact page, both mailto links and the JSON-LD.
- [ ] **Request reindexing** in Search Console after deploying. The `/agents`
      URLs have moved, every canonical now carries a trailing slash, and the root
      page still shows a stale "Bald geht's los" snippet.
- [ ] **Replace the root meta-refresh with an edge redirect.** `/` currently
      serves a `noindex` HTML gateway that bounces to a locale, because GitHub
      Pages cannot issue a 301. A CDN in front of Pages could do it properly.
      This is a hosting decision, not a code change — nothing was migrated.

---

*Last reviewed: 13 August 2026.*
