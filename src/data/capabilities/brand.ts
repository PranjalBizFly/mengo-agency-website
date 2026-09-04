import type { Capability } from "@/lib/types";

/**
 * Brand capabilities.
 *
 * Half of this group is decision — positioning, identity, tone — and half is
 * administration: keeping the decision applied consistently by people who were
 * not in the room when it was made. Only the second half is structured here.
 * The creative decisions stay with the people who are paid to make them, and
 * every page in this group says so.
 */
export const brandCapabilities: Capability[] = [
  {
    kind: "capability",
    slug: "brand",
    title: "Brand",
    navLabel: "Brand",
    group: "brand",
    depth: "staged",
    headline: "The record of what the brand actually is",
    lead:
      "Not the strategy and not the logo files — the record. What this brand is called, what it stands for, how it sounds, what it looks like and who decided. Most clients have all of it and none of it in one place.",
    summary:
      "One current record of what a client's brand is: name, promise, voice, visual basics and who owns the decisions.",
    seoTitle: "Brand — one current record of a client's brand",
    seoDescription:
      "Hold what a client's brand actually is in one current record: promise, voice, visual basics and decision ownership, so it stops being re-answered from memory.",
    updated: "2026-09-02",
    meaning:
      "The central brand record: what the business is called and why, the promise it makes, the tone it speaks in, the visual basics, and who has authority over changes to any of it.",
    job: "Make the question 'what is this brand' answerable without asking somebody.",
    whyAgencies: [
      {
        label: "Brand questions are a weekly interruption",
        body: "Which typeface, is this the current logo, can we say this — asked constantly, answered from memory, answered slightly differently each time.",
      },
      {
        label: "Clients cannot find their own brand material",
        body: "It exists, in an email from a designer two years ago. The agency ends up as the de facto custodian without ever agreeing to be.",
      },
      {
        label: "Decisions decay without a record of who made them",
        body: "Half of brand drift is not disagreement but ignorance: nobody knew a decision had been made, because the decision lived in a meeting.",
      },
    ],
    inputs: [
      "The brand's name, its origin and whether it is protected",
      "The promise the business makes, in the client's words",
      "Tone: how they sound, and specifically what they never say",
      "Who is authorised to approve a change to any of it",
    ],
    outputs: [
      "A single current brand record covering promise, voice and visual basics",
      "A decision log, so a change is attributable rather than mysterious",
      "A shareable summary a client's own staff can be pointed at",
      "Explicit gaps where the brand has never actually been defined",
    ],
    sequence: [
      { title: "The agency gathers what exists", body: "Usually scattered: a deck, an old brand book, a designer's files, and three people's memories.", lane: "agency" },
      { title: "It is consolidated into one record", body: "One current version, with the superseded material marked as superseded.", lane: "mengo" },
      { title: "Contradictions are surfaced", body: "Where two sources disagree, the record says so rather than picking one silently.", lane: "mengo" },
      { title: "The agency resolves them with the client", body: "Someone has to decide which version is current. That is a conversation, and it usually needs the client's leadership.", lane: "agency" },
      { title: "The client confirms authority", body: "Who may approve a change is a governance decision the client makes, not an assumption the agency inherits.", lane: "agency" },
    ],
    judgement: [
      { label: "Which version is actually current", body: "Clients frequently have three, all in use, none formally retired. Choosing is a conversation with consequences." },
      { label: "Whether the brand needs work or just a record", body: "Sometimes the consolidation reveals there is no brand to record, which is a much larger and more valuable finding." },
      { label: "What to leave undefined", body: "Over-specifying a small client's brand produces a document nobody follows. Knowing where to stop is judgement." },
    ],
    limits: [
      "It does not create a brand. It records one, and where there is nothing coherent to record it says so.",
      "It does not make design or naming decisions, and it should not be asked to.",
      "It does not check trademarks. Whether a name is protected or infringing is a legal question for the client's counsel.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "useful",
        headline: "Find out whether the brand exists before you market it",
        situation:
          "Your first client has a logo and a website and has never articulated what the brand stands for, and you are about to write copy for it.",
        problem:
          "New agencies inherit an undefined brand and then invent one implicitly through the copy they write, which the client only notices when it does not sound like them.",
        mengo: [
          "A structure that makes the undefined parts visible immediately",
          "One place to record what you establish, rather than it living in your drafts",
          "A summary you can put in front of the client to correct",
        ],
        agency: [
          "The conversation that establishes what the brand actually means to them",
          "Deciding whether the engagement needs brand work before content work",
        ],
        outcome:
          "You find out in week one, not month three, that the brand has never been defined.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "Stop being the only person who knows the client's brand",
        situation:
          "You hold several clients' brands in your head — tone, colours, what they hate — and you are the single point of failure for all of it.",
        problem:
          "Everything you know about a client's brand is unwritten, which means you cannot delegate any part of it and cannot take a week off without the work stopping.",
        mengo: [
          "Each client's brand held as a record rather than as your memory",
          "Content inheriting tone and constraints without you supplying them each time",
          "Something concrete to hand to a freelancer when you need cover",
        ],
        agency: [
          "The judgement about what is on-brand, which stays with you",
          "Keeping the record current as clients evolve",
        ],
        outcome:
          "You can bring in help without a two-hour briefing call every time.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Two people, one version of the brand",
        situation:
          "Two colleagues work on the same client and apply the brand slightly differently, because they learned it from different sources at different times.",
        problem:
          "Clients read internal inconsistency as carelessness. It is the most common quality complaint at small agencies and the least often diagnosed correctly.",
        mengo: [
          "One brand record per client that everybody works from",
          "Superseded material clearly marked, so nobody uses last year's version",
          "A change log, so an update is visible rather than announced verbally",
        ],
        agency: [
          "Deciding what good looks like for this client's brand",
          "Reviewing against the record rather than against personal preference",
        ],
        outcome:
          "Work from different people looks like it came from the same agency.",
      },
      {
        stage: "growing",
        relevance: "core",
        headline: "Brand governance that does not route through the founder",
        situation:
          "Account directors run their own accounts, and every genuinely tricky brand question still escalates to the founder.",
        problem:
          "The founder becomes the brand authority for every client, which caps growth at their attention regardless of how many people are hired.",
        mengo: [
          "A per-client record explicit enough that a director can decide without escalating",
          "Recorded decision authority, so it is clear who may approve what",
          "Consistent structure across accounts so a reviewer knows where to look",
        ],
        agency: [
          "Setting the governance: which decisions genuinely need escalating",
          "The exceptions, which will always need a person",
        ],
        outcome:
          "Routine brand questions stop reaching the founder, and the ones that do are the ones that should.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "One brand, many teams, no drift",
        situation:
          "Several teams produce material for the same client brands, sometimes across offices and time zones.",
        problem:
          "Brand drift at scale is invisible until it reaches a client review, by which point it has been in the work for weeks and across dozens of assets.",
        mengo: [
          "A single current record referenced by every team rather than copied",
          "Version history, so the moment something changed is identifiable",
          "Uniform structure so review is the same operation everywhere",
        ],
        agency: [
          "The brand governance structure and who sits in it",
          "Creative direction, which is a human decision and stays one",
        ],
        outcome:
          "Every team works from the same current brand, and drift becomes detectable rather than discovered.",
      },
    ],
    related: {
      capabilities: ["brand-strategy", "brand-assets", "brand-manual", "visual-identity"],
      workflows: ["brand-strategy-workflow", "client-onboarding", "new-client-launch"],
      useCases: ["manage-multiple-client-brands", "standardize-client-strategy"],
    },
    faqs: [
      {
        q: "What if the client has no brand definition at all?",
        a: "Record that. It is one of the more valuable findings an onboarding can produce, and it usually converts into a piece of work — but it should be proposed as brand work rather than absorbed silently into content production.",
      },
      {
        q: "Who owns the brand record, us or the client?",
        a: "The client owns their brand. The record is a working artefact of the engagement and should be exportable to them; an agency that holds a client's brand hostage has a commercial problem rather than a technical one.",
      },
      {
        q: "How is this different from a brand manual?",
        a: "This is the record of what the brand is. The manual is the instruction set for applying it. Small clients need the first and rarely need the second.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "brand-strategy",
    title: "Brand Strategy",
    navLabel: "Brand Strategy",
    group: "brand",
    depth: "staged",
    headline: "Positioning, and the reasoning behind it",
    lead:
      "Where the client stands relative to the alternatives, what they promise, and why that is defensible. This is the highest-judgement capability in the taxonomy, and the one where a system's role is narrowest: it structures the reasoning and drafts the options. The decision is a strategist's.",
    summary:
      "Positioning, message hierarchy and the reasoning behind them — drafted as options, decided by the agency's strategist.",
    seoTitle: "Brand Strategy — positioning support for agency client work",
    seoDescription:
      "Positioning options and message hierarchy drafted from validated research, with the strategic decision and the reasoning staying with the agency.",
    updated: "2026-09-02",
    meaning:
      "The positioning layer: who the client is for, what they claim, against what alternatives, and the hierarchy of messages that follows. Held as a stored object rather than as a deck, so everything downstream inherits from it.",
    job: "Turn research into a defensible position that everything else can inherit from.",
    whyAgencies: [
      {
        label: "It is what the client is actually buying",
        body: "Clients can get content anywhere. What distinguishes an agency is a defensible view on where the business should stand — and that view has to be explicit to be worth anything.",
      },
      {
        label: "Undocumented positioning reverts",
        body: "A positioning agreed in a workshop and never written into the working system is gone within two quarters. The copy drifts back to describing the business rather than positioning it.",
      },
      {
        label: "Everything downstream depends on it",
        body: "Content, campaigns and sales material all inherit from this layer. A correction here reflows the plan; a correction downstream is a rewrite.",
      },
    ],
    inputs: [
      "The validated business profile, offers and ICPs",
      "Competitive context, checked rather than assumed",
      "What the client has already tried, and what happened",
      "Commercial constraints — what the business can actually deliver on",
    ],
    outputs: [
      "Positioning options with the reasoning and the trade-off behind each",
      "A message hierarchy: the one thing, then what supports it",
      "Proof requirements — what would have to be true for each claim to stand",
      "A stored strategic layer that content and campaigns inherit from",
    ],
    sequence: [
      { title: "The agency confirms the inputs", body: "Positioning built on unvalidated research is a confident guess. This step is the gate.", lane: "agency" },
      { title: "Options are drafted with reasoning", body: "Two or three defensible positions, each with what it wins, what it gives up and what it would need to be true.", lane: "mengo" },
      { title: "The agency makes the call", body: "This is the strategic decision and the reason the client hired a person. Nothing generates it.", lane: "agency" },
      { title: "The hierarchy is built out", body: "The chosen position becomes a message hierarchy that downstream work reads from.", lane: "mengo" },
      { title: "The agency presents it", body: "In your words, with your reasoning, to a client who is buying your judgement rather than a document.", lane: "agency" },
      { title: "It is stored and inherited", body: "The approved layer becomes what content and campaigns build from, rather than a deck that is filed.", lane: "mengo" },
    ],
    judgement: [
      { label: "Whether the position is true", body: "A generated positioning statement is plausible by construction. Whether it is accurate about this business is something only someone who knows the business can say." },
      { label: "What the client can actually deliver", body: "A position the business cannot live up to is worse than a boring one. That assessment needs knowledge of their operations, not their marketing." },
      { label: "What to refuse", body: "Telling a client their preferred position is undefendable is the most valuable and least comfortable part of the job." },
    ],
    limits: [
      "It does not make the strategic decision. It produces options with reasoning that a strategist accepts, changes or discards.",
      "It knows nothing about the client that was not supplied, and unstated context is simply absent.",
      "It does not validate claims. Anything a position rests on needs evidence the client holds.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "Have a view, and be able to defend it",
        situation:
          "Your first client asks what you would recommend, and you have opinions but no structured way to arrive at or defend a position.",
        problem:
          "New agencies present descriptions rather than positions, because a position requires committing to a trade-off and that feels risky when the relationship is new.",
        mengo: [
          "Options laid out with what each wins and gives up, which is easier to discuss than a single recommendation",
          "The reasoning made explicit, so you can defend it under questioning",
          "A structure you reuse rather than reinventing per client",
        ],
        agency: [
          "Choosing, which is the whole job",
          "Presenting it as a recommendation rather than a menu",
        ],
        outcome:
          "You walk into the meeting with a defensible view rather than a set of options for the client to pick from.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "Strategy that survives the week it was written",
        situation:
          "You do good strategic thinking at the start of an engagement and then spend the next year producing content that gradually stops reflecting it.",
        problem:
          "The strategy lives in a document. The work lives elsewhere. Nothing connects them except your memory, which is under load from three other clients.",
        mengo: [
          "The strategic layer stored per client and inherited by every brief",
          "A reflow when the client's offer or market changes, rather than a rewrite",
          "Consistency across a year of assets without you enforcing it manually",
        ],
        agency: [
          "The strategic decision, always",
          "Judging when a change is material enough to revisit the position",
        ],
        outcome:
          "The strategy you sold in month one is still visible in the work in month eleven.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "One position, applied by everyone",
        situation:
          "The strategy was agreed by two people and is applied by four, two of whom were not in the conversation.",
        problem:
          "Positioning transmitted verbally degrades with each retelling. Within a quarter the team is working from four related but distinct understandings.",
        mengo: [
          "The position and its reasoning stored where the work happens",
          "Briefs that carry the message hierarchy rather than assuming it",
          "A shared reference for review, so 'off-strategy' is checkable",
        ],
        agency: [
          "The strategist's ownership of the position",
          "Reviewing work against the strategy rather than against taste",
        ],
        outcome:
          "Everyone applies the same position, and disagreements surface as disagreements rather than as drift.",
      },
      {
        stage: "growing",
        relevance: "core",
        headline: "Senior strategic time spent deciding, not assembling",
        situation:
          "Your strategists spend most of their time gathering inputs and building the scaffolding of a strategy document, and comparatively little deciding anything.",
        problem:
          "The most expensive people in the agency are doing the least differentiated part of the work, which is both a margin problem and a retention problem.",
        mengo: [
          "Inputs assembled and options drafted before a strategist opens the file",
          "Consistent structure so a strategist can evaluate rather than orient",
          "The same depth on every account, including the ones nobody senior has time for",
        ],
        agency: [
          "The decision, the trade-off and the client conversation",
          "Setting what counts as a defensible position at this agency",
        ],
        outcome:
          "Strategists spend their hours on judgement, which is what the client is paying for and what keeps strategists.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "Strategic consistency across teams and accounts",
        situation:
          "Multiple strategists across multiple teams produce positioning work of genuinely varying quality and structure.",
        problem:
          "At scale, the agency sells a methodology. If the actual strategic output varies by who produced it, the methodology is a claim rather than a practice.",
        mengo: [
          "A uniform strategic layer structure across every account and team",
          "Recorded reasoning, so a position can be reviewed rather than just read",
          "Ramp-up on an inherited account measured in reading rather than re-deriving",
        ],
        agency: [
          "Governance over what constitutes an approved position",
          "Senior strategic judgement on every account, which is what clients buy at this size",
        ],
        outcome:
          "The methodology the agency sells is the methodology that runs, and it is visible in the artefacts.",
      },
    ],
    related: {
      capabilities: ["competitors", "icps-and-personas", "moat-analysis", "brand"],
      workflows: ["brand-strategy-workflow", "marketing-planning", "client-discovery"],
      useCases: ["standardize-client-strategy", "improve-client-retention"],
    },
    faqs: [
      {
        q: "How is this different from asking a general AI tool for a positioning statement?",
        a: "Persistence and inheritance. A chat produces a plausible answer and forgets the context, so the next piece of work starts from nothing. Here the approved position is stored per client and everything downstream reads from it, which is what makes the fortieth asset consistent with the first.",
      },
      {
        q: "Can we use our own strategic framework?",
        a: "You should. Your framework shapes what you put in and what you accept; the outputs are editable objects. A house methodology is applied through the brief structure and the review standard rather than through configuration.",
      },
      {
        q: "What happens when the client rejects the positioning?",
        a: "Usually it means an input was wrong — most often the objection inventory or the competitive set. Rejection is more useful than polite acceptance, and it is cheaper here than three months downstream.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "brand-assets",
    title: "Brand Assets",
    navLabel: "Brand Assets",
    group: "brand",
    depth: "staged",
    headline: "The files everyone asks for, in one place",
    lead:
      "Logos, marks, colour values, typefaces and the approved variations of each. The least intellectually interesting capability in the taxonomy and, for most agencies, the one that removes the most weekly friction.",
    summary:
      "Logos, colours, typefaces and their approved variations, held once so the weekly 'can you send me the logo' stops being a search.",
    seoTitle: "Brand Assets — one place for a client's brand files",
    seoDescription:
      "Logos, colour values, typefaces and approved variations held in one current place, so brand asset requests stop being an email search.",
    updated: "2026-09-02",
    meaning:
      "The inventory of a brand's concrete assets: every approved logo variation, colour values in the formats people actually need, typefaces and their licences, and what may not be done to any of it.",
    job: "Make the answer to 'can you send me the logo' take ten seconds.",
    whyAgencies: [
      {
        label: "It is a recurring interruption with a permanent fix",
        body: "Asset requests arrive weekly, from clients, from partners, from the client's own staff. Each costs a few minutes and a context switch, and the total is significant.",
      },
      {
        label: "Wrong-version usage is the most visible brand failure",
        body: "An old logo on a partner's site is noticed by everybody and is almost always caused by someone having sent the wrong file eighteen months ago.",
      },
      {
        label: "Typeface licensing is a real exposure",
        body: "Fonts used without an appropriate licence are a genuine legal risk that most clients have never considered, and the agency is often the one who introduced the font.",
      },
    ],
    inputs: [
      "Every logo variation the client uses, including the ones they should not",
      "Colour values in hex, RGB, CMYK and any brand-specific systems",
      "Typefaces, weights, and the licence covering each",
      "Prohibitions — what must never be done to the mark",
    ],
    outputs: [
      "A current asset inventory with approved variations and their intended use",
      "Colour and type specifications in the formats people actually ask for",
      "Licence notes against each typeface",
      "A clearly marked superseded set, so old files are identifiable rather than merely absent",
    ],
    sequence: [
      { title: "The agency collects what exists", body: "Usually from several places, including files the client did not know they had.", lane: "agency" },
      { title: "The inventory is structured", body: "Each variation recorded with its intended use rather than as an undifferentiated folder.", lane: "mengo" },
      { title: "Duplicates and old versions are flagged", body: "Where three similar files exist, the record says so rather than guessing which is current.", lane: "mengo" },
      { title: "The agency and client confirm the current set", body: "Someone with authority decides which version is live. This cannot be inferred.", lane: "agency" },
      { title: "Licences are checked", body: "Whether a typeface may be used commercially is a question for the client and, where unclear, their counsel.", lane: "agency" },
    ],
    judgement: [
      { label: "Which version is current", body: "Frequently ambiguous, and getting it wrong propagates. It needs a decision from someone with authority." },
      { label: "How many variations to sanction", body: "Too few and people improvise; too many and consistency is impossible. This is a design judgement." },
      { label: "Whether a licence covers the intended use", body: "Web, print, embedded and broadcast use are licensed differently. This can carry real cost." },
    ],
    limits: [
      "It does not create or redraw assets. Producing a missing variation is a design job.",
      "It does not verify licences. It records what you establish; establishing it is a legal question.",
      "It is not a full digital asset management system, and a client with a large media library needs one of those as well.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "useful",
        headline: "Ask for the files properly, once",
        situation:
          "You have received a logo as a PNG attached to an email and you are about to build a website with it.",
        problem:
          "New agencies accept whatever the client sends and discover the missing formats at the worst possible moment, usually the day before something goes live.",
        mengo: [
          "A checklist of what a complete asset set contains, so you ask for all of it at once",
          "A place to record what is missing, which is frequently a lot",
          "Colour and type specifications recorded rather than eyedropped from a JPEG",
        ],
        agency: [
          "Asking the client, and following up when the first response is incomplete",
          "Judging when a missing asset needs commissioning before work can proceed",
        ],
        outcome:
          "You find out about the missing vector logo in week one rather than the night before launch.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "Stop searching your own email for client logos",
        situation:
          "You hold assets for several clients across downloads folders, email threads and two cloud drives.",
        problem:
          "Every asset request is a small search, and small searches several times a week are a meaningful part of a solo week that nobody accounts for.",
        mengo: [
          "One current set per client, with variations labelled by use",
          "Superseded files marked, so the wrong one is not sent by accident",
          "Specifications available without opening a design file",
        ],
        agency: [
          "Deciding what is current when versions conflict",
          "Keeping the set updated when the client refreshes anything",
        ],
        outcome:
          "A recurring interruption becomes a ten-second lookup.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Everyone sends the same file",
        situation:
          "Four people field asset requests for the same clients, each from their own copy of the files.",
        problem:
          "Personal copies drift. Somebody eventually sends a superseded logo to a client's printer, and it is discovered on a delivered run.",
        mengo: [
          "A single current set that everybody draws from",
          "Explicit marking of what has been retired",
          "Use notes per variation, so the right one is chosen rather than the first one",
        ],
        agency: [
          "Deciding and communicating when a set changes",
          "Design judgement about which variations to sanction",
        ],
        outcome:
          "Nobody is working from a personal copy, which is the only reliable fix for this class of error.",
      },
      {
        stage: "growing",
        relevance: "core",
        headline: "Asset governance across many client brands",
        situation:
          "You hold asset sets for a substantial number of clients, several of whom have refreshed their identity during your engagement.",
        problem:
          "At this volume nobody can hold which client is on which version, and a refresh only partially propagates — leaving a long tail of old assets in circulation.",
        mengo: [
          "A current set per client with version history",
          "Visibility of which accounts have unresolved version conflicts",
          "Consistent structure across accounts so an audit is quick",
        ],
        agency: [
          "A process for propagating a refresh across live material",
          "Accountability for what is published under a client's mark",
        ],
        outcome:
          "'Which of our clients are still using an old logo somewhere' becomes an answerable question.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "Correct assets across teams, partners and regions",
        situation:
          "Assets are used by multiple internal teams and often by the client's own partners and regional offices.",
        problem:
          "Distributed asset use without a canonical source produces inconsistency that reaches print, packaging and paid media, where correction is expensive.",
        mengo: [
          "A canonical current set referenced rather than copied",
          "Licence records attached to each typeface",
          "Uniform structure so any team's usage can be checked the same way",
        ],
        agency: [
          "Brand governance including who outside the agency may receive assets",
          "Licence compliance, with the client's counsel where needed",
        ],
        outcome:
          "There is one place that is right, and deviations are traceable to a decision rather than to a folder.",
      },
    ],
    related: {
      capabilities: ["brand", "visual-identity", "brand-manual", "stationery"],
      workflows: ["new-client-launch", "client-onboarding"],
      useCases: ["manage-multiple-client-brands", "reduce-repetitive-work"],
    },
    faqs: [
      {
        q: "Is this a DAM?",
        a: "No. It holds the brand's defining assets — marks, colours, type — not a client's full media library. A client with thousands of product images needs a digital asset manager alongside this.",
      },
      {
        q: "What if the client has no vector logo?",
        a: "Record that as a gap and raise it early. It is one of the most common findings in onboarding and one of the cheapest to fix, provided it is not discovered the day before a print deadline.",
      },
      {
        q: "Who is responsible for font licensing?",
        a: "The client owns the licence, but agencies frequently introduce the typeface and so carry practical responsibility for flagging it. Record what licence exists; where none does, raise it rather than proceeding quietly.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "visual-identity",
    title: "Visual Identity",
    navLabel: "Visual Identity",
    group: "brand",
    depth: "staged",
    headline: "How the brand looks, specified rather than described",
    lead:
      "The system beneath the assets: how type, colour, space and imagery combine, and what makes something recognisably this brand rather than a competitor using the same palette. Designed by designers; recorded here so it survives them.",
    summary:
      "The visual system — type, colour, spacing, imagery — specified precisely enough that someone who was not there can apply it.",
    seoTitle: "Visual Identity — recording a client's visual system",
    seoDescription:
      "Record how a client's type, colour, spacing and imagery combine, specified precisely enough that a new designer can apply it consistently.",
    updated: "2026-09-02",
    meaning:
      "The visual system: type hierarchy, colour roles rather than just values, spacing behaviour, image treatment and the compositional rules that make output recognisable.",
    job: "Specify a visual system precisely enough that a designer who was not in the room can apply it.",
    whyAgencies: [
      {
        label: "Assets are not a system",
        body: "A logo and a palette do not determine what a page looks like. Two designers with the same assets and no system produce work that shares colours and nothing else.",
      },
      {
        label: "Colour roles matter more than colour values",
        body: "Knowing a brand's green is a hex code is nearly useless. Knowing it is the accent and never a background is what makes application consistent.",
      },
      {
        label: "It is what makes freelance capacity safe",
        body: "An agency that can brief an external designer to a specified system can scale design capacity. One that cannot must have everything done in-house.",
      },
    ],
    inputs: [
      "Existing visual work, including examples the client considers wrong",
      "Type hierarchy and how it behaves at different sizes",
      "Colour roles: what each colour is for, not only what it is",
      "Image treatment and any subjects that are off-limits",
    ],
    outputs: [
      "A specified visual system covering type, colour roles, spacing and imagery",
      "Compositional rules with worked examples rather than adjectives",
      "An explicit list of what the system does not permit",
      "A brief a freelance designer can work to without a call",
    ],
    sequence: [
      { title: "The designer establishes the system", body: "This is design work. It is done by a designer and nothing here substitutes for that.", lane: "agency" },
      { title: "The system is specified", body: "Decisions recorded as rules with examples, rather than as a mood board and a hope.", lane: "mengo" },
      { title: "Ambiguities are surfaced", body: "Where a rule does not determine an outcome, the record says so instead of implying completeness.", lane: "mengo" },
      { title: "The designer resolves them", body: "Gaps in a visual system are filled by a designer, not by whoever encounters them first under deadline.", lane: "agency" },
      { title: "The agency applies and reviews", body: "Application is checked against the specification rather than against the reviewer's taste.", lane: "agency" },
    ],
    judgement: [
      { label: "Every design decision", body: "The system itself is created by a designer. What is structured is the record and its consistent application." },
      { label: "How much to specify", body: "Under-specify and people improvise; over-specify and the system cannot handle a case nobody anticipated. This balance is craft." },
      { label: "When to break the system", body: "Occasionally the right answer is a deliberate exception, and knowing when is why art directors exist." },
    ],
    limits: [
      "It does not design anything. It records a system a designer created.",
      "It does not produce artwork, layouts or imagery.",
      "It cannot judge whether a design is good, only whether it conforms to what was specified.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "You probably have no system to record yet",
        situation:
          "Your early clients have a logo and some colours, and no visual system exists to specify.",
        problem:
          "Documenting a system that does not exist produces a document describing improvisation.",
        mengo: [
          "Somewhere to record the rules you establish as you make them",
        ],
        agency: [
          "Deciding whether the client needs identity work before anything else",
        ],
        outcome:
          "Nothing yet, honestly.",
        insteadDoThis:
          "Use Brand Assets first — collect and specify the concrete files. The system can be recorded once there is one, and for many small clients there never needs to be.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "Brief a freelance designer without a call",
        situation:
          "You bring in design help for overflow, and every engagement starts with an hour explaining how the client's brand behaves.",
        problem:
          "The briefing overhead is large enough that using a freelancer sometimes costs more than doing it yourself, which defeats the point of having a bench.",
        mengo: [
          "A specified system a freelancer can work to directly",
          "Rules with examples rather than adjectives, which is what removes the call",
          "A record of what the system does not permit",
        ],
        agency: [
          "Establishing the system, with a designer if you are not one",
          "Reviewing the output against the specification",
        ],
        outcome:
          "External design capacity becomes genuinely cheaper than doing it yourself.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Consistent design across more than one designer",
        situation:
          "Two or three people produce visual work for the same clients, each with their own interpretation of the brand.",
        problem:
          "Visual inconsistency is the most immediately visible kind. A client sees it before they read a word.",
        mengo: [
          "One specified system per client that all designers work from",
          "Colour roles and type hierarchy recorded rather than inferred from prior work",
          "A reference a reviewer can check against objectively",
        ],
        agency: [
          "Art direction and every design decision",
          "Deciding when an exception is warranted",
        ],
        outcome:
          "Work from different designers reads as one brand.",
      },
      {
        stage: "growing",
        relevance: "core",
        headline: "Design quality that does not depend on who was free",
        situation:
          "Design work is distributed across a larger team including juniors and freelancers, with senior direction spread thin.",
        problem:
          "Without a specified system, quality tracks whoever picked up the job, and the art director becomes a bottleneck on every asset.",
        mengo: [
          "Specifications detailed enough that a junior produces conforming work",
          "Consistent structure across accounts so review is fast",
          "Explicit prohibitions, which prevent the most common errors",
        ],
        agency: [
          "Art direction on the work that genuinely needs it",
          "Setting where the line between conforming and exceptional sits",
        ],
        outcome:
          "Senior design time goes to the work that needs judgement rather than to catching avoidable errors.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "One visual system across teams, regions and partners",
        situation:
          "Multiple teams and often external partners produce visual work for the same client brands.",
        problem:
          "At scale a visual system transmitted informally does not survive. Regional and partner output drifts first and is noticed last.",
        mengo: [
          "A canonical specification referenced by everyone producing work",
          "Version history so a change is identifiable",
          "Uniform structure so any output can be checked the same way",
        ],
        agency: [
          "Creative direction and governance over the system itself",
          "Deciding who outside the agency may work to it",
        ],
        outcome:
          "The brand looks the same wherever it is produced, and deviations are traceable.",
      },
    ],
    related: {
      capabilities: ["brand-assets", "brand-manual", "brand", "stationery"],
      workflows: ["brand-strategy-workflow", "new-client-launch"],
      useCases: ["manage-multiple-client-brands", "standardize-client-strategy"],
    },
    faqs: [
      {
        q: "Does this generate designs?",
        a: "No. It records a system that a designer created, precisely enough that others can apply it. Design remains a human discipline here and the pages in this group all say so.",
      },
      {
        q: "How detailed should a visual system be?",
        a: "Detailed enough that two designers produce conforming work from the same brief. That is the practical test, and it is more useful than any target length.",
      },
      {
        q: "What if the client's identity is genuinely bad?",
        a: "Say so, once, with reasoning, and then work to it if they decline. Documenting a weak identity at least makes it consistently weak, which is a lower-risk position than inconsistently weak.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "brand-manual",
    title: "Brand Manual",
    navLabel: "Brand Manual",
    group: "brand",
    depth: "staged",
    headline: "The document you hand to people who were not there",
    lead:
      "The assembled guide: what the brand is, how it looks, how it sounds, and what may not be done to it. Genuinely valuable when a client's brand is applied by people outside the agency, and documentation nobody reads when it is not.",
    summary:
      "The assembled brand guide for people outside the agency — necessary at scale, ceremony below it.",
    seoTitle: "Brand Manual — the guide for people outside the agency",
    seoDescription:
      "An assembled brand guide covering identity, voice and application rules, for clients whose brand is used by people beyond the agency team.",
    updated: "2026-09-02",
    meaning:
      "A composed document drawing on the brand record, visual identity and voice, written for someone applying the brand without access to the people who defined it.",
    job: "Let someone outside the agency apply the brand correctly without asking anybody.",
    whyAgencies: [
      {
        label: "It is the answer to distributed application",
        body: "The moment a client's brand is used by their own staff, a partner, a printer or a franchisee, informal transmission stops working.",
      },
      {
        label: "It converts scattered decisions into an artefact",
        body: "Most of a manual's content already exists across other records. The value is in assembling it into something a third party can be handed.",
      },
      {
        label: "It is frequently a saleable deliverable",
        body: "Clients understand and will pay for a brand manual in a way they will not for the underlying records, even though the records do more of the work.",
      },
    ],
    inputs: [
      "The brand record, visual identity and voice profile",
      "Who the manual is actually for — internal staff, partners, franchisees",
      "The specific misuses that have already happened",
      "How much latitude the client wants to allow",
    ],
    outputs: [
      "An assembled manual written for the intended audience",
      "Application rules with correct and incorrect examples",
      "A do-not list drawn from actual misuse rather than from theory",
      "A version and review date, without which a manual silently expires",
    ],
    sequence: [
      { title: "The agency defines the audience", body: "A manual for a franchisee and one for an in-house designer are different documents. Deciding which this is comes first.", lane: "agency" },
      { title: "Existing records are assembled", body: "Brand, identity and voice composed into one document rather than rewritten.", lane: "mengo" },
      { title: "Gaps are surfaced", body: "Assembly reliably reveals decisions nobody ever made. Those are flagged rather than invented.", lane: "mengo" },
      { title: "The agency fills the gaps", body: "With the designer and strategist. A manual that papers over undecided questions is worse than an incomplete one.", lane: "agency" },
      { title: "The client approves and adopts", body: "A manual nobody was told about is a file. Adoption is a client-side change-management task.", lane: "agency" },
    ],
    judgement: [
      { label: "How prescriptive to be", body: "Too loose and it does not constrain; too tight and people work around it. This depends on who is applying the brand and how much they can be trusted." },
      { label: "What examples to include", body: "The incorrect examples do most of the work, and choosing them well requires knowing what has actually gone wrong." },
      { label: "Whether the client needs one at all", body: "Many do not, and selling one to a client whose brand only ever passes through your hands is selling a document." },
    ],
    limits: [
      "It does not make brand decisions. It assembles ones already made and exposes ones that have not been.",
      "It cannot make anyone follow it. Adoption is organisational.",
      "It goes stale. A manual with no review date describes how the brand used to work.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Almost certainly not yet",
        situation:
          "Your client's brand is applied by you and possibly by them. Nobody else touches it.",
        problem:
          "A manual for an audience of two is documentation for its own sake, and producing one is a way of feeling professional rather than being useful.",
        mengo: [
          "The underlying records that a manual would later be assembled from",
        ],
        agency: [
          "Judging when the client actually has distributed application",
        ],
        outcome:
          "Nothing, correctly.",
        insteadDoThis:
          "Build the Brand and Brand Assets records. If a manual is genuinely needed later, it assembles from those in an afternoon rather than being a project.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Only when someone else applies the brand",
        situation:
          "Occasionally a client's own staff or a printer needs to use the brand without you in the loop.",
        problem:
          "Producing a full manual for an occasional need is disproportionate; sending nothing produces the misuse the manual would have prevented.",
        mengo: [
          "A short assembled extract for a specific external need",
          "Application rules drawn from records you already keep",
        ],
        agency: [
          "Deciding how much a given third party actually needs",
        ],
        outcome:
          "A one-page extract when someone needs one, rather than a manual nobody asked for.",
        insteadDoThis:
          "Send a specific extract for the specific need. A full manual becomes worth building when three different parties have asked in a quarter.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "The client's own team starts producing things",
        situation:
          "Your client has hired a marketing coordinator who is now making things without you, using whatever they found on the shared drive.",
        problem:
          "This is the moment brand consistency starts eroding, and it happens quietly. The agency usually finds out from a LinkedIn post.",
        mengo: [
          "A manual assembled from records you already maintain",
          "Correct and incorrect examples, which is what people actually use",
          "A version, so you can tell what they are working from",
        ],
        agency: [
          "The relationship with the client's internal person, which matters more than the document",
          "Deciding how much latitude to give",
        ],
        outcome:
          "The client's own output stops being a surprise.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Manuals as a standard deliverable, not a bespoke project",
        situation:
          "Several clients need brand documentation, and each one has been produced from scratch as a separate project.",
        problem:
          "Bespoke manuals are expensive to produce and impossible to keep current, so they are delivered once and never updated.",
        mengo: [
          "Assembly from maintained records rather than authoring from nothing",
          "A consistent structure across clients so production is quick",
          "Updates that follow from a change to the underlying record",
        ],
        agency: [
          "The judgement about prescriptiveness per client",
          "Deciding which clients genuinely need one",
        ],
        outcome:
          "A manual becomes a day rather than a project, and stays current because it is assembled rather than authored.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "Governed documentation for distributed application",
        situation:
          "Client brands are applied by regional offices, partners, franchisees and agencies other than yours.",
        problem:
          "At this level the manual is a governance instrument. An out-of-date one is actively harmful, because people follow it.",
        mengo: [
          "Assembly from a canonical record, so the manual cannot diverge from the source",
          "Version control and a visible review date",
          "Consistent structure across client brands",
        ],
        agency: [
          "Governance over who receives it and what they may do",
          "A review cycle with named ownership",
        ],
        outcome:
          "The manual and the actual brand cannot drift apart, because one is generated from the other.",
      },
    ],
    related: {
      capabilities: ["brand", "visual-identity", "brand-assets", "sops"],
      workflows: ["new-client-launch", "agency-sop-creation"],
      useCases: ["manage-multiple-client-brands", "build-sops"],
    },
    faqs: [
      {
        q: "How long should a brand manual be?",
        a: "As long as its audience needs and no longer. A franchisee manual answering twelve recurring questions is more useful than a sixty-page document nobody opens. Length correlates with cost, not with adherence.",
      },
      {
        q: "How often should it be updated?",
        a: "Whenever the underlying records change, which is the argument for assembling it from them rather than authoring it separately. A manual with no review date will be wrong within eighteen months and nobody will know.",
      },
      {
        q: "Should we charge for this?",
        a: "That is your commercial decision. Worth knowing: clients understand and will pay for a manual more readily than for the underlying records, even though the records do more of the work.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "stationery",
    title: "Stationery",
    navLabel: "Stationery",
    group: "brand",
    depth: "staged",
    headline: "The everyday templates a brand is actually seen in",
    lead:
      "Letterheads, decks, invoices, email signatures, document templates. Unglamorous, high-frequency and the place most brands are seen most often — usually applied by whoever needed one, in whatever way they managed.",
    summary:
      "Everyday branded templates — decks, documents, signatures — where a brand is seen most often and maintained least.",
    seoTitle: "Stationery — the everyday templates behind a client brand",
    seoDescription:
      "Letterheads, decks, document templates and email signatures: the highest-frequency, least-maintained brand surface in most client businesses.",
    updated: "2026-09-02",
    meaning:
      "The set of recurring branded templates a business uses in ordinary operation: correspondence, presentations, documents, invoices, signatures and any physical stationery.",
    job: "Make the brand correct in the places it is seen most and maintained least.",
    whyAgencies: [
      {
        label: "Frequency beats prominence",
        body: "A client's proposal template is seen by more prospects than most of their campaigns, and it is usually the least considered brand surface they have.",
      },
      {
        label: "Templates are where brands rot first",
        body: "Somebody needed a deck, could not find the template, made one, and it is now the de facto standard across a department.",
      },
      {
        label: "It is a quick, visible win",
        body: "Fixing a client's proposal template produces a change their leadership sees within a week, which is unusual in marketing work.",
      },
    ],
    inputs: [
      "Which templates the business actually uses day to day",
      "Who creates documents, and what tools they have",
      "Existing templates, including the unofficial ones in circulation",
      "Any regulatory content that must appear — company registration, disclaimers",
    ],
    outputs: [
      "A template inventory covering what exists and what is missing",
      "Specifications for each template's brand application",
      "A list of unofficial templates in circulation that should be retired",
      "Required legal content per document type, where applicable",
    ],
    sequence: [
      { title: "The agency audits what is in use", body: "Including the unofficial versions, which are usually the majority.", lane: "agency" },
      { title: "The inventory is structured", body: "Each template recorded with its purpose, owner and current state.", lane: "mengo" },
      { title: "Gaps and duplicates are surfaced", body: "Where five versions of a proposal template exist, the record says so.", lane: "mengo" },
      { title: "The designer produces the set", body: "Template design is design work.", lane: "agency" },
      { title: "The client rolls them out", body: "Distribution and adoption are organisational. A template nobody was told about changes nothing.", lane: "agency" },
    ],
    judgement: [
      { label: "Which templates matter", body: "A business has dozens of document types and four that matter. Identifying those four is the whole exercise." },
      { label: "How much to constrain", body: "Templates too rigid to use get abandoned within a month, and abandonment is worse than looseness." },
      { label: "What legal content is required", body: "Company details, registration numbers and disclaimers vary by jurisdiction and document type. This needs checking, not assuming." },
    ],
    limits: [
      "It does not design templates. That is a design job.",
      "It cannot make people use them, and adoption is the hard part.",
      "It does not provide legal advice on required document content.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Not where your first engagement should go",
        situation:
          "You are establishing credibility with a first client, and stationery is not what they hired you for.",
        problem:
          "Leading with template work signals administrative support rather than marketing judgement, which is a difficult position to move out of later.",
        mengo: [
          "A place to note template gaps you observe during onboarding",
        ],
        agency: [
          "Judging when to raise it — usually after you have delivered something they value",
        ],
        outcome:
          "A note for later rather than a project now.",
        insteadDoThis:
          "Record what you notice and raise it once the engagement has produced something the client is pleased with. It is an easy second-phase win, and a poor first impression.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "A visible win between larger pieces of work",
        situation:
          "You have delivery gaps between bigger projects and a client whose proposal template is visibly worse than their website.",
        problem:
          "Small, high-visibility improvements are easy to sell and easy to forget to offer.",
        mengo: [
          "A template audit that surfaces what is worth fixing",
          "Specifications a designer can work to quickly",
          "A record of what was in circulation before, so improvement is demonstrable",
        ],
        agency: [
          "The design work and the client conversation",
          "Choosing which templates justify the effort",
        ],
        outcome:
          "A well-timed, visible improvement that costs days rather than weeks.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Stop the unofficial versions multiplying",
        situation:
          "Your client's team creates documents constantly and the official templates are out of date, so people have made their own.",
        problem:
          "Once unofficial templates are established they spread, and replacing them is a change-management problem rather than a design one.",
        mengo: [
          "An audit that reveals how many versions are actually circulating",
          "A structured set with clear ownership per template",
          "A retirement list, so old versions can be explicitly withdrawn",
        ],
        agency: [
          "The rollout conversation with the client, which is the part that decides success",
          "Design work on the replacements",
        ],
        outcome:
          "One official set, and a plan for removing the alternatives rather than hoping they fade.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Template sets as a repeatable deliverable",
        situation:
          "Multiple clients need template work and each has been treated as a bespoke project.",
        problem:
          "The template types repeat between clients even though the designs do not, and rebuilding the inventory each time is waste.",
        mengo: [
          "A standard template inventory applied to each client",
          "Consistent specification structure so design briefs are quick",
          "A record of which clients have gaps",
        ],
        agency: [
          "Design per client, which is the non-repeating part",
          "Deciding which templates a given client actually needs",
        ],
        outcome:
          "Template work becomes a defined package rather than a scoping exercise every time.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Document consistency across a large client organisation",
        situation:
          "Client organisations with hundreds of staff producing documents, across departments and regions.",
        problem:
          "At this scale unofficial templates are guaranteed, and the brand is seen far more often in documents than in campaigns.",
        mengo: [
          "A canonical template inventory with version control",
          "Required legal content recorded per document type and jurisdiction",
          "Uniform structure so audits across a portfolio are feasible",
        ],
        agency: [
          "Governance and the rollout programme, which is the real work at this size",
          "Coordination with the client's legal function on required content",
        ],
        outcome:
          "The brand is applied consistently in the surfaces that carry it most often.",
      },
    ],
    related: {
      capabilities: ["brand-assets", "visual-identity", "hr-assets", "presentations-and-pitches"],
      workflows: ["new-client-launch", "agency-sop-creation"],
      useCases: ["manage-multiple-client-brands"],
    },
    faqs: [
      {
        q: "Is this really a marketing capability?",
        a: "It is a brand surface with higher frequency than most campaigns. Whether it belongs in a marketing scope is a commercial question, but treating it as beneath marketing is how client brands end up looking inconsistent in the documents prospects actually read.",
      },
      {
        q: "How do we stop people making their own?",
        a: "Make the official one easier to find and better than what they would make. Enforcement fails; convenience works. The audit that shows how many unofficial versions exist is usually the argument that gets the client to act.",
      },
      {
        q: "What legal content has to appear on client documents?",
        a: "It varies by jurisdiction and document type, and it is a question for the client's own advisers. Record what they tell you rather than inferring it.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "hr-assets",
    title: "HR Assets",
    navLabel: "HR Assets",
    group: "brand",
    depth: "staged",
    headline: "The brand applied to hiring and onboarding",
    lead:
      "Job adverts, careers pages, offer documents and onboarding material. Employer brand is marketing aimed at a different audience, and it is the marketing most clients have never briefed anyone on.",
    summary:
      "Employer-facing brand material — job adverts, careers pages, onboarding — the marketing clients rarely brief and often need most.",
    seoTitle: "HR Assets — employer brand material for client businesses",
    seoDescription:
      "Job adverts, careers pages and onboarding material as a marketing surface: the employer brand work most clients have never briefed an agency on.",
    updated: "2026-09-02",
    meaning:
      "Brand-consistent material aimed at candidates and new staff: adverts, careers content, offer documents and the first-week experience.",
    job: "Apply the client's brand to the audience they are trying to recruit.",
    whyAgencies: [
      {
        label: "Most clients have a hiring problem",
        body: "Professional services and skilled trades in particular struggle to recruit, and almost none of them have asked their marketing agency for help with it.",
      },
      {
        label: "Candidates research like buyers",
        body: "They read the site, the reviews and the founder's posts. The employer brand is being formed by the marketing whether anyone intended it or not.",
      },
      {
        label: "The research transfers",
        body: "You already have the client's positioning, voice and proof assets. Recruitment marketing reuses most of it for a different audience.",
      },
    ],
    inputs: [
      "The roles being recruited and what makes them hard to fill",
      "What current staff actually say about working there",
      "Compensation philosophy and what the client will disclose",
      "Legal requirements for job advertising in their jurisdiction",
    ],
    outputs: [
      "Job advert structures written for candidates rather than for HR systems",
      "Careers content covering what the business is like, honestly",
      "Onboarding material that continues the brand past the offer",
      "A record of the employer proposition, so it stops being reinvented per vacancy",
    ],
    sequence: [
      { title: "The agency establishes the proposition", body: "What is genuinely true about working here, which requires talking to people who do.", lane: "agency" },
      { title: "Material is structured", body: "Adverts, careers content and onboarding written to the same proposition rather than separately.", lane: "mengo" },
      { title: "Claims are flagged", body: "Anything about culture, progression or compensation is marked as needing client confirmation.", lane: "mengo" },
      { title: "The client's HR function reviews", body: "Employment claims have legal weight. This is not a marketing sign-off.", lane: "agency" },
      { title: "The agency reviews for brand and tone", body: "Recruitment material that sounds nothing like the rest of the brand undermines both.", lane: "agency" },
    ],
    judgement: [
      { label: "What is honestly claimable about a workplace", body: "Overselling a culture produces hires who leave in three months, which is worse for the client than a slower hire." },
      { label: "How much to disclose about pay", body: "A commercial and increasingly legal question, varying by jurisdiction, that belongs with the client." },
      { label: "Whether the problem is marketing at all", body: "Sometimes a client cannot recruit because the role or the pay is wrong, and saying so is more useful than a better advert." },
    ],
    limits: [
      "It does not provide employment law guidance, and job advertising is regulated in most jurisdictions.",
      "It does not screen, track or manage candidates.",
      "It cannot make a bad role attractive, and attempting to is a disservice to the client and the candidate.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Your clients are probably not hiring yet",
        situation:
          "Early clients are usually small enough that recruitment is occasional and informal.",
        problem:
          "Offering recruitment marketing to a business that hires once a year is offering a service nobody needs.",
        mengo: [
          "A place to note it if a client mentions a hiring problem",
        ],
        agency: [
          "Listening for the hiring problem, which clients mention in passing",
        ],
        outcome:
          "Nothing yet.",
        insteadDoThis:
          "Focus on the client's customer-facing marketing. If they mention struggling to hire, note it — it is a good second-year conversation.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "A useful expansion, once the core work is stable",
        situation:
          "A client mentions they cannot find people, and you have the positioning and voice work already done.",
        problem:
          "It is a real opportunity and a distraction if the core engagement is not yet running smoothly.",
        mengo: [
          "Recruitment material inheriting the positioning and voice you already hold",
          "Advert structures that do not need to be invented",
        ],
        agency: [
          "Judging whether the client's hiring problem is a marketing problem",
          "The conversation with whoever owns hiring, who is usually not your contact",
        ],
        outcome:
          "A natural scope expansion that reuses work you have already done.",
        insteadDoThis:
          "Stabilise the core delivery first. Recruitment marketing is an excellent expansion and a poor rescue.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Employer brand as a distinct service line",
        situation:
          "Several clients have hiring difficulties, and you have enough capability to address them properly.",
        problem:
          "Treating each request ad hoc means rebuilding the approach each time and never developing the service.",
        mengo: [
          "A consistent employer proposition record per client",
          "Reusable advert and careers content structures",
          "Claims flagged for the client's HR review as standard",
        ],
        agency: [
          "The interviews with current staff, which is where the honest material comes from",
          "Judging what is claimable",
        ],
        outcome:
          "A defined service rather than a series of favours.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Recruitment marketing at portfolio scale",
        situation:
          "You run employer-brand work for several clients with different jurisdictions and different HR functions.",
        problem:
          "Employment advertising is regulated and the requirements differ. An error is a legal issue for the client rather than a marketing one.",
        mengo: [
          "Consistent structure with client-specific legal requirements recorded",
          "Claims about culture and compensation flagged as a standard step",
          "A record of what each client's HR function has approved",
        ],
        agency: [
          "Routing every piece through the client's HR or legal review",
          "Deciding which clients this service is appropriate for",
        ],
        outcome:
          "A regulated service line run with the review structure it requires.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Employer brand alongside consumer brand",
        situation:
          "Large clients where employer brand is a distinct programme with its own stakeholders, often in a different department entirely.",
        problem:
          "Consumer and employer brand drift apart when they are run by different teams with different agencies, and candidates notice the mismatch.",
        mengo: [
          "One brand record serving both audiences, so the underlying identity is shared",
          "Uniform structure across both programmes",
          "An auditable trail of HR approval per asset",
        ],
        agency: [
          "Coordination between the client's marketing and HR functions, which is the actual difficulty",
          "Governance over claims made about the workplace",
        ],
        outcome:
          "The employer brand and the consumer brand are recognisably the same organisation.",
      },
    ],
    related: {
      capabilities: ["employees", "brand", "stationery", "case-studies"],
      workflows: ["content-planning", "new-client-launch"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Should a marketing agency do recruitment marketing?",
        a: "It is a legitimate expansion and a genuine need for many clients, particularly in professional services. The caution is that employment advertising is regulated, so it needs the client's HR or legal function in the approval path rather than a marketing sign-off.",
      },
      {
        q: "What if the client's culture is genuinely poor?",
        a: "Do not market it as good. Hires recruited on a false prospectus leave within months, which costs the client more than the vacancy did. The honest conversation is more valuable than the campaign.",
      },
      {
        q: "Do we need to know employment law?",
        a: "No, and you should not attempt to. You need to know that it applies, that it varies by jurisdiction, and that every piece goes through the client's own review before it is published.",
      },
    ],
  },
];
