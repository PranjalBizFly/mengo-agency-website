import type { Capability } from "@/lib/types";

/**
 * Marketing capabilities — the visibility and reputation half.
 *
 * These are the capabilities most often sold and least often delivered well,
 * because each is a real programme rather than a scope line. Several of them
 * are honestly marked `later` at the earlier stages, which is the point: an
 * agency that offers speaking-engagement support to its first client is
 * offering something it cannot yet deliver.
 */
export const marketingVisibilityCapabilities: Capability[] = [
  {
    kind: "capability",
    slug: "pr-content",
    title: "PR Content",
    navLabel: "PR Content",
    group: "marketing",
    depth: "staged",
    headline: "Material a journalist can actually use",
    lead:
      "Press releases, media statements, comment and the background material behind them. Most agency press output fails not because it is badly written but because it is not news, and knowing the difference is the capability.",
    summary:
      "Press releases, statements and expert comment written to what a journalist can use rather than to what the client wants said.",
    seoTitle: "PR Content — press material agencies produce for clients",
    seoDescription:
      "Press releases, media statements and expert comment structured around what is genuinely newsworthy rather than what the client would like published.",
    updated: "2026-09-02",
    meaning:
      "Written material for media use: announcements, statements, expert comment and the factual background a journalist needs to write about a client without calling them.",
    job: "Produce material a journalist can use without rewriting it.",
    whyAgencies: [
      {
        label: "Most press releases are not news",
        body: "A journalist decides in the subject line. Client announcements that matter internally and nowhere else are the single largest category of wasted PR effort.",
      },
      {
        label: "Comment is faster than announcement",
        body: "Reactive expert comment on something already in the news has a far better hit rate than a proactive announcement, and almost no client is set up to provide it quickly.",
      },
      {
        label: "The background material does the work",
        body: "A journalist who can find the facts, the spokesperson and the images without emailing you is a journalist who writes the story.",
      },
    ],
    inputs: [
      "What has actually happened, distinguished from what the client wants said",
      "An authorised spokesperson and their approved position",
      "Factual background: dates, numbers, credentials the client can evidence",
      "What must not be said — embargoes, confidentiality, legal constraints",
    ],
    outputs: [
      "Announcements structured around the newsworthy element, where there is one",
      "Reactive comment written to a running story",
      "A background factsheet a journalist can work from",
      "Explicit flags where a claim needs evidence before it can be published",
    ],
    sequence: [
      { title: "The agency judges whether it is news", body: "The most valuable step, and usually the one that concludes it is not.", lane: "agency" },
      { title: "Material is structured", body: "Written to the journalist's needs — the news first, the background beneath, the quote optional.", lane: "mengo" },
      { title: "Claims are flagged", body: "Anything requiring evidence is marked rather than asserted, because a press claim is on the record.", lane: "mengo" },
      { title: "The client verifies facts", body: "Every number, date and credential. Errors in press material are permanent and public.", lane: "agency" },
      { title: "The spokesperson approves", body: "Attributed quotes are approved by the person they are attributed to. Always.", lane: "agency" },
      { title: "The agency handles the relationship", body: "Distribution and the journalist relationship are entirely the agency's, and always will be.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether there is a story", body: "Telling a client their announcement is not news is the most valuable and least welcome thing in this capability." },
      { label: "Which journalist and which angle", body: "A relationship and a sense of what a specific publication covers. Nothing substitutes for either." },
      { label: "What to do when it goes wrong", body: "Crisis and correction handling is a human judgement under time pressure, and it is not a drafting exercise." },
    ],
    limits: [
      "It does not distribute, pitch or have media relationships. That is the whole of PR's actual difficulty.",
      "It cannot verify claims, and press material carries claims on the record.",
      "It does not handle crisis communications, which need a person with the client's context and the authority to decide.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "PR needs relationships you do not have yet",
        situation: "A client asks whether you do PR and you can write a release but know no journalists.",
        problem: "The writing is the easy fifth of PR. Selling it without the relationships produces an unplaced release and a disappointed client.",
        mengo: ["Well-structured material for the occasional genuine announcement"],
        agency: ["Being honest about what you can and cannot place", "Partnering with a PR specialist rather than pretending"],
        outcome: "You decline or partner, rather than selling a placement you cannot deliver.",
        insteadDoThis:
          "Build the client's owned channels first — Blog Content, Social Media, Newsletter. Earned media works far better once there is something to point at.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Reactive comment is the achievable version",
        situation: "You have a client with genuine expertise and no realistic route to proactive coverage.",
        problem: "Proactive PR needs sustained relationship work that a solo agency cannot fund alongside delivery.",
        mengo: ["Fast reactive comment drafted against a running story", "A spokesperson position record so comment can be produced quickly", "Background material journalists can use"],
        agency: ["Spotting the story and moving quickly", "The approval loop with the spokesperson"],
        outcome: "Occasional genuine coverage from reactive comment rather than unplaced announcements.",
        insteadDoThis:
          "Focus on reactive comment and on being genuinely useful to two or three journalists. That is achievable solo; a proactive programme is not.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "A consistent standard for what counts as news",
        situation: "Clients ask for press releases about things that are not news, and different people on your team respond differently.",
        problem: "Agreeing to write non-news wastes effort and gradually erodes any journalist relationships you do have.",
        mengo: ["A newsworthiness structure applied consistently", "Material written to journalist needs rather than client preference", "A record of what was declined and why"],
        agency: ["The conversation declining non-news", "Media relationships"],
        outcome: "Your team gives clients the same answer about what is worth pitching.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Press material at volume without approval accidents",
        situation: "Multiple clients producing press material, each with different spokespeople and approval requirements.",
        problem: "An unapproved attributed quote is a serious incident, and at volume the informal approval process fails.",
        mengo: ["Spokesperson positions and approval requirements recorded per client", "Claims flagged as a standard step", "Consistent structure so review is fast"],
        agency: ["Approval routing that always ends with the named spokesperson", "The media relationships"],
        outcome: "Volume without an attribution incident.",
      },
      {
        stage: "established",
        relevance: "core",
        headline: "Governed press output across teams and clients",
        situation: "Press material produced across multiple teams for clients in regulated sectors and public markets.",
        problem: "Press statements carry legal and occasionally regulatory weight. Informal processes are indefensible at this scale.",
        mengo: ["Recorded provenance from source material to published statement", "Claim flags and evidence requirements per statement", "Uniform structure across teams"],
        agency: ["Legal and client compliance review where required", "Crisis handling, which is always human"],
        outcome: "Press output has a documented approval trail, which is the standard the sector requires.",
      },
    ],
    related: {
      capabilities: ["founders", "interview-and-media-prep", "speaking-engagements", "events"],
      workflows: ["pr-and-media-workflow", "product-launch"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Does this get us coverage?",
        a: "No. It produces the material. Placement depends on relationships, timing and whether the thing is actually news — and those are the difficult four-fifths of PR. An agency selling coverage on the strength of drafting is selling something it does not have.",
      },
      {
        q: "What about crisis communications?",
        a: "Not this. Crisis work needs a person with the client's full context, the authority to decide, and usually their legal counsel in the room. Structured drafting is the wrong tool under those conditions.",
      },
      {
        q: "How do we tell a client their news is not news?",
        a: "Early, with reasoning, and with an alternative. 'This is not a story, but there is a story in the thing you mentioned in passing' is a conversation that builds credibility rather than spending it.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "influencer-management",
    title: "Influencer Management",
    navLabel: "Influencer Management",
    group: "marketing",
    depth: "staged",
    headline: "Briefs, terms and disclosure — not relationships",
    lead:
      "The structural side of creator partnerships: what the brief says, what the agreement covers, what must be disclosed. Finding and managing the people is relationship work and stays that way.",
    summary:
      "Creator briefs, commercial terms and disclosure requirements — the structural half of influencer work.",
    seoTitle: "Influencer Management — briefs and terms for creator partnerships",
    seoDescription:
      "Creator briefs, commercial terms and disclosure requirements for influencer partnerships, with relationship management staying with the agency.",
    updated: "2026-09-02",
    meaning:
      "The documented side of creator partnerships: the brief a creator works from, the commercial terms, the usage rights, and the disclosure obligations that apply.",
    job: "Make creator partnerships repeatable and compliant rather than improvised per deal.",
    whyAgencies: [
      {
        label: "Disclosure is a legal requirement, not a courtesy",
        body: "Advertising regulators in most jurisdictions require clear disclosure of paid partnerships, and enforcement has increased. An unclear brief creates exposure for the client.",
      },
      {
        label: "Vague briefs produce unusable content",
        body: "A creator given a brand's tone document and no specific ask produces something that suits their feed and not the client's objective.",
      },
      {
        label: "Usage rights are routinely under-specified",
        body: "Whether the client can run the creator's content as paid media, and for how long, is settled in the agreement or discovered expensively afterwards.",
      },
    ],
    inputs: [
      "The campaign objective and which segment the creator reaches",
      "What the creator must and must not say",
      "Commercial terms: fee, deliverables, exclusivity, usage rights",
      "Disclosure requirements in the relevant jurisdiction",
    ],
    outputs: [
      "A creator brief specific enough to produce usable content",
      "Commercial terms covering deliverables, usage and exclusivity",
      "Disclosure requirements stated explicitly in the brief",
      "Review criteria agreed before the creator starts",
    ],
    sequence: [
      { title: "The agency selects the creator", body: "Judgement about audience fit and reputational risk. Nothing structural helps here.", lane: "agency" },
      { title: "The brief is structured", body: "Objective, message, constraints and deliverables specific enough to act on.", lane: "mengo" },
      { title: "Disclosure requirements are stated", body: "In the brief itself, not as an afterthought or an assumption.", lane: "mengo" },
      { title: "The agency negotiates terms", body: "Commercial negotiation with a person. Always human.", lane: "agency" },
      { title: "The agency reviews the output", body: "Against the brief and against the disclosure obligation, before it goes live.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether a creator is right", body: "Audience fit, authenticity and reputational risk. Getting this wrong is the main way these partnerships fail." },
      { label: "How much to constrain", body: "Over-briefed creator content reads as an advert and performs like one. Under-briefed content misses the point entirely." },
      { label: "When to walk away", body: "A creator whose recent content creates reputational risk for the client is a decision, not an analysis." },
    ],
    limits: [
      "It does not find, contact or manage creators. That is relationship work.",
      "It does not provide legal advice on advertising disclosure, which varies by jurisdiction and is enforced.",
      "It cannot assess a creator's audience authenticity, and inflated followings remain a real problem.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Not a first-year service",
        situation: "A client asks about influencer marketing and you have no creator relationships.",
        problem: "Without relationships you are a broker with no network, paying inflated rates for poorly matched creators.",
        mengo: ["Brief structure, for the occasional partnership that arises organically"],
        agency: ["Being honest about the absence of a network"],
        outcome: "You decline or refer, rather than learning at the client's expense.",
        insteadDoThis:
          "If the client wants creator content, look at whether their own customers can provide it. Testimonials and user content are achievable and often more credible.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "One or two relationships, done properly",
        situation: "You have a client in a sector where creators matter and a couple of contacts.",
        problem: "Running creator partnerships at any scale needs relationship management capacity a solo agency does not have.",
        mengo: ["Proper briefs and terms for the partnerships you do run", "Disclosure requirements stated as standard", "A record of terms per creator"],
        agency: ["The relationships, which are the whole thing", "Reviewing output before it goes live"],
        outcome: "The few partnerships you run are properly briefed and compliant.",
        insteadDoThis:
          "Run two partnerships well rather than eight badly. At this scale the relationship depth is the only advantage available to you.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Repeatable partnerships instead of bespoke deals",
        situation: "You run creator work for a few clients and every partnership is negotiated and briefed from scratch.",
        problem: "Bespoke terms per deal means usage rights and disclosure get handled differently each time, which is where the exposure is.",
        mengo: ["Standard brief and terms structure per client", "Disclosure requirements as a mandatory field", "A record of usage rights per partnership"],
        agency: ["Creator selection and negotiation", "Output review before publication"],
        outcome: "Partnerships become a repeatable process rather than a series of individual arrangements.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Creator programmes across several clients",
        situation: "Multiple clients running creator programmes with overlapping creator pools and different requirements.",
        problem: "Exclusivity conflicts and disclosure inconsistency across clients are real risks at this volume.",
        mengo: ["Terms and exclusivity recorded per partnership", "Consistent disclosure requirements across accounts", "Visibility of creator overlap between clients"],
        agency: ["Managing exclusivity conflicts, which is a commercial conversation", "Reputational judgement on creator selection"],
        outcome: "Overlapping creator programmes without conflicts of interest.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Compliant creator programmes at scale",
        situation: "Substantial creator programmes across regulated sectors and multiple jurisdictions.",
        problem: "Disclosure requirements differ by jurisdiction and sector, and regulator enforcement is a real client risk.",
        mengo: ["Jurisdiction-specific disclosure requirements recorded per programme", "Auditable terms and usage rights per partnership", "Uniform brief structure across teams"],
        agency: ["Legal review with the client's counsel", "Reputational governance over creator selection"],
        outcome: "Creator programmes with the compliance trail the sector demands.",
      },
    ],
    related: {
      capabilities: ["ads-management", "social-media", "video-content", "testimonials"],
      workflows: ["campaign-planning", "product-launch"],
      useCases: ["launch-a-new-client-campaign", "expand-service-offerings"],
    },
    faqs: [
      {
        q: "Does this find creators?",
        a: "No. It handles briefs, terms and disclosure. Finding creators, judging their audience and managing the relationship is the difficult part and it stays with people.",
      },
      {
        q: "Who is responsible for disclosure compliance?",
        a: "The client and the creator both have obligations, and the agency has practical responsibility for making the requirement explicit in the brief. The specific rules vary by jurisdiction and are a question for the client's advisers.",
      },
      {
        q: "How specific should a creator brief be?",
        a: "Specific about the objective, the message and the constraints; loose about execution. Over-briefed creator content reads as an advert, which defeats the reason for using a creator at all.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "events",
    title: "Events",
    navLabel: "Events",
    group: "marketing",
    depth: "staged",
    headline: "The marketing around an event, not the event",
    lead:
      "Promotion, registration content, attendee communication and the follow-up that decides whether the event was worth anything. Logistics are somebody else's job; the follow-up is where most events are lost.",
    summary:
      "Event promotion, attendee communication and the follow-up sequence that determines whether an event produced anything.",
    seoTitle: "Events — the marketing around a client event",
    seoDescription:
      "Promotion, registration content, attendee communication and post-event follow-up: the marketing that determines whether a client event was worth running.",
    updated: "2026-09-02",
    meaning:
      "The communications programme around an event: promotion, registration, pre-event sequences, on-the-day material and — most importantly — the follow-up.",
    job: "Make sure the event produces something after everyone has gone home.",
    whyAgencies: [
      {
        label: "Follow-up is where events are won or wasted",
        body: "Most events end with a list of names and no sequence. The event cost real money and the conversion happens, or does not, in the fortnight afterwards.",
      },
      {
        label: "Registration is a content problem",
        body: "Attendance is decided by whether the description makes the value obvious, and event descriptions are routinely written by whoever organised it.",
      },
      {
        label: "The content asset is usually wasted",
        body: "An event produces a talk, a panel, a set of questions. Almost none of it gets used again, which is the cheapest content most clients never make.",
      },
    ],
    inputs: [
      "What the event is for, commercially",
      "Who should attend and what would make them",
      "The client's capacity to follow up, honestly assessed",
      "What is being captured — recording, notes, questions asked",
    ],
    outputs: [
      "Promotion and registration content written to the attendee's decision",
      "A pre-event sequence that improves actual attendance",
      "A follow-up sequence segmented by attendance and engagement",
      "A plan for reusing the event's content afterwards",
    ],
    sequence: [
      { title: "The agency defines the commercial purpose", body: "'Brand awareness' is how an event becomes unmeasurable. What is it actually for?", lane: "agency" },
      { title: "Promotion content is structured", body: "Written to the attendee's decision rather than to the organiser's agenda.", lane: "mengo" },
      { title: "Sequences are built", body: "Pre-event to improve attendance, post-event segmented by what people actually did.", lane: "mengo" },
      { title: "The agency reviews and the client sends", body: "From their own systems, under their own consent.", lane: "agency" },
      { title: "Content is repurposed", body: "The talk becomes articles, clips and answers. This is the step everyone skips.", lane: "mengo" },
      { title: "The agency reviews what it produced", body: "Against the commercial purpose agreed at the start.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the event should happen", body: "Events consume enormous effort. Telling a client an event is the wrong vehicle is worth a great deal." },
      { label: "How to follow up without being tiresome", body: "The line between useful follow-up and pestering is a judgement about the audience and the relationship." },
      { label: "What the event actually produced", body: "Attendance is not an outcome. Reading the result honestly requires knowing what it cost." },
    ],
    limits: [
      "It does not run events. Logistics, venue, catering and production are entirely outside this.",
      "It does not manage registration platforms or ticketing.",
      "It does not send. Sequences load into the client's own systems.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Events are expensive to get wrong",
        situation: "A client wants to run an event and you have not done one before.",
        problem: "Events consume a disproportionate share of a small engagement's capacity and fail in ways that are visible to everyone.",
        mengo: ["Promotion and follow-up structure, if the client is running one regardless"],
        agency: ["An honest assessment of whether this is a good use of the client's money"],
        outcome: "A considered opinion on whether to do it at all.",
        insteadDoThis:
          "If the client is set on it, focus your effort entirely on the follow-up sequence. That is where the return is, and it is the part they will otherwise skip.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Support the follow-up, not the event",
        situation: "A client runs occasional events and asks for marketing support.",
        problem: "Event support expands to fill available time, and a solo agency cannot absorb that alongside recurring delivery.",
        mengo: ["Promotion content and a segmented follow-up sequence", "A content repurposing plan for what the event produces"],
        agency: ["Scoping tightly, in writing", "Reviewing the follow-up before it sends"],
        outcome: "A defined contribution rather than an open-ended commitment.",
        insteadDoThis:
          "Scope to promotion and follow-up explicitly, and decline the logistics. The scope conversation matters more than the work.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Events with a follow-up that actually happens",
        situation: "Clients run events and the follow-up is improvised in the exhausted week afterwards.",
        problem: "Post-event follow-up competes with catching up on everything that was neglected during the event, and loses.",
        mengo: ["Follow-up sequences built before the event, not after", "Segmentation by attendance and engagement", "Repurposing planned in advance"],
        agency: ["Reviewing tone, which matters more in follow-up than anywhere", "Deciding what a non-attendee should receive"],
        outcome: "The follow-up is ready before the event happens.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Event programmes across several clients",
        situation: "Multiple clients running events, sometimes in the same period.",
        problem: "Event work is bursty and consumes disproportionate capacity, wrecking delivery on other accounts.",
        mengo: ["Standard event content structure so preparation is fast", "Sequences built from a repeatable pattern", "Repurposing as a standard step rather than an intention"],
        agency: ["Capacity planning around event periods", "Judging which events justify the disruption"],
        outcome: "Event support stops destabilising delivery on everything else.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Event programmes with consistent follow-through",
        situation: "Large clients running event programmes across regions with different teams supporting each.",
        problem: "Follow-up quality varies by team, and at this scale the aggregate value left on the table is significant.",
        mengo: ["Uniform follow-up structure across events and teams", "Consistent segmentation and repurposing", "Auditable record of what each event produced"],
        agency: ["Governance over the event programme's purpose", "Coordination with the client's events function"],
        outcome: "Every event in the programme gets the same follow-through.",
      },
    ],
    related: {
      capabilities: ["speaking-engagements", "email-templates", "whatsapp-nurturing", "video-content"],
      workflows: ["campaign-planning", "lead-nurturing-flows", "pr-and-media-workflow"],
      useCases: ["launch-a-new-client-campaign", "improve-client-retention"],
    },
    faqs: [
      {
        q: "Does this handle event logistics?",
        a: "No. Venue, catering, production and registration platforms are outside this entirely. What is covered is the communications around the event, which is where most of the marketing value is anyway.",
      },
      {
        q: "What is the single highest-value part?",
        a: "The follow-up, and it is not close. Most events end with a list of names and no sequence, which means the money was spent on the room rather than on the outcome.",
      },
      {
        q: "Should clients run events at all?",
        a: "Often not. They consume enormous effort and are hard to attribute. Where the client's buyers genuinely make decisions in person — high-value services, complex sales — they can be excellent. Elsewhere the same effort spent on follow-up systems usually returns more.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "speaking-engagements",
    title: "Speaking Engagements",
    navLabel: "Speaking Engagements",
    group: "marketing",
    depth: "staged",
    headline: "Getting a client on a stage, and using it afterwards",
    lead:
      "Speaker positioning, abstract writing, submission material and the content programme that follows a talk. The talk itself is forty-five minutes; the material it generates should last a quarter and almost never does.",
    summary:
      "Speaker positioning, abstracts and submissions, plus the content programme that should follow every talk and rarely does.",
    seoTitle: "Speaking Engagements — positioning clients as speakers",
    seoDescription:
      "Speaker positioning, abstracts and conference submissions, plus the content programme that turns a single talk into a quarter of material.",
    updated: "2026-09-02",
    meaning:
      "The material behind speaking: what this person can credibly speak on, the abstracts and submissions that get them accepted, and the content programme built from what they say.",
    job: "Turn one talk into a quarter of material, and get more talks.",
    whyAgencies: [
      {
        label: "Speaking is high-credibility and under-exploited",
        body: "A conference talk carries authority no owned channel does, and most speakers do nothing with the material afterwards.",
      },
      {
        label: "Submissions are a writing problem",
        body: "Conference selection is largely decided by the abstract. Clients with genuinely good talks are rejected because the submission was written in a hurry.",
      },
      {
        label: "One talk is a quarter of content",
        body: "The talk, the slides, the questions asked and the conversations afterwards are all reusable, and almost none of it gets reused.",
      },
    ],
    inputs: [
      "What the speaker can credibly and distinctively speak on",
      "The events that actually matter in the client's sector",
      "Submission requirements and deadlines",
      "What the speaker will and will not discuss publicly",
    ],
    outputs: [
      "A speaker positioning record: topics, credibility, boundaries",
      "Abstracts and submission material written to the selection criteria",
      "A talk structure, where the client wants help with it",
      "A repurposing plan turning the talk into ongoing material",
    ],
    sequence: [
      { title: "The agency establishes the topics", body: "What this person can say that others cannot. Requires knowing them and the sector.", lane: "agency" },
      { title: "Positioning is recorded", body: "Topics, credibility markers and explicit boundaries.", lane: "mengo" },
      { title: "Submissions are drafted", body: "Written to what selection committees actually look for rather than to what the speaker finds interesting.", lane: "mengo" },
      { title: "The speaker approves", body: "Nobody is submitted to speak on something they have not agreed to.", lane: "agency" },
      { title: "The talk is repurposed", body: "Articles, clips, answers to the questions that were asked. The step that makes the whole thing worthwhile.", lane: "mengo" },
      { title: "The agency reviews and publishes", body: "In the client's own channels.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether this person should speak", body: "Not everyone with expertise should be on a stage, and finding out at the event is expensive." },
      { label: "Which events matter", body: "Sector knowledge. A prestigious-sounding conference with the wrong audience is worse than a small one with the right one." },
      { label: "What makes a talk distinctive", body: "Selection committees reject competent-but-familiar. Finding the angle is editorial judgement." },
    ],
    limits: [
      "It does not have relationships with event organisers, and those matter for selection.",
      "It does not provide speaker coaching, which is a different discipline entirely.",
      "It cannot make an unwilling person a good speaker.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Speak yourself before you position others",
        situation: "You are building an agency and considering whether speaking is a route to visibility for you.",
        problem: "Positioning a client as a speaker before you have done it yourself means learning on their reputation.",
        mengo: ["Your own speaker positioning and submission material"],
        agency: ["Actually submitting and speaking"],
        outcome: "Your own speaking, which is also good agency marketing.",
        insteadDoThis:
          "Use this on yourself first. It is a legitimate route to early agency visibility and it teaches you the process before a client depends on it.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Worth it for one client, rarely for several",
        situation: "You have a client whose founder is a natural speaker and a sector with relevant events.",
        problem: "Speaking programmes need sustained submission effort against deadlines, which competes directly with delivery.",
        mengo: ["Submission material against a recorded speaker position", "A repurposing plan so one talk produces ongoing content"],
        agency: ["Selecting events worth submitting to", "The relationship with the speaker"],
        outcome: "One client's speaking programme, run properly, rather than several run occasionally.",
        insteadDoThis:
          "Concentrate on repurposing. If the client already speaks, turning those talks into content is higher-return than chasing new slots.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Submissions that stop missing deadlines",
        situation: "Clients speak occasionally and submissions are written the night before the deadline.",
        problem: "Rushed abstracts get rejected, and rejection is attributed to the speaker rather than to the submission.",
        mengo: ["Speaker positions recorded so abstracts start from something", "Submission material written to selection criteria", "Repurposing planned before the talk"],
        agency: ["Tracking deadlines and selecting events", "Speaker approval"],
        outcome: "Submissions written properly, and talks that produce material afterwards.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Speaking programmes across several clients",
        situation: "Multiple clients with speakers, multiple sectors, overlapping conference calendars.",
        problem: "Boundaries differ per speaker, and submitting someone for a topic they will not discuss is a serious error.",
        mengo: ["Speaker positions and boundaries recorded per individual", "Consistent submission structure across clients", "Repurposing as a standard step"],
        agency: ["Event selection per client sector", "Approval from every speaker"],
        outcome: "Several speaking programmes without a boundary incident.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Executive speaking with governance",
        situation: "Senior executives at large clients speaking publicly, sometimes on regulated topics.",
        problem: "Executive speaking carries reputational and occasionally regulatory weight, and informal approval is not adequate.",
        mengo: ["Recorded positions and boundaries per executive", "Auditable submission and approval trail", "Uniform structure across teams"],
        agency: ["Approval routing through the client's communications function", "Judgement about which topics are safe"],
        outcome: "Executive speaking with a documented approval trail.",
      },
    ],
    related: {
      capabilities: ["founders", "interview-and-media-prep", "events", "pr-content"],
      workflows: ["pr-and-media-workflow", "content-planning"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Can this get a client accepted at a conference?",
        a: "It produces a better submission, which is a substantial part of selection. Relationships with organisers and the speaker's existing profile matter too, and neither of those is a drafting exercise.",
      },
      {
        q: "What is the highest-value part?",
        a: "Repurposing. A talk that produces four articles, a set of clips and answers to the questions asked is worth several times a talk that ends when the speaker leaves the stage — and almost nobody does it.",
      },
      {
        q: "Does this write the talk?",
        a: "It can structure one, but a talk delivered by someone who did not write it is usually visible from the third row. Better to structure it and have the speaker fill it, then help with the material afterwards.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "interview-and-media-prep",
    title: "Interview & Media Prep",
    navLabel: "Interview & Media Prep",
    group: "marketing",
    depth: "staged",
    headline: "Preparation for the conversation you do not control",
    lead:
      "Message preparation, anticipated questions and the difficult ones nobody wants to rehearse. Media interviews are the highest-risk marketing activity most clients undertake and the least prepared for.",
    summary:
      "Message preparation and anticipated questions — including the difficult ones — for interviews and media appearances.",
    seoTitle: "Interview & Media Prep — preparing clients for media",
    seoDescription:
      "Message preparation, anticipated questions and difficult-question rehearsal for client media interviews and podcast appearances.",
    updated: "2026-09-02",
    meaning:
      "Preparation material for a client facing questions: the messages to land, the likely questions, the difficult ones, and what to do when a question cannot be answered.",
    job: "Make sure the client has thought about the hard question before it is asked.",
    whyAgencies: [
      {
        label: "It is the highest-risk activity most clients do",
        body: "An interview is unscripted, on the record and often recorded. A bad answer outlives the coverage it was meant to generate.",
      },
      {
        label: "The difficult question is always predictable",
        body: "Every business has two or three questions it does not want asked, and they are entirely foreseeable. Almost nobody rehearses them.",
      },
      {
        label: "Preparation changes the outcome more than talent does",
        body: "A prepared average speaker outperforms an unprepared good one, reliably.",
      },
    ],
    inputs: [
      "The two or three messages the client wants to land",
      "The outlet, the interviewer and their usual angle",
      "The questions the client hopes will not be asked",
      "What genuinely cannot be discussed, and why",
    ],
    outputs: [
      "A short message set, prioritised, because three is the practical limit",
      "Anticipated questions with prepared responses",
      "Difficult-question responses, drafted honestly rather than evasively",
      "Bridging language for questions that cannot be answered",
    ],
    sequence: [
      { title: "The agency researches the outlet", body: "What this interviewer usually asks and where they usually push.", lane: "agency" },
      { title: "Messages are prioritised", body: "Three at most. More than that and none of them land.", lane: "mengo" },
      { title: "Questions are anticipated", body: "Including the ones the client is hoping to avoid, which are the ones worth the preparation.", lane: "mengo" },
      { title: "The agency rehearses with the client", body: "Out loud. Reading prepared answers is not preparation.", lane: "agency" },
      { title: "The client decides what they will not say", body: "Boundaries are theirs, and knowing them in advance prevents an improvised answer.", lane: "agency" },
    ],
    judgement: [
      { label: "Which questions will actually be difficult", body: "Requires knowing the client's exposures and the outlet's interests." },
      { label: "How honest to be about a weakness", body: "Evasion reads worse than an honest limitation on almost every occasion, but the calibration is situational." },
      { label: "Whether to do the interview at all", body: "Sometimes the right advice is to decline, and that advice needs to be given before the diary is committed." },
    ],
    limits: [
      "It does not provide media training. Delivery under pressure is a coaching discipline.",
      "It cannot anticipate everything, and an unexpected question is the point of an interview.",
      "It does not handle crisis interviews, which need a person with the client's full context and their counsel.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Rarely relevant to a first client",
        situation: "Early clients seldom face media interviews.",
        problem: "Preparing for something that will not happen is effort spent on the wrong thing.",
        mengo: ["A record of the client's boundaries, useful whenever it does arise"],
        agency: ["Recognising when a client is about to face questions"],
        outcome: "Nothing yet.",
        insteadDoThis:
          "Use the same discipline for sales conversations instead. The anticipated-objection structure is identical and considerably more relevant early on.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Occasional, and worth doing properly when it arises",
        situation: "A client is booked on a podcast or has been approached by a trade publication.",
        problem: "The client will prepare by rereading their website, which is not preparation.",
        mengo: ["A short prioritised message set", "Anticipated questions including the difficult ones", "Bridging language for what cannot be discussed"],
        agency: ["The rehearsal, which is the part that works", "Researching the interviewer"],
        outcome: "A client who has thought about the hard question before it is asked.",
        insteadDoThis:
          "When it comes up, do it properly — it is a couple of hours. Building a standing service around occasional need is not worth it at this scale.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "Preparation as a standard step, not a scramble",
        situation: "Clients appear on podcasts and in trade press with increasing frequency.",
        problem: "Each appearance is prepared for from scratch, usually the day before.",
        mengo: ["A standing message set per client, updated rather than rebuilt", "Anticipated question bank that grows with each appearance", "Recorded boundaries per spokesperson"],
        agency: ["Rehearsal", "Judging which appearances are worth doing"],
        outcome: "Preparation takes an hour rather than an evening.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Multiple spokespeople, different boundaries",
        situation: "Several clients with several spokespeople each, appearing across different outlets.",
        problem: "Boundaries differ per person and confusing them in preparation material is a serious error.",
        mengo: ["Boundaries and messages recorded per named individual", "Consistent preparation structure across accounts", "A question bank per client"],
        agency: ["Rehearsal with each spokesperson", "Deciding what is safe to discuss"],
        outcome: "Consistent preparation across spokespeople without boundary confusion.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Executive media preparation with a record",
        situation: "Senior executives at large clients giving interviews, sometimes on regulated or market-sensitive topics.",
        problem: "Executive statements can be market-sensitive or regulated. Preparation without a record is indefensible.",
        mengo: ["Recorded message sets and boundaries per executive", "Auditable preparation material per appearance", "Uniform structure across teams"],
        agency: ["Coordination with the client's communications and legal functions", "Rehearsal and the decision to proceed"],
        outcome: "Executive media appearances with documented preparation.",
      },
    ],
    related: {
      capabilities: ["pr-content", "founders", "speaking-engagements", "intro-scripts"],
      workflows: ["pr-and-media-workflow"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Is this media training?",
        a: "No. Media training is coaching on delivery under pressure and it is a separate discipline with its own practitioners. This is the preparation of the substance: the messages, the anticipated questions and the honest answers to the hard ones.",
      },
      {
        q: "How many messages should a client try to land?",
        a: "Three at most, and two is better. Beyond that nothing lands, and the interview becomes a recitation rather than a conversation.",
      },
      {
        q: "What about the questions they genuinely cannot answer?",
        a: "Prepare an honest form of words for why, rather than an evasion. 'That is commercially confidential and here is what I can say' reads far better than a deflection, and interviewers respect it.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "courses",
    title: "Courses",
    navLabel: "Courses",
    group: "marketing",
    depth: "staged",
    headline: "Teaching as a marketing and revenue channel",
    lead:
      "Course structure, curriculum and the material around it. A serious undertaking that clients underestimate consistently, and one of the few marketing assets that can become a revenue line in its own right.",
    summary:
      "Course structure, curriculum and supporting material — a substantial undertaking that can become a revenue line rather than only a marketing one.",
    seoTitle: "Courses — teaching as a client marketing channel",
    seoDescription:
      "Course structure, curriculum and supporting content for client businesses using teaching as a marketing channel or a revenue line.",
    updated: "2026-09-02",
    meaning:
      "The structure and material behind a taught programme: curriculum, module structure, exercises and the surrounding marketing, whether the course is free lead generation or a paid product.",
    job: "Turn a client's expertise into a structured programme somebody would finish.",
    whyAgencies: [
      {
        label: "Teaching demonstrates expertise better than claiming it",
        body: "A client who teaches their subject competently establishes authority no amount of thought leadership matches.",
      },
      {
        label: "It can pay for itself",
        body: "Unlike most marketing assets, a course can carry a price. That changes the business case entirely and makes it easier to justify the effort.",
      },
      {
        label: "Clients drastically underestimate the work",
        body: "A course is a product. Treating it as a content series is why most client course projects stall after module two.",
      },
    ],
    inputs: [
      "What the client can genuinely teach, at depth",
      "Who the learner is and what they can already do",
      "Whether this is lead generation or a revenue product — a decision, not a detail",
      "How much of the expert's time is actually available",
    ],
    outputs: [
      "A curriculum with a defensible learning progression",
      "Module structure with objectives and exercises",
      "Supporting content: descriptions, emails, completion sequences",
      "An honest estimate of the effort required, before anyone commits",
    ],
    sequence: [
      { title: "The agency establishes the commercial purpose", body: "Lead generation and paid product are different products. Deciding first prevents an expensive muddle.", lane: "agency" },
      { title: "The curriculum is structured", body: "A progression that takes a learner from where they are to a defined capability.", lane: "mengo" },
      { title: "Modules are drafted", body: "Objectives, content outline and exercises per module.", lane: "mengo" },
      { title: "The expert supplies the substance", body: "The actual teaching content comes from the person who knows it. Nothing substitutes here.", lane: "agency" },
      { title: "The agency reviews for teaching quality", body: "Accurate content badly sequenced does not teach, and learners quit.", lane: "agency" },
      { title: "Supporting marketing is built", body: "Descriptions, enrolment sequences, completion follow-up.", lane: "mengo" },
    ],
    judgement: [
      { label: "Whether the client should do this at all", body: "The most valuable judgement here. Most clients who want a course should not build one." },
      { label: "Whether the progression teaches", body: "Sequencing is what separates a course from a content library, and it is a craft skill." },
      { label: "How much expert time is really needed", body: "Underestimating this is why courses stall, and the estimate should be honest even when it kills the project." },
    ],
    limits: [
      "It does not supply subject expertise. The teaching content comes from the client.",
      "It does not produce video, and most courses need it.",
      "It does not host, deliver or administer courses, and it has no view of learner data.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "Too large for a first engagement",
        situation: "A client is enthusiastic about building a course and you are early in the relationship.",
        problem: "Courses are among the largest undertakings in this taxonomy and they stall often. Stalling on your first engagement is a poor start.",
        mengo: ["An honest effort estimate, which is the useful contribution here"],
        agency: ["Advising against it, usually"],
        outcome: "A realistic conversation about scale before anyone commits.",
        insteadDoThis:
          "Suggest a single workshop or a short guide first. If the client cannot sustain that, they will not sustain a course — and you will both have learned it cheaply.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "One client, if any, and scoped tightly",
        situation: "A client with genuine teaching material and the discipline to supply it.",
        problem: "Course projects expand and a solo agency cannot absorb an expanding project alongside recurring delivery.",
        mengo: ["Curriculum structure and module outlines", "Supporting marketing content", "An effort estimate that keeps the scope honest"],
        agency: ["Holding the scope", "Reviewing whether the progression teaches"],
        outcome: "A scoped contribution to a project the client owns.",
        insteadDoThis:
          "Scope to curriculum design and the surrounding marketing. Producing the teaching content itself is where a solo agency's month disappears.",
      },
      {
        stage: "small-team",
        relevance: "later",
        headline: "Viable as a defined project, not as a favour",
        situation: "You have capacity for project work alongside retained delivery.",
        problem: "Course work absorbed into a retainer is how a retainer becomes unprofitable.",
        mengo: ["A repeatable curriculum structure", "Module and exercise drafting", "Enrolment and completion sequences"],
        agency: ["Scoping and pricing it as a project", "Managing expert contribution"],
        outcome: "Course development priced and scoped as the project it is.",
        insteadDoThis:
          "Price it separately from the retainer. Courses absorbed into recurring scope are the most reliable way to make an account unprofitable.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "A repeatable service line",
        situation: "Several clients want educational programmes and you have the capacity to build a practice.",
        problem: "Bespoke course development per client is unprofitable; a repeatable method is not.",
        mengo: ["A standard curriculum structure applied per client", "Consistent module and exercise patterns", "Reusable enrolment and completion sequences"],
        agency: ["Instructional design judgement", "Managing expert time across projects"],
        outcome: "Course development becomes a defined service rather than a bespoke adventure each time.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Educational programmes for large clients",
        situation: "Clients with training obligations, partner enablement needs or certification programmes.",
        problem: "Corporate learning programmes have compliance and accreditation requirements that consumer courses do not.",
        mengo: ["Consistent curriculum structure with recorded learning objectives", "Auditable content provenance", "Uniform structure across programmes"],
        agency: ["Coordination with the client's learning function", "Accreditation and compliance requirements"],
        outcome: "Educational programmes built to the standard corporate learning requires.",
      },
    ],
    related: {
      capabilities: ["membership-plans", "video-content", "blog-content", "employees"],
      workflows: ["content-planning", "product-launch"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Should most clients build a course?",
        a: "No. It is one of the largest commitments in this taxonomy and the completion rates on client-built courses are poor. The honest first question is whether a shorter format — a workshop, a guide, a webinar series — achieves the same thing for a tenth of the effort.",
      },
      {
        q: "Does this produce the teaching content?",
        a: "No. Subject expertise comes from the client. What is structured is the curriculum, the progression, the exercises and the marketing around it — which is the part that determines whether anyone finishes.",
      },
      {
        q: "Free or paid?",
        a: "A commercial decision that changes everything downstream. A free course is lead generation and should be short and immediately useful. A paid course is a product with support obligations and a refund policy. Deciding late is expensive.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "wikipedia-profile",
    title: "Wikipedia Profile",
    navLabel: "Wikipedia Profile",
    group: "marketing",
    depth: "staged",
    headline: "The one channel where marketing intent is a disadvantage",
    lead:
      "Notability assessment, source gathering and factual accuracy. Wikipedia has rules that specifically exclude promotional editing, and an agency that ignores them harms the client it is trying to help.",
    summary:
      "Notability assessment and source gathering for Wikipedia — a channel with rules that specifically exclude promotional editing.",
    seoTitle: "Wikipedia Profile — notability and sources, handled properly",
    seoDescription:
      "Notability assessment, independent source gathering and factual accuracy for Wikipedia, within rules that specifically exclude promotional editing.",
    updated: "2026-09-02",
    meaning:
      "Assessment of whether a subject meets notability requirements, gathering of independent sources, and factual accuracy work — conducted within the platform's conflict-of-interest rules.",
    job: "Establish honestly whether a client qualifies, and gather the sources if they do.",
    whyAgencies: [
      {
        label: "Clients ask for this and are usually not eligible",
        body: "Notability requires substantial coverage in independent reliable sources. Most businesses do not have it, and saying so early saves everyone.",
      },
      {
        label: "Promotional editing backfires visibly",
        body: "Undisclosed paid editing is against the platform's rules, gets reverted, and can result in a permanent notice on the article. It makes things worse.",
      },
      {
        label: "The source-gathering is genuinely useful anyway",
        body: "Assembling independent coverage of a client produces a credibility asset regardless of whether an article results.",
      },
    ],
    inputs: [
      "Independent coverage of the subject in reliable sources",
      "Factual information that can be independently verified",
      "Any existing article and its history",
      "The client's understanding of what this is and is not",
    ],
    outputs: [
      "An honest notability assessment against the published criteria",
      "A gathered set of independent sources, with gaps identified",
      "Factual corrections supported by sources, where an article exists",
      "A clear statement of what is not permissible",
    ],
    sequence: [
      { title: "The agency assesses notability honestly", body: "Against the published criteria, not against the client's hopes. Usually the answer is no.", lane: "agency" },
      { title: "Independent sources are gathered", body: "Coverage that is genuinely independent, which excludes anything the client placed.", lane: "mengo" },
      { title: "Gaps are stated", body: "Where the sourcing does not support notability, the assessment says so.", lane: "mengo" },
      { title: "The agency advises the client", body: "Including declining to proceed, which is the most common correct outcome.", lane: "agency" },
      { title: "Any engagement follows the rules", body: "Conflict of interest disclosed, edits proposed rather than made directly. This is not optional.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the subject qualifies", body: "An honest reading of the criteria, which frequently disappoints the client." },
      { label: "Whether to engage at all", body: "For most clients the correct advice is to build genuine coverage first and revisit in two years." },
      { label: "How to handle an existing inaccurate article", body: "Requires following the platform's processes rather than editing directly, and patience." },
    ],
    limits: [
      "It cannot create notability. Coverage either exists or it does not.",
      "It does not edit Wikipedia. Any engagement follows the platform's conflict-of-interest process and is done transparently.",
      "It cannot guarantee an article survives. Deletion decisions are made by the community.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "later",
        headline: "The answer is almost certainly no",
        situation: "A client asks whether you can get them a Wikipedia article.",
        problem: "Saying yes to a client who does not qualify wastes their money and risks a permanent promotional notice on any article created.",
        mengo: ["An honest notability assessment you can show them"],
        agency: ["Explaining the criteria and declining"],
        outcome: "A clear, evidenced no, delivered early.",
        insteadDoThis:
          "Explain what notability requires and redirect the effort into earning genuine independent coverage. That is the prerequisite anyway.",
      },
      {
        stage: "solo",
        relevance: "later",
        headline: "Rarely worth the risk",
        situation: "A client is persistent about wanting an article.",
        problem: "The reputational risk of getting this wrong falls on you as well as the client, and the upside is small.",
        mengo: ["A documented notability assessment", "Gathered independent sources, useful regardless"],
        agency: ["Holding the line on the rules", "Advising against where appropriate"],
        outcome: "A documented assessment that ends the conversation constructively.",
        insteadDoThis:
          "Deliver the source-gathering as a credibility asset in its own right. It is genuinely useful for the site, for pitches and for PR, without touching Wikipedia.",
      },
      {
        stage: "small-team",
        relevance: "later",
        headline: "A clear agency policy is worth more than the service",
        situation: "Several clients have asked and your team has answered differently.",
        problem: "An inconsistent position on a rules-bound platform is how an agency ends up with a client article carrying a promotional notice.",
        mengo: ["A consistent notability assessment applied to every request", "A record of what was assessed and declined"],
        agency: ["Setting the agency policy", "Client conversations"],
        outcome: "One consistent, defensible answer to a recurring question.",
        insteadDoThis:
          "Write your agency's policy on this once and have everyone use it. That is more valuable than the capability.",
      },
      {
        stage: "growing",
        relevance: "later",
        headline: "Occasionally relevant for genuinely notable clients",
        situation: "Some of your clients are large enough to have genuine independent coverage.",
        problem: "Even where a subject qualifies, agency involvement must follow conflict-of-interest rules or it damages the client.",
        mengo: ["Notability assessment with sources", "Factual accuracy work supported by citations", "A record of what was proposed and how"],
        agency: ["Conflict-of-interest disclosure and following the process", "Deciding whether to engage at all"],
        outcome: "Correct handling for the rare client where this is genuinely applicable.",
        insteadDoThis:
          "Where an existing article is factually wrong, follow the platform's talk-page process. That is legitimate, effective and low-risk.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Factual accuracy for clients who have articles",
        situation: "Large clients with existing articles containing outdated or inaccurate information.",
        problem: "Direct editing by an agency is a conflict of interest and, when discovered, becomes a story in itself.",
        mengo: ["Sourced factual corrections prepared for proposal", "A documented record of what was proposed and why", "Consistent process across teams"],
        agency: ["Disclosed engagement following the platform's process", "Governance preventing direct editing"],
        outcome: "Factual accuracy pursued legitimately, with a record that protects the client.",
      },
    ],
    related: {
      capabilities: ["pr-content", "ai-discoverability", "founders"],
      workflows: ["pr-and-media-workflow", "business-research"],
      useCases: ["expand-service-offerings"],
    },
    faqs: [
      {
        q: "Can you get our client a Wikipedia article?",
        a: "Only if they already meet the notability criteria, which most businesses do not. Nobody can create notability, and attempting to force an article for a subject that does not qualify tends to make things worse rather than better.",
      },
      {
        q: "Is agency editing allowed?",
        a: "Paid editing must be disclosed and conflict-of-interest guidance asks that changes be proposed rather than made directly. Undisclosed promotional editing is against the rules, gets reverted, and can leave a permanent notice on the article.",
      },
      {
        q: "The client's existing article is wrong. What can we do?",
        a: "Propose sourced corrections through the platform's own process, with the conflict of interest disclosed. It is slower than editing directly and it is the approach that actually works and does not create a story.",
      },
    ],
  },

  {
    kind: "capability",
    slug: "magazine-and-sponsorship",
    title: "Magazine & Sponsorship",
    navLabel: "Magazine & Sponsorship",
    group: "marketing",
    depth: "staged",
    headline: "Paid placement, assessed honestly",
    lead:
      "Trade publication features, sponsored content and event sponsorship. A sector where clients are approached constantly with opportunities of wildly varying value, and where an agency's most useful contribution is usually a well-argued no.",
    summary:
      "Assessment of sponsorship and paid placement opportunities, plus the material for the ones worth taking.",
    seoTitle: "Magazine & Sponsorship — assessing paid placement opportunities",
    seoDescription:
      "Assess trade publication features, sponsored content and event sponsorship opportunities on their merits, and produce the material for the ones worth taking.",
    updated: "2026-09-02",
    meaning:
      "Assessment of paid placement and sponsorship opportunities against the client's audience and objectives, and the material required for the ones that are worth doing.",
    job: "Tell the client which of these approaches are worth money, and produce the material for those.",
    whyAgencies: [
      {
        label: "Clients are approached constantly and evaluate badly",
        body: "Trade publications and event organisers approach businesses persistently. Without a method, decisions get made on flattery and on who called most recently.",
      },
      {
        label: "The audience claim is rarely examined",
        body: "Circulation and attendance figures are self-reported and frequently unaudited. Asking how they were derived changes the conversation.",
      },
      {
        label: "The material is usually an afterthought",
        body: "A client pays for a full-page feature and writes it the night before, which wastes most of what they paid for.",
      },
    ],
    inputs: [
      "The specific opportunity, its cost and what it includes",
      "Claimed audience figures and how they were derived",
      "The client's actual target segment",
      "What the client has done before, and what came of it",
    ],
    outputs: [
      "An assessment against audience fit and cost",
      "A recommendation with reasoning, frequently negative",
      "Material for the opportunities worth taking",
      "Success criteria agreed before committing",
    ],
    sequence: [
      { title: "The agency gets the specifics", body: "Cost, audience, format, deadline. Most approaches are vague about at least one.", lane: "agency" },
      { title: "The opportunity is assessed", body: "Audience fit against the client's actual segments, and cost against alternatives.", lane: "mengo" },
      { title: "A recommendation is drafted", body: "With reasoning, and usually recommending against.", lane: "mengo" },
      { title: "The agency advises", body: "Including the uncomfortable conversation when the client's contact is enthusiastic about a poor opportunity.", lane: "agency" },
      { title: "Material is produced for accepted opportunities", body: "Written properly rather than the night before the deadline.", lane: "mengo" },
      { title: "The agency reviews the outcome", body: "Against the criteria agreed beforehand, which is what makes the next decision better.", lane: "agency" },
    ],
    judgement: [
      { label: "Whether the audience is real", body: "Self-reported circulation and attendance figures need scrutiny, and asking how they were derived is usually revealing." },
      { label: "The opportunity cost", body: "The same budget on paid media or content is the comparison that matters, and it is rarely made." },
      { label: "When relationship value outweighs reach", body: "Occasionally a sponsorship is worth it for reasons unrelated to audience, and recognising that is judgement." },
    ],
    limits: [
      "It cannot verify audience claims independently.",
      "It does not negotiate or buy placements.",
      "It cannot predict outcomes, and sponsorship attribution is genuinely difficult.",
    ],
    stages: [
      {
        stage: "starting",
        relevance: "useful",
        headline: "Learn to say no on the client's behalf",
        situation: "Your client is being approached by a trade publication and asks what you think.",
        problem: "New agencies defer to the client's enthusiasm rather than assessing the opportunity, which is a missed chance to demonstrate judgement.",
        mengo: ["An assessment structure covering audience, cost and alternatives", "A recommendation with reasoning you can present"],
        agency: ["Having the conversation, including the negative one", "Asking how the audience figures were derived"],
        outcome: "You save the client money, which is memorable.",
      },
      {
        stage: "solo",
        relevance: "useful",
        headline: "A quick, high-value contribution",
        situation: "Clients forward you sponsorship approaches and want a view.",
        problem: "Assessing each properly takes time you have not scoped, and assessing them badly is worse than not doing it.",
        mengo: ["A repeatable assessment covering the same questions each time", "Comparison against alternative uses of the budget", "A record of what was declined and why"],
        agency: ["The recommendation", "The conversation when the client's enthusiasm outruns the evidence"],
        outcome: "A fast, consistent answer to a recurring question.",
      },
      {
        stage: "small-team",
        relevance: "useful",
        headline: "One agency answer to a question clients keep asking",
        situation: "Different people advise clients differently on sponsorship approaches.",
        problem: "Inconsistent advice on spending decisions undermines the agency's credibility as an adviser.",
        mengo: ["One assessment method used by everyone", "Recorded reasoning per decision", "A history of what was accepted and what resulted"],
        agency: ["Agreeing the assessment criteria", "The client conversations"],
        outcome: "The agency gives one answer to the same question.",
      },
      {
        stage: "growing",
        relevance: "useful",
        headline: "Sponsorship decisions with an evidence trail",
        situation: "Clients spending meaningful sums on placements across a portfolio.",
        problem: "Without recorded assessment, sponsorship spending is unexamined year on year and nobody can say whether it works.",
        mengo: ["Assessments recorded per opportunity", "Outcomes tracked against pre-agreed criteria", "Patterns visible across the portfolio"],
        agency: ["Advising on renewal decisions", "Reading outcomes honestly"],
        outcome: "Renewal decisions made on evidence rather than on inertia.",
      },
      {
        stage: "established",
        relevance: "useful",
        headline: "Governed placement spending",
        situation: "Large clients with substantial sponsorship budgets and multiple stakeholders who each have preferred relationships.",
        problem: "Sponsorship spending at this level is often driven by relationships rather than by assessment, and nobody has the evidence to challenge it.",
        mengo: ["Consistent assessment applied to every opportunity", "Recorded reasoning and outcomes", "Portfolio visibility of total placement spend"],
        agency: ["The governance conversation with client leadership", "Judgement about relationship value"],
        outcome: "Placement spending becomes examinable rather than habitual.",
      },
    ],
    related: {
      capabilities: ["pr-content", "events", "ads-management", "marketing-channels-map"],
      workflows: ["campaign-planning", "client-review"],
      useCases: ["standardize-client-strategy"],
    },
    faqs: [
      {
        q: "Are trade publication features ever worth it?",
        a: "Sometimes, in sectors where a specific publication genuinely reaches the buying audience and is genuinely read. The test is whether you can name people in the client's target segment who read it. If not, the circulation figure is not the point.",
      },
      {
        q: "How do we assess claimed audience figures?",
        a: "Ask how they were derived and whether they are audited. The question itself is informative — publications with real audiences answer it readily, and the reaction to being asked tells you most of what you need.",
      },
      {
        q: "What if the client's contact is personally invested?",
        a: "Give the assessment anyway, in writing, with reasoning. If they proceed regardless, that is their decision and it is recorded. Being right and unrecorded helps nobody a year later.",
      },
    ],
  },
];
