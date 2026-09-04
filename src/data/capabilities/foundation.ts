import type { Capability } from "@/lib/types";

/**
 * Foundation capabilities.
 *
 * The factual layer. Nothing here produces a client deliverable; all of it
 * determines whether the deliverables further along are right.
 *
 * The stage views are written to differ in kind rather than in degree. At the
 * start the question is "what do I even ask"; at scale it is "why do forty
 * accounts have forty different answers to the same question". A capability
 * whose five stage entries say the same thing five ways has not earned five
 * pages, and would not have them.
 */
export const foundationCapabilities: Capability[] = [
  {
    kind: "capability",
    slug: "business-profile",
    title: "Business Profile",
    navLabel: "Business Profile",
    group: "foundation",
    depth: "staged",
    headline: "One record of what a client's business actually is",
    lead:
      "The single artefact everything else reads from: what the business does, who it serves, how it makes money and what it will not do. Most agencies gather this once in a kickoff and then re-gather it, informally and incompletely, for the rest of the engagement.",
    summary:
      "A durable record of what a client's business is, held once and inherited by every piece of work rather than re-gathered from memory.",
    seoTitle: "Business Profile — the record every client engagement reads from",
    seoDescription:
      "A structured record of what a client's business does, who it serves and how it earns. Captured once by the agency, inherited by every piece of work downstream.",
    updated: "2026-09-02",
    meaning:
      "A structured record of a client's business: what it sells, to whom, at what price, in which markets, with what constraints. Not a positioning statement and not a pitch — the facts a positioning statement would have to be true about.",
    job: "Make the client's business knowable to anyone on the account without a conversation.",
    whyAgencies: [
      {
        label: "It ends the re-gathering",
        body: "Without it, every new piece of work starts with someone reconstructing the client's business from memory, old emails and the last deck. That reconstruction is the single largest untracked cost in most agency weeks.",
      },
      {
        label: "It makes cover possible",
        body: "An account whose context lives in one person's head cannot be picked up when that person is ill, on holiday or leaving. A written profile is the difference between a handover and a restart.",
      },
      {
        label: "It exposes what nobody knows",
        body: "The most valuable output of filling this in is usually the blanks. A client who cannot say what stops their buyers buying has told you where the engagement needs to start.",
      },
    ],
    inputs: [
      "What the business sells, described the way the client describes it",
      "Price points, margins where the client will share them, and how they charge",
      "Markets, territories and any regulatory or contractual constraints",
      "What the business will not do — the offers refused and the clients turned away",
    ],
    outputs: [
      "A structured business record every downstream capability reads from",
      "An explicit list of what is unknown, marked as unknown rather than guessed",
      "A shareable summary you can put in front of the client to correct",
      "A versioned history, so a change to the business is visible as a change",
    ],
    sequence: [
      { title: "The agency runs the conversation", body: "In person or on a call, with the people who actually decide. The useful material — what went wrong last time, what they are worried about — arrives once the agenda runs out.", lane: "agency" },
      { title: "The profile is structured", body: "The conversation becomes a record in the same shape used on every account, so anyone can find the same fact in the same place.", lane: "mengo" },
      { title: "Gaps are marked", body: "What the client could not answer is recorded as unanswered. This is the step that makes the record trustworthy rather than merely complete.", lane: "mengo" },
      { title: "The agency verifies", body: "You check it against what you know. Some of it will be subtly wrong, and finding that now is the point.", lane: "agency" },
      { title: "The client confirms", body: "Put it in front of them. Clients correct a document far more readily than they answer an open question, which is why this step usually produces the best information in the engagement.", lane: "agency" },
    ],
    judgement: [
      { label: "Which facts actually matter", body: "A business profile can be infinitely long. Knowing which fifteen facts change the marketing and which fifty are trivia is an experience call." },
      { label: "When the client is wrong about themselves", body: "Clients routinely misdescribe their own buyers, usually flatteringly. Noticing that is most of what a good agency is for." },
      { label: "What not to write down", body: "Commercially sensitive material, unreleased plans and anything a client shared in confidence belong in your judgement rather than in a shared record." },
    ],
    limits: [
      "It does not verify anything. Every fact here is what the client said, and a confident record of a wrong price point is worse than an empty field.",
      "It is not a positioning statement. It holds the facts a positioning statement would need to be true about, and the positioning itself is a separate, later decision.",
      "It does not gather the information. That is a conversation, and the conversation is the agency's.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "Decide what you always ask, before your second client",
        situation:
          "Your first client came through your network and arrived without a brief, because they already trust you and assume you know what they need. You are working from a conversation you half remember.",
        problem:
          "Without a standard set of questions, each client gets a different depth of understanding depending on how the first meeting happened to go — and you have no way of knowing what you failed to ask until it costs you.",
        mengo: [
          "A consistent field set, so the same things get captured on every client",
          "A structure that can be filled during a conversation rather than sent as a form",
          "An explicit record of what the client could not answer",
        ],
        agency: [
          "Running the conversation, which is where all the real information is",
          "Deciding which answers are credible and which need checking",
        ],
        outcome:
          "You have a written brief structure you use from the first client, which is the single artefact that most improves the second and third.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "Stop reloading four businesses from memory",
        situation:
          "You hold three or four clients' businesses in your head at once and reload one every time you switch between them. That reload happens several times a day.",
        problem:
          "Context switching, not production, is where the hours go. Four clients is not four times the work of one — it is four sets of context to reload, repeatedly, with no compounding.",
        mengo: [
          "Each client's business held as a record you read rather than recall",
          "Everything downstream inheriting from it, so context arrives with the brief",
          "A version history, so a change to the client's offer is visible rather than remembered",
        ],
        agency: [
          "The client relationship, and every conversation that updates the record",
          "Deciding when a change to the business is material enough to reflow the plan",
        ],
        outcome:
          "Switching between clients becomes reading rather than remembering, which is the difference that decides whether a fourth client is viable.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Make an account something a colleague can pick up",
        situation:
          "Roles are informal and everyone works on everything. One person knows the client's history and another knows the tone they prefer, and neither has written it down.",
        problem:
          "Knowledge lives in people. When somebody is away, the account either stalls or gets served by someone reconstructing it from scratch — and the client can tell which.",
        mengo: [
          "One record per client that anybody on the team reads the same way",
          "The same field structure across every account, so a colleague knows where to look",
          "A shared source of truth rather than a shared folder of documents about the truth",
        ],
        agency: [
          "Named ownership of each account, which never becomes a system's job",
          "Deciding what a colleague genuinely needs to know before covering",
        ],
        outcome:
          "Cover becomes possible without a briefing meeting, and onboarding a new person stops requiring a fortnight beside someone who already knows.",
      },
      {
        stage: "growing",
        relevance: "core",
        headline: "Stop discovery depth varying with how busy that month was",
        situation:
          "Account directors sit between the founder and the work, and new accounts arrive faster than anyone can properly absorb them.",
        problem:
          "Discovery quality tracks capacity rather than client need. The accounts that most needed thinking time are often the ones that arrived in a busy month and got least.",
        mengo: [
          "The same profile depth on every account regardless of when it arrived",
          "A visible record of which accounts have gaps in their foundation",
          "Consistent structure that a reviewer can scan rather than read",
        ],
        agency: [
          "Setting the standard for what a complete profile looks like here",
          "Escalating the accounts whose gaps are commercially significant",
        ],
        outcome:
          "Discovery depth becomes a property of the process rather than of the month, which is what stops quiet accounts being quietly under-served.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "One answer to the same question, across every team",
        situation:
          "Multiple teams, often multiple offices, all producing under one name, with client knowledge distributed unevenly across all of it.",
        problem:
          "The agency knows a great deal about each client. Whether the person on a given account can reach it is a different question, and the answer is usually no.",
        mengo: [
          "A uniform business record per client, identical in shape across every team",
          "Ramp-up on a transferred account measured in reading rather than in re-discovery",
          "An auditable record of what was captured, when, and by whom",
        ],
        agency: [
          "Governance over what may be recorded and who may see it",
          "The client relationship and every conversation that maintains it",
        ],
        outcome:
          "An account moving between teams carries its context with it, which is the difference between a transfer and a relaunch.",
      },
    ],
    related: {
      capabilities: ["products", "icps-and-personas", "competitors", "brand-strategy"],
      workflows: ["client-onboarding", "client-discovery", "business-research"],
      useCases: ["improve-client-onboarding", "standardize-client-strategy"],
    },
    faqs: [
      {
        q: "How long does this take to fill in for a new client?",
        a: "The conversation is the work, and it is a conversation you would be having anyway. What changes is that it produces a durable record rather than notes. Expect the first client to take longer than the fifth, because you are also learning what you always want to ask.",
      },
      {
        q: "What if the client cannot answer half of it?",
        a: "Record it as unanswered. That list is your first research brief and, more usefully, a diagnostic: a client who cannot describe their buyer's objection has told you exactly where the engagement needs to start.",
      },
      {
        q: "Do we share this with the client?",
        a: "Most agencies should. Clients correct a document far more readily than they answer an open question, and putting a draft profile in front of them usually produces the best information in the whole engagement.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "products",
    title: "Products",
    navLabel: "Products",
    group: "foundation",
    depth: "staged",
    headline: "What the client sells, separated properly",
    lead:
      "A record of each product or service a client offers, what it costs, who it is for and how the offers relate to one another. It sounds trivial until you try to write a campaign for a client whose four services have never been distinguished from each other.",
    summary:
      "Each of a client's products or services recorded with its price, audience and relationship to the others — the offer structure marketing has to address.",
    seoTitle: "Products — a client's offer structure, recorded properly",
    seoDescription:
      "Record each client product or service with price, audience and how the offers relate. The offer structure that campaigns, content and sales material all address.",
    updated: "2026-09-02",
    meaning:
      "The client's offer inventory: each product or service, its price, its buyer, its margin where known, and how it relates to the others — entry offer, core offer, the thing that only exists to make the core offer easier to buy.",
    job: "Make it possible to market one offer without accidentally marketing all of them.",
    whyAgencies: [
      {
        label: "Undifferentiated offers produce undifferentiated marketing",
        body: "A client with four services and no offer structure gets marketing that mentions all four, aimed at nobody. This is one of the most common causes of a campaign that produces traffic and no enquiries.",
      },
      {
        label: "Price point determines almost everything downstream",
        body: "Channel choice, content depth, cycle length and follow-up cadence all follow from what the thing costs. Getting it into the record early prevents a plan built for the wrong sales cycle.",
      },
      {
        label: "It is where the commercial conversation starts",
        body: "An offer inventory frequently reveals that the client's most profitable service is the one they market least. That observation is worth more to them than a quarter of content.",
      },
    ],
    inputs: [
      "Every product or service the client actually sells, including the ones they undersell",
      "Price, and how it is charged — fixed, retainer, usage, project",
      "Who each offer is for, if the client can distinguish them",
      "Which offers lead to which, and what the client wishes people bought",
    ],
    outputs: [
      "A structured offer inventory with price and audience per item",
      "An offer relationship map: what leads to what",
      "Flags where two offers address the same buyer with the same promise",
      "A record of which offers are deliberately not being marketed, and why",
    ],
    sequence: [
      { title: "The agency inventories the offers", body: "Including the ones the client forgot to mention, which are often the profitable ones.", lane: "agency" },
      { title: "Offers are structured with price and buyer", body: "Each becomes a record rather than a line on a services page.", lane: "mengo" },
      { title: "Relationships are mapped", body: "Which offer leads to which, and where two offers are competing for the same buyer.", lane: "mengo" },
      { title: "The agency makes the commercial reading", body: "Which offer to lead with is a judgement about the client's capacity, margin and cash position — not a property of the inventory.", lane: "agency" },
      { title: "The client confirms the structure", body: "Offer structure is a business decision. It gets agreed, not assumed.", lane: "agency" },
    ],
    judgement: [
      { label: "Which offer to lead with", body: "Rarely the largest and rarely the client's favourite. It is a judgement about margin, delivery capacity and how quickly the client needs cash." },
      { label: "When an offer should not exist", body: "Telling a client that one of their four services is diluting the other three is among the most valuable things an agency does, and no inventory does it for you." },
      { label: "How much to expose publicly", body: "Whether prices go on the site is a commercial decision with real consequences either way." },
    ],
    limits: [
      "It does not price anything. What a client charges is a commercial decision made by the client, informed by their costs and their market.",
      "It has no access to the client's actual margin unless they tell you, and clients frequently do not know it themselves.",
      "It does not decide the offer structure. It records one so the structure can be discussed rather than assumed.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "Learn to ask what a client actually sells",
        situation:
          "You are working with a client whose website lists six services, and you have not yet asked which of them makes money.",
        problem:
          "New agencies market what the client's website says rather than what the client's business needs, because asking about price and margin feels intrusive in a first engagement.",
        mengo: [
          "A structure that makes the price and buyer questions a routine field rather than an awkward ask",
          "A place to record the offers the client mentions in passing but never markets",
          "An offer map you can show the client, which is easier than describing one",
        ],
        agency: [
          "Asking the commercial questions, which gets easier the moment you have a form to fill in",
          "Judging which offer the engagement should actually address",
        ],
        outcome:
          "Your first engagement addresses one offer properly rather than six vaguely, which is also the fastest way to produce a result you can point at.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "Keep four clients' offer structures straight",
        situation:
          "You hold several clients, each with several offers, and the details blur — particularly price points and which service leads to which.",
        problem:
          "An error here is expensive and embarrassing: a campaign built around the wrong price point, or content that promotes a service the client has quietly stopped selling.",
        mengo: [
          "Each client's offers held as records rather than remembered",
          "Content and campaigns inheriting the correct price and buyer automatically",
          "A visible flag when an offer has not been reviewed for a long time",
        ],
        agency: [
          "Keeping the record current as clients change what they sell",
          "The commercial conversation when an offer stops working",
        ],
        outcome:
          "The details stop blurring, and the class of error that damages client confidence disappears.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Everyone works from the same offer structure",
        situation:
          "Two people work on the same client and describe its services slightly differently, because they learned about them at different times.",
        problem:
          "Inconsistent offer descriptions across a team produce inconsistent client-facing material, and the client reads that as the agency not really understanding their business.",
        mengo: [
          "One offer inventory per client that the whole team writes from",
          "Consistent naming and price references across every asset",
          "A change to an offer propagating rather than being announced in a meeting",
        ],
        agency: [
          "Agreeing how the client's offers should be described publicly",
          "Deciding when a change is material enough to update live material",
        ],
        outcome:
          "The client sees one consistent account of their own business, which is a low bar that a surprising number of agencies miss.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Spot the pattern across a portfolio",
        situation:
          "You now run enough accounts that offer structures start to rhyme — three clients in the same sector with the same three-tier shape.",
        problem:
          "Every account's offer work is done from scratch, even where the structure is recognisably the same as one you solved six months ago for a comparable client.",
        mengo: [
          "Consistent offer records that make cross-account patterns visible",
          "Faster structuring on a new account in a sector you already know",
          "A record of which offer structures you have seen work",
        ],
        agency: [
          "Deciding what genuinely transfers between clients and what only appears to",
          "Confidentiality: one client's structure informs your expertise, never another client's plan",
        ],
        outcome:
          "Sector experience becomes something the agency accumulates rather than something individuals carry around in their heads.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "Offer accuracy at a scale where errors are expensive",
        situation:
          "Multiple teams produce client-facing material referencing prices and services, for clients whose offers change without marketing being told.",
        problem:
          "At scale, a stale price on a live page is not an embarrassment but a commercial and occasionally legal exposure — and nobody knows how many of them exist.",
        mengo: [
          "A single current offer record per client, referenced rather than copied",
          "Visibility of which accounts have offers that have not been reviewed",
          "Consistent structure across teams so a review is fast",
        ],
        agency: [
          "A review rhythm with the client to confirm what is current",
          "Accountability for what is published about a client's prices",
        ],
        outcome:
          "The question 'is anything we have published about this client's prices out of date' becomes answerable.",
      },
    ],
    related: {
      capabilities: ["business-profile", "icps-and-personas", "landing-page", "sales-script"],
      workflows: ["client-discovery", "marketing-planning", "new-client-launch"],
      useCases: ["build-the-first-service-package", "standardize-client-strategy"],
    },
    faqs: [
      {
        q: "Clients will not tell us their margins. Is this still useful?",
        a: "Yes, though less so. Price and buyer alone determine most downstream decisions. Margin changes which offer you would advise leading with, so where a client will not share it, record that you do not know rather than assuming — and be explicit that your recommendation is made without it.",
      },
      {
        q: "What if the client's offers genuinely overlap?",
        a: "That is a finding, and usually an important one. Two offers competing for the same buyer with the same promise is a business problem that marketing will otherwise spend a year working around.",
      },
      {
        q: "How often should this be reviewed?",
        a: "Whenever the client changes something, and at a fixed interval regardless — quarterly is reasonable. The failure mode is not a wrong record, it is a record nobody has looked at since onboarding.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "competitors",
    title: "Competitors",
    navLabel: "Competitors",
    group: "foundation",
    depth: "staged",
    headline: "Who the client is actually losing to",
    lead:
      "A record of the competitors that matter, how they position themselves and where the gaps are. The obvious competitor and the one costing your client deals are frequently different companies, and finding that out is worth more than any amount of competitor monitoring.",
    summary:
      "The competitors that actually affect a client's deals, how they position, and where the positioning gaps are.",
    seoTitle: "Competitors — competitive context for client marketing",
    seoDescription:
      "Record the competitors that actually affect a client's deals, how they position themselves and where the gaps are. Context to verify, not a source of truth.",
    updated: "2026-09-02",
    meaning:
      "A working record of the competitive set: who else the client's buyers consider, how each positions itself, what they charge where that is public, and where nobody is currently standing.",
    job: "Replace the client's assumption about who they compete with, with something checkable.",
    whyAgencies: [
      {
        label: "Positioning without competitive context is guesswork",
        body: "A positioning statement written without reference to what buyers are comparing the client against is a description rather than a position — and it is why so much B2B messaging sounds identical.",
      },
      {
        label: "Clients are usually wrong about this",
        body: "They name the competitor they resent. Buyers are frequently choosing between the client and doing nothing, or between the client and an in-house hire — neither of which appears on the list.",
      },
      {
        label: "It is the fastest route to a differentiated angle",
        body: "The gaps in a competitive set are visible within an afternoon of structured work, and they are where the differentiated message usually is.",
      },
    ],
    inputs: [
      "Competitors the client names, in the client's order of resentment",
      "What the client's sales conversations actually mention, which is often different",
      "Public positioning: how each competitor describes itself",
      "Any pricing that is genuinely public rather than inferred",
    ],
    outputs: [
      "A structured competitive set with each competitor's public positioning",
      "A positioning map showing where the client sits and where nobody is",
      "An explicit list of what could not be established and would need primary research",
      "The alternatives that are not companies — doing nothing, in-house, a freelancer",
    ],
    sequence: [
      { title: "The agency asks who they lose to", body: "Not who they compete with. The two questions produce different lists and the second one is the useful one.", lane: "agency" },
      { title: "Public positioning is assembled", body: "How each competitor describes itself, in its own words, gathered into one document rather than eleven browser tabs.", lane: "mengo" },
      { title: "Gaps are marked", body: "What could not be established is stated as unestablished. Competitive research is where confident invention does the most damage.", lane: "mengo" },
      { title: "The agency validates", body: "Sector knowledge is what tells you which of this is out of date or misleading. Assembled context is a hypothesis.", lane: "agency" },
      { title: "The agency draws the conclusion", body: "Where the client should stand is a strategic decision informed by the map, not read off it.", lane: "agency" },
    ],
    judgement: [
      { label: "Which competitor actually matters", body: "The largest, the loudest and the one costing deals are usually three different companies. Only one of them should shape the positioning." },
      { label: "Whether a gap is a gap or a graveyard", body: "Empty positioning space is sometimes empty because it does not work. Distinguishing the two is experience, not analysis." },
      { label: "What to do about it", body: "A competitive map informs a decision. Making the decision is the agency's job and it is the part the client is paying for." },
    ],
    limits: [
      "It is not primary research. It does not interview buyers, run win-loss analysis or access anything behind a login.",
      "Public positioning goes stale. Treat anything time-sensitive — pricing, a competitor's current message — as needing a check before it reaches a client document.",
      "It cannot see private competitive intelligence, and a confident-sounding claim about a competitor's strategy is exactly the kind of thing that should be verified.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "useful",
        headline: "Enough context to sound credible in a first meeting",
        situation:
          "You are pitching or onboarding a client in a sector you know only partly, and the client will know within ten minutes whether you have done any homework.",
        problem:
          "Competitive research eats an evening and produces a document you cannot fully evaluate, because you do not yet have the sector experience to know what is missing from it.",
        mengo: [
          "Public competitor positioning assembled into one readable document",
          "Explicit gaps, so you know what you do not know before the client finds out",
          "A structure you reuse on every client rather than starting from a blank page",
        ],
        agency: [
          "Judging which parts look wrong, which is a skill you are building",
          "Every conclusion drawn from it — the research informs, it does not conclude",
        ],
        outcome:
          "You arrive at a client meeting having done real preparation, in an evening rather than a weekend.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "The research pass that is always first to be cut",
        situation:
          "You know competitive context matters and it is the first thing to go when the week is tight, because the client did not ask for it by name.",
        problem:
          "Plans built without it are confident and wrong, and the error surfaces a quarter later when the messaging has not landed and nobody can say why.",
        mengo: [
          "A consistent research pass on every account, including in busy weeks",
          "Competitor positioning kept per client rather than rebuilt each time it is needed",
          "A record that can be refreshed rather than redone",
        ],
        agency: [
          "Deciding what the findings mean for this client",
          "Knowing when the assembled picture is out of date",
        ],
        outcome:
          "The layer everything else depends on stops being the layer that gets skipped.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Every account gets the same depth, not just the demanding ones",
        situation:
          "Your largest client gets thorough competitive work. The others get whatever attention is left after the largest client's week.",
        problem:
          "Attention follows noise. The quiet accounts get the shallowest research, and quiet accounts are the ones that leave without a conversation.",
        mengo: [
          "The same research depth on every account regardless of how vocal the client is",
          "A shared record the whole team reads rather than one person's browser history",
          "Consistent structure so a reviewer can check it quickly",
        ],
        agency: [
          "Setting the minimum depth every account receives",
          "Validating findings against the sector knowledge your team holds",
        ],
        outcome:
          "A floor exists under every account, which is the single most effective thing a small agency can do about churn.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Sector knowledge that accumulates instead of walking out",
        situation:
          "You now have several clients in the same two or three sectors, and each account's competitive work was done independently by whoever ran it.",
        problem:
          "The agency has genuine sector expertise distributed across individuals, and no way for a new account to benefit from what a colleague learned last year.",
        mengo: [
          "Consistent competitive records that make sector patterns visible across accounts",
          "Faster context assembly on a new client in a sector you already serve",
          "A structure a new hire can read rather than absorb over months",
        ],
        agency: [
          "Confidentiality between accounts: one client's material never informs another's plan",
          "Deciding what constitutes transferable sector knowledge and what does not",
        ],
        outcome:
          "Sector expertise becomes an agency asset rather than a personal one, which is also what makes it survivable when someone leaves.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "Defensible competitive claims across every team",
        situation:
          "Client-facing material across multiple teams makes comparative claims, and the evidence behind each one lives with whoever wrote it.",
        problem:
          "Comparative claims attract legal attention, particularly in software and regulated sectors. An agency that cannot show where a claim came from has a real exposure.",
        mengo: [
          "A recorded source for competitive positions rather than an unattributed assertion",
          "Consistent research structure across teams, so a review is possible",
          "Explicit marking of anything unverified",
        ],
        agency: [
          "Approval of every comparative claim before it is published",
          "The client's own sign-off where their legal exposure is involved",
        ],
        outcome:
          "'Where did this claim come from' has an answer, which is the difference between a manageable question and an incident.",
      },
    ],
    related: {
      capabilities: ["icps-and-personas", "swot-analysis", "moat-analysis", "brand-strategy"],
      workflows: ["business-research", "client-discovery", "brand-strategy-workflow"],
      useCases: ["standardize-client-strategy", "improve-client-onboarding"],
    },
    faqs: [
      {
        q: "How current is competitor information?",
        a: "Treat it as context to verify rather than as fact. Anything time-sensitive — pricing, a current campaign, a positioning change — should be checked before it reaches a client document, and the research output marks what it is unsure about.",
      },
      {
        q: "Can it monitor competitors continuously?",
        a: "No. This produces a point-in-time picture that you refresh deliberately. Continuous monitoring is a different kind of product and we would rather say so than imply a capability that is not there.",
      },
      {
        q: "What about competitors the client has never heard of?",
        a: "Assembled research will sometimes surface them, and that is genuinely useful. It will also sometimes surface irrelevant companies that merely look similar, which is why the agency validation step is not optional.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "icps-and-personas",
    title: "ICPs & Personas",
    navLabel: "ICPs & Personas",
    group: "foundation",
    depth: "staged",
    headline: "The buyers worth separating, and the objection each one holds",
    lead:
      "Segments defined by what changes the message, not by demographics. A persona that describes a person without describing what stops them buying produces different labels on identical marketing, which costs production effort and gains nothing.",
    summary:
      "A client's buyers divided by the objection they hold rather than by demographics — the segmentation that actually changes what should be said.",
    seoTitle: "ICPs & Personas — segmentation that changes the message",
    seoDescription:
      "Define client segments by the objection each holds rather than by demographics. The segmentation that changes what marketing should say, and the input nurturing depends on.",
    updated: "2026-09-02",
    meaning:
      "The ideal customer profile — the kind of buyer the client should want — and the personas within it, each defined by the situation they are in, the outcome they want and the specific thing that stops them buying.",
    job: "Divide a client's audience only where the division changes what should be said.",
    whyAgencies: [
      {
        label: "It is the input everything downstream needs",
        body: "Content, campaigns and nurturing all need to know who they are addressing and what that person is worried about. Without it, every asset is written for a general audience, which means nobody.",
      },
      {
        label: "Demographic personas are the most common wasted deliverable",
        body: "Segments defined by age, job title and a stock photograph produce identical messaging with different names on it. The test is whether the segments would receive different copy.",
      },
      {
        label: "The objection list is the most valuable part",
        body: "Nurturing, sales enablement and most conversion work depend on knowing what people actually hesitate over. That inventory is worth more than the persona documents it sits inside.",
      },
    ],
    inputs: [
      "Who the client believes buys from them, and who actually does",
      "Real objections from the client's sales conversations, not assumed ones",
      "What triggers a purchase — the situation that makes this urgent",
      "Which buyers the client would rather not have, which is often more revealing",
    ],
    outputs: [
      "Two to four segments, each justified by a difference that changes the message",
      "An objection inventory per segment",
      "The trigger and the outcome each segment is buying toward",
      "An explicit note where a proposed segment did not survive the test",
    ],
    sequence: [
      { title: "The agency gathers real objections", body: "From the client's sales team where one exists. Assumed objections produce material that answers questions nobody asked.", lane: "agency" },
      { title: "Candidate segments are drafted", body: "Grouped by objection and situation rather than by demographics.", lane: "mengo" },
      { title: "Each segment is tested for difference", body: "Would this segment receive materially different messaging? Where the answer is no, the segments merge.", lane: "mengo" },
      { title: "The agency decides which to lead with", body: "The commercially right segment is often not the largest. That is a judgement about the client's capacity and cash position.", lane: "agency" },
      { title: "The client validates", body: "Clients recognise their own buyers immediately and will correct a draft faster than they will describe one.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether a segment is real", body: "A segment that exists in a spreadsheet and not in the client's sales pipeline is a fiction that will absorb production effort for a year." },
      { label: "Which segment to serve first", body: "A commercial call about margin, delivery capacity and cash — not a property of segment size." },
      { label: "When to refuse a segment", body: "Telling a client that a group they are enthusiastic about is not worth addressing is among the most valuable things an agency does." },
    ],
    limits: [
      "It does not research buyers. Real objections come from the client's sales conversations, and a segment built from assumption is a confident guess.",
      "It has no access to the client's CRM or analytics. What their data says is an input you supply.",
      "It does not validate that a segment exists commercially. That needs the client's pipeline, not a document.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "core",
        headline: "Learn the question that makes segmentation useful",
        situation:
          "You have read about personas and you are about to produce one that describes a forty-two-year-old operations manager who enjoys cycling.",
        problem:
          "Demographic personas feel like professional deliverables and change nothing about the work. New agencies produce them because they look like what agencies produce.",
        mengo: [
          "A structure built around objection and trigger rather than demographics",
          "A test that merges two segments when they would receive the same message",
          "A place to record real objections as you collect them",
        ],
        agency: [
          "Actually asking the client what stops people buying — three different ways, because the first answer is always price and rarely is",
          "Deciding which single segment your first engagement addresses",
        ],
        outcome:
          "Your first segmentation changes what you write, which is the only test that matters.",
      },
      {
        stage: "solo",
        relevance: "core",
        headline: "One objection inventory, reused across everything",
        situation:
          "You write content, campaigns and follow-up for several clients, and you reconstruct who you are writing to each time you start something.",
        problem:
          "The reconstruction is invisible and constant, and it is why writing the twentieth asset for a client is not much faster than writing the first.",
        mengo: [
          "Segments and objections stored per client and inherited by every brief",
          "Nurturing sequences built against the same objection list the content addresses",
          "Consistency across formats without you holding it in your head",
        ],
        agency: [
          "Keeping the objection list current as the client's market shifts",
          "Judging when a new objection is a pattern rather than one loud customer",
        ],
        outcome:
          "Every asset knows who it is for before you start writing it.",
      },
      {
        stage: "small-team",
        relevance: "core",
        headline: "Two writers, one understanding of the audience",
        situation:
          "Two people write for the same client and address subtly different audiences, because they formed their understanding at different times from different conversations.",
        problem:
          "The client experiences this as inconsistency without being able to name what changed, which is the most corrosive kind of quality problem.",
        mengo: [
          "One shared segment definition per client that everybody writes from",
          "Objections recorded once rather than learned individually",
          "Briefs that carry the segment, so the writer does not have to choose",
        ],
        agency: [
          "Agreeing the segments as a team, which is a real conversation worth having",
          "Reviewing against the segment rather than against the reviewer's own model of the audience",
        ],
        outcome:
          "Work produced by different people addresses the same buyer in the same terms.",
      },
      {
        stage: "growing",
        relevance: "core",
        headline: "Segmentation depth that does not depend on who ran onboarding",
        situation:
          "Account directors run their own discovery, and the quality of segmentation across the portfolio varies with the individual rather than with the client.",
        problem:
          "Some accounts have genuinely useful objection inventories and others have three demographic personas nobody references, and nothing surfaces which is which.",
        mengo: [
          "A consistent segmentation structure across every account",
          "Visibility of which accounts have real objection data and which have assumptions",
          "The same test applied everywhere, so weak segments do not survive by accident",
        ],
        agency: [
          "Setting the standard for what counts as a validated segment here",
          "Escalating accounts whose segmentation is guesswork",
        ],
        outcome:
          "The quality of an account's segmentation stops being a function of who happened to run its onboarding.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Audience definitions that survive a team change",
        situation:
          "Accounts move between teams, and each move risks the accumulated understanding of the client's buyers being reconstructed from the deliverables rather than inherited.",
        problem:
          "Audience knowledge is the most expensive thing to rebuild and the least visible thing to lose. Nobody notices it has gone until the messaging drifts.",
        mengo: [
          "Segment and objection records that transfer with the account",
          "A uniform structure across teams, so an inherited account reads like a familiar one",
          "A dated record showing when the objection inventory was last refreshed",
        ],
        agency: [
          "A rhythm for revalidating segments with the client's sales function",
          "Judgement about when a market shift makes existing segments obsolete",
        ],
        outcome:
          "A team change costs a handover rather than a re-discovery.",
      },
    ],
    related: {
      capabilities: ["business-profile", "competitors", "whatsapp-nurturing", "sales-script"],
      workflows: ["icp-and-persona-development", "client-discovery", "lead-nurturing-flows"],
      useCases: ["standardize-client-strategy", "improve-sales-enablement"],
    },
    faqs: [
      {
        q: "How many segments should a client have?",
        a: "Two to four for most businesses. More than four and you are producing variants that nobody has capacity to maintain; one and you are probably missing a genuine difference. The real test is whether each would receive different copy.",
      },
      {
        q: "Our client will not give us access to their sales team.",
        a: "Then record that the objections are assumed rather than observed, and treat the resulting segmentation as a hypothesis. It is still more useful than demographics, and the gap is worth naming to the client — it is often the argument that gets you the access.",
      },
      {
        q: "Is an ICP the same as a persona?",
        a: "No. The ICP is the kind of customer the business should want — a company profile in B2B, a household or situation in B2C. Personas are the individuals inside it who have to be convinced. A client can have one ICP and three personas within it.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "founders",
    title: "Founders",
    navLabel: "Founders",
    group: "foundation",
    depth: "staged",
    headline: "When the client's founder is part of the product",
    lead:
      "A record of the people whose credibility the business runs on: what they have done, what they believe, what they will and will not say publicly. Relevant for a great many clients and irrelevant for many others, and knowing which is the useful part.",
    summary:
      "The founder record behind thought leadership, PR and personal-brand work — including what a founder will not put their name to.",
    seoTitle: "Founders — the personal credibility layer in client marketing",
    seoDescription:
      "A record of the founders whose credibility a client business runs on: background, positions, and what they will and will not say publicly.",
    updated: "2026-09-02",
    meaning:
      "The biographical and positional record of a client's founders or principals: background, credentials, the views they hold publicly, the topics they will speak on and the ones they refuse.",
    job: "Make founder-led marketing possible without a founder having to write anything.",
    whyAgencies: [
      {
        label: "In many businesses the founder is the differentiator",
        body: "Professional services, consultancies, clinics and early-stage software companies are frequently bought because of a specific person. Marketing that ignores that is marketing the wrong asset.",
      },
      {
        label: "Founder time is the binding constraint",
        body: "The person whose voice is needed is the person with least time to produce anything. Structure is what turns twenty minutes of their attention into usable material.",
      },
      {
        label: "The refusal list prevents the worst mistakes",
        body: "Knowing what a founder will not say publicly — a political position, a former employer, a legal matter — is more operationally valuable than knowing what they will.",
      },
    ],
    inputs: [
      "Background, credentials and the parts of the history that are public",
      "Positions the founder holds and will defend in public",
      "Topics they will speak on, and topics they refuse",
      "How they actually sound — from existing writing or recordings, not from aspiration",
    ],
    outputs: [
      "A founder record covering background, positions and boundaries",
      "A topic inventory: what this person can credibly speak to",
      "An explicit refusal list",
      "Interview-shaped prompts, so twenty minutes produces material rather than notes",
    ],
    sequence: [
      { title: "The agency has the conversation", body: "Founders describe themselves badly in writing and well in conversation. This step is a conversation, always.", lane: "agency" },
      { title: "The record is structured", body: "Background, positions, topics and refusals held as fields rather than as a bio paragraph.", lane: "mengo" },
      { title: "Voice is captured from evidence", body: "Drawn from what the founder has already written or said, rather than from how they would like to sound.", lane: "agency" },
      { title: "Prompts are generated", body: "Interview-shaped questions that turn a short conversation into usable raw material.", lane: "mengo" },
      { title: "The founder approves", body: "Anything published under a person's name needs that person's sign-off. There is no version of this where that step is skipped.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether founder-led is right at all", body: "Some founders should not be the face of the business, and telling a client that is a difficult and valuable conversation." },
      { label: "What a founder will actually stand behind", body: "The gap between what someone says in a workshop and what they will put their name to is where most thought-leadership programmes die." },
      { label: "How much personal detail is appropriate", body: "A judgement about the person, the sector and the client's own comfort — and one that no system should make." },
    ],
    limits: [
      "It does not write in someone's voice without their input and approval. A founder's name on generated text they have not read is a real risk to them and to you.",
      "It cannot verify credentials or claims about a person's history.",
      "It is not a substitute for the founder's time. It reduces how much is needed; it does not remove the requirement.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Probably not your first engagement",
        situation:
          "You are establishing a first client relationship, and founder-led marketing is a high-trust programme that depends on a relationship you do not have yet.",
        problem:
          "Founder work fails when the agency does not yet know the client well enough to judge what the founder will stand behind — and a founder who feels misrepresented once will not do it again.",
        mengo: [
          "A place to record what you learn about the founder as the relationship develops",
          "Structure ready for when the engagement is mature enough to use it",
        ],
        agency: [
          "Building the trust that founder-led work requires",
          "Judging when the relationship can carry it",
        ],
        outcome:
          "You have a record accumulating for later rather than a programme launched too early.",
        insteadDoThis:
          "Do the Business Profile and ICP work first. Founder-led marketing is worth proposing once you have delivered something the client is pleased with, not before.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "Turn twenty minutes of founder time into a month of material",
        situation:
          "Your clients are small businesses where the founder is genuinely the differentiator, and getting anything out of them takes weeks of chasing.",
        problem:
          "You ask for a draft, they do not write it, the content plan stalls, and the item rolls over to the next month indefinitely.",
        mengo: [
          "Interview-shaped prompts that produce material from a recorded conversation",
          "A founder record so the same background is not re-established every time",
          "Drafts in the founder's recorded voice for them to correct rather than write",
        ],
        agency: [
          "Running the conversation, which is the only part that cannot be delegated",
          "Getting approval before anything goes out under their name",
        ],
        outcome:
          "The ask changes from 'write us something' to 'talk to us for twenty minutes', which is an ask founders actually say yes to.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Founder programmes that survive the account lead being away",
        situation:
          "One person on your team has the relationship with the client's founder and understands what they will and will not say. Nobody else does.",
        problem:
          "Founder-led work concentrates in one person more than any other kind, and it stops entirely when that person is unavailable.",
        mengo: [
          "The founder's positions, topics and refusals as a shared record",
          "Voice evidence held per person rather than in one colleague's ear",
          "A structure a second reviewer can check work against",
        ],
        agency: [
          "The relationship itself, which is transferable slowly and never instantly",
          "Approval routing that always ends with the founder",
        ],
        outcome:
          "A founder programme can be covered rather than paused.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Several founder programmes without confusing them",
        situation:
          "You now run founder-led work for a handful of clients, each with a distinct voice, set of positions and list of things they will not touch.",
        problem:
          "The refusal lists are the dangerous part. Attributing one client's comfort level to another is the kind of mistake that ends a relationship in a single email.",
        mengo: [
          "Strictly separated founder records with explicit boundaries per person",
          "Consistent structure so a reviewer knows where to check before publishing",
          "Voice profiles held per individual rather than per agency habit",
        ],
        agency: [
          "A review step that specifically checks the refusal list before anything ships",
          "Deciding which clients should be running founder-led work at all",
        ],
        outcome:
          "Multiple founder programmes run in parallel without the boundaries blurring.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Executive visibility with a governance trail",
        situation:
          "You produce material published under the names of senior people at client organisations, sometimes in regulated sectors, across multiple teams.",
        problem:
          "Anything attributed to a named executive carries reputational and occasionally legal weight for them personally. An informal approval process is not adequate at this scale.",
        mengo: [
          "A recorded position and boundary set per named individual",
          "A consistent trail of what was produced from which conversation",
          "Uniform structure across teams so approvals follow the same route everywhere",
        ],
        agency: [
          "A formal approval route that always ends with the named person",
          "The client's own compliance or communications function where their sector requires it",
        ],
        outcome:
          "Executive-attributed content has a documented provenance, which is what makes it defensible.",
      },
    ],
    related: {
      capabilities: ["employees", "pr-content", "speaking-engagements", "interview-and-media-prep"],
      workflows: ["pr-and-media-workflow", "content-planning", "client-discovery"],
      useCases: ["expand-service-offerings", "improve-client-retention"],
    },
    faqs: [
      {
        q: "Can this write in a founder's voice?",
        a: "It can produce a draft against a voice profile built from what they have actually written or said. The last stretch — the phrase they always use, the joke that would land badly — is an editor's job, and the founder's approval is not optional.",
      },
      {
        q: "The client's founder has no public presence at all. Where do we start?",
        a: "With a conversation and a recording, not a blank page. Twenty minutes of a founder talking about something they care about produces more usable material than any amount of asking them to write.",
      },
      {
        q: "What if the founder is not the right person to front the business?",
        a: "That is a real and reasonably common situation, and saying so is the agency's job. Sometimes the right answer is a different named expert inside the business; sometimes it is that the brand rather than a person should carry the marketing.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "employees",
    title: "Employees",
    navLabel: "Employees",
    group: "foundation",
    depth: "staged",
    headline: "The people behind the work, where they are part of the offer",
    lead:
      "A record of the client's team as it bears on marketing: who has expertise worth surfacing, who can speak publicly, and who the business is trying to hire. Relevant for professional services and for anyone whose people are the service.",
    summary:
      "The client's team as it bears on marketing — expertise to surface, spokespeople, and the employer brand behind hiring.",
    seoTitle: "Employees — the team layer in client marketing",
    seoDescription:
      "Record which of a client's people have expertise worth surfacing, who can speak publicly, and what the business needs for recruitment marketing.",
    updated: "2026-09-02",
    meaning:
      "A working record of the client's people insofar as marketing touches them: named experts, spokespeople, contributors to content, and the roles the business is recruiting for.",
    job: "Know which of the client's people the marketing can draw on, and for what.",
    whyAgencies: [
      {
        label: "In services businesses the people are the product",
        body: "A law firm, a consultancy or a clinic is bought on the strength of named individuals. Marketing that treats the organisation as faceless is marketing against the client's actual advantage.",
      },
      {
        label: "Expertise is the scarcest content input",
        body: "The genuinely valuable material in a professional services business is inside billable people. Knowing who holds what, and who is willing to contribute, is the difference between a thought-leadership programme and an intention.",
      },
      {
        label: "Recruitment is marketing the client rarely briefs you on",
        body: "Most professional services clients have a hiring problem and have never asked their agency for help with it, which is usually a missed opportunity for both sides.",
      },
    ],
    inputs: [
      "Who holds which expertise, and who is willing to be visible",
      "Who is authorised to speak publicly and on what",
      "Roles the business is recruiting for and struggles to fill",
      "Any restrictions — people who must not be named, or who are leaving",
    ],
    outputs: [
      "A record of named expertise and willing contributors",
      "A spokesperson list with topics and boundaries",
      "Recruitment marketing inputs: roles, audience, what makes this employer distinctive",
      "Interview prompts sized for a billable person's twenty minutes",
    ],
    sequence: [
      { title: "The agency asks who knows what", body: "Usually a conversation with a practice lead rather than with HR, because the useful answer is about expertise rather than about org structure.", lane: "agency" },
      { title: "The record is structured", body: "Expertise, willingness and authorisation held as separate fields, because they are genuinely different things.", lane: "mengo" },
      { title: "Prompts are prepared", body: "Questions designed so a short conversation with a busy expert produces publishable raw material.", lane: "mengo" },
      { title: "The agency runs the extraction", body: "A recorded conversation, not a written request. Written requests to billable people produce nothing.", lane: "agency" },
      { title: "The named person approves", body: "Anything attributed to an individual is approved by that individual before it goes anywhere.", lane: "agency" },
    ],
    judgement: [
      { label: "Who should be visible", body: "Not everyone with expertise should be the public face of it, and this is a conversation with the client's leadership rather than an inference." },
      { label: "How to ask a billable person for time", body: "Framing the ask so a partner says yes is a relationship skill, and it is most of what makes these programmes work." },
      { label: "What is safe to publish about a person", body: "Personal detail, availability and internal information all carry consequences. This needs a person's judgement and the individual's consent." },
    ],
    limits: [
      "It does not hold HR data, and it should not. This is a marketing record about public-facing expertise, not a personnel system.",
      "It cannot get you access to people. Persuading a busy expert to spend twenty minutes is a relationship problem.",
      "It does not verify credentials, and in regulated professions those claims carry weight.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Your early clients probably do not have a team",
        situation:
          "Your first clients are likely to be small enough that the founder is the team, in which case this capability has nothing to hold.",
        problem:
          "Building a people record for a three-person business is administration without a payoff.",
        mengo: [
          "Somewhere to record named expertise when a client is large enough to have any",
        ],
        agency: [
          "Judging when a client has enough people for this to matter",
        ],
        outcome:
          "Nothing yet, and that is the right answer.",
        insteadDoThis:
          "Use Founders instead. For a client under about ten people, the founder record covers everything this would, and covers it better.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Useful for one kind of client, not for most",
        situation:
          "If you serve professional services firms, this matters immediately. If your clients are small product businesses, it does not.",
        problem:
          "Adopting every capability because it exists is how a solo agency loses its week. The discipline is in leaving things alone.",
        mengo: [
          "A record of named experts, for the clients where that is the actual offer",
          "Interview prompts that make a partner's twenty minutes productive",
        ],
        agency: [
          "Deciding which clients this applies to, and skipping it for the rest",
          "The relationship work that gets a billable person to participate",
        ],
        outcome:
          "For professional services clients, a thought-leadership programme that produces something. For everyone else, correctly ignored.",
        insteadDoThis:
          "If your clients are not services firms, put the time into Content and Sales capabilities instead — that is where a solo agency's return is.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "A partner's twenty minutes, reliably converted",
        situation:
          "You have professional services clients whose partners are the product, and every content plan depends on extracting material from people who bill by the hour.",
        problem:
          "Approval and contribution cycles are genuinely slow, and delivery plans that assume otherwise fail — not occasionally, but structurally.",
        mengo: [
          "Interview-shaped prompts sized to a short conversation",
          "A record of who has already contributed on what, so nobody is asked twice",
          "Plans sequenced around slow approval rather than pretending it will be fast",
        ],
        agency: [
          "Managing the relationship with contributors so the ask keeps working",
          "Judging what a partner will actually put their name to",
        ],
        outcome:
          "Expert content stops depending on someone eventually finding a free evening.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Contributor programmes across several client firms",
        situation:
          "You run expert-led content for multiple professional services clients, each with its own contributors, authorisations and internal politics.",
        problem:
          "Attribution and authorisation errors across firms are serious. Naming the wrong person, or quoting someone not cleared to speak, damages a client relationship immediately.",
        mengo: [
          "Strictly separated contributor records with explicit authorisation per person",
          "A visible history of who contributed to what",
          "Uniform structure so a reviewer checks the same things on every account",
        ],
        agency: [
          "A review step that verifies authorisation before publication",
          "The client-side relationships that keep contributors willing",
        ],
        outcome:
          "Several expert programmes run in parallel without an attribution incident.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Named-expert content with a governance trail",
        situation:
          "You publish material attributed to named individuals at client organisations, sometimes in regulated professions, across multiple delivery teams.",
        problem:
          "In regulated professions, attributed content carries professional-conduct implications for the individual. Informal approval is not defensible.",
        mengo: [
          "Authorisation and topic boundaries recorded per named individual",
          "A trail from conversation through to published attribution",
          "Consistent structure so approval routes are identical across teams",
        ],
        agency: [
          "The client's compliance function where their profession requires it",
          "Formal sign-off from every named individual",
        ],
        outcome:
          "Attributed expert content is defensible in a professional-conduct review, which is the standard the sector actually requires.",
      },
    ],
    related: {
      capabilities: ["founders", "hr-assets", "pr-content", "case-studies"],
      workflows: ["content-planning", "pr-and-media-workflow"],
      useCases: ["expand-service-offerings", "improve-client-retention"],
    },
    faqs: [
      {
        q: "Is this an HR system?",
        a: "No, and it should not be used as one. It records what marketing needs — who holds public-facing expertise, who may speak, what roles are being recruited for. Personnel data belongs in the client's own HR system.",
      },
      {
        q: "How do we get billable people to contribute?",
        a: "Change the ask. Twenty minutes of recorded conversation against a structured prompt produces more usable material than a request for a written draft, which typically produces nothing at all. The structure is what makes the twenty minutes sufficient.",
      },
      {
        q: "Should we do recruitment marketing for clients?",
        a: "It is worth asking. Most professional services firms have a hiring problem, few have briefed their agency on it, and the audience research you already hold transfers more than either side expects.",
      },
    ],
  },
];
