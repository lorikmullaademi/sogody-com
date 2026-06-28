/* Sogody — site-wide content model (nav, services, client logos, case studies,
   updates, careers, testimonials, FAQ, offices). Centralized so every page and
   template shares one source of truth. window.SogodyData

   Adding content is trivial: append to CASE_STUDIES / UPDATES / JOBS. Index
   grids and slug-driven templates (case-study.html, update.html, career.html)
   read straight from here. Full long-form bodies are filled in progressively;
   `body` holds an array of portable-text-like blocks. */

/* ---------------- Categories (mirror Sanity categoryTag) ---------------- */
const CATEGORIES = {
  software: "Domain-Specific Software Platforms",
  ai: "AI & Data Systems",
  interfaces: "Human–AI Interfaces",
};

/* ---------------- Services ---------------- */
const SERVICES = [
  { title: "Domain-Specific Software Platforms", slug: "technology-engineering", img: "assets/images/service-card-software.png", video: "https://files.sogody.co.uk/2025-04-16T14-17-11.207Z-Optimized_software-engineering-service-18.mp4" },
  { title: "AI & Data Systems", slug: "ai-solutions", img: "assets/images/service-card-ai.png", video: "https://files.sogody.co.uk/2025-04-16T14-27-19.288Z-Optimized_ai-service-mobile-3.mp4" },
  { title: "Human–AI Interfaces", slug: "customer-experience", img: "assets/images/service-card-interfaces.png", video: "https://files.sogody.co.uk/2025-04-16T14-15-36.459Z-Optimized_explore-our-services-12.mp4" },
];

/* Services page “unforgettable experiences” photo grid (live Sanity CDN + R2 video),
   in the exact order the live sogody.com/services page renders them. */
const SERVICE_PHOTOS = [
  { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/66b79267d3977e3bcf9e4eac81729759e308ffb9-1227x1435.webp" },
  { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/5f45b3a37d99633fab06695d0aaf6a45376f6e87-1216x1428.webp" },
  { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/492a0da25ab2f3b10b4f91629179c84a44b11f9b-1232x680.webp" },
  { type: "video", src: "https://files.sogody.co.uk/2025-04-18T11-48-33.797Z-Optimized_grid-4-1.mp4" },
  { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/2b2f6329bb6b9ce522f98e4f0926295999e2dde4-1212x1024.webp" },
  { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/fc963ed714fd48d674d2bbc6b1c903928b88fd71-1227x1435.webp" },
  { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/82b85f096cba3fcf6d4a1a21ea9def67aa26b1de-1220x1428.webp" },
];

/* Individual service detail pages — carbon-copied from the live
   sogody.com/services/<slug>/ pages. `eyebrow`/`title`/`lead`/`points` feed the
   /services/ index cards; `hero`/`capabilities`/`process`/`technologies` drive
   the detail template. capHeading is constant across the live pages.
   NOTE: customer-experience detail copy is best-effort (the live page wasn't
   fetched this pass) — verify before publishing. */
const SERVICE_CAP_HEADING = "Building something great? We\u2019re here to make it happen.";
const SERVICE_TECH_HEADING = "Innovate. Build. Scale. With the technologies that drive success.";

const SERVICE_DETAIL = {
  "technology-engineering": {
    title: "Domain-Specific Software Platforms",
    eyebrow: "Software Engineering & Data",
    lead: "Applying cutting-edge technologies to build the foundation for growth. We build and run complex platforms that give brands digital products that stand out.",
    points: [
      { title: "Full-stack platform development", desc: "Enabling scalable and fast development across web software, e-commerce platforms and internal systems." },
      { title: "Process & architecture design", desc: "Helping brands unlock greater control over their users' digital experiences with resilient, maintainable architecture." },
      { title: "Integrations & API layers", desc: "Driving revenue, flexibility and speed with API integrations — email marketing, tag management, loyalty platforms and many more." },
      { title: "E-commerce solutions", desc: "End-to-end implementation, integration, support and monitoring of B2C and B2B e-commerce platforms." },
    ],
    hero: {
      h1: "Engineering Scalable Solutions with Data-Driven Precision.",
      sub: "Excellent engineering practices and cutting-edge technology to create platforms that provide exceptional digital experiences.",
      video: "https://files.sogody.co.uk/2025-04-16T14-31-55.123Z-Optimized_e-commerce-projects-9.mp4",
    },
    capabilities: [
      { title: "Backend Development", desc: "We build secure, scalable systems that ensure seamless performance and reliability." },
      { title: "API Development", desc: "We design efficient, well-documented APIs for smooth integration and data exchange." },
      { title: "Automation & Integration", desc: "We streamline workflows and connect systems for seamless efficiency and scalability." },
      { title: "Cloud Solutions", desc: "Scalable, secure, and reliable cloud infrastructure." },
      { title: "Data Engineering", desc: "We build scalable pipelines for efficient data processing and insights." },
    ],
    process: {
      sub: "Combining thoughtful planning, data-driven decisions, and seamless execution to ensure exceptional results at every stage.",
      steps: ["Discovery & Scoping", "Research & Design", "Development & Testing", "Deployment & Launch", "Iteration & Scaling"],
    },
    technologies: [
      { name: "Ruby", category: "Programming Language" },
      { name: "React", category: "JavaScript Library" },
      { name: "Google Cloud", category: "Cloud Computing Platform" },
      { name: "AWS", category: "Cloud Services Provider" },
      { name: "PostgreSQL", category: "Database Management System" },
      { name: "Laravel", category: "PHP Framework" },
    ],
  },
  "ai-solutions": {
    title: "AI & Data Systems",
    eyebrow: "AI Transformation",
    lead: "Adding data science and technology smarts to marketing and product teams. We turn raw data into structured, usable intelligence that drives decisions.",
    points: [
      { title: "Internal decision engines", desc: "Automating the logic and choices behind key operations." },
      { title: "AI-assisted workflows", desc: "Streamlining tasks with embedded intelligence." },
      { title: "Data extraction & enrichment", desc: "Turning raw, unstructured data into structured, usable input." },
      { title: "Operational dashboards & insight layers", desc: "Visualizing the metrics that drive decisions." },
    ],
    hero: {
      h1: "Empower Your Future with AI Transformation",
      sub: "At Sogody, we specialize in delivering cutting-edge AI and Machine Learning solutions tailored to businesses of all sizes.",
      video: "https://files.sogody.co.uk/2025-04-16T14-16-47.751Z-Optimized_ai-service-4.mp4",
    },
    capabilities: [
      { title: "LLM Integration & GPT Systems", desc: "We build custom GPT-powered tools for chat, search, and content generation." },
      { title: "AI-Powered Data Structuring", desc: "We extract, enrich, and structure complex data using prompt-driven AI pipelines." },
      { title: "Personalized Recommendation Engines", desc: "We deliver behavior-based suggestions that personalize content, products, or workflows." },
      { title: "Workflow Automation with AI Agents", desc: "We embed intelligent agents to streamline internal processes and reduce manual effort." },
      { title: "Semantic Search and RAG", desc: "We implement vector search and RAG to improve discovery and context accuracy." },
    ],
    process: {
      sub: "AI-powered execution, data-driven decisions, and scalable results, every step of the way.",
      steps: ["AI Discovery & Strategy", "Data Collection & Preparation", "Development & Testing", "Deployment & Integration", "Continuous Improvement & Scaling"],
    },
    technologies: [
      { name: "TensorFlow", category: "Machine Learning (ML) Frameworks" },
      { name: "Microsoft Azure", category: "Machine Learning (ML) Frameworks" },
      { name: "IBM Watson", category: "AI Solutions for Enterprise" },
      { name: "ChatGPT", category: "Machine Learning (ML) Frameworks" },
      { name: "Google AI", category: "Machine Learning (ML) Frameworks" },
      { name: "Amazon SageMaker", category: "Machine Learning (ML) Frameworks" },
    ],
  },
  "customer-experience": {
    title: "Human–AI Interfaces",
    eyebrow: "Experience Design & Conversion",
    lead: "Successfully delivering future-proof digital experiences with the customer at the heart of our design thinking, and the interfaces that let teams shape and refine AI behavior.",
    points: [
      { title: "Experimentation & CRO", desc: "Achieving statistically significant improvements through low-risk, data-backed modifications to core conversion metrics and KPIs." },
      { title: "UX/UI design", desc: "Crafting clean, intuitive interfaces that solve real user pain points and eliminate guesswork." },
      { title: "Human–AI configuration tools", desc: "Letting teams shape, steer and refine AI behavior through usable interfaces." },
      { title: "Personalization", desc: "Making sure brands always deliver relevant experiences, while saving time and money." },
    ],
    /* best-effort — verify against live /services/customer-experience/ */
    hero: {
      h1: "Designing Human-Centered Digital Experiences.",
      sub: "We craft intuitive interfaces and data-backed experiences that put your users first and turn interactions into measurable growth.",
      video: "https://files.sogody.co.uk/2025-04-16T14-15-36.459Z-Optimized_explore-our-services-12.mp4",
    },
    capabilities: [
      { title: "UX/UI Design Optimization", desc: "We craft clean, intuitive interfaces that solve real user pain points and remove friction." },
      { title: "A/B Testing", desc: "We run low-risk, data-backed experiments to lift conversion and validate decisions." },
      { title: "Customer Journey Mapping", desc: "We map every touchpoint to uncover opportunities and guide users toward action." },
      { title: "Feedback Analytics", desc: "We turn qualitative and quantitative feedback into clear, prioritized product insight." },
      { title: "Data Management", desc: "We structure and govern experience data so teams can act on it with confidence." },
    ],
    process: {
      sub: "User-centered thinking, data-driven decisions, and continuous refinement at every step.",
      steps: ["Discovery & Research", "UX/UI Design", "Prototyping & Testing", "Launch & Measurement", "Optimization & Iteration"],
    },
    technologies: [
      { name: "Adobe", category: "Design & Multimedia Suite" },
      { name: "Figma", category: "Interface Design" },
      { name: "Google Optimize", category: "Experimentation Platform" },
      { name: "Hotjar", category: "Behavior Analytics" },
      { name: "Google Analytics", category: "Web Analytics" },
      { name: "Optimizely", category: "Experimentation Platform" },
    ],
  },
};

/* ---------------- Nav ---------------- */
const NAV = [
  { key: "what we do", label: "What we do", to: "services.html", dropdown: true },
  { key: "work", label: "Work", to: "work.html" },
  { key: "updates", label: "Updates", to: "updates.html" },
  { key: "careers", label: "Careers", to: "careers.html" },
  { key: "company", label: "Company", to: "company.html" },
];

/* ---------------- Client logos (live Sanity CDN) ---------------- */
const CLIENT_LOGOS = [
  "797c3402a279040f9fbe4dc5903d3aef4e356097",
  "b09cf2790c54192f1bff1710462780ba0fc94360",
  "6af318dcb0d7997c54930ef4d25fef347a1ef2d6",
  "d42592502c8c6fffbe1fcb828f2fe70338b4b8d1",
  "5110230a01b2c88aed4e4e86fe460a9fdf74e800",
  "4a025ab8d6298aadb55ca0cc49b61386163072ca",
  "6b28a1031650d413189f2209807d990adc4fbc7a",
  "5a58cde89f171bebfb15ae855a769812d73b7cd6",
  "4684c49a71f42177033b6c4310bd2a24837ab32c",
].map((h) => `https://cdn.sanity.io/files/3hfxs7a8/production/${h}.svg`);

/* ---------------- Shared banner imagery (live Sanity CDN) ---------------- */
const IMG = {
  workBanner: "https://cdn.sanity.io/images/3hfxs7a8/production/cac996ec5d70d8741f8e974fa215973c75a20398-4592x1420.webp",
  careersBanner: "https://cdn.sanity.io/images/3hfxs7a8/production/31c2d0455e5304348896152d39f608944c9ff026-3648x592.webp",
  careersRoleBanner: "https://cdn.sanity.io/images/3hfxs7a8/production/3d87ac13484a7143acc49e00bce09cdc80da09cd-3645x1356.webp",
  notFound: "https://cdn.sanity.io/images/3hfxs7a8/production/2ce6bcc65209dec2db5bb9b414469ce051763fb4-1514x862.webp",
  kosovoMap: "https://cdn.sanity.io/images/3hfxs7a8/production/ebf7ecce81b7b9132b43851b47dba8f249c9c916-808x852.webp",
  londonMap: "https://cdn.sanity.io/images/3hfxs7a8/production/63dc8580d3c2b6b871b653079ba9e40ace858fe7-800x852.webp",
};

const COMPANY_BANNERS = [
  "https://cdn.sanity.io/images/3hfxs7a8/production/d652e6291a9197570735ef6e4b1aa39bdeef4de2-6000x3376.webp",
  "https://cdn.sanity.io/images/3hfxs7a8/production/899d24701738a51436ec61aa263a02732ce0ed39-5824x3263.webp",
  "https://cdn.sanity.io/images/3hfxs7a8/production/6cdd51a6614024ddf91a0512fa412536dd08c4c4-6000x3376.webp",
  "https://cdn.sanity.io/images/3hfxs7a8/production/c5f7d149a6840b05ef1ae97cc0438c248d337919-6000x3376.webp",
  "https://cdn.sanity.io/images/3hfxs7a8/production/3c64f439d9f2797d1dc049766141e0ddb8755e60-6000x3376.webp",
  "https://cdn.sanity.io/images/3hfxs7a8/production/d2e843da85c1db94ad38f142f6fec407ee654f69-6000x3376.webp",
  "https://cdn.sanity.io/images/3hfxs7a8/production/540ea49c2e44a02b29fb0b9e762ca7786a5e5f13-6000x3376.webp",
  "https://cdn.sanity.io/images/3hfxs7a8/production/5818255ae0e7ac2aaee6a5510c7296bf4eb894f2-6000x3376.webp",
  "https://cdn.sanity.io/images/3hfxs7a8/production/918361edf3e81168fb9b29a86b98dfb1e826187c-6000x3376.webp",
];

/* local placeholders for CMS card imagery not present in the repo */
const PH = ["assets/images/work.png", "assets/images/updates.png"];
const ph = (i) => PH[i % PH.length];

/* ---------------- Case studies (live slugs + titles) ----------------
   body: portable-text-like blocks rendered by case-study.html.
   Long-form bodies are summaries of the live articles, filled in over the
   content pass. csBtn = overlay tag shown on the card. */
const CASE_STUDIES = [
  {
    slug: "smart-home-app-development",
    title: "Designing the System Behind MOD’s Smart Home App",
    shortTitle: "MOD Smart Home App",
    category: CATEGORIES.software,
    csBtn: "Smart Home",
    img: "assets/images/cs-mod-smart-home.png",
    visitSiteUrl: "",
    body: [
      { type: "p", text: "We designed and engineered the system powering MOD’s smart home application — connecting devices, users and automation logic into a single, reliable platform." },
      { type: "p", text: "The work spanned the device-control layer, the data model behind automations, and the human-facing interface that makes a complex system feel simple." },
    ],
  },
  {
    slug: "biopharma-startup-ai-transformation",
    title: "Building a Comprehensive Life Sciences Intelligence Platform",
    shortTitle: "Life Sciences Intelligence Platform",
    category: CATEGORIES.ai,
    csBtn: "Biopharma",
    img: "assets/images/cs-life-sciences.png",
    visitSiteUrl: "",
    body: [
      { type: "p", text: "We partnered with a biopharma startup to build a life-sciences intelligence platform — extracting, structuring and enriching vast amounts of research data into a usable decision layer." },
    ],
  },
  {
    slug: "development-agricultural-management",
    title: "Management tool for an agricultural NGO",
    shortTitle: "Agricultural Management Tool",
    category: CATEGORIES.software,
    csBtn: "Agriplatform",
    img: "assets/images/cs-agri-ngo.png",
    visitSiteUrl: "",
    body: [
      { type: "p", text: "A management tool built for an agricultural NGO to coordinate operations, track programs and surface the data that drives field decisions." },
    ],
  },
  {
    slug: "from-paper-to-document-management",
    title: "Document management efficiency app",
    shortTitle: "Document Management App",
    category: CATEGORIES.software,
    csBtn: "Kosovo Government",
    img: "assets/images/cs-doc-management.png",
    visitSiteUrl: "",
    body: [
      { type: "p", text: "Moving an organization from paper to a structured document-management system — digitizing workflows and cutting the time spent finding, filing and approving documents." },
    ],
  },
  {
    slug: "boosting-unilevers-email-subscription-campaign",
    title: "Boosting Unilever’s email subscription campaign",
    shortTitle: "Unilever Email Subscription",
    category: CATEGORIES.interfaces,
    csBtn: "Experimentation",
    img: ph(0),
    visitSiteUrl: "",
    body: [
      { type: "p", text: "Despite the negative sentiment expressed by some towards pop-ups, user behavior suggests that they can yield significant results. This case study details our delivery of the always-on pop-up banner campaign for 20 brands under the Unilever umbrella and the favorable impact it had on increasing email subscriptions." },
      { type: "p", text: "Our team was tasked with designing and implementing a solution to boost Unilever’s email subscription campaign by displaying a subscription form to website visitors at all times. And that is exactly what we did. Sogody successfully executed a campaign across 52 websites for twenty Unilever brands that operated in two different markets and most of them in two languages." },
      { type: "p", text: "The challenge was to create personalized designs for each brand, but our expertise in digital marketing and ability to tailor our strategies to unique needs allowed us to achieve success — drawing on our experimentation and UX/UI design services, including user behavior and event tracking." },
    ],
  },
  {
    slug: "launching-the-samsung-s22-series-through-our-new-product-testful",
    title: "Launching the Samsung S22 series through Testful",
    shortTitle: "Samsung S22 × Testful",
    category: CATEGORIES.interfaces,
    csBtn: "Experimentation",
    img: ph(1),
    visitSiteUrl: "https://testful.co.uk",
    body: [
      { type: "p", text: "Building A/B experiences across various platforms and markets taught us many lessons, one of the most important being: good A/B experiences tend to stick around and return all the time. That becomes a repetitive challenge, and a lot of development effort goes to waste on tasks that non-technical people could deliver — with a touch of Testful." },
      { type: "p", text: "Last year, we delivered 77 experiments in a six-month period for seven Samsung markets using our Experiment Framework. With Testful, we managed to develop 42 across 22 Samsung markets in only three days." },
      { type: "p", text: "Testful is our solution for repetitive, customizable, and easily configurable experiences. Instead of building experiences, we build experience templates that anyone can configure. It automates the delivery of multiple experiments in one go through A/B templates that require zero development effort to be updated and deployed across any market." },
    ],
  },
  {
    slug: "the-multinational-consumer-goods-company-s-biggest-e-commerce-platform",
    title: "Unilever’s biggest e-commerce platform",
    shortTitle: "Unilever D2C Platform",
    category: CATEGORIES.software,
    csBtn: "E-commerce",
    img: ph(0),
    visitSiteUrl: "",
    body: [
      { type: "p", text: "Unilever, a multinational consumer goods company, was eager to roll out a D2C platform consisting of products from all of the Company’s brands. Their initial goal was to pilot the platform by offering personnel a place to purchase Unilever products without going through third-party retailers, with the best discounts and offers." },
      { type: "p", text: "With Shopify as the main technology, we delivered a highly customized solution following Shopify’s best practices in functionality, performance and flexibility — including OTP-based eligibility via corporate email, a resilient fulfillment integration layer on Google Cloud Platform (Cloud Functions, Cloud Tasks, Cloud Firestore), and support for multiple merchant accounts within a single store." },
    ],
  },
  {
    slug: "global-hygiene-brand",
    title: "Multiple markets localize the new Lifebuoy platform",
    shortTitle: "Lifebuoy Platform",
    category: CATEGORIES.interfaces,
    csBtn: "Experience Design",
    img: ph(1),
    visitSiteUrl: "https://www.lifebuoy.com/arabia/en",
    body: [
      { type: "p", text: "The objective of our team was to deliver a UX that allows for easy, seamless purchases through a simple yet advanced experience. However, we had limited backend access, which impacted our ability to provide an inclusive approach to development." },
      { type: "p", text: "We delivered a 72-hour campaign through a microsite that brought a lot of attention and visitors to the brand. As a result, the brand team continued working with us — revamping Lifebuoy’s old site into a new digital experience that pushes the brand’s story to the audience in a more concise and modern manner, working primarily with Cog.JS, a component-oriented front-end framework backed by Adobe Experience Manager." },
    ],
  },
  {
    slug: "creating-a-digital-experience-for-knorr",
    title: "Bringing Knorr’s Digital Experience to Life",
    shortTitle: "Knorr Digital Experience",
    category: CATEGORIES.software,
    csBtn: "E-commerce",
    img: ph(0),
    visitSiteUrl: "",
    body: [
      { type: "p", text: "Through our efforts to build a master site for the Arabian market, we created a user experience that meets the needs and expectations of users and is built with usability in mind, making it easier for users to find all the necessary information." },
      { type: "p", text: "The most important technical challenge our team faced was that this was the first time we were building an e-commerce website for Knorr Arabia — there was no previous version to build upon. We built a master site using Adobe Experience Manager (AEM) with entirely custom components that serve as a template for all future localizations, connected to a Recipe Management System and a filtering system for recipes." },
    ],
  },
  {
    slug: "aov-increases-through-conversion-rate-optimization",
    title: "AOV increases through Conversion Rate Optimization",
    shortTitle: "AOV via CRO",
    category: CATEGORIES.interfaces,
    csBtn: "Experimentation",
    img: ph(1),
    visitSiteUrl: "",
    body: [
      { type: "p", text: "A D2C case study of a successful experiment we strategized and delivered for Every. to increase the Average Order Value — combining strategy, UX and experimentation to drive a measurable uplift in KPIs." },
    ],
  },
  {
    slug: "revitalizing-yippy-lingos-ecommerce-sogodys-headless-solution-for-enhanced-performance",
    title: "Revitalizing YippyLingo’s e-commerce with a headless solution",
    shortTitle: "YippyLingo Headless E-commerce",
    category: CATEGORIES.software,
    csBtn: "E-commerce",
    img: ph(1),
    visitSiteUrl: "",
    body: [
      { type: "p", text: "Explore how Sogody created YippyLingo’s e-commerce platform using a custom headless solution that combines creativity and functionality. By building a tailored system with WordPress WooCommerce for e-commerce, GatsbyJS for the front-end, and Sanity CMS for content management, we advanced YippyLingo’s educational mission, ushering them into a new digital era with intuitive design and seamless performance." },
      { type: "p", text: "Yippylingo was created in 2023 with a simple yet innovative goal: to help parents of children aged 4 to 8 incorporate English learning at home through engaging and imaginative activities. Their mission is to make English learning accessible, practical, and, most importantly, enjoyable. YippyLingo needed a new e-commerce platform built from scratch to effectively manage educational kits — a robust backend capable of handling diverse kits and customizable options, paired with an intuitive front-end." },
      { type: "p", text: "An essential aspect of the project was developing middleware to connect YippyLingo’s headless e-commerce platform with their mobile app and CRM (Directus). This integration enabled real-time updates, ensuring that customers received automatic app access and experienced a seamless transition from purchase to use." },
      { type: "p", text: "Sogody’s headless e-commerce solution brought significant improvements for YippyLingo. The platform’s redesign led to a significant increase in sales by enhancing user experience and simplifying educational kit management. Integration of WordPress WooCommerce, GatsbyJS, and Sanity CMS boosted operational efficiency, cut down manual tasks, and streamlined content updates. The fast, responsive front-end and user-friendly content management system improved user satisfaction, while Stripe’s secure payment processing streamlined transactions and improved conversion rates." },
    ],
  },
];

/* ---------------- Updates / articles (live slugs + titles) ---------------- */
const UPDATES = [
  {
    slug: "from-employee-1-to-co-founder-the-8-year-evolution-of-a-startup-journey",
    title: "From Employee #1 to Co-Founder: The 8-Year Evolution of a Startup Journey",
    desc: "From employee #1 to co-founder: Diellza shares her 8-year startup journey, lessons in trust, growth and ownership.",
    date: "2026",
    category: CATEGORIES.interfaces,
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/2859fa5ecb798a28a68d05adca6192aa5d524940.png",
    body: [
      { type: "p", text: "An 8-year reflection on growing from the first employee to co-founder — what it takes to build trust, take ownership, and grow alongside a company." },
    ],
  },
  {
    slug: "WhySogody2030",
    title: "Why We Rebuilt Sogody.com for 2030",
    desc: "Discover why we rebuilt Sogody.com — a future-ready platform showcasing our evolution in AI, infrastructure and interfaces.",
    date: "2026",
    category: CATEGORIES.software,
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/932cda715e4e736b9b636c51c217135edc3cdfa3.webp",
    body: [
      { type: "p", text: "We rebuilt Sogody.com as a future-ready platform that reflects our evolution toward intelligence, infrastructure and human–AI interfaces for the next generation of products." },
    ],
  },
  {
    slug: "delving-into-our-outsourcing-models",
    title: "Sogody’s Martech solutions (pt.2)",
    desc: "Delving into our outsourcing models — D2A2C vs. D2C and what working directly with entrepreneurs taught us.",
    date: "2023",
    category: CATEGORIES.ai,
    img: ph(1),
    body: [
      { type: "p", text: "Our initial strategy when growing our business model was to seek a D2A2C (Direct to Agency to Client) partnership rather than a D2C (Direct to Client). As the technical partner to an agency, we did not have to deal with strategic decision-making, UX design, or the promise of KPI uplifts." },
      { type: "p", text: "Working directly with entrepreneurs meant we could extend our services across the entire CRO project lifecycle. By involving clients in the strategic findings and decision-making, they gained ownership over the experimentation process — driving KPI uplifts while learning to understand their online store a little better each time." },
    ],
  },
  {
    slug: "sogodys-experience-in-outsourcing-martech-solutions",
    title: "Sogody’s Martech solutions (pt.1)",
    desc: "How we positioned ourselves as a Martech solutions outsourcing company with tech operations in Prishtina.",
    date: "2023",
    category: CATEGORIES.ai,
    img: ph(0),
    body: [
      { type: "p", text: "How did we position ourselves as Sogody, a Martech solutions outsourcing company with tech operations in Prishtina? The challenge that first comes to mind when outsourcing services is the high difficulty of market penetration." },
    ],
  },
  {
    slug: "marking-the-4th-anniversary-of-sogody",
    title: "Marking the 4th anniversary of sogody.com",
    desc: "Reflecting on four years of growth, our founding story and the people who made it possible.",
    date: "2021",
    category: CATEGORIES.interfaces,
    img: ph(1),
    body: [
      { type: "p", text: "At Sogody we take an objective-first approach to our projects, using technology as a means to solving a problem rather than pushing just another tool online. Our emphasis on forming partnerships with our clients is the cornerstone of the longstanding relationships we have enjoyed over the years." },
      { type: "p", text: "Sogody was founded in 2017 by two colleagues, Lorik and Tomor, on the premise of creating an ever-challenging and mind-evoking space for young and upcoming digital and computer scientists. With only four people in the office, we made tiny steps in the industry by engaging in web personalization projects for our very first client in London." },
      { type: "p", text: "In early 2018 we expanded our team to offer our niche stack, turning Sogody into a powerhouse for front-end development and digital experimentation. In 2019 we increased our expertise across digital experience platforms, and through 2020 we combined experience design, e-commerce specialization and insights automation." },
    ],
  },
  {
    slug: "sogody-at-the-diaspora-symposium",
    title: "Key takeaways from Sogody at the Diaspora Symposium",
    desc: "Sogody’s Head of R&D shares insights on AI and industry in Kosova at the University of Prishtina symposium.",
    date: "2023",
    category: CATEGORIES.ai,
    img: ph(0),
    body: [
      { type: "p", text: "This symposium, held on the 13th of July at the University of Prishtina, brought together prominent figures from universities, industry, the local community and the diaspora to exchange cutting-edge research and best practices in artificial intelligence." },
      { type: "p", text: "As a panelist in the final plenary session on “AI and Industry in Kosova,” Sogody’s Head of R&D, Synim Selimi, shared insights on optimizing processes, developing advanced AI models and integrating them into real-world applications — and highlighted two AI-powered tools the company developed: Replix and TweetPeek." },
    ],
  },
  {
    slug: "how-ai-is-revolutionizing-ui-and-ux-design",
    title: "How AI is revolutionizing UI/UX",
    desc: "Want to know how AI is revolutionizing user interface and user experience design? Dive into the insights.",
    date: "2023",
    category: CATEGORIES.interfaces,
    img: ph(1),
    body: [
      { type: "p", text: "At first glance, AI and UI/UX design might seem like distinct entities operating in parallel universes. Yet they can be deeply intertwined, each enhancing the other in ways we could only have imagined a decade ago." },
      { type: "p", text: "By applying AI, UI/UX designers can glean meaningful insights, refine the design process, and deliver superior user experiences — adding UI elements and branding, automating design workflows, analyzing user data, generating color palettes and exploring 3D elements." },
      { type: "p", text: "But with great power comes great responsibility. AI presents challenges that must be navigated carefully, from a lack of personalization to bias detection. It is important to build AI tools that reflect the principles of responsibility and ethics." },
    ],
  },
  {
    slug: "sogody-winter-summit-23-ai-in-action",
    title: "Sogody Winter Summit ’23",
    desc: "AI in Action & Development Post AI — highlights from our Winter Summit panel and keynotes.",
    date: "2023",
    category: CATEGORIES.ai,
    img: ph(0),
    body: [
      { type: "p", text: "In a riveting session at the Winter Summit ’23, Sogody’s CTO, Tomor Pupovci, took center stage to weave a narrative that transcended the current AI landscape — offering a panoramic view of its current state, the urgency of its adoption, and the unique advantages Sogody holds." },
      { type: "p", text: "Moderated by Synim, the panel ‘AI in Action & Development Post AI’ delved into LLMs and ML technologies in professional settings, the evolving role of developers, productivity strategies, the rise of specialized AI models, and the ethical considerations that accompany them." },
    ],
  },
  {
    slug: "our-experience-working-with-dxi-and-google-optimize",
    title: "Working with DXI and Google Optimize",
    desc: "How Digital Experience Intelligence and Google Optimize complement each other to pinpoint problems and validate experiments.",
    date: "2023",
    category: CATEGORIES.interfaces,
    img: ph(0),
    body: [
      { type: "p", text: "Digital Experience Intelligence (DXI) uses the power of machine learning to aggregate web visitor and mobile app user behavioral data across millions of digital touchpoints, connecting each critical event in the complex customer journey. It provides real-time insight into customer interactions with a brand’s website and app, processed in a privacy-first way." },
      { type: "p", text: "DXI and Google Optimize complement and validate each other in pinpointing problem areas on websites and mobile properties. If a brand’s team has a hypothesis they want to test, we would use Google Optimize to divide their visitors between two versions of the page — the existing design and the one rearranged based on their hypothesis. To fill in the gaps Google Optimize leaves, we would use Session Replay, a DXI solution, to create event funnels and record user sessions on both versions, then segment visitors to reveal how many clicked through and ultimately converted." },
      { type: "p", text: "By working together with both Google Optimize and DXI, our team achieves clear results based on scalable behavioral reporting. The power of this duo becomes magnified as organizations grow more comfortable sharing actionable insights across teams — enabling digital marketing and customer experience teams to make smarter, more informed decisions by synthesizing data across channels and identifying trends." },
    ],
  },
  {
    slug: "preventing-user-burnout",
    title: "Preventing user burnout",
    desc: "Practical UX principles for reducing cognitive overload and building focused, trustworthy product experiences.",
    date: "2023",
    category: CATEGORIES.interfaces,
    img: ph(1),
    body: [
      { type: "p", text: "Great UX design is all about making the user experience as smooth and intuitive as possible. The user should never have to pause and consider their next move. Several principles help prevent the kind of overload that leads to user burnout." },
      { type: "p", text: "Reduce visual clutter on web pages to prevent cognitive overload. On the web, it’s difficult to concentrate when there are too many images, animations, icons, advertising, text types, and vibrant colors competing for attention — much like it is when multiple people speak to us at once. It is better to use minimalistic design principles and only include necessary graphics, arranging a variety of visual elements in an organized manner to create a clean and balanced design." },
      { type: "p", text: "Reduce product complexity to prevent overwhelming users by offering fewer, higher-quality features, hiding lesser-used functions, and aggregating notifications. Reward small steps to boost morale and promote a sense of progress, and earn users’ trust through data-security features like multifactor authentication and trust badges while prioritizing privacy settings. By fostering a culture of trust, we create an environment that promotes engagement, loyalty, and success." },
    ],
  },
];

/* ---------------- Open positions ---------------- */
const JOBS = [
  {
    slug: "digital-project-manager",
    positionTitle: "Digital Project Manager",
    location: "Prishtina, Kosovo",
    workModel: "Hybrid",
    experience: "3+ years",
    hideDate: true,
    intro: "We’re looking for a Digital Project Manager to coordinate cross-functional teams and deliver complex digital products for global brands.",
    accordions: [
      { title: "About the role", body: ["Own delivery of digital projects end-to-end — scope, timeline, budget and quality — while keeping engineering, design and clients aligned."] },
      { title: "What you’ll do", body: ["Plan and run projects, manage stakeholders, remove blockers, and keep the team focused on outcomes that matter."] },
      { title: "What we’re looking for", body: ["Experience managing software or digital projects, strong communication, and a calm, organized approach to ambiguity."] },
    ],
  },
  {
    slug: "junior-project-manager",
    positionTitle: "Junior Project Manager",
    location: "Prishtina, Kosovo",
    workModel: "Hybrid",
    experience: "1+ years",
    hideDate: true,
    intro: "A Junior Project Manager role for someone organized and eager to grow alongside a dynamic engineering team.",
    accordions: [
      { title: "About the role", body: ["Support project managers in coordinating tasks, tracking progress and keeping documentation tidy."] },
      { title: "What you’ll do", body: ["Help plan sprints, take notes, follow up on action items and communicate clearly across the team."] },
      { title: "What we’re looking for", body: ["Strong organization, attention to detail and a genuine interest in technology and delivery."] },
    ],
  },
];

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  { quote: "Sogody delivered exceptional results and became a true extension of our team.", author: "Client Partner", role: "Global Brand" },
  { quote: "Their engineering-first approach meant we could move fast without breaking what mattered.", author: "Product Lead", role: "Enterprise" },
  { quote: "From strategy to delivery, Sogody understood our goals and translated them into measurable growth.", author: "Marketing Director", role: "D2C Brand" },
];

/* ---------------- FAQ (contact page) ---------------- */
const FAQS = [
  {
    q: "What types of projects does Sogody take on?",
    a: "We specialize in complex digital solutions, including web software, e-commerce platforms, AI-driven applications, and experimentation strategies. Whether you need a new product built, an existing system optimized, or strategic guidance, we tailor our approach to your specific needs.",
  },
  {
    q: "How do we start working together?",
    a: "It’s simple! Fill out the contact form, and we’ll reach out to schedule a call. We’ll discuss your goals, challenges, and how we can help. If there’s a good fit, we’ll outline a roadmap, set up a proposal cost and get started.",
  },
  {
    q: "What makes Sogody different from other agencies?",
    a: "We are an engineering-first agency with 85% of our team focused on technical excellence. We don’t just deliver projects — we craft scalable, future-proof digital experiences. Our high client retention rate (90%+) speaks to the trust and impact we bring to every engagement.",
  },
];

/* ---------------- Offices ---------------- */
const OFFICES = [
  {
    image: IMG.kosovoMap,
    city: "Prishtina, Kosovo",
    address: "Demokracia Street 20, Prishtina 10000, XK",
    mapLink: "https://maps.app.goo.gl/ZEHEmCnksmfbmTTe6",
    phone: "+383 49 460 555",
    phoneRaw: "+38349460555",
    email: "info@sogody.com",
  },
  {
    image: IMG.londonMap,
    city: "London, United Kingdom",
    address: "1 Queen St Pl, London EC4R 1QS, UK",
    mapLink: "https://maps.app.goo.gl/KrzqzpbgdJtJ121C6",
    phone: "+44 20 8133 3315",
    phoneRaw: "+442081333315",
    email: "info@sogody.com",
  },
];

const BOOKING_URL = "https://cal.com/sogody/30min";

window.SogodyData = {
  CATEGORIES, SERVICES, SERVICE_DETAIL, SERVICE_CAP_HEADING, SERVICE_TECH_HEADING, SERVICE_PHOTOS, NAV, CLIENT_LOGOS, IMG, COMPANY_BANNERS,
  CASE_STUDIES, UPDATES, JOBS, TESTIMONIALS, FAQS, OFFICES, BOOKING_URL,
};
