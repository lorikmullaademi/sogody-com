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
  { title: "Domain-Specific Software Platforms", slug: "technology-engineering", img: "/assets/images/service-card-software.png", video: "https://files.sogody.co.uk/2025-04-16T14-17-11.207Z-Optimized_software-engineering-service-18.mp4" },
  { title: "AI & Data Systems", slug: "ai-solutions", img: "/assets/images/service-card-ai.png", video: "https://files.sogody.co.uk/2025-04-16T14-27-19.288Z-Optimized_ai-service-mobile-3.mp4" },
  { title: "Human–AI Interfaces", slug: "customer-experience", img: "/assets/images/service-card-interfaces.png", video: "https://files.sogody.co.uk/2025-04-16T14-15-36.459Z-Optimized_explore-our-services-12.mp4" },
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
  { key: "what we do", label: "What we do", to: "/services/", dropdown: true },
  { key: "work", label: "Work", to: "/work/" },
  { key: "updates", label: "Updates", to: "/updates/" },
  { key: "careers", label: "Careers", to: "/careers/" },
  { key: "company", label: "Company", to: "/company/" },
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
const PH = ["/assets/images/work.png", "/assets/images/updates.png"];
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
    img: "/assets/images/cs-mod-smart-home.png",
    visitSiteUrl: "",
    body: [
      { type: "p", text: "MOD Lighting has always been about more than lighting. Their mission is to create pieces that elevate the home and turn everyday spaces into something remarkable. The next step in that vision was clear: give customers the ability to control and personalize their lighting with the same ease and elegance as the products themselves." },
      { type: "p", text: "That vision became the MOD Smart Home app, now officially launched on the App Store and Google Play." },
      { type: "h3", text: "Project at a glance" },
      { type: "ul", items: [
        "Client: MOD Lighting",
        "Industry: Smart Home Technology & Lighting",
        "Services: App Development & System Design",
        "Platforms: React Native (iOS & Android)",
        "Technology partner: Tuya Smart Lighting",
        "Status: Launched on the App Store and Google Play",
      ] },
      { type: "h2", text: "Building from the Ground Up" },
      { type: "p", text: "Developed fully in-house by the Spell & Sell team, the app was built to support both MOD’s current product line and its future ambitions." },
      { type: "p", text: "“We chose React Native as the core technology to ensure a seamless experience across both iOS and Android. The app was designed for scalability, so new features and future product lines can be introduced without friction.”" },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/d6d1364d78c006ea968de378b9a811e0e6bc5af1-4185x1635.png", alt: "MOD Smart Home app screens" },
      { type: "h2", text: "Smart Integration" },
      { type: "p", text: "To bring the MOD lighting experience to life, the team integrated the app directly with Tuya smart lighting technology, one of the most advanced platforms in the market. This gave MOD customers precise control over brightness, color temperature, and custom scenes, all while ensuring compatibility with smart home ecosystems." },
      { type: "p", text: "The app also introduced automated lighting schedules, allowing users to set timers that turn their lights on or off at specific times. It’s a simple but powerful way to make everyday routines effortless and personalized." },
      { type: "p", text: "The result is an app that feels effortless to use, yet powerful in its capabilities." },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/44e9ba4714febbdffd07bde864dfbc9ed5c8d2fa-4064x1589.png", alt: "MOD Smart Home app lighting controls and scenes" },
      { type: "h2", text: "A Better Customer Experience" },
      { type: "p", text: "For MOD’s customers, the value is simple: lighting that adapts to them. From creating preset moods for different times of day to syncing multiple fixtures across a room, the app turns luxury design into a personalized experience. Customers can also shop MOD’s curated collections directly inside the app, extending the brand’s design-first approach into every interaction." },
      { type: "h2", text: "What Comes Next" },
      { type: "p", text: "The launch is only the beginning. Today, the app is fully compatible with MOD’s Haylen and Haylen RGB fixtures. Soon, compatibility will extend across more of MOD’s catalog, along with expanded features that continue to make the smart home experience richer and more personal." },
      { type: "p", text: "The MOD Smart Home app represents more than a product launch. It shows what happens when design, technology, and customer experience come together with intention. MOD set out to bring a new level of control and beauty into people’s homes, and Spell & Sell is proud to have helped make that vision real." },
      { type: "h2", text: "Key Features" },
      { type: "ul", items: [
        "Brightness and color temperature control",
        "Custom scene creation",
        "Automated lighting schedules",
        "Multi-fixture synchronization",
        "In-app shopping integration",
        "Smart home ecosystem compatibility",
      ] },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "Turning luxury lighting into a personalized, app-controlled experience — designed and engineered in-house.",
      partner: {
        name: "MOD Lighting",
        initials: "ML",
        desc: "A design-first lighting brand on a mission to turn everyday spaces into something remarkable.",
        url: "https://mod-lighting.com/",
      },
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/mod-smart-home/id6740480148" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mod.lighting" },
      ],
      heroCaption: "The MOD Smart Home app — now officially live on the App Store and Google Play.",
      problem: {
        eyebrow: "The vision",
        heading: "More than lighting",
        body: "MOD Lighting has always been about more than lighting. Their mission is to create pieces that elevate the home — and the next step was clear: give customers the ability to control and personalize their lighting with the same ease and elegance as the products themselves.",
        stats: [
          { big: "In-house", small: "Built by the Spell & Sell team" },
          { big: "React Native", small: "One codebase, iOS + Android" },
          { big: "Tuya", small: "Smart lighting integration" },
          { big: "Haylen + RGB", small: "Supported fixtures at launch" },
          { big: "Effortless", small: "Yet powerful in capability" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "Engineering the MOD Smart Home app",
        body: "Developed fully in-house by the Spell & Sell team, the app was built to support both MOD’s current product line and its future ambitions.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/d6d1364d78c006ea968de378b9a811e0e6bc5af1-4185x1635.png",
          caption: "Precise control over brightness, color temperature, and custom scenes — built on Tuya smart lighting.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Foundation",
            title: "Building from the ground up",
            paras: [
              "We chose React Native as the core technology to ensure a seamless experience across both iOS and Android.",
              "The app was designed for scalability, so new features and future product lines can be introduced without friction.",
            ],
          },
          {
            label: "Step 2",
            tag: "Control layer",
            title: "Smart integration",
            paras: [
              "We integrated the app directly with Tuya smart lighting technology — one of the most advanced platforms on the market — giving customers precise control over brightness, color temperature, and custom scenes.",
              "We also introduced automated lighting schedules, letting users set timers that turn lights on or off at specific times. A simple but powerful way to make everyday routines effortless.",
            ],
          },
          {
            label: "Step 3",
            tag: "Experience",
            title: "A better customer experience",
            paras: [
              "From preset moods for different times of day to syncing multiple fixtures across a room, the app turns luxury design into a personalized experience.",
              "Customers can also shop MOD’s curated collections directly inside the app, extending the brand’s design-first approach into every interaction.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "An app that adapts to you",
        body: "The result is an app that feels effortless to use, yet powerful in its capabilities — lighting that adapts to the customer.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/44e9ba4714febbdffd07bde864dfbc9ed5c8d2fa-4064x1589.png",
          caption: "From preset moods to synced fixtures — luxury design turned into a personalized experience.",
        },
        items: [
          { n: "01", title: "Effortless control", desc: "Precise brightness, color temperature, and custom scenes from a single, elegant interface." },
          { n: "02", title: "Personalized routines", desc: "Automated schedules and preset moods make everyday lighting feel intentional and effortless." },
          { n: "03", title: "Design-first commerce", desc: "Curated MOD collections live inside the app, extending the brand experience into every interaction." },
        ],
      },
      next: {
        eyebrow: "What comes next",
        heading: "The launch is only the beginning",
        checks: [
          "Fully compatible with MOD’s Haylen and Haylen RGB fixtures today",
          "Compatibility expanding across more of MOD’s catalog",
          "Richer features for a more personal smart home experience",
          "A scalable foundation ready for future product lines",
        ],
        closing: "The MOD Smart Home app represents more than a product launch — it shows what happens when design, technology, and customer experience come together with intention.",
      },
    },
  },
  {
    slug: "biopharma-startup-ai-transformation",
    title: "Building a Comprehensive Life Sciences Intelligence Platform",
    shortTitle: "Life Sciences Intelligence Platform",
    category: CATEGORIES.ai,
    csBtn: "Biopharma",
    img: "/assets/images/cs-life-sciences.webp",
    visitSiteUrl: "",
    body: [
      { type: "p", text: "We partnered with a biopharma startup to build a life-sciences intelligence platform — extracting, structuring and enriching vast amounts of research data into a usable decision layer." },
    ],
    modern: {
      eyebrow: "AI & Data Systems",
      subtitle: "Turning fragmented drug-development, clinical-trial and regulatory data into an AI-enriched intelligence platform for life-sciences decision-making.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/d2360e876ccb47e070642e3228b931a514c5c17e-1965x990.webp",
      heroCaption: "A unified, AI-enriched intelligence platform for pharma and biotech decision-making.",
      problem: {
        eyebrow: "The challenge",
        heading: "Intelligence locked in scattered data",
        body: "A startup in the pharmaceutical and biotech intelligence space set out to centralize and analyze data scattered across drug-development pipelines, clinical trials and regulatory landscapes. Sogody partnered with them to develop and scale a platform that turns complex biomedical data into actionable insights.",
        stats: [
          { big: "Data lake", small: "Drugs, trials, regulatory, taxonomies" },
          { big: "Ruby on Rails", small: "Platform & curation backend" },
          { big: "AWS Batch", small: "Isolated tasks on Fargate" },
          { big: "LLM / NLP", small: "Extraction, structuring, QA" },
          { big: "4 lenses", small: "Disease · Drug · Target · Technology" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "Engineering the data lake",
        body: "At the core sits a data lake that aggregates and harmonizes data from public drug databases, clinical-trial registries, regulatory bodies and medical taxonomies — built on Ruby on Rails with both manual curation interfaces and automated workflows.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/f3d84709ee0d6cac25b1b979688639e6d8ac1731-1965x990.webp",
          caption: "Aggregating and harmonizing drugs, clinical trials and regulatory data into one curated lake.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Foundation",
            title: "Platform & workflow engine",
            paras: [
              "We implemented the backend on Ruby on Rails, combining manual data-curation interfaces with automated workflows.",
              "A custom workflow engine orchestrates atomic tasks, each running in isolation on AWS Batch via Fargate containers.",
            ],
          },
          {
            label: "Step 2",
            tag: "Data pipelines",
            title: "Ingesting and matching the data",
            paras: [
              "Automated pipelines ingest, transform and match data across Drugs, Clinical Trials and Regulatory submissions — built with a mix of Ruby, NodeJS and Python tuned to each source.",
              "Frequent clinical-trial syncing, regulatory syncing, label parsing and organizational enrichment keep the lake current and linked.",
            ],
          },
          {
            label: "Step 3",
            tag: "AI / LLM",
            title: "Structuring unstructured text",
            paras: [
              "LLMs run across the pipeline: named-entity recognition and relation extraction, indication and intervention structuring, and eligibility-criteria parsing turn free text into structured, queryable data.",
              "LLM-based fact-checking validates earlier extraction steps, while publication linking and news processing — PDUFA dates, partnership and licensing deals — enrich the records.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "One platform, many lenses",
        body: "The web application serves data dynamically to how teams work — unifying fragmented sources into a coherent, AI-enriched ecosystem that now anchors strategic decisions for pharma companies, researchers and investment analysts.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/cc9e8d9bd8a2abff4b4b833d7aaecf127d368d86-1965x990.webp",
          caption: "Disease-, drug-, target- and technology-centric views over one connected dataset.",
        },
        items: [
          { n: "01", title: "Entity-centric views", desc: "Start from a disease, drug, target or technology and pivot across trials, development stages and regulatory activity." },
          { n: "02", title: "Advanced cross-dataset search", desc: "Search across drugs, trials, targets and technologies with multifaceted filters." },
          { n: "03", title: "Forecasting & simulation", desc: "Model and compare market scenarios using disease incidence and trial progression — including Monte Carlo probabilistic forecasts." },
        ],
      },
      next: {
        eyebrow: "Under the hood",
        heading: "Built on a modern data stack",
        checks: [
          "Ruby on Rails backend with curation interfaces and automated workflows",
          "AWS Fargate & Batch for isolated, scalable task execution",
          "Custom workflow engine and pipelines in Ruby, NodeJS and Python",
          "NLP / LLM models for extraction, structuring, fact-checking and event mining",
        ],
        closing: "Sogody unified fragmented data sources into a coherent, AI-enriched ecosystem — now a cornerstone in strategic decision-making for pharma companies, researchers and investment analysts.",
      },
    },
  },
  {
    slug: "development-agricultural-management",
    title: "Management tool for an agricultural NGO",
    shortTitle: "Agricultural Management Tool",
    category: CATEGORIES.software,
    csBtn: "Agriplatform",
    img: "/assets/images/cs-agriplatform.webp",
    visitSiteUrl: "",
    body: [
      { type: "p", text: "A management tool built for an agricultural NGO to coordinate operations, track programs and surface the data that drives field decisions." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "A custom operations platform that streamlined workplace oversight, product tracking and workforce management for an agricultural NGO — improving efficiency, accuracy and transparency.",
      heroCaption: "A custom application for managing workplaces, products and workforce across the NGO's organizations.",
      problem: {
        eyebrow: "The challenge",
        heading: "Operations slowed by manual overhead",
        body: "Managing different organizations and products was inefficient — causing delays and tracking mistakes. Data accuracy was poor and employee management ineffective, and without tools to visualize statistics the NGO lacked the insight to plan. Weak data security and no product history made accountability hard, hindering its mission to support sustainable agriculture and local communities.",
        stats: [
          { big: "NGO ops", small: "Workplaces, products & workforce" },
          { big: "Custom app", small: "Built end-to-end by Sogody" },
          { big: "Visual maps", small: "Plots, crops & harvest records" },
          { big: "Secure", small: "Per-user authentication & histories" },
          { big: "Scalable", small: "Grows with the organization" },
        ],
      },
      solution: {
        eyebrow: "Steps of implementation",
        heading: "A custom application, built to fit",
        body: "We built a custom application with modern technologies that greatly improved efficiency — pairing a user-friendly interface with fast, reliable data management on scalable cloud infrastructure.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/cc9824df695d11ae5bec32f7a953cd2a136d10a2-3856x1920.png",
          caption: "Workplace, product and workforce management brought together in one application.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Interface",
            title: "A user-friendly front end",
            paras: [
              "We built the interface in React JS so employees can navigate and complete tasks with ease, simplifying day-to-day data entry across the NGO's organizations.",
            ],
          },
          {
            label: "Step 2",
            tag: "Backend & data",
            title: "Fast, reliable processing",
            paras: [
              "Nest JS on the server side delivers faster processing and better performance, while PostgreSQL keeps the NGO's data accurate and consistent.",
            ],
          },
          {
            label: "Step 3",
            tag: "Cloud",
            title: "Scalable on AWS",
            paras: [
              "AWS cloud services let the application grow and perform under load, enabling the NGO to manage multiple agricultural organizations effectively.",
              "The combination improved data accuracy and reduced processing times — helping the NGO make a bigger impact on local communities.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "Measurable gains across operations",
        body: "The custom application significantly enhanced organizational management and operational efficiency — with measurable improvements across data entry, accuracy, visibility, warehouse management and security.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/f2ae2407adcb85b1b22e43269f9e8f15104ba92b-3856x1920.webp",
          caption: "A visual map of plots — measurements, planted crops and harvest records — for tracking progress and warehouses.",
        },
        items: [
          { n: "30%", title: "Faster data entry", desc: "Reduction in processing time for data entry as employees oversee activities and manage products in one place." },
          { n: "25%", title: "Better data accuracy", desc: "Improvement in accuracy and consistency by simplifying data entry for registered organizations." },
          { n: "40%", title: "More visibility", desc: "Increase in visibility of employee counts and plot management, improving tracking of profits and expenses." },
          { n: "20%", title: "Warehouse efficiency", desc: "Improvement in warehouse management through the visual map of plots, crops and harvest records." },
          { n: "15%", title: "Fewer security incidents", desc: "Decrease in unauthorized access through employee authentication and per-user data histories." },
        ],
      },
      next: {
        eyebrow: "Built to scale",
        heading: "Smoother, more transparent operations",
        checks: [
          "Workplace, product and workforce oversight in one application",
          "Workforce management with employee initials and photos for quick identification",
          "Visual map of plots with measurements, crops and harvest records",
          "Employee authentication with per-user, downloadable data histories",
        ],
        closing: "Designed to consistently improve efficiency and transparency, the platform keeps operations smoother and more open as the organization grows — helping the NGO better fulfil its mission of supporting sustainable agriculture.",
      },
    },
  },
  {
    slug: "from-paper-to-document-management",
    title: "From paper to digital: document management efficiency app",
    shortTitle: "Document Management App",
    category: CATEGORIES.software,
    csBtn: "Kosovo Government",
    img: "/assets/images/cs-kosovo-gov.webp",
    visitSiteUrl: "https://www.sogody.com",
    body: [
      { type: "p", text: "Moving an organization from paper to a structured document-management system — digitizing workflows and cutting the time spent finding, filing and approving documents." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "Transforming document management for a public institution — replacing a low-adoption platform with a modern, centralized system for streamlined circulation, compliance and efficiency.",
      heroCaption: "A centralized document management platform for a public institution — built on Next.js, .NET Core and MSSQL.",
      problem: {
        eyebrow: "The challenge",
        heading: "Paper-bound and hard to scale",
        body: "The old system relied on physical document storage and circulation — causing delays, errors and misplaced files, with slow searches through paper archives. The lack of modern search made important documents hard to find, and the platform couldn't easily grow or adapt for institution-wide use.",
        stats: [
          { big: "Next.js", small: "Modern, fast front end" },
          { big: ".NET Core", small: "Robust, scalable backend" },
          { big: "MSSQL", small: "Reliable data foundation" },
          { big: "Elasticsearch", small: "Fast full-content search" },
          { big: "Compliant", small: "Meets legal requirements" },
        ],
      },
      solution: {
        eyebrow: "Implementation",
        heading: "A modern, compliant platform",
        body: "We built a new solution from the ground up with Next.js, .NET Core and MSSQL — a scalable, robust foundation — and integrated Elasticsearch so users can locate documents by specific content and dramatically cut search time.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/d07a28adc203373b22581202dcc6299d52fce76a-3856x1920.webp",
          caption: "Organizational structure and administration — managing documents and access across the institution.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Foundation",
            title: "Built from the ground up",
            paras: [
              "We developed a new solution on Next.js, .NET Core and MSSQL — a scalable, robust system that replaced the platform which had seen limited adoption.",
            ],
          },
          {
            label: "Step 2",
            tag: "Search",
            title: "Fast document search",
            paras: [
              "Elasticsearch indexes documents for fast retrieval, letting users locate files by specific content and significantly reducing search time.",
            ],
          },
          {
            label: "Step 3",
            tag: "Compliance",
            title: "Digital, compliant workflows",
            paras: [
              "Moving to digital workflows eliminated physical storage — cutting costs and improving sustainability.",
              "A compliance-first design met all legal requirements, giving the institution a secure, fully compliant platform that boosts efficiency and transparency.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "Faster, more transparent records",
        body: "The platform makes documents easier to access, share and manage — reducing delays and the mistakes that came from handling papers manually. Going fully digital improves accountability, data accuracy and openness.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/444158b5b2c82f7934484fb0ea881d5f467c8719-3856x1920.webp",
          caption: "The notices and document list — quick access to records across the institution.",
        },
        items: [
          { n: "01", title: "Easier access & sharing", desc: "Documents can be accessed, shared and managed more easily, reducing delays and mistakes from manual paper handling." },
          { n: "02", title: "Faster document search", desc: "Improved search powered by Elasticsearch saves time when finding documents across the archive." },
          { n: "03", title: "Lower cost, higher transparency", desc: "Removing physical storage saves resources, while fully digital workflows improve accountability, accuracy and openness." },
        ],
      },
      next: {
        eyebrow: "Built to last",
        heading: "Ready to scale across government offices",
        checks: [
          "Centralized document circulation across the institution",
          "Full-content search powered by Elasticsearch",
          "Compliance with legal regulations built in",
          "Scalable foundation on Next.js, .NET Core and MSSQL",
        ],
        closing: "This solution will keep improving efficiency and transparency in the future — poised to transform how government offices manage their workflows.",
      },
    },
  },
  {
    slug: "boosting-unilevers-email-subscription-campaign",
    title: "Boosting Unilever’s email subscription campaign",
    shortTitle: "Unilever Email Subscription",
    category: CATEGORIES.interfaces,
    csBtn: "Unilever",
    img: "/assets/images/cs-unilever-email.webp",
    visitSiteUrl: "https://www.unilever.com",
    body: [
      { type: "p", text: "Despite the negative sentiment expressed by some towards pop-ups, user behavior suggests that they can yield significant results. This case study details our delivery of the always-on pop-up banner campaign for 20 brands under the Unilever umbrella and the favorable impact it had on increasing email subscriptions." },
      { type: "p", text: "Our team was tasked with designing and implementing a solution to boost Unilever’s email subscription campaign by displaying a subscription form to website visitors at all times. And that is exactly what we did. Sogody successfully executed a campaign across 52 websites for twenty Unilever brands that operated in two different markets and most of them in two languages." },
      { type: "p", text: "The challenge was to create personalized designs for each brand, but our expertise in digital marketing and ability to tailor our strategies to unique needs allowed us to achieve success — drawing on our experimentation and UX/UI design services, including user behavior and event tracking." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "An always-on pop-up banner campaign across 20 Unilever brands — designed to blend into each brand and lift email subscriptions without disrupting the browsing experience.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/8b3ea6dff1662a76e0bc2bb2b891818f076e8ee1-2240x1328.webp",
      heroCaption: "An always-on email-subscription pop-up, tailored to each Unilever brand.",
      partner: {
        name: "Unilever",
        initials: "U",
        desc: "A multinational consumer goods company spanning hundreds of brands.",
        url: "https://www.unilever.com",
      },
      links: [
        { label: "Visit site", url: "https://www.unilever.com" },
      ],
      problem: {
        eyebrow: "The brief",
        heading: "Pop-ups that persuade, not interrupt",
        body: "Pop-ups remain a valuable tool for generating leads and building mailing lists — when done right. Sogody was tasked with boosting Unilever’s email subscriptions by showing an always-on subscription form to visitors across 20 brands under the Unilever umbrella, without disrupting the browsing experience.",
        stats: [
          { big: "52 sites", small: "Across the brand portfolio" },
          { big: "20 brands", small: "Under the Unilever umbrella" },
          { big: "2 markets", small: "Most in two languages" },
          { big: "52 banners", small: "One tailored to each site" },
          { big: "Always-on", small: "Persuasive, not intrusive" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "52 banners, tailored to every brand",
        body: "Across 52 websites for twenty Unilever brands — operating in two markets and mostly two languages — we designed and built personalized pop-up banners that blend into each brand’s aesthetic while still catching the visitor’s eye.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/7743717e5f9b0d210310c6355d9b26694b25a524-2240x1328.webp",
          caption: "Pop-up banners tailored to each of the twenty Unilever brands.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Design",
            title: "Personalized, on-brand design",
            paras: [
              "We crafted 52 pop-up banners, each seamlessly blending with its brand’s website aesthetics, with customized images and a light animation on page load to make them eye-catching.",
              "Each was tailored to its brand — Lifebuoy’s, for instance, popped in on open to capture the visitor’s attention.",
            ],
          },
          {
            label: "Step 2",
            tag: "Placement",
            title: "Visible, never disruptive",
            paras: [
              "Banners sit in the bottom corner of the screen with a minimize option on both desktop and mobile, so they catch attention without interrupting browsing — and once a user signs up, the banner stops showing, keeping them persuasive rather than intrusive.",
            ],
          },
          {
            label: "Step 3",
            tag: "Delivery",
            title: "Tailored at scale across markets",
            paras: [
              "We delivered across 52 websites for twenty brands in two markets and mostly two languages — creating a personalized design for each while tailoring our strategy to every brand’s unique needs.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "Immediate, significant impact",
        body: "The impact was immediate: Unilever saw a substantial increase in email subscribers, which drove more website traffic and sales — and higher customer satisfaction — by giving visitors an easy, visible way to subscribe and stay up to date on products and promotions.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/3a30f064839d030e34ddcda379d635547acf8557-2240x1328.webp",
          caption: "Higher engagement across the Unilever brand portfolio.",
        },
        items: [
          { n: "01", title: "More subscribers", desc: "A substantial increase in email-list subscribers across the twenty brands." },
          { n: "02", title: "More traffic & sales", desc: "Growth in website traffic and sales as new subscribers engaged with the brands." },
          { n: "03", title: "Happier customers", desc: "Higher customer satisfaction from an easy, non-intrusive way to stay up to date." },
        ],
      },
      next: {
        eyebrow: "How we delivered",
        heading: "Experimentation and UX/UI at the core",
        checks: [
          "Strategy and research",
          "Digital experiences optimization",
          "Strategy and test-hypothesis validation",
          "UX and UI design",
          "A/B testing",
          "Quality assurance and staged deployment",
          "User behavior and event tracking",
        ],
        closing: "A comprehensive digital-marketing solution that met Unilever’s needs across industries and markets — proof that pop-ups, done with care, persuade rather than intrude.",
      },
    },
  },
  {
    slug: "launching-the-samsung-s22-series-through-our-new-product-testful",
    title: "Launching the Samsung S22 series through our new product Testful",
    shortTitle: "Samsung S22 × Testful",
    category: CATEGORIES.interfaces,
    csBtn: "Samsung / Testful",
    img: "/assets/images/cs-samsung-testful.webp",
    visitSiteUrl: "https://www.cheil.com",
    body: [
      { type: "p", text: "Building A/B experiences across various platforms and markets taught us many lessons, one of the most important being: good A/B experiences tend to stick around and return all the time. That becomes a repetitive challenge, and a lot of development effort goes to waste on tasks that non-technical people could deliver — with a touch of Testful." },
      { type: "p", text: "Last year, we delivered 77 experiments in a six-month period for seven Samsung markets using our Experiment Framework. With Testful, we managed to develop 42 across 22 Samsung markets in only three days." },
      { type: "p", text: "Testful is our solution for repetitive, customizable, and easily configurable experiences. Instead of building experiences, we build experience templates that anyone can configure. It automates the delivery of multiple experiments in one go through A/B templates that require zero development effort to be updated and deployed across any market." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "Launching the Samsung S22 series with Testful — our no-code A/B platform that delivered 42 experiences across 22 markets in three days.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/383fac8199b51b3c22876bd2949343f7ed00fea8-1920x956.webp",
      heroCaption: "Testful — repeatable, configurable A/B experiences, deployed without development effort.",
      partner: {
        name: "Samsung",
        initials: "S",
        desc: "Launching the S22 series across 22 markets, with agency Cheil.",
        url: "https://www.cheil.com",
      },
      links: [
        { label: "Visit Testful", url: "https://testful.co.uk" },
      ],
      problem: {
        eyebrow: "The challenge",
        heading: "A/B testing that repeats itself",
        body: "Every Samsung launch demands pixel-perfect experiences delivered fast. Building A/B experiences across platforms and markets taught us that good experiences keep coming back — a repetitive challenge where development effort goes to waste on tasks non-technical people could handle. The Experiment Framework was only the start.",
        stats: [
          { big: "77 → 42", small: "Experiments, framework to Testful" },
          { big: "3 days", small: "What took three months" },
          { big: "22 markets", small: "Deployed in one go" },
          { big: "No-code", small: "Configurable by marketers" },
          { big: "UNPACKED 2022", small: "Live for pre-order phase" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "Testful: experiences as templates",
        body: "Instead of building experiences, we build experience templates that anyone can configure. Testful automates the delivery of multiple experiments in one go through A/B templates that need zero development effort to update and deploy across any market — letting marketers run A/B activities without the technical detail.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/ab044c131cb6027e7630089ca4012cf3a5f611a5-1920x956.webp",
          caption: "Samsung S22 test experiences, configured and previewed without development.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Templates",
            title: "Build once, configure anywhere",
            paras: [
              "Rather than rebuilding experiences, we create experience templates that anyone can configure to their needs and deploy to their optimization provider of choice.",
            ],
          },
          {
            label: "Step 2",
            tag: "No-code workflow",
            title: "Four steps, zero code",
            paras: [
              "Choose a template, customize the activity, preview its look and feel on your web app, and deploy — with a fully-equipped real-time preview, no optimization provider required.",
            ],
          },
          {
            label: "Step 3",
            tag: "Automated QA",
            title: "Stressless by automation",
            paras: [
              "Testful applies a high level of automation to quality assurance, cutting QA time and the communication overhead between marketers and developers.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "42 experiences in three days",
        body: "For Samsung’s yearly UNPACKED event, the marketing team had 42 new A/B experiences to deploy across 22 markets. Through Testful, we delivered all 42 in three days — live early in the pre-order phase — with updates and QA taking only minutes.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/5e23c86d08bbe2a446d84dae22c1225a261694a2-900x506.gif",
          caption: "Configure, preview and deploy — in record time.",
        },
        items: [
          { n: "42", title: "Experiences delivered", desc: "All 42 A/B experiences deployed across 22 Samsung markets in just three days." },
          { n: "3 days", title: "Three months of work", desc: "What previously took three months, delivered in three days with zero development effort." },
          { n: "Minutes", title: "Update & QA", desc: "Updating and QA-ing the experiences took only a couple of minutes altogether." },
        ],
      },
      next: {
        eyebrow: "To Testful and beyond",
        heading: "A new precedent for A/B testing",
        checks: [
          "No-code A/B testing across any web application",
          "Integrates with your optimization provider of choice",
          "Automated QA for stressless delivery",
          "Real-time preview without a provider",
        ],
        closing: "Testful is to A/B testing what Tesla is to the automotive industry — proven through Samsung’s Rainbow series launch that there’s always a faster, no-code way to deliver impeccable experiences.",
      },
    },
  },
  {
    slug: "the-multinational-consumer-goods-company-s-biggest-e-commerce-platform",
    title: "Unilever’s biggest e-commerce platform",
    shortTitle: "Unilever D2C Platform",
    category: CATEGORIES.software,
    csBtn: "Unilever",
    img: "/assets/images/cs-unilever-ecommerce.webp",
    visitSiteUrl: "https://www.unilever.com",
    body: [
      { type: "p", text: "Unilever, a multinational consumer goods company, was eager to roll out a D2C platform consisting of products from all of the Company’s brands. Their initial goal was to pilot the platform by offering personnel a place to purchase Unilever products without going through third-party retailers, with the best discounts and offers." },
      { type: "p", text: "With Shopify as the main technology, we delivered a highly customized solution following Shopify’s best practices in functionality, performance and flexibility — including OTP-based eligibility via corporate email, a resilient fulfillment integration layer on Google Cloud Platform (Cloud Functions, Cloud Tasks, Cloud Firestore), and support for multiple merchant accounts within a single store." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "A direct-to-consumer platform spanning Unilever’s entire portfolio — built on Shopify best practices, then extended far beyond them to meet eligibility, pricing and fulfillment requirements.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/91c48df4af59cfe70d6484101e846852694fb37d-1920x956.webp",
      heroCaption: "Unilever’s direct-to-consumer platform — a responsive storefront across tablet, laptop and mobile.",
      partner: {
        name: "Unilever",
        initials: "U",
        desc: "A multinational consumer goods company spanning hundreds of brands.",
        url: "https://www.unilever.com",
      },
      links: [
        { label: "Visit site", url: "https://www.unilever.com" },
      ],
      problem: {
        eyebrow: "The brief",
        heading: "A D2C platform for an entire portfolio",
        body: "Unilever wanted to roll out a direct-to-consumer platform spanning products from all its brands — piloting it by giving personnel, and select partners, a place to buy Unilever products directly, with the best discounts and offers, without going through third-party retailers.",
        stats: [
          { big: "Shopify Plus", small: "Core e-commerce platform" },
          { big: "Google Cloud", small: "Resilient integration layer" },
          { big: "OTP + Multipass", small: "Corporate-email eligibility" },
          { big: "Tiered discounts", small: "By company & monthly spend" },
          { big: "Multi-entity", small: "Location-based fulfillment" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "Delivering a highly customized Shopify solution",
        body: "An attractive, responsive storefront built on Shopify best practices — then extended well beyond what Shopify offers out of the box to meet Unilever’s specific business, eligibility, discount and fulfillment requirements, with in-house services hosted on Google Cloud Platform.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/3f4824980099c8d40cd45b3212fade53411d2719-1920x956.webp",
          caption: "A responsive storefront — product pages and customer reviews — across every device.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Platform",
            title: "A highly customized Shopify build",
            paras: [
              "With Shopify as the main technology, we built an attractive, responsive storefront that adapts seamlessly to any device, following Shopify’s best practices in functionality, performance and flexibility.",
              "To meet Unilever’s specific goals and regulatory requirements, we extended Shopify with advanced extension mechanisms and in-house resilient solutions hosted on Google Cloud Platform.",
            ],
          },
          {
            label: "Step 2",
            tag: "Eligibility",
            title: "Corporate-email eligibility via OTP",
            paras: [
              "Access was limited to eligible corporate email addresses, so we built a custom OTP solution to assess eligibility on sign-up and pseudo-randomly during sign-in — sidestepping the complexity of SSO across many companies.",
              "It runs on an in-house service to generate, deliver and validate the OTP, plus Shopify Multipass (Shopify Plus) for authentication, and automatically revokes access when an employee leaves.",
            ],
          },
          {
            label: "Step 3",
            tag: "Pricing",
            title: "Complex, tiered, customer-dependent discounts",
            paras: [
              "Neither Shopify nor Shopify Plus support tiered discounts, yet pricing had to vary by customer attributes such as company and monthly spending.",
              "We stored tiered configurations on each product via metafields and used Shopify Scripts to calculate the discount securely at the line-item level, backed by an external service that tracks each customer’s monthly spend.",
            ],
          },
          {
            label: "Step 4",
            tag: "Cart",
            title: "A holistic cross-device cart",
            paras: [
              "Shopify has no built-in way to keep a cart in sync between devices, and existing apps weren’t robust enough — so we rolled out a custom solution to keep cart items synced across devices for each customer.",
            ],
          },
          {
            label: "Step 5",
            tag: "Fulfillment",
            title: "Fulfillment across entities and locations",
            paras: [
              "Unilever outsources fulfillment to partners on disparate systems, so we coordinated the parties, defined the workflows, and built a resilient integration layer on Google Cloud Platform — Cloud Functions, Cloud Tasks and Cloud Firestore — that augments Shopify API payloads to smooth out fulfillment.",
              "To overcome Shopify’s location limits, we supported multiple merchant accounts within a single store and an external solution that fulfils items from the center closest to each customer.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "One storefront, every requirement met",
        body: "The result is a resilient, compliant D2C platform that handles eligibility, customer-specific pricing, a synced cross-device cart and a complex multi-entity fulfillment network — all behind a seamless Shopify storefront.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/24c112316581b713e32c38c77e78ad7710c782a9-920x518.gif",
          caption: "A seamless, responsive Unilever storefront.",
        },
        items: [
          { n: "01", title: "Eligible-only access", desc: "Corporate-email OTP ensures only eligible employees get the discounts, with eligibility revoked automatically when they leave." },
          { n: "02", title: "Customer-specific pricing", desc: "Tiered discounts calculated securely at the line-item level by company and monthly spend." },
          { n: "03", title: "Resilient fulfillment", desc: "A GCP integration layer and multi-merchant setup route orders to the fulfillment center closest to each customer." },
        ],
      },
      next: {
        eyebrow: "Under the hood",
        heading: "Pushing Shopify beyond its limits",
        checks: [
          "Shopify Plus extended with Scripts, metafields and Multipass",
          "Custom OTP eligibility on an in-house service",
          "Cross-device cart sync built from scratch",
          "GCP integration layer — Cloud Functions, Cloud Tasks, Firestore",
        ],
        closing: "A complex, intricate build delivered with Shopify best practices at its core and bespoke engineering everywhere Shopify fell short — a D2C platform ready to scale across Unilever’s brands and partners.",
      },
    },
  },
  {
    slug: "global-hygiene-brand",
    title: "Multiple markets localize the new Lifebuoy platform, delivered by Sogody",
    shortTitle: "Lifebuoy Platform",
    category: CATEGORIES.interfaces,
    csBtn: "Lifebuoy",
    img: "/assets/images/cs-lifebuoy-localization.webp",
    visitSiteUrl: "https://www.lifebuoy.com",
    body: [
      { type: "p", text: "The objective of our team was to deliver a UX that allows for easy, seamless purchases through a simple yet advanced experience. However, we had limited backend access, which impacted our ability to provide an inclusive approach to development." },
      { type: "p", text: "We delivered a 72-hour campaign through a microsite that brought a lot of attention and visitors to the brand. As a result, the brand team continued working with us — revamping Lifebuoy’s old site into a new digital experience that pushes the brand’s story to the audience in a more concise and modern manner, working primarily with Cog.JS, a component-oriented front-end framework backed by Adobe Experience Manager." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "Revamping Lifebuoy’s site into a modern, localized digital flagship — now live in more than four markets, lifting performance, engagement and digital sales.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/4e4a06c39acf20b8c6307817a3f631617384a156-1920x956.webp",
      heroCaption: "A modern, localized Lifebuoy platform — built to scale across markets.",
      partner: {
        name: "Lifebuoy",
        initials: "LB",
        desc: "One of the world’s top-selling hygiene brands, on a mission for better health.",
        url: "https://www.lifebuoy.com",
      },
      links: [
        { label: "Visit site", url: "https://www.lifebuoy.com" },
      ],
      problem: {
        eyebrow: "The challenge",
        heading: "Modernizing a brand with a mission",
        body: "Revamping the platform for a brand with such a rich history of health was a responsibility — a new look and feel without losing what Lifebuoy stands for. The old site lacked clear navigation, strong CTAs, SEO and relevant product recommendations; the goal was a modern platform that balanced editorial and product content and encouraged online purchases.",
        stats: [
          { big: "AEM", small: "Adobe Experience Manager" },
          { big: "Cog.JS", small: "Component-oriented front end" },
          { big: "~2x faster", small: "Lightweight front-end execution" },
          { big: "4+ markets", small: "Localized from one master site" },
          { big: "Editorial + product", small: "Balanced content experience" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "A new flagship, within the global framework",
        body: "Lifebuoy already ran on Adobe Experience Manager, giving us the market data and segmentation to optimize the experience — though limited backend access meant working only with the global team’s prebuilt AEM components. We turned that constraint into a creative, modern user journey.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/6d51e9ef2d68720096ed8ca533541517c61fc49c-1920x956.webp",
          caption: "A simple yet advanced experience, designed for seamless purchases.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Research",
            title: "Grounded in market data",
            paras: [
              "With Lifebuoy already on AEM, we used its market data and profile segmentation to shape an experience that fixes the old site’s gaps in navigation, CTAs, SEO and product recommendations.",
            ],
          },
          {
            label: "Step 2",
            tag: "Experience",
            title: "Designing within the framework",
            paras: [
              "Limited backend access meant building only with the global team’s prebuilt AEM components, so our digital-experiences lead crafted creative ways to modernize the journey and interface into a new flagship experience.",
            ],
          },
          {
            label: "Step 3",
            tag: "Engineering",
            title: "Built on Cog.JS",
            paras: [
              "We worked within the global team’s framework and guidelines, primarily with Cog.JS — a modular, component-oriented front-end framework backed by Adobe Experience Manager — to deliver a new, uplifting experience.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "Faster, stickier, ready to localize",
        body: "A lightweight front end delivered nearly 2x faster performance and more intuitive navigation — and the impact showed up immediately in the KPIs.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/6ecb12082b44d81ea75398c694aa6acb7a163deb-1920x956.webp",
          caption: "A modern product experience that balances story and shopping.",
        },
        items: [
          { n: "~2x", title: "Faster performance", desc: "A lightweight front-end execution made the new site nearly twice as fast, with more intuitive navigation." },
          { n: "+43%", title: "More pageviews", desc: "Pageviews jumped from ~45,700 to ~65,150 within a month of launch." },
          { n: "+1.5min", title: "Longer visits", desc: "Average time spent on the site increased by around a minute and a half." },
          { n: "4+", title: "Markets localized", desc: "Neighboring markets requested the new version; the platform now runs in more than four markets, lifting digital sales." },
        ],
      },
      next: {
        eyebrow: "The impact",
        heading: "One platform, many markets",
        checks: [
          "Nearly 2x faster, lightweight front end",
          "More intuitive navigation and clearer CTAs",
          "Localized across more than four markets",
          "Balanced editorial and product content",
        ],
        closing: "Lifebuoy’s platform, delivered by Sogody, is up and running in more than four markets — increasing digital sales and advancing the brand’s mission for better hygiene.",
      },
    },
  },
  {
    slug: "lifebuoys-award-winning-campaign",
    title: "Lifebuoy’s award-winning campaign – Delivered by Sogody",
    shortTitle: "Lifebuoy H is for Handwashing",
    category: CATEGORIES.software,
    csBtn: "Lifebuoy",
    img: "/assets/images/cs-lifebuoy-award.webp",
    visitSiteUrl: "https://www.lifebuoy.com",
    body: [
      { type: "p", text: "Lifebuoy’s award-winning ‘H is for Handwashing’ campaign engages children with the importance of handwashing — turning the letter H into a symbol for handwashing. Having already built Lifebuoy’s microsite and revamped its main site, we delivered fun, interactive educational content across three localized Lifebuoy sites." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "An award-winning ‘H is for Handwashing’ campaign — fun, interactive educational content that turns the letter H into a symbol for handwashing, delivered across three localized Lifebuoy sites.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T13-50-06.465Z-lifebuoy-video-1.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/1cb2723d2da9a9df46f49a021104c0f580ddf8f3-1920x1080.png",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/5470665a30f70d20bbdf84267353597677121a0c-2240x1328.webp",
      heroCaption: "The ‘H is for Handwashing’ campaign — interactive learning for children worldwide.",
      partner: {
        name: "Lifebuoy",
        initials: "LB",
        desc: "One of the world’s top-selling hygiene brands, on a mission for better health.",
        url: "https://www.lifebuoy.com",
      },
      links: [
        { label: "Visit site", url: "https://www.lifebuoy.com" },
      ],
      problem: {
        eyebrow: "The campaign",
        heading: "H is for Handwashing",
        body: "On a mission to tackle one of the biggest public-health challenges — handwashing — Lifebuoy’s ‘H is for Handwashing’ campaign engages children with hygiene so that H stands not just for Hat or Hippo, but for Handwashing. It set out to spark interest in cleanliness across Asia-Pacific, Africa and the Middle East.",
        stats: [
          { big: "Effie Bronze", small: "Global, multi-region award" },
          { big: "11M+", small: "Schoolchildren reached worldwide" },
          { big: "3 sites", small: "Localized launches at once" },
          { big: "Positive Change", small: "Social Good: Brands" },
          { big: "Games + forms", small: "Interactive, custom-built" },
        ],
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/5470665a30f70d20bbdf84267353597677121a0c-2240x1328.webp",
          caption: "The ‘H is for Handwashing’ campaign — interactive learning for children worldwide.",
        },
      },
      solution: {
        eyebrow: "What we built",
        heading: "A custom, interactive campaign",
        body: "Having already built Lifebuoy’s microsite and revamped its main site, we collaborated to deliver the ‘H is for Handwashing’ campaign — fun, interactive educational content for children and caregivers around the world, built under real urgency across many teams.",
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T13-50-36.255Z-lifebuoy-video-2.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/3b98084f3a95dcba4c7fc9d39f606a29bc39b752-1440x1080.png",
          caption: "Custom-built components, forms and interactive games for children and caregivers.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Components",
            title: "Custom-built for the campaign",
            paras: [
              "A completely special design meant entirely new custom-built components to achieve the result we wanted.",
            ],
          },
          {
            label: "Step 2",
            tag: "Access & games",
            title: "Forms and interactive games",
            paras: [
              "We placed special emphasis on user forms that, once completed correctly, grant access to the campaign’s books and documents — and integrated interactive games with a smooth playing experience.",
            ],
          },
          {
            label: "Step 3",
            tag: "Localization",
            title: "Three sites, launched together",
            paras: [
              "Having implemented Lifebuoy Arabia as a master site, we created an experience to fit three localized Lifebuoy websites launching the campaign at the same time, working closely with the brand team on content and copy.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "The outcome",
        heading: "Communications platforms for good",
        checks: [
          "Won a Global Effie Bronze (multi-region)",
          "Category: Positive Change – Social Good: Brands",
          "Custom-built components, forms and interactive games",
          "Three localized Lifebuoy sites launched together",
        ],
        closing: "As the Effie put it — “recognizing brands that are making the world a better place by using the power of their communications platforms for good.” There’s no better testament to what Lifebuoy stands for, and we’re proud to have built ‘H is for Handwashing’ for them.",
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T13-50-58.250Z-lifebuoy-video-3.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/f93f5bd23b46b84cefe33dbd658bb8bbbfe5c775-1920x1080.png",
          caption: "Communications platforms for good — three localized Lifebuoy sites launched together.",
        },
      },
    },
  },
  {
    slug: "creating-a-digital-experience-for-knorr",
    title: "Creating a digital experience for Knorr",
    shortTitle: "Knorr Digital Experience",
    category: CATEGORIES.software,
    csBtn: "Knorr",
    img: "/assets/images/cs-knorr.webp",
    visitSiteUrl: "https://www.knorr.com",
    body: [
      { type: "p", text: "Through our efforts to build a master site for the Arabian market, we created a user experience that meets the needs and expectations of users and is built with usability in mind, making it easier for users to find all the necessary information." },
      { type: "p", text: "The most important technical challenge our team faced was that this was the first time we were building an e-commerce website for Knorr Arabia — there was no previous version to build upon. We built a master site using Adobe Experience Manager (AEM) with entirely custom components that serve as a template for all future localizations, connected to a Recipe Management System and a filtering system for recipes." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "A new Knorr e-commerce experience for the Arabian market — a custom AEM master site for recipes, cookbooks and shopping, built to localize across markets.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T13-43-22.441Z-knorr-1.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/c7e248c952aea009a85ee94f7fdaa17a022227a2-2066x1080.png",
      heroCaption: "A new Knorr e-commerce experience for the Arabian market.",
      partner: {
        name: "Knorr",
        initials: "K",
        desc: "One of the world’s largest cooking brands, sold in more than 78 countries.",
        url: "https://www.knorr.com",
      },
      links: [
        { label: "Visit site", url: "https://www.knorr.com" },
      ],
      problem: {
        eyebrow: "The challenge",
        heading: "A greener food future, online",
        body: "The global team set out to build a new Knorr website for the Arabian market — a more personal, engaging way to find recipes and products that’s easy to navigate, lets users check out with the retailer of their choice, and lets them create Cookbooks to organize favorite recipes in their own accounts, accessible from any device.",
        stats: [
          { big: "AEM", small: "Custom master site" },
          { big: "78+ countries", small: "One of the world’s largest cooking brands" },
          { big: "Cookbooks", small: "Personal recipe collections" },
          { big: "Recipe MS", small: "Connected recipe database" },
          { big: "Localizable", small: "Template for future markets" },
        ],
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T13-44-11.515Z-knorr-2.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/c1d03e78a4364012c8b25d7fe17b3b3a11237b43-1440x1080.png",
          caption: "A more personal, engaging way to find recipes and products — checkout with the retailer of your choice.",
        },
      },
      solution: {
        eyebrow: "What we built",
        heading: "A custom master site, from the ground up",
        body: "This was the first time we built an e-commerce website for Knorr Arabia — with no previous version to build on, we did a full revamp, building the entire experience from the ground up as a reusable master site.",
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T13-44-43.501Z-knorr-3.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/3e15eb1668de95965c954cff4c03cc8256a2b234-1440x1080.png",
          caption: "Custom AEM components connected to the Recipe Management System, with Cookbooks and powerful recipe filtering.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Foundation",
            title: "An AEM master site",
            paras: [
              "We built a master site on Adobe Experience Manager with entirely custom components, designed to serve as a template for all future localizations to other markets.",
            ],
          },
          {
            label: "Step 2",
            tag: "Recipes",
            title: "Connected to the Recipe Management System",
            paras: [
              "We connected the site to the Recipe Management System — the database of all recipe information — and presented recipes with the option to collect favorites in a Cookbook.",
            ],
          },
          {
            label: "Step 3",
            tag: "Discovery",
            title: "Powerful recipe filtering",
            paras: [
              "We built a filtering system so users can find recipes by number of servings, cooking time, ingredients and much more.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "Faster, easier, built to scale",
        body: "We created a user experience built for usability — making it easier to find information, with faster loading and better performance than existing market sites.",
        items: [
          { n: "01", title: "Better performance", desc: "Faster loading time and better performance than existing market sites, for a better user experience." },
          { n: "02", title: "Higher conversion", desc: "A changed, simpler search process made it easier for users to find what they wanted, improving conversion." },
          { n: "03", title: "Ready to localize", desc: "Built for visual appeal, productivity and consistency so it localizes easily from the Arabian master site." },
        ],
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T13-45-10.641Z-knorr-4.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/11d18946c35c480fd79b92793bd8163249fc344d-1920x1080.png",
          caption: "Faster, easier and built to scale across the Arabian market and beyond.",
        },
      },
      next: {
        eyebrow: "The impact",
        heading: "Growing the brand through UX and SEO",
        checks: [
          "Custom AEM master site, built from the ground up",
          "Cookbooks and accounts across any device",
          "Recipe filtering by servings, time and ingredients",
          "Localizable template for future markets",
        ],
        closing: "Improving UX and SEO ensured Knorr would attract more visitors and convert them into customers — driving the overall growth of the brand.",
      },
    },
  },
  {
    slug: "lux-arabia-launches-its-new-platform-built-by-sogody",
    title: "LUX Arabia launches its new platform built by Sogody",
    shortTitle: "LUX Arabia Platform",
    category: CATEGORIES.software,
    csBtn: "LUX Arabia",
    img: "/assets/images/cs-lux-arabia.webp",
    visitSiteUrl: "https://www.lux.com/arabia/en/home.html",
    tags: ["Platform build", "UX/UI design", "Adobe Experience Manager", "Global localization"],
    body: [
      { type: "p", text: "Since 1925, LUX’s bath and body products have delighted women in more than 100 countries. Sogody set out to create the next step in storytelling for these luxury products — building a new platform for the Arabian market that takes users deeper into the LUX experience and can be localized by markets worldwide." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "Designing and building LUX’s new Arabian-market platform on Adobe Experience Manager — a glamorous, culturally adapted experience built as a global Master site ready for localization.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T14-00-36.028Z-lux-video-1.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/9b3c464ca55879822ce0f5c5a6f307832afca28c-1728x1080.png",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/9b3c464ca55879822ce0f5c5a6f307832afca28c-1728x1080.png",
      heroCaption: "LUX Arabia — a new digital experience built to tell the brand’s story of modern luxury.",
      partner: {
        name: "LUX",
        initials: "LX",
        desc: "Unilever’s LUX — bath and body products that have delighted women in more than 100 countries worldwide since 1925.",
        url: "https://www.lux.com/arabia/en/home.html",
      },
      links: [
        { label: "Visit site", url: "https://www.lux.com/arabia/en/home.html" },
      ],
      problem: {
        eyebrow: "The challenge",
        heading: "Telling a luxury story in an entirely new way",
        body: "LUX wanted a platform that felt clean and straightforward yet expressed modern glamour in a sophisticated, assertive, and powerful way. Sogody needed to find the ‘golden mean’ — a unique brand story and a user-centered design that would introduce LUX’s products to the Arabian market, then be localized by numerous markets worldwide.",
        stats: [
          { big: "Since 1925", small: "LUX bath & body heritage" },
          { big: "100+", small: "Countries worldwide" },
          { big: "AEM", small: "Adobe Experience Manager platform" },
          { big: "8 weeks", small: "Build timeline set by the brand team" },
          { big: "Master site", small: "Built for global localization" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "A clean, modern, glamorous experience",
        body: "Sogody’s creative process and dedication to understanding LUX’s needs allowed us to conceive a new platform for the Arabian market that would resonate with its audience — delivering an emotionally unique story that is inspiring and motivational, and that shows LUX is culturally relevant and forward-looking.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/7a6b4e3feeff9d0bbad7598b31762786aadacc40-560x332.webp",
          caption: "A user-centered design that balances clean simplicity with modern, glamorous luxury.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Design",
            title: "Finding the ‘golden mean’ in design",
            paras: [
              "Our design team worked toward a few clear goals: an easy-to-navigate user experience, products and PDPs as the first highlighted pages, easily triggered call-to-actions, cultural adaptation to the Arabic markets, and a glamorous, modern, professional look and feel.",
              "The result is a digital experience that feels valued and relevant to the brand’s customers.",
            ],
          },
          {
            label: "Step 2",
            tag: "Development",
            title: "Built on Adobe Experience Manager",
            paras: [
              "Adobe Experience Manager (AEM) serves as the main content management platform for most of Unilever’s brand platforms, with an existing components infrastructure the Sogody team could tweak to reach the final design.",
              "Within the 8-week timeline, we created an internal ‘framework’ for AEM-based sites to quickly build reusable components and adjust them to Unilever’s architecture and workflow.",
            ],
          },
          {
            label: "Step 3",
            tag: "Localization",
            title: "A global Master site, ready to scale",
            paras: [
              "The platform was built to become a global Master site, with a flexible code structure and code base that other market tech teams could easily adapt.",
              "As the original creators of the UX design and development, we also built a knowledge repository and shared the internal framework, so localized markets could deliver an equally robust experience.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "A high-performing, scalable platform",
        body: "Understanding that the quality and speed of the digital experience mattered, Sogody delivered a high-performing and scalable site, ready for future localizations across the markets where LUX is present.",
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T14-00-12.316Z-lux-video-2.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/b440fac2beab13311f6269b18185fd310eb7e416-1920x1080.png",
          caption: "A scalable platform built as a foundation for LUX’s global, localized rollouts.",
        },
        items: [
          { n: "01", title: "A unique brand story", desc: "An emotionally engaging, culturally relevant experience that introduces LUX’s products in an entirely new way." },
          { n: "02", title: "Reusable AEM framework", desc: "An internal framework for building and adjusting reusable components on Unilever’s AEM architecture." },
          { n: "03", title: "Ready for localization", desc: "A flexible, high-performing Master site that market teams can adapt and localize worldwide." },
        ],
      },
      next: {
        eyebrow: "The impact",
        heading: "A foundation for LUX worldwide",
        checks: [
          "New Arabian-market platform built by Sogody",
          "Clean, modern, glamorous, culturally adapted design",
          "Built on Adobe Experience Manager within 8 weeks",
          "Reusable component framework for Unilever’s AEM workflow",
          "Designed as a global Master site for localization",
          "Knowledge repository shared with market tech teams",
        ],
        closing: "By combining a user-centered design with a scalable AEM build, Sogody gave LUX a platform that tells its story of modern luxury while serving as a strong foundation for localized experiences worldwide.",
      },
    },
  },
  {
    slug: "tweetpeek-ai-powered-twitter-growth-and-insights",
    title: "TweetPeek: AI-powered Twitter growth and insights",
    shortTitle: "TweetPeek",
    category: CATEGORIES.ai,
    csBtn: "TweetPeek",
    img: "/assets/images/cs-tweetpeek.webp",
    visitSiteUrl: "https://www.tweetpeek.ai",
    body: [
      { type: "p", text: "TweetPeek is a free app extension by AldAstra Labs that uses machine learning and AI to help users grow their X (formerly Twitter) followers and gain valuable insights about X profiles — an AI-powered helper that grows your audience and interprets X data on your behalf." },
    ],
    modern: {
      eyebrow: "AI & Data Systems",
      subtitle: "A free AI-powered extension that grows your X (Twitter) audience and interprets the platform’s data on your behalf — built by AldAstra Labs.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T13-46-11.509Z-tweetpeek-main.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/5805db1319fe1593ce554fc4d7a43fa6fa5949e7-2066x1080.png",
      heroCaption: "TweetPeek — an AI-powered helper that grows your X audience and interprets the data on your behalf.",
      partner: {
        name: "AldAstra Labs",
        initials: "AL",
        desc: "Sogody’s R&D lab, spun off as its own company — the team behind Replix.",
        url: "https://aldastra.com/",
      },
      links: [
        { label: "Visit site", url: "https://www.tweetpeek.ai" },
      ],
      problem: {
        eyebrow: "The product",
        heading: "An AI helper for X",
        body: "AldAstra Labs — Sogody’s R&D lab, now its own company and the team behind Replix — set out to change how we navigate X (formerly Twitter). TweetPeek is a free extension that uses machine learning and AI to help users grow their followers and gain valuable insights about X profiles.",
        stats: [
          { big: "Free extension", small: "Install and go" },
          { big: "ML + AI", small: "Recommendations & analysis" },
          { big: "SmartFollows", small: "Relevant, moderated follows" },
          { big: "AI Peek", small: "Profile sentiment & insights" },
          { big: "Organic growth", small: "Real people, real engagement" },
        ],
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T13-46-43.546Z-tweetpeek-1.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/d6d182243ff38b5f609660bdc2a9be7f99134f56-1520x1078.png",
          caption: "SmartFollows — relevant, moderated follows for steady, organic growth with real people.",
        },
      },
      solution: {
        eyebrow: "How it works",
        heading: "Grow smarter, follow with insight",
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T13-47-35.770Z-tweetpeek-second.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/f939c8bc775926e4e1e8feccbdfec829afd79d91-1520x1080.png",
          caption: "AI Peek — sentiment analysis summarizes a profile so you understand before you follow.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "SmartFollows",
            title: "Follow the right people",
            paras: [
              "SmartFollows uses ML recommendations and filters to suggest X profiles highly relevant to a user’s preferences, interests or keywords — profiles likely to engage and follow back.",
              "It avoids bulk follows, cherry-picking profiles with full user control for steady, organic growth with real people.",
            ],
          },
          {
            label: "Step 2",
            tag: "AI Peek",
            title: "Understand before you follow",
            paras: [
              "AI Peek uses sentiment analysis to summarize a profile’s characteristics — its category, the sentiment of its tweets, engagement likelihood and more — so users make informed follow decisions.",
            ],
          },
          {
            label: "Step 3",
            tag: "Getting started",
            title: "Up and running in minutes",
            paras: [
              "Install the extension and basic sentiments appear immediately; the advanced SmartFollows feature is available as a trial for beta testers, with a license key after the free trial.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "Get started",
        heading: "Peek before you follow",
        checks: [
          "Free browser extension — install and go",
          "Moderated SmartFollows for organic growth",
          "AI Peek sentiment insights on any profile",
          "Trial available for beta testers",
        ],
        closing: "Install TweetPeek and witness the transformation of your X experience — an AI-powered helper that grows your audience and interprets the universe of X data on your behalf.",
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T13-48-34.402Z-tweetpeek-4.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/53ecdbdec198b157e02901b36d9e09f5819bcdf8-1512x1076.png",
          caption: "Getting started with TweetPeek is easy — install the extension and basic sentiments appear immediately.",
        },
      },
    },
  },
  {
    slug: "cro-proof-ab-testing-program-revamps-ozarkes-conversion-rates",
    title: "A/B testing program revamps Ozarke’s conversion rates",
    shortTitle: "Ozarke Conversion Rates",
    category: CATEGORIES.interfaces,
    csBtn: "Ozarke",
    img: "/assets/images/cs-cro-proof-ozarke.webp",
    visitSiteUrl: "https://www.ozarke.com",
    body: [
      { type: "h2", text: "Project Overview" },
      { type: "p", text: "Discover how Sogody transformed Ozarke’s performance with expert A/B testing using Convert and Shopify. By utilizing Convert’s advanced testing capabilities alongside Shopify’s robust e-commerce platform, we fine-tuned Ozarke’s approach, resulting in a more engaging and effective user experience." },
      { type: "p", text: "This approach led to significant gains in customer interaction and conversion rates." },
      { type: "p", text: "Stay with us as we dive deeper into how we addressed Ozarke's conversion rate challenges." },
      { type: "h2", text: "Ozarke Overview" },
      { type: "p", text: "Ozarke is a brand focused on providing high-quality modern lighting and home décor products with the customer in mind. They offer a variety of items, including lighting fixtures, lamps, smart fan chandeliers, dining pieces, furniture, blankets, and throws. Their products feature simple, stylish designs that enhance the look and feel of any home." },
      { type: "p", text: "The brand is known for excellent customer service and offers free shipping on certain orders." },
      { type: "p", text: "They also have a special interior design program for professionals, which gives access to exclusive discounts, free samples, and custom design options." },
      { type: "h2", text: "Ozarke's Growth Struggle" },
      { type: "p", text: "Ozarke faced a significant challenge with low conversion rates, despite having a strong product lineup and excellent customer service. Their main difficulty was developing an effective conversion rate optimization program." },
      { type: "p", text: "This highlighted the need for a comprehensive approach to address UX issues on the site, including confusing navigation and ineffective visuals, ensuring that users have a seamless and engaging experience that can turn high traffic into meaningful sales." },
      { type: "h2", text: "Tracking, integration, and testing strategies" },
      { type: "p", text: "We conducted A/B testing for Ozarke using the combined power of Convert and Shopify to enhance their conversion rates." },
      { type: "p", text: "Shopify’s flexible e-commerce platform allowed us to implement dynamic changes seamlessly, ensuring a smooth user experience. Convert provided the advanced testing tools necessary for in-depth experimentation and data analysis." },
      { type: "p", text: "This integration enabled us to run tests efficiently, track key metrics, and derive actionable insights." },
      { type: "p", text: "In addition to A/B testing, we incorporated analytical research, behavioral analytics, and customer feedback to optimize the user experience and turn high traffic into meaningful sales." },
      { type: "p", text: "One standout experiment compared a menu featuring images to a text-only version. After 35 days of testing, the image-based menu significantly outperformed its counterpart, driving higher engagement and boosting conversion rates." },
      { type: "p", text: "This result underscored the crucial role of visuals in creating a more engaging user experience, demonstrating that customers are more likely to interact with visually appealing elements." },
      { type: "p", text: "We also tackled UX problems on the site so that users could browse without friction, while adding additional modules and features to make the experience more seamless." },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/e81e772fa98c89081680ef7861ce51082dd59740-2240x1328.webp", alt: "Ozarke storefront / case study banner" },
      { type: "h2", text: "The Results" },
      { type: "p", text: "The strategic improvements for Ozarke led to a substantial 6.9% increase in sales and a significant enhancement in the overall user experience." },
      { type: "p", text: "By employing A/B testing with Convert’s advanced testing capabilities and utilizing Shopify's robust e-commerce platform, we carefully refined both the visual design and functional aspects of the site." },
      { type: "p", text: "This created a more engaging and intuitive shopping journey." },
      { type: "p", text: "Precise experimentation and thoughtful UX optimization helped turn high traffic into considerable sales. These efforts not only resolved previous challenges but also provided a solid foundation for ongoing improvements." },
      { type: "p", text: "With these enhancements, Ozarke is now better equipped to thrive in a competitive market, ensuring a refined and compelling experience for its customers." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "An A/B testing program that turned Ozarke’s high traffic into sales — combining Convert and Shopify under Sogody’s CRO/Proof program to refine the UX and lift conversion.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T14-01-10.884Z-ozarke-video-1.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/ed3f4e70f9bc7a4755810f5b4f9178651da7dda8-1920x1080.png",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/e81e772fa98c89081680ef7861ce51082dd59740-2240x1328.webp",
      heroCaption: "Ozarke’s storefront, refined through experimentation under CRO/Proof.",
      partner: {
        name: "Ozarke",
        initials: "OZ",
        desc: "A modern lighting and home-décor brand, built around the customer.",
        url: "https://www.ozarke.com",
      },
      links: [
        { label: "Visit site", url: "https://www.ozarke.com" },
      ],
      problem: {
        eyebrow: "The challenge",
        heading: "High traffic, low conversion",
        body: "Despite a strong product lineup and excellent customer service, Ozarke struggled with low conversion rates and lacked an effective CRO program. Confusing navigation and ineffective visuals meant high traffic wasn’t turning into meaningful sales.",
        stats: [
          { big: "CRO/Proof", small: "Sogody’s experimentation program" },
          { big: "Convert", small: "Advanced A/B testing tools" },
          { big: "Shopify", small: "Flexible e-commerce platform" },
          { big: "35-day test", small: "Image vs text-only menu" },
          { big: "Analytics", small: "Behavioral research & feedback" },
        ],
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T14-01-42.061Z-ozarke-video-2.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/98142e95ce76680c15647e95b2800b0823a5ea13-1738x1080.png",
          caption: "High traffic, low conversion — confusing navigation and ineffective visuals weren’t turning visits into sales.",
        },
      },
      solution: {
        eyebrow: "What we did",
        heading: "Experimentation with Convert and Shopify",
        body: "We ran A/B testing for Ozarke with the combined power of Convert and Shopify — implementing dynamic changes seamlessly, tracking key metrics, and deriving actionable insights, backed by analytical research, behavioral analytics and customer feedback.",
        steps: [
          {
            label: "Step 1",
            tag: "Integration",
            title: "Convert + Shopify, working together",
            paras: [
              "Shopify’s flexible platform let us implement dynamic changes seamlessly, while Convert provided the advanced testing tools for in-depth experimentation and data analysis — so we could run tests efficiently and track the metrics that matter.",
            ],
          },
          {
            label: "Step 2",
            tag: "Experimentation",
            title: "Testing what actually moves users",
            paras: [
              "Beyond A/B testing, we layered in analytical research, behavioral analytics and customer feedback.",
              "One standout 35-day experiment pitted an image-based menu against a text-only version — the image-based menu won decisively, driving higher engagement and conversion, and underscoring the role of visuals in an engaging experience.",
            ],
          },
          {
            label: "Step 3",
            tag: "UX",
            title: "Smoothing the experience",
            paras: [
              "We resolved UX problems across the site so users browse without friction, and added modules and features to make the experience seamless.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "Turning traffic into sales",
        body: "Driven by CRO/Proof, careful experimentation and thoughtful UX optimization refined both the visual design and functionality of the site — for a more engaging, intuitive shopping journey.",
        items: [
          { n: "6.9%", title: "Increase in sales", desc: "A substantial lift in sales from refining the site’s visual design and functionality." },
          { n: "35d", title: "Image menu won the test", desc: "An image-based menu significantly outperformed the text-only version after 35 days, driving higher engagement and conversion." },
          { n: "UX", title: "A more engaging journey", desc: "Resolved navigation and visual issues for a smoother, more intuitive shopping experience." },
        ],
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/e81e772fa98c89081680ef7861ce51082dd59740-2240x1328.webp",
          caption: "Turning traffic into sales — a more engaging, intuitive shopping journey.",
        },
      },
      next: {
        eyebrow: "The impact",
        heading: "A solid foundation for growth",
        checks: [
          "A/B testing with Convert on Shopify",
          "Image-led navigation proven by experiment",
          "Behavioral analytics and customer feedback",
          "UX fixes and new modules for a seamless experience",
        ],
        closing: "Precise experimentation and thoughtful UX optimization show the power of CRO/Proof in turning high traffic into sales — resolving Ozarke’s challenges and laying a solid foundation for ongoing improvement in a competitive market.",
      },
    },
  },
  {
    slug: "aov-increases-through-conversion-rate-optimization",
    title: "AOV increases through Conversion Rate Optimization",
    shortTitle: "AOV via CRO",
    category: CATEGORIES.interfaces,
    csBtn: "Experimentation",
    img: "/assets/images/cs-every-aov.webp",
    visitSiteUrl: "",
    body: [
      { type: "p", text: "A D2C case study of a successful experiment we strategized and delivered for Every. to increase the Average Order Value — combining strategy, UX and experimentation to drive a measurable uplift in KPIs." },
    ],
  },
  {
    slug: "revitalizing-yippy-lingos-ecommerce-sogodys-headless-solution-for-enhanced-performance",
    title: "Revitalizing YippyLingo’s e-commerce: Sogody’s headless solution for enhanced performance",
    shortTitle: "YippyLingo Headless E-commerce",
    category: CATEGORIES.software,
    csBtn: "E-commerce",
    img: "/assets/images/cs-yippylingo.webp",
    visitSiteUrl: "",
    tags: ["Headless", "Front-end development", "PMS", "Custom-built"],
    body: [
      { type: "p", text: "Explore how Sogody created YippyLingo’s e-commerce platform using a custom headless solution that combines creativity and functionality. By building a tailored system with WordPress WooCommerce for e-commerce, GatsbyJS for the front-end, and Sanity CMS for content management, we advanced YippyLingo’s educational mission, ushering them into a new digital era with intuitive design and seamless performance." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "A custom headless e-commerce platform for an educational brand — connecting WooCommerce, GatsbyJS, Sanity CMS, Stripe, Directus, and the mobile app into one seamless customer journey.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T14-03-06.787Z-yippy-video.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/87e298545020c1dc42d179e36fa12632e5a6a5da-1620x1080.png",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/87e298545020c1dc42d179e36fa12632e5a6a5da-1620x1080.png",
      heroCaption: "A custom headless e-commerce platform built to support YippyLingo’s educational kits and digital learning journey.",
      partner: {
        name: "YippyLingo",
        initials: "YL",
        desc: "An educational brand helping parents introduce English learning at home through engaging activities for children aged 4 to 8.",
        url: "",
      },
      problem: {
        eyebrow: "The challenge",
        heading: "A commerce platform built around educational kits",
        body: "YippyLingo needed a new e-commerce platform built from scratch to manage educational kits, support customization, and connect the buying journey with their mobile app and CRM. The solution had to be flexible, scalable, and easy for the team to manage while giving customers a smooth path from purchase to app access.",
        stats: [
          { big: "Headless", small: "Decoupled backend and frontend" },
          { big: "WooCommerce", small: "E-commerce backend" },
          { big: "GatsbyJS", small: "Fast front-end experience" },
          { big: "Sanity CMS", small: "Flexible content management" },
          { big: "Directus", small: "CRM and app integration" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "A tailored headless e-commerce journey",
        body: "Sogody built a custom headless commerce system that gave YippyLingo the flexibility to manage educational kits, support product customization, process payments securely, and automatically connect customers with the digital learning experience after purchase.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/266eeb614713ae02d4a089e6ca285b75ad0e2e30-2240x1328.webp",
          caption: "A tailored architecture combining commerce, content, payment, CRM, and app access.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Commerce backend",
            title: "Custom product management with WooCommerce",
            paras: [
              "We used WordPress WooCommerce as the e-commerce backend, giving YippyLingo the flexibility to manage educational kits, product options, and purchase flows.",
              "This provided the structure needed for a custom product management system while keeping the customer-facing experience fully decoupled.",
            ],
          },
          {
            label: "Step 2",
            tag: "Frontend",
            title: "A fast, scalable GatsbyJS experience",
            paras: [
              "We built the front end with GatsbyJS to create a fast, scalable, and responsive customer experience.",
              "The headless approach allowed the frontend to evolve independently from the backend while keeping the full journey cohesive.",
            ],
          },
          {
            label: "Step 3",
            tag: "Content",
            title: "Sanity CMS for flexible content control",
            paras: [
              "Sanity CMS gave the YippyLingo team full control over content updates and front-end presentation.",
              "This made the platform easier to manage internally and reduced dependency on development support for everyday content changes.",
            ],
          },
          {
            label: "Step 4",
            tag: "Payments",
            title: "Stripe for secure transactions",
            paras: [
              "Stripe was integrated to support secure and reliable payment processing.",
              "The system supports both one-time purchases and subscriptions, giving customers a smooth and trustworthy checkout experience.",
            ],
          },
          {
            label: "Step 5",
            tag: "Middleware",
            title: "Connecting commerce, CRM, and app access",
            paras: [
              "We developed middleware to connect the headless e-commerce platform with YippyLingo’s mobile app and Directus CRM.",
              "This enabled real-time updates and automatic app access after purchase, creating a seamless transition from buying the kit to using the digital product.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "A scalable platform for digital learning commerce",
        body: "The new headless e-commerce platform improved the customer experience, simplified educational kit management, streamlined content updates, and connected the full journey from checkout to mobile app access.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/278bdf9222b228e905886da627ece072b11fd791-2240x1328.webp",
          caption: "A faster, more flexible platform supporting YippyLingo’s mission to make English learning more accessible and enjoyable.",
        },
        items: [
          { n: "01", title: "Improved customer experience", desc: "A fast, responsive front end made the buying journey clearer, smoother, and easier to use." },
          { n: "02", title: "Simplified kit management", desc: "WooCommerce and Sanity gave the team better control over product setup, educational kits, and content updates." },
          { n: "03", title: "Connected product journey", desc: "Middleware linked the e-commerce platform with the mobile app and Directus CRM, enabling real-time updates and automatic app access." },
          { n: "04", title: "Secure payment flow", desc: "Stripe streamlined one-time purchases and subscriptions, improving reliability and conversion." },
        ],
      },
      next: {
        eyebrow: "The impact",
        heading: "A flexible foundation for growth",
        checks: [
          "Custom headless e-commerce architecture",
          "WordPress WooCommerce backend for kit management",
          "GatsbyJS front end for speed and scalability",
          "Sanity CMS for flexible content management",
          "Stripe payment processing",
          "Middleware connecting mobile app access and Directus CRM",
          "Scalable architecture where backend and frontend can evolve independently",
        ],
        closing: "The result is a more effective and scalable platform that supports YippyLingo’s educational mission while giving the team the operational flexibility to keep growing.",
      },
    },
  },
  {
    slug: "krispr-sustainable-e-commerce-solution",
    title: "Farm-fresh and click-to-door: KRISPR’s sustainable e-commerce solution",
    shortTitle: "KRISPR E-commerce",
    category: CATEGORIES.interfaces,
    csBtn: "KRISPR",
    img: "/assets/images/cs-krispr.webp",
    visitSiteUrl: "https://shopkrispr.com",
    body: [
      { type: "p", text: "KRISPR, a UAE-based Ag-Tech company growing pesticide-free, vertically-grown produce delivered within hours of harvest, partnered with Sogody to build a seamless, engaging Shopify e-commerce platform with flexible subscriptions, precise delivery controls and full account management." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "A personalized, subscription-led Shopify store for a UAE Ag-Tech brand — built to change food commerce from production to consumption.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T14-12-27.377Z-krispr-1.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/ca5c41c90ad02d74c450ee1ee2511c46d8ff7007-1920x1080.png",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/bab254fb65733cb5187ed1f78f9052eeb7e70d26-2240x1328.webp",
      heroCaption: "KRISPR’s storefront — farm-fresh produce, click-to-door.",
      partner: {
        name: "KRISPR",
        initials: "KR",
        desc: "A UAE-based Ag-Tech company growing pesticide-free, vertically-grown produce.",
        url: "https://shopkrispr.com",
      },
      problem: {
        eyebrow: "The brief",
        heading: "Changing food commerce, end to end",
        body: "KRISPR set out to change food commerce from production to consumption. They partnered with Sogody to build an e-commerce platform that matches their vision with a seamless, engaging shopping experience.",
        stats: [
          { big: "Shopify", small: "Personalized storefront" },
          { big: "Subscriptions", small: "1-week, 2-week or monthly" },
          { big: "15% off", small: "Subscribe & Save" },
          { big: "Maps API", small: "Pin location & delivery date" },
          { big: "Social login", small: "Google & Apple" },
        ],
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T14-12-46.385Z-krispr-2.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/a7539e55345bbe59e780c6e0a686d70363537679-1440x1080.png",
          caption: "A seamless, engaging shopping experience — from production to consumption.",
        },
      },
      solution: {
        eyebrow: "What we built",
        heading: "A personalized, subscription-led store",
        body: "We built a brand-new Shopify platform — starting from a template, then thoroughly personalizing the UI and features to KRISPR’s identity — with a flexible subscription system, precise delivery controls and full account management at its core.",
        steps: [
          {
            label: "Step 1",
            tag: "Subscriptions",
            title: "Flexible plans with Subscribe & Save",
            paras: [
              "Customers choose a one-time purchase or a 1-week, 2-week or monthly subscription that automatically applies a 15% discount, with a ‘Subscribe & Save 15%’ button even on non-subscription products.",
              "Cart rules enforce a 30 AED minimum on subscribed items, with clear in-cart messaging when the threshold isn’t met.",
            ],
          },
          {
            label: "Step 2",
            tag: "Delivery",
            title: "Pin your location and date",
            paras: [
              "A location-pin and custom delivery-date feature — with the Google Maps API integrated into the address section — lets customers choose exactly where and when their order arrives, for accurate, timely deliveries.",
            ],
          },
          {
            label: "Step 3",
            tag: "Accounts",
            title: "Effortless account management",
            paras: [
              "Customers manage their information, order history and preferences, with Google and Apple social logins streamlining access — full control over a personalized shopping experience.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The experience",
        heading: "Recipes that match the cart",
        body: "To make exploring culinary ideas effortless, we added a ‘Goes Well With’ section under the Subscribe & Save button on each product page — surfacing only the recipes that use that specific product, so customers find relevant ideas without sifting through unrelated options.",
        items: [
          { n: "01", title: "Goes Well With", desc: "Each product page shows recipes that use that exact product, curated to the customer’s interest." },
          { n: "02", title: "Subscribe & Save", desc: "Flexible subscriptions with an automatic 15% discount and clear cart rules build loyalty and savings." },
          { n: "03", title: "Precise delivery", desc: "Map-pinned locations and custom delivery dates ensure orders arrive when and where it suits the customer." },
        ],
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/bab254fb65733cb5187ed1f78f9052eeb7e70d26-2240x1328.webp",
          caption: "Personalized recipe recommendations — a ‘Goes Well With’ section surfaces recipes that use each product.",
        },
      },
      next: {
        eyebrow: "The impact",
        heading: "A seamless, end-to-end experience",
        checks: [
          "Personalized Shopify storefront for KRISPR’s identity",
          "Subscriptions with Subscribe & Save 15%",
          "Google Maps delivery location and date controls",
          "Social logins and full account management",
        ],
        closing: "A personalized approach that gives customers full control over their shopping experience — fostering loyalty and trust toward a brand revisioning the future of food.",
      },
    },
  },
  {
    slug: "susam-our-open-source-project",
    title: "SUSAM - Our open-source project",
    shortTitle: "SUSAM",
    category: CATEGORIES.software,
    csBtn: "SUSAM",
    img: "/assets/images/cs-susam.webp",
    visitSiteUrl: "https://susam.app",
    body: [
      { type: "p", text: "SUSAM — Sanity Uploader with Shopify Asset Management — is our open-source tool that integrates with Sanity CMS for your media content and assets, reducing cost and providing consistency for media hosting in a headless Shopify store without changing your workflow." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "An open-source tool that lets headless-Shopify brands manage media and assets from a single source — their Sanity account.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/e4c205a63a514db387535ad06b40c6f79f861704-1920x952.webp",
      heroCaption: "SUSAM — Sanity Uploader with Shopify Asset Management.",
      links: [
        { label: "Visit SUSAM", url: "https://susam.app" },
      ],
      problem: {
        eyebrow: "The problem",
        heading: "Headless Shopify, scattered media",
        body: "Brands constantly hit challenges using external content management systems with their headless Shopify store. To give every brand the right tools, we created SUSAM — Sanity Uploader with Shopify Asset Management.",
        stats: [
          { big: "Open source", small: "Built by Sogody" },
          { big: "Sanity + Shopify", small: "Single-source assets" },
          { big: "Lower cost", small: "Consistent media hosting" },
          { big: "No workflow change", small: "Install and go" },
          { big: "susam.app", small: "Try it today" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "Manage assets from one source",
        body: "SUSAM integrates with Sanity CMS for your media content and assets — reducing cost and providing consistency for media hosting without changing your workflow. Install it and you can fully use Shopify content distribution from your Sanity environment.",
        steps: [
          {
            label: "Step 1",
            tag: "Integration",
            title: "Sanity meets Shopify",
            paras: [
              "SUSAM integrates through Shopify with your headless store for single-asset management, letting users manage their content from a single source — their Sanity account.",
            ],
          },
          {
            label: "Step 2",
            tag: "UX",
            title: "Styled to feel native",
            paras: [
              "We styled the ShopifyFile URLs to match Sanity’s outstanding user experience, so they’re easily recognizable within your environment.",
            ],
          },
          {
            label: "Step 3",
            tag: "Flexibility",
            title: "Less overhead, more focus",
            paras: [
              "You get enhanced asset management and optimum flexibility that cuts costs and eliminates unnecessary overhead — so you can focus on creating amazing web experiences for your clients.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "What’s next",
        heading: "An extensive upgrade in the works",
        checks: [
          "Single-source asset management via Sanity",
          "Sanity-styled, recognizable Shopify URLs",
          "Lower media-hosting cost and consistency",
          "No major change to your existing workflow",
        ],
        closing: "Fantastic feedback from store owners who used SUSAM has inspired an extensive upgrade with multiple new features in the works. Stay tuned!",
      },
    },
  },
  {
    slug: "data-layering-for-thrasio",
    title: "Data Layer design and implementation for Amazon Aggregator Thrasio",
    shortTitle: "Thrasio Data Layer",
    category: CATEGORIES.software,
    csBtn: "Thrasio / AngryOrange",
    img: "/assets/images/cs-thrasio-data-layer.webp",
    visitSiteUrl: "https://www.thrasio.com",
    body: [
      { type: "p", text: "Thrasio, one of the largest, fastest-growing Amazon brand aggregators, teamed up with Sogody on the data layer for AngryOrange — designing the data layer, identifying events, and implementing an event-driven layer that keeps client-side data consistent across all third-party tools." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "An event-driven data layer for AngryOrange — turning business problems into data problems for consistent analytics, ads and social tracking.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/611174f44436218d8d38f8e67473d89c769fa8f7-2297x1143.webp",
      heroCaption: "A single data layer flowing into Google Tag Manager, analytics, ads and social platforms.",
      partner: {
        name: "Thrasio",
        initials: "TH",
        desc: "One of the largest, fastest-growing Amazon brand aggregators.",
        url: "https://www.thrasio.com",
      },
      problem: {
        eyebrow: "The brief",
        heading: "Turn every business problem into a data problem",
        body: "Thrasio uses data science to understand why products earn great ratings and rankings. They teamed up with Sogody on the data layer for AngryOrange: our mission was to turn any business problem into a data problem — designing the data layer, identifying events, and implementing it.",
        stats: [
          { big: "Event-driven", small: "Pushed as they happen" },
          { big: "Single source", small: "Consistent third-party data" },
          { big: "GTM-ready", small: "Maps to analytics tools" },
          { big: "Custom events", small: "Out-of-stock & more" },
          { big: "Shopify", small: "Intercepted & mapped" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "A flexible, event-driven data layer",
        body: "We designed and built a flexible data layer that gives the client granular control over their data — a single point for collecting events across the visitor journey, so data flowing into third-party systems stays consistent.",
        steps: [
          {
            label: "Step 1",
            tag: "Design",
            title: "Event-driven by design",
            paras: [
              "We opted for an event-driven data layer where events push as they happen. Each carries standard attributes — Event, Event Category and Event Label — that map directly into analytics tools like Google Analytics, enhanced with custom attributes (product, quantity) for complex scenarios.",
            ],
          },
          {
            label: "Step 2",
            tag: "Identification",
            title: "Mapping every interaction",
            paras: [
              "We examined each page in detail to cover all user interactions — navigation, social redirects, pop-up modals, filled forms and more — plus custom events specific to the client, like a trigger when a user views an out-of-stock product.",
            ],
          },
          {
            label: "Step 3",
            tag: "Implementation",
            title: "Consistent client-side data",
            paras: [
              "We enhanced clickable elements with data attributes and used custom client-side scripts to populate the data layer as events occur — including intercepting Shopify events and mapping them to our structure — for data consistency across all third-party tools.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "The outcome",
        heading: "Consistent data across every tool",
        checks: [
          "Event-driven data layer with granular control",
          "Standard attributes mapped to Google Analytics",
          "Custom events for client-specific needs",
          "Shopify events intercepted and mapped",
        ],
        closing: "The end result is data consistency across all third-party tools — a single, reliable source of truth for AngryOrange’s analytics, ads and social platforms.",
      },
    },
  },
  {
    slug: "leveraging-managed-services-for-maximum-growth-thrasio-and-sogodys-partnership",
    title: "Leveraging managed services for maximum growth: Thrasio and Sogody’s partnership",
    shortTitle: "Thrasio Managed Services Partnership",
    category: CATEGORIES.interfaces,
    csBtn: "Thrasio",
    img: "/assets/images/cs-thrasio-managed-services.webp",
    visitSiteUrl: "https://www.thrasio.com",
    tags: ["Managed services", "Experimentation", "Development", "Optimization"],
    body: [
      { type: "p", text: "As a managed services provider (MSP), Sogody offers comprehensive software management to alleviate the technical burden of our clients, letting them focus on running their business. This case study dives into our partnership with Thrasio, a leading Amazon aggregator, and the tailored managed services model we built around their brands." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "A tailored managed services partnership with a leading Amazon aggregator — spanning development, experimentation, optimization, analytics, QA, and R&D across Thrasio’s many brands.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T14-11-27.419Z-thrasio-1.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/bf497e139099d91f2f4bfc5385f578c882440c04-1440x1080.png",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/bf497e139099d91f2f4bfc5385f578c882440c04-1440x1080.png",
      heroCaption: "Sogody as Thrasio’s managed services partner — an extension of their core team.",
      partner: {
        name: "Thrasio",
        initials: "TH",
        desc: "Founded in 2018, Thrasio is a leading Amazon aggregator that acquires and scales fast-selling brands — grown to over $1 billion in revenue across more than 200 brands.",
        url: "https://www.thrasio.com",
      },
      links: [
        { label: "Visit site", url: "https://www.thrasio.com" },
      ],
      problem: {
        eyebrow: "The challenge",
        heading: "Scaling 200+ brands without the technical burden",
        body: "Thrasio operates as an umbrella company with many separate brands, using data science to acquire and scale successful Amazon storefronts. To keep growing, they needed a technical partner who could take on the day-to-day software management across every brand — flexibly, reliably, and at scale.",
        stats: [
          { big: "2018", small: "Thrasio founded" },
          { big: "$1B+", small: "Revenue across 200+ brands" },
          { big: "Aug 2021", small: "Partnership began" },
          { big: "5 areas", small: "Dev, optimization, insights, QA, R&D" },
          { big: "MSP", small: "Sogody as managed services provider" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "A tailored managed services model",
        body: "Thrasio and Sogody established a partnership in August 2021 to provide experimentation services and Shopify development. Since then, the scope has grown well beyond those initial areas into a full managed services package supporting Thrasio’s daily operations.",
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T14-11-43.761Z-thrasio-2.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/b39c4a200f1228fc493b4955c9334a82766feda1-1620x1080.png",
          caption: "A managed services model that flexes across every brand under the Thrasio umbrella.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Service package",
            title: "A growing scope of managed services",
            paras: [
              "Thrasio’s package spans development (landing pages, Shopify features, scripts, apps, and third-party integrations), experience & optimization (A/B tests with Optimizely using Sogody’s custom Experimentation Framework, plus tracking and report analysis), and insights & analytics (opportunity decks, GTM implementation, dashboards, and site audits).",
              "It also includes maintenance & QA, plus research & development — continuously identifying growth and cost-reduction opportunities, proposing tests from our Test Bank, and offering Shopify app development and headless versions of stores.",
            ],
          },
          {
            label: "Step 2",
            tag: "Model",
            title: "Supporting every brand under one umbrella",
            paras: [
              "We support each Thrasio brand individually, dividing our workload accordingly and working closely with their team to plan weekly sprints, set priorities, assess requirements, and estimate tasks.",
              "The managed services model lets team members take on work across areas of expertise and brands, while a project manager oversees the workflow and serves as the central point of contact.",
            ],
          },
          {
            label: "Step 3",
            tag: "Partnership",
            title: "An extension of Thrasio’s core team",
            paras: [
              "By working closely with their team and providing expertise and reliability, we extended Thrasio’s core team and strengthened the overall team dynamic.",
              "The partnership enabled flexible technical solutions, data-informed decisions, and knowledge retention — client-specific information is consistently preserved and passed on within the team.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "The impact of our collaboration",
        body: "Our partnership has allowed Thrasio to benefit from the skills, expertise, and resources of our team, enabling the brand to achieve its goals and drive success across its portfolio.",
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T14-12-02.845Z-thrasio-3.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/740b7f6100673a52a4da5145b0a90da9ddc7acf8-1920x1080.png",
          caption: "A trusted technical partnership that helps Thrasio stay ahead of the competition.",
        },
        items: [
          { n: "01", title: "Extended core team", desc: "Trust and reliability built over time turned Sogody into a true extension of Thrasio’s core team." },
          { n: "02", title: "Flexible technical solutions", desc: "Flexibility in ideation and data-informed decisions kept Thrasio ahead of industry developments." },
          { n: "03", title: "Knowledge retention", desc: "Client-specific knowledge is consistently preserved and shared, ensuring a high level of service." },
        ],
      },
      next: {
        eyebrow: "The impact",
        heading: "A partnership built for growth",
        checks: [
          "Sogody as Thrasio’s managed services provider",
          "Development, experimentation, and optimization across brands",
          "A/B testing with Optimizely and a custom Experimentation Framework",
          "Insights, analytics, maintenance, QA, and R&D",
          "Per-brand support under one umbrella with a dedicated PM",
          "Knowledge retention and an extended core team",
        ],
        closing: "Through a tailored managed services model, Sogody helped Thrasio reduce its technical burden, make data-informed decisions, and keep scaling its portfolio of brands.",
      },
    },
  },
  {
    slug: "a-digital-transformation-of-groove-pillow-e-commerce",
    title: "A digital transformation of Groove Pillow’s e-commerce",
    shortTitle: "Groove Pillow E-commerce",
    category: CATEGORIES.interfaces,
    csBtn: "Groove Pillow",
    img: "/assets/images/cs-groove-pillow.webp",
    visitSiteUrl: "https://www.groovepillows.co.uk",
    body: [
      { type: "p", text: "Groove Pillow partnered with Spell & Sell, Sogody’s brand extension, to transform their headless e-commerce — optimizing the Netlify CI/CD pipeline and running a US + UK experimentation program that lifted conversion across the homepage and product pages." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "A US + UK experimentation program that turned Groove Pillow’s headless store into a faster, more personalized shopping journey.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T14-06-08.819Z-groove-video-1.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/64973274db329c4c26935413305b9914a218b83d-1440x1080.png",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/84452d7a629951b6135d5812ac510e0c803a0d43-2232x1320.webp",
      heroCaption: "Groove Pillow’s e-commerce — refined through experimentation.",
      partner: {
        name: "Groove Pillow",
        initials: "GP",
        desc: "Revolutionizing sleep with the Groove® Pillow — 30,000+ converts.",
        url: "https://www.groovepillows.co.uk",
      },
      problem: {
        eyebrow: "The brief",
        heading: "A personalized place to sleep better",
        body: "Groove Pillow — founded in 2021, with 30,000+ people already switched from feather pillows to the Groove® Pillow — wanted an e-commerce platform as personalized as their product: a digital shopping environment that tailors itself to each visitor. They partnered with Spell & Sell, Sogody’s brand extension.",
        stats: [
          { big: "30,000+", small: "Switched to Groove® Pillow" },
          { big: "Headless", small: "On Netlify (Agency Partner)" },
          { big: "US + UK", small: "Multimarket strategy" },
          { big: "100+ tests", small: "Google Optimize & VWO" },
          { big: "Sanity Connect", small: "Shopify sync" },
        ],
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T14-06-42.725Z-groove-video-2.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/e418bde1b61ae2fa868c73328b858b41f019d703-1738x1080.png",
          caption: "Optimization across borders — a multimarket strategy across the US and UK.",
        },
      },
      solution: {
        eyebrow: "What we built",
        heading: "Experimentation across two markets",
        body: "Groove Pillow already ran a headless architecture, so as a Registered Netlify Agency Partner we optimized the CI/CD pipeline, cut deployment bottlenecks, and ran a multimarket experimentation strategy across the US and UK.",
        steps: [
          {
            label: "Step 1",
            tag: "Pipeline",
            title: "Optimizing the headless setup",
            paras: [
              "As a Registered Netlify Agency Partner, we greatly optimized the CI/CD pipeline with best practices and reduced deployment bottlenecks, enabling the developer teams to scale more efficiently.",
            ],
          },
          {
            label: "Step 2",
            tag: "UK testing",
            title: "40+ A/B tests in the UK",
            paras: [
              "We ran around 40 A/B tests on Google Optimize (plus 5 on VWO). A homepage redesign won with a 9.47% conversion lift, and a revamped PDP — richer information and well-placed CTAs — drove a 5.30% lift.",
            ],
          },
          {
            label: "Step 3",
            tag: "US testing",
            title: "59 A/B tests in the US",
            paras: [
              "We continued the optimization commitment with 59 A/B tests on Google Optimize, fine-tuning the experience for the US audience.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "A faster, more personal store",
        body: "We extended the work into a comprehensive set of enhancements — analytics, performance, SEO, server-side tracking and a review-platform migration — for a vastly improved, more personalized shopping journey.",
        items: [
          { n: "9.47%", title: "Homepage conversion lift", desc: "A redesigned homepage — new and modified modules transforming the UX/UI — won the A/B test." },
          { n: "5.30%", title: "PDP conversion lift", desc: "A more informative, engaging product page with well-placed CTAs simplified the buying journey." },
          { n: "100+", title: "A/B tests run", desc: "Around 40 UK and 59 US tests on Google Optimize, plus 5 on VWO, fine-tuned the experience." },
        ],
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/84452d7a629951b6135d5812ac510e0c803a0d43-2232x1320.webp",
          caption: "A faster, more personalized shopping journey.",
        },
      },
      next: {
        eyebrow: "And more",
        heading: "Enhancements across the stack",
        checks: [
          "Tracking & analytics for data-driven decisions",
          "Sanity Connect for seamless Shopify sync",
          "Speed & performance cleanup (scripts, fonts, errors)",
          "SEO with canonical and hreflang tags",
          "Server-side tracking for accurate data",
          "Shopify Scripts (Ruby) for client discounts",
          "Migration from Stamped.io to Okendo Reviews",
        ],
        closing: "Thanks to the redesign of Groove Pillow’s UI and overall UX, the company has seen a remarkable transformation in customer engagement and business growth — a vastly improved, more personalized shopping journey.",
      },
    },
  },
  {
    slug: "sogodys-transformative-impact-on-brands-through-ux-and-design",
    title: "Sogody’s transformative impact on brands through UX & Design",
    shortTitle: "UX & Design Impact",
    category: CATEGORIES.interfaces,
    csBtn: "UX & Design",
    img: "/assets/images/cs-samsung-ux-design.webp",
    visitSiteUrl: "https://www.cheil.com",
    body: [
      { type: "p", text: "We combine research, strategy and creativity to differentiate brands and improve their conversion rates, customer satisfaction and growth. This showcase highlights our UX & design work for Every, Old Gold Racing, Ocean Bottle and Spell & Sell." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "How research-led UX & design differentiated brands and improved conversion, satisfaction and growth — across Every, Old Gold Racing, Ocean Bottle and Spell & Sell.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/e001c0bfc8ef5ad46f4c307f7131b8759f64e630-1920x952.webp",
      heroCaption: "Selected UX & design work across four brands.",
      problem: {
        eyebrow: "Why it matters",
        heading: "UX & design that drives growth",
        body: "As businesses compete in an evolving digital landscape, UX and design can’t be understated. We combine research, strategy and creativity to differentiate brands and improve their conversion rates, customer satisfaction and growth. Here are a few of those stories.",
        stats: [
          { big: "Every", small: "B2B store & design system" },
          { big: "Old Gold Racing", small: "UX revamp & personalization" },
          { big: "Ocean Bottle", small: "A/B testing & visual design" },
          { big: "Spell & Sell", small: "Branding & website" },
          { big: "Research-led", small: "Strategy + creativity" },
        ],
      },
      solution: {
        eyebrow: "Selected work",
        heading: "Four brands, one approach",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/d49342588f614b75af6d3521e8c3400418b93987-1920x952.webp",
          caption: "Old Gold Racing — a revamped UX with cart and gift personalization.",
        },
        steps: [
          {
            label: "Every",
            tag: "B2B & design system",
            title: "B2B expansion store",
            paras: [
              "We designed Every’s B2B expansion store, added a subscription feature for custom subscription packages, and created a design system to be used across teams.",
            ],
          },
          {
            label: "Old Gold Racing",
            tag: "UX revamp",
            title: "A revamped experience",
            paras: [
              "We revamped the UX/UI and introduced cart and gift personalization so customers could customize their purchasing experience, and redesigned the dashboard to be more intuitive.",
            ],
          },
          {
            label: "Ocean Bottle",
            tag: "Testing & visual design",
            title: "Testing and visual design",
            paras: [
              "We designed A/B and multivariate tests and worked on the UI and visual design — new PDP components, new sections and pages — making it easy for customers to find and buy.",
            ],
          },
          {
            label: "Spell & Sell",
            tag: "Branding & website",
            title: "Branding and website",
            paras: [
              "We designed Spell & Sell’s branding and visual identity, then designed a website built around a UX that encapsulates the services it provides.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The impact",
        heading: "Measurable brand growth",
        body: "Across these engagements, our UX & design work differentiated brands and improved conversion, satisfaction and growth.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/34a52e3719a3d386f8b00bc93eb5434036885c1e-1920x952.webp",
          caption: "Ocean Bottle — new PDP components and visual design.",
        },
        items: [
          { n: "UX", title: "Research-led design", desc: "Combining research, strategy and creativity to differentiate each brand." },
          { n: "CRO", title: "Higher conversion", desc: "Improved conversion rates through testing and thoughtful UX." },
          { n: "Brand", title: "Identity & systems", desc: "Branding, design systems and websites built to scale." },
        ],
      },
      next: {
        eyebrow: "The takeaway",
        heading: "Invest in UX & design",
        checks: [
          "Research, strategy and creativity combined",
          "Design systems that scale across teams",
          "Experimentation and visual design",
          "Brand identity and website design",
        ],
        closing: "Across these brands, our UX & design work improved conversion rates, customer satisfaction and growth — a demonstration of the power of investing in UX & design to drive brand success.",
      },
    },
  },
  {
    slug: "say-less-to-say-more-with-our-replix-ai",
    title: "Say less to say more with our Replix AI",
    shortTitle: "Replix AI",
    category: CATEGORIES.ai,
    csBtn: "Replix AI",
    img: "/assets/images/cs-replix.webp",
    visitSiteUrl: "https://www.replix.ai",
    body: [
      { type: "p", text: "Replix AI is a free browser extension that uses GPT-3 to generate high-quality content for professional and social use in seconds — with AI-powered sentiment analysis and a privacy-first design that stores none of the information used to generate prompts." },
    ],
    modern: {
      eyebrow: "AI & Data Systems",
      subtitle: "A free AI-powered extension that helps you say more by saying less — GPT-3 content generation with sentiment analysis, right where you write.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/ec8155f80f61ee8e93076b1becca447a18abc201-1280x800.webp",
      heroCaption: "Replix AI — effortless content creation in Gmail, LinkedIn, X and more.",
      links: [
        { label: "Visit site", url: "https://www.replix.ai" },
      ],
      problem: {
        eyebrow: "The product",
        heading: "Say more by saying less",
        body: "Coming up with the perfect words for emails or social posts is a struggle. Replix AI is a content-creation tool that uses GPT-3 to generate high-quality content for professional and social use in seconds — helping business owners and individuals communicate with less effort.",
        stats: [
          { big: "GPT-3", small: "High-quality content in seconds" },
          { big: "Sentiment", small: "AI emotional touch" },
          { big: "Private", small: "No prompt data stored" },
          { big: "Free", small: "Browser extension" },
          { big: "Gmail, X…", small: "LinkedIn, Trello, Jira & more" },
        ],
      },
      solution: {
        eyebrow: "What it does",
        heading: "Effortless content, everywhere you write",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/bc63d07baf3fc5d863f9145fc06de3a856f02694-1280x720.gif",
          caption: "Write an email or reply in seconds with Replix AI.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Generate",
            title: "Beat the blank screen",
            paras: [
              "Replix AI generates content that engages your audience and makes a lasting impression — no more staring at a blank screen searching for the right words.",
            ],
          },
          {
            label: "Step 2",
            tag: "Sentiment",
            title: "Add an emotional touch",
            paras: [
              "AI-powered sentiment analysis lets you add emotion to your responses, so your audience hangs on every word — write an email or reply in seconds.",
            ],
          },
          {
            label: "Step 3",
            tag: "Privacy",
            title: "Private by design",
            paras: [
              "Replix takes privacy seriously and doesn’t store any of the information used to generate prompts — your data stays safe and secure.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "Get started",
        heading: "Install the free extension",
        checks: [
          "Free extension — Gmail, LinkedIn, X, Trello, Jira & more",
          "GPT-3-powered content in seconds",
          "Sentiment analysis for an emotional touch",
          "No prompt data stored — private by design",
        ],
        closing: "Install the free extension today and experience AI-generated content curation and engagement — say goodbye to writer’s block and hello to effortless content creation.",
      },
    },
  },
  {
    slug: "simplifying-samsung-s-cross-market-ab-experiences",
    title: "Simplifying Samsung’s cross-market A/B experiences",
    shortTitle: "Samsung cross-market A/B",
    category: CATEGORIES.software,
    csBtn: "Samsung",
    img: "/assets/images/cs-samsung-cross-market-ab.webp",
    visitSiteUrl: "https://www.cheil.com",
    body: [
      { type: "p", text: "In only three months, seven Samsung markets experienced a notable growth in incremental revenue. Some markets even reached a 119% increase and at times peaked up to 1 million euros in revenue uplift." },
      { type: "p", text: "After six months, the A/B experiences that our team developed had already exceeded all projections by nearly 29%. One can’t deny the fact that these results are due to the tireless work of multiple teams across three companies. However, the sheer amount of experiments delivered at such a fast pace was undoubtedly our best practices and years of experience coming into play. And today we are excited to explain why." },
      { type: "h2", text: "How does this work?" },
      { type: "p", text: "A/B testing is the action of comparing two web page versions to conclude which one performs better at its designated goal, be it reminding customers what they’ve forgotten in their cart or simply providing better payment information for certain products. The possibilities are endless." },
      { type: "p", text: "In e-commerce, performance is usually measured by, but not limited to, order purchases or revenue uplift as seen in some of the results we shared in the previous section." },
      { type: "p", text: "During this project, we developed A/B experiments which performed with astounding results across different Samsung markets and audiences. The reasons behind this: great ideas and immaculate implementation." },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/1f330b0044a8a7b7e36b75c4bc4d5ccfe170bf60-3117x1551.webp", alt: "Samsung cross-market A/B experience laptop mockups" },
      { type: "h2", text: "Cutting-edge meets platform compatibility" },
      { type: "p", text: "Our development team delivered 77 experiments in a six-month period. At some point, there were very few pages on Samsung that were not running at least one of the experiments we had built. It wasn’t easy to explain the means of making this feasible and error-proof; this remains a challenge still." },
      { type: "p", text: "However, it was very clear to us, there’s a method to madness. We’ve developed a one-of-a-kind approach to building custom, reusable and platform-independent experiments. This approach, and all best practices, are embodied in our Experiment Framework which along with years of experience building experiments made this delivery pace achievable. This framework enabled our team to focus only on developing what was absolutely necessary and worry less about cross-platform or cross-market compatibility." },
      { type: "p", text: "These experiences were deployed across markets of Germany, France, Italy, Belgium, Netherlands, Spain, and Poland on all browsing devices and platforms. All of them were built using our Experiment Framework." },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/f5ed52749bc4c0f057633b4d8eff4967147691e9-3117x1551.webp", alt: "Samsung tablet product comparison experience" },
      { type: "h2", text: "Reusability at its finest" },
      { type: "p", text: "True inventions are not often and almost always built upon some previous knowledge. We have embedded this principle into the way experiments are built and deployed. All experiments are analyzed through the eye of reusability so that we avoid building anything twice and invest our time and effort only on what is absolutely necessary. And this was precisely one of the key ingredients that made developing experiences quickly during this project a smooth and seamless process." },
      { type: "p", text: "Component-based development is not a new concept, nonetheless, it can be new when it’s not utilized properly. Avoiding blocks and introducing reusable, configurable, and responsive components have made all the difference. We now are able to understand, reuse, and build experiments better than ever before." },
      { type: "p", text: "Important to note that the obstacles we came across during this very fast-paced project gave us even more ideas and a newfound initiative to enhance our framework to a new level of utility." },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/fa933d6da8db7b6e5f4a962adecb0518dc9292ac-3117x1551.webp", alt: "Samsung Galaxy Fold 2 promotional experience on TV screen" },
      { type: "h2", text: "Learning through challenges" },
      { type: "p", text: "Apart from the projected outcomes during this project, the most invaluable characteristic of its entirety was learning by overcoming challenges, and this phenomenon is ubiquitous throughout all of our work." },
      { type: "p", text: "In the last couple of months, we were delivering twice as many experiments as we did in the beginning; cross-market and cross-platform experiments have now become the new norm when it comes to A/B development and the time required for deploying an idea across different pages, markets or sites has decreased significantly." },
      { type: "p", text: "Alongside these improvements, our repertoire of A/B experiences has never stopped growing and it's proving more useful every day. Might happen that building experiences from scratch will be required continuously less and we’ll resort to reusing and reconfiguring previous work instead." },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/0b6983851f827182fefe8208e1f5645428a2f1fd-3117x1551.webp", alt: "Samsung mobile cart / product recommendation experience" },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "Seven Samsung markets, 77 experiments in six months — delivered fast and error-proof on a reusable, platform-independent Experiment Framework.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/1f330b0044a8a7b7e36b75c4bc4d5ccfe170bf60-3117x1551.webp",
      heroCaption: "Cross-market A/B experiences delivered across seven Samsung markets and every device.",
      links: [
        { label: "Visit site", url: "https://www.cheil.com" },
      ],
      problem: {
        eyebrow: "The results",
        heading: "Growth across seven markets",
        body: "In only three months, seven Samsung markets experienced notable growth in incremental revenue — some peaking at a 119% increase and up to €1 million in revenue uplift. After six months, the A/B experiences our team developed had exceeded all projections by nearly 29%.",
        stats: [
          { big: "119%", small: "Peak conversion increase" },
          { big: "€1M", small: "Peak revenue uplift" },
          { big: "+29%", small: "Beyond projections at six months" },
          { big: "77", small: "Experiments in six months" },
          { big: "7", small: "Samsung markets" },
        ],
      },
      solution: {
        eyebrow: "How it works",
        heading: "A method to the madness",
        body: "We developed a one-of-a-kind approach to building custom, reusable and platform-independent experiments — embodied in our Experiment Framework — letting the team focus only on what was necessary and worry less about cross-platform or cross-market compatibility.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/f5ed52749bc4c0f057633b4d8eff4967147691e9-3117x1551.webp",
          caption: "Product-comparison experiences deployed across Germany, France, Italy, Belgium, Netherlands, Spain and Poland.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Compatibility",
            title: "Cutting-edge meets platform compatibility",
            paras: [
              "Our team delivered 77 experiments in six months — at one point very few Samsung pages weren’t running at least one of them.",
              "All were built with our Experiment Framework: custom, reusable and platform-independent, deployed across seven markets on every device and browser.",
            ],
          },
          {
            label: "Step 2",
            tag: "Reusability",
            title: "Reusability at its finest",
            paras: [
              "Every experiment is analyzed through the eye of reusability, so we avoid building anything twice and invest effort only where it’s necessary.",
              "Reusable, configurable and responsive components replaced one-off blocks — letting us understand, reuse and build experiments better than ever.",
            ],
          },
          {
            label: "Step 3",
            tag: "Learning",
            title: "Learning through challenges",
            paras: [
              "By the last months we were delivering twice as many experiments as at the start; cross-market and cross-platform work became the new norm.",
              "The time required to deploy an idea across pages, markets or sites dropped significantly as our repertoire of A/B experiences kept growing.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "What’s next",
        heading: "Less from scratch, more reuse",
        checks: [
          "Experiment Framework for custom, platform-independent A/B tests",
          "Delivery pace doubled over the engagement",
          "Cross-market, cross-platform experiments as the norm",
          "A growing, reusable library of proven experiences",
        ],
        closing: "Building experiences from scratch will be required less and less — instead we reuse and reconfigure proven work to move even faster.",
      },
    },
  },
  {
    slug: "transforming-cheils-experimentation-program",
    title: "Transforming Cheil’s experimentation program",
    shortTitle: "Cheil Experimentation Program",
    category: CATEGORIES.interfaces,
    csBtn: "Cheil",
    img: "/assets/images/cs-cheil-experimentation.webp",
    visitSiteUrl: "https://www.cheil.com",
    tags: ["Experimentation", "A/B & multivariate testing", "CRO", "Cross-market delivery"],
    body: [
      { type: "p", text: "Sogody and Cheil joined forces in 2019, and the collaboration has grown from a dedicated experimentation program in Samsung’s online store into a global partnership delivering experiments across markets. Our experimentation program has driven an incremental increase in revenue across markets for Samsung’s products." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "A global experimentation partnership with Cheil — running large-scale A/B and multivariate testing across Samsung’s markets, powered by reusable frameworks and our Testful automation tool.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T08-16-31.570Z-samsung-1.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/39cd655dbb1f8b00e57d3f4936e46e3449d58dec-2064x1068.png",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/39cd655dbb1f8b00e57d3f4936e46e3449d58dec-2064x1068.png",
      heroCaption: "A global experimentation program delivering experiments across Samsung’s markets.",
      partner: {
        name: "Cheil",
        initials: "CH",
        desc: "Samsung’s marketing affiliate, partnering with Sogody since 2019 to run a global experimentation program across Samsung’s online store.",
        url: "https://www.cheil.com",
      },
      links: [
        { label: "Visit site", url: "https://www.cheil.com" },
      ],
      problem: {
        eyebrow: "The challenge",
        heading: "Experimentation at global e-commerce scale",
        body: "Experimentation for large-scale e-commerce is of paramount importance — but delivering it across many markets, platforms, and languages is hard to do consistently. Cheil needed a partner who could build a high-performing experimentation program that reliably translates into KPI and revenue increases across Samsung’s markets.",
        stats: [
          { big: "2019", small: "Partnership began" },
          { big: "2,000+", small: "Tests delivered across markets" },
          { big: "Global", small: "Experiments across markets and languages" },
          { big: "Testful", small: "Tool automating multi-market delivery" },
          { big: "3 → 8", small: "Team growth in Kosovo" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "Driving results with customized solutions",
        body: "As a partner of Cheil, we offer a wide range of services — Conversion Rate Optimization to analyze and optimize key metrics, Innovation Engineering to identify new growth opportunities, and Software Engineering to improve the functionality and usability of their online platforms — plus ongoing maintenance and support.",
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T10-49-58.030Z-samsung-2.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/7db07ddf5119e8449741011ac7557eba0dfd44f7-1440x1080.png",
          caption: "Customized CRO, innovation, and software engineering services for Samsung’s online store.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Program",
            title: "Building a high-performing experimentation program",
            paras: [
              "Our team designs and implements A/B and multivariate testing programs that align with specific business objectives.",
              "We have delivered over 2,000 tests across multiple markets, driving significant improvements in customer engagement, conversion rates, and overall business performance for Samsung.",
            ],
          },
          {
            label: "Step 2",
            tag: "Automation",
            title: "Scaling and automating with Testful",
            paras: [
              "Building A/B experiences across platforms and markets taught us that experiences can be reused across projects, markets, languages, and platforms.",
              "On that logic we built Testful, a tool that automates the delivery of multiple experiments at once through A/B templates that require zero development effort to update and deploy across any market.",
            ],
          },
          {
            label: "Step 3",
            tag: "Delivery",
            title: "Rapid multi-market rollouts",
            paras: [
              "Through Testful, the ‘Best Seller’ HQ project rolled out in more than 10 markets, and the S22 launch deployed 42 new A/B experiences across 22 markets in three days.",
              "The Fold4 and Flip4 launch deployed 37 multi-variation activities, 15 cart-abandonment activities, 7 USP module activities, and 15 countdown-timer activities across the EU7 and EU14 markets in only a few days.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "Proving the business value of experimentation",
        body: "The success of our partnership is a testament to the trust Cheil has placed in us. Our ability to understand their needs and make better decisions for their projects has increased work and revenue for the client and proven the value of experimentation.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/3d8738f37b2a25ad339244df4b05807545d7f601-2240x1328.webp",
          caption: "A strategic, data-driven partnership built on understanding user behavior and proving business value.",
        },
        items: [
          { n: "01", title: "Understanding user behavior", desc: "A deep understanding of user behavior lets us design experiments that reflect real needs and make data-driven decisions." },
          { n: "02", title: "Creativity and calculated risk", desc: "A willingness to think outside the box and try new, innovative ways to improve the customer experience." },
          { n: "03", title: "Focus on business value", desc: "Experiments are focused on driving measurable business value, proven through metrics and data — not experimentation for its own sake." },
        ],
      },
      next: {
        eyebrow: "The impact",
        heading: "A partnership that keeps growing stronger",
        checks: [
          "Global experimentation program since 2019",
          "Over 2,000 A/B and multivariate tests delivered",
          "CRO, Innovation Engineering, and Software Engineering services",
          "Testful automation for zero-dev multi-market rollouts",
          "Reusable, high-quality code across markets and platforms",
          "Incremental revenue increase across Samsung’s markets",
        ],
        closing: "Cheil now places faith in our decision-making, and Sogody has become a major contributor to the formation and implementation of each project — proof of the power of strategic, data-driven experimentation.",
      },
    },
  },
  {
    slug: "samsung-galaxy-s20-trade-in-program",
    title: "Samsung Galaxy S20 Trade-In Program",
    shortTitle: "Samsung Galaxy S20 Trade-In",
    category: CATEGORIES.interfaces,
    csBtn: "Samsung",
    img: "/assets/images/cs-samsung-s20-tradein.webp",
    visitSiteUrl: "https://www.samsung.com",
    tags: ["Experimentation", "Adobe Target", "Personalization", "Cart abandonment"],
    body: [
      { type: "p", text: "Working with Cheil — a subsidiary of Samsung Electronics — Sogody supported the technical side of a data-driven experiment to optimize the experience for prospective, undecided customers of the Samsung Galaxy S20 FE 5G, addressing cart abandonment with a personalized, Adobe Target–powered A/B test." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "A personalized cart-abandonment experiment for the Samsung Galaxy S20 FE 5G — built in JavaScript and Adobe Target with custom audiences, lifting revenue and unique visits across European markets.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/859a0e6b1210d189faffb44cc115c30a4401e47a-1920x956.webp",
      heroCaption: "A data-driven digital experience tackling shopping-cart abandonment for the Galaxy S20 FE 5G.",
      partner: {
        name: "Samsung",
        initials: "SG",
        desc: "Working through Cheil, a Samsung Electronics subsidiary, on data-driven experience optimization for Samsung’s online store.",
        url: "https://www.samsung.com",
      },
      links: [
        { label: "Visit site", url: "https://www.samsung.com" },
      ],
      problem: {
        eyebrow: "The challenge",
        heading: "Winning back undecided customers",
        body: "A challenge many e-commerce sites face is visitors who start the purchase process — adding an item to the basket — yet decide not to go through with it. Samsung saw a significantly high number of cart abandoners for the Galaxy S20 FE 5G, while these visitors returned to the site within a couple of days, pointing to high brand affinity and a clear opportunity to recover the sale.",
        stats: [
          { big: "+52.1%", small: "Revenue uplift (purchase event)" },
          { big: "+52.0%", small: "Increase in unique visitors" },
          { big: "Adobe Target", small: "A/B testing and personalization" },
          { big: "S20 FE 5G", small: "Targeted campaign product" },
          { big: "EU markets", small: "Rolled out across several markets" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "A personalized cart-abandonment experience",
        body: "Our team developed a unique digital experience to address cart abandonment — reminding customers of the items left in their cart, highlighting key unique selling points they may have missed, and complementing this with dynamic, positive product reviews to reinforce the product’s appeal.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/c644f786cf133032f96a2d85b48d343d2ca49870-800x398.gif",
          caption: "A personalized banner and modal reminding returning visitors of their abandoned S20 FE 5G.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Experiment",
            title: "An A/B test in Adobe Target",
            paras: [
              "Using Adobe Target, we built an A/B test targeting return visitors who added a Galaxy S20 FE 5G to the cart but didn’t purchase, presenting a personalized banner with the abandoned product details, unique selling points, and a quick shortcut to complete the purchase.",
              "The objective was to increase conversion on two primary metrics — revenue (purchase event) and unique visits to the cart page — rolled out across several Samsung European markets.",
            ],
          },
          {
            label: "Step 2",
            tag: "Development",
            title: "An unobtrusive, overlay-based modal",
            paras: [
              "The final experience was a modal that popped up on an eligible visitor’s next return visit, built as an overlay of the existing page — requiring no backend access or changes to the page’s components.",
              "It was developed in JavaScript using our internal experimentation framework and rolled out with Adobe Target, which integrates tightly with Adobe Analytics for deep journey insights and result measurement.",
            ],
          },
          {
            label: "Step 3",
            tag: "Targeting",
            title: "Custom audiences with Profile Scripts",
            paras: [
              "The key challenge was building the audience: only returning visitors with an abandoned cart containing a Galaxy S20 FE model — conditions not available out of the box.",
              "We used Profile Scripts together with a custom Mbox solution to store a serialized version of the cart in the visitor profile, enabling precise targeting and messaging personalized with the exact device model, picture, and price.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "Results of experimentation",
        body: "By the end of the experiment’s lifetime, there was a noticeable and noteworthy uplift across both target metrics, recovering undecided customers and driving them back to complete their purchase.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/497f5543ce098ee27230b15bf6735b3165fa3a43-1200x597.webp",
          caption: "A measurable uplift in revenue and unique cart visits for the Galaxy S20 FE 5G campaign.",
        },
        items: [
          { n: "01", title: "+52.1% revenue", desc: "Increased revenue (purchase event) by 52.1% for the Samsung Galaxy S20 FE 5G campaign." },
          { n: "02", title: "+52.0% unique visitors", desc: "Increased unique visitors to the cart page by up to 52.0%." },
          { n: "03", title: "Reusable, low-risk approach", desc: "An overlay-based modal built on our JavaScript framework required no backend changes and can be reused across markets." },
        ],
      },
      next: {
        eyebrow: "The impact",
        heading: "Data-driven personalization that converts",
        checks: [
          "Adobe Target A/B test for the Galaxy S20 FE 5G",
          "Personalized cart-abandonment banner and modal",
          "Unobtrusive overlay built in JavaScript, no backend changes",
          "Custom audiences via Profile Scripts and a custom Mbox",
          "Rolled out across several Samsung European markets",
          "+52.1% revenue and +52.0% unique visitors",
        ],
        closing: "By combining personalization, careful audience targeting, and a low-risk technical approach, Sogody helped Samsung recover undecided customers and turn cart abandonment into measurable revenue.",
      },
    },
  },
  {
    slug: "from-shopify-to-headless-replatforming-every",
    title: "From Shopify to Headless: The strategic replatforming approach that empowered Every’s growth",
    shortTitle: "Every — Shopify to Headless",
    category: CATEGORIES.software,
    csBtn: "Every",
    img: "/assets/images/cs-every-replatforming.webp",
    visitSiteUrl: "https://every-foods.com",
    body: [
      { type: "p", text: "In today’s fast-paced business world, having a solid infrastructure that can adapt to changing conditions is crucial for success. This is particularly true in the world of e-commerce, where customer behavior and competition are constantly evolving." },
      { type: "p", text: "For brands looking to stay ahead of the curve and innovate for the future, changing their e-commerce platform may be the key to success. Replatforming can provide businesses with a headstart towards the future while also ensuring that their infrastructure is agile and able to meet changing market demands." },
      { type: "p", text: "In this article, we will explore the benefits of strategic replatforming for Every. and how it helped breathe new life into the company’s business model." },
      { type: "h2", text: "Every: revolutionizing the ready-made meal industry in Germany" },
      { type: "p", text: "Every. is a game-changing business operating in Germany, providing ready-made meals that are not only delicious but also environmentally conscious. They have successfully harnessed the innovation of frozen food to create vegan meals that are healthy, sustainable, and respect the environment. In addition to their plant-based ingredients, they invest a lot of effort into creating packaging that is as sustainable and resource-efficient as possible." },
      { type: "p", text: "At Every., they understand that people today lead busy lives, with little to devote to meals. They have designed their meals to be the perfect solution for those constantly ‘on the go’." },
      { type: "p", text: "Their meals are prepared with carefully selected, plant-based ingredients, and shock-frozen to keep them fresh. All their dishes are delivered directly to the customers’ doors and are ready in 10 minutes. Their commitment to creating delicious and healthy meals, while being mindful of the environment, is what sets Every. apart from the rest." },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/d7c74a7026de2f4b06cb4791c8f02505ed608fba-2240x1328.webp", alt: "Every multi-market and delivery plan modules" },
      { type: "h2", text: "Empowering Every’s growth through strategic replatforming" },
      { type: "p", text: "With a mission as powerful as Every.’s, it was inevitable that they would become a highly requested meal delivery service. Just between June 1st and August 31st, Every. received 434K site visitors. As their customer base grew, catering to their individual needs and preferences became Every.’s top priority." },
      { type: "p", text: "The only challenge they faced was that their current e-commerce platform was built on Shopify using Liquid, HTML, CSS, and Javascript, which did not allow for the level of flexibility and customization that Every. needed to deliver a truly personalized user experience." },
      { type: "p", text: "This is where Sogody’s new e-commerce brand extension, Spell & Sell, came in. Thanks to our expertise in delivering top-notch e-commerce solutions, we were entrusted with the responsibility of finding a solution that would allow Every. to break free from the limitations of its current platform." },
      { type: "p", text: "Our team of experienced developers and designers worked closely with Every. to understand their business goals, pain points, and unique needs. We identified the areas that needed improvement and proposed a strategic replatforming approach that would leverage modern technologies and industry best practices to ensure Every.’s continued success." },
      { type: "p", text: "We helped Every. migrate from their Shopify-built platform to a Headless architecture so that we could provide them with a highly customizable platform, with the ability to easily add new features, markets, and functionalities as their business continued to grow." },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/dd33efc8cbb4c350d7c5b2b62f1b26a40a8a4823-2232x1320.webp", alt: "Every mobile commerce experience" },
      { type: "h2", text: "The end-to-end solution" },
      { type: "p", text: "In less than three months, we built a new platform for Every. that would enable them to expand their business globally with multi-language, multi-market, and multi-currency support. S&S created over 25 customizable modules, allowing Every. to tailor the platform to their specific business needs, providing a truly customized experience." },
      { type: "p", text: "To better connect with their international audience, S&S implemented seamless translations, making it easy for Every. to translate their platform into different languages and provide a localized experience for their customers." },
      { type: "p", text: "S&S built the new Headless infrastructure using React for the frontend, Sanity CMS for content management, 3rd party integrations, and custom backend for recurring orders. This replatforming significantly impacted the speed, modularity, and flexibility of Every.’s e-commerce platform. By uniting an extensive ecosystem of technologies, services, and APIs into one workflow, with Netlify we unlocked new levels of team productivity— while saving time and money." },
      { type: "p", text: "Moreover, we integrated real-time syncing with Shopify, allowing for seamless management of products, inventory, and orders across both platforms." },
      { type: "p", text: "Our team also developed custom account pages and a loyalty program tailored specifically to Every.’s business needs, as well as integrating a number of third-party tools and services such as scheduled Instagram post fetching and real-time fetching from the review system." },
      { type: "p", text: "All of these integrations helped Every. to improve customer engagement, drive traffic to their platform, and enhance overall customer satisfaction and retention." },
      { type: "p", text: "The full-stack development and UX/UI design services provided by S&S, combined with the replatforming effort, had a significant impact on Every.’s business, providing them with a highly-customizable platform that is scalable, flexible, and designed to meet its specific needs." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "Replatforming Every. from Shopify to a headless React + Sanity architecture — built in under three months for multi-market, multi-language, multi-currency growth.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T14-04-00.730Z-every-video.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/530ad3e290a886db9dbd1f98eb630ed58735eb2c-1728x1080.png",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/d7c74a7026de2f4b06cb4791c8f02505ed608fba-2240x1328.webp",
      heroCaption: "Multi-market and delivery-plan modules powering Every.’s ready-made meal experience.",
      links: [
        { label: "Visit site", url: "https://every-foods.com" },
      ],
      problem: {
        eyebrow: "The challenge",
        heading: "Outgrowing Shopify",
        body: "Every. is revolutionizing ready-made meals in Germany with sustainable, plant-based, shock-frozen dishes ready in 10 minutes. As demand surged, their Shopify/Liquid storefront couldn’t deliver the flexibility and customization a truly personalized experience required.",
        stats: [
          { big: "434K", small: "Site visitors in one quarter" },
          { big: "<3 mo", small: "To build the new platform" },
          { big: "25+", small: "Customizable modules" },
          { big: "Multi", small: "Market, language & currency" },
          { big: "Headless", small: "React + Sanity + Netlify" },
        ],
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/d7c74a7026de2f4b06cb4791c8f02505ed608fba-2240x1328.webp",
          caption: "Multi-market and delivery-plan modules powering Every.’s ready-made meal experience.",
        },
      },
      solution: {
        eyebrow: "What we built",
        heading: "A headless, end-to-end solution",
        body: "Sogody’s e-commerce brand extension, Spell & Sell, migrated Every. from Shopify to a headless architecture — React frontend, Sanity CMS, custom backend for recurring orders, and real-time Shopify sync for products, inventory and orders.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/dd33efc8cbb4c350d7c5b2b62f1b26a40a8a4823-2232x1320.webp",
          caption: "A fast, modular mobile commerce experience built for international growth.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Replatform",
            title: "From Shopify to headless",
            paras: [
              "We migrated Every. off Liquid/HTML/CSS/JS onto a highly customizable headless platform — ready to add new features, markets and functionality as the business grows.",
            ],
          },
          {
            label: "Step 2",
            tag: "Modularity",
            title: "25+ configurable modules",
            paras: [
              "S&S created over 25 customizable modules plus seamless translations for multi-language, multi-market and multi-currency support — a localized experience everywhere.",
            ],
          },
          {
            label: "Step 3",
            tag: "Integrations",
            title: "Loyalty, accounts & third-party tools",
            paras: [
              "Custom account pages and a tailored loyalty program, real-time Shopify syncing, scheduled Instagram fetching and live review integration — all uniting one productive workflow on Netlify.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "The outcome",
        heading: "Scalable, flexible, made-to-measure",
        checks: [
          "Headless React + Sanity CMS architecture",
          "Multi-market, multi-language, multi-currency support",
          "Real-time Shopify product, inventory & order sync",
          "Custom loyalty program and account experience",
        ],
        closing: "The replatforming gave Every. a highly customizable platform that is scalable, flexible and designed to meet its specific needs — empowering its continued growth.",
      },
    },
  },
  {
    slug: "sogodys-partnership-with-diggs",
    title: "Sogody’s partnership with Diggs: Crafting a user-centric dog product experience",
    shortTitle: "Diggs partnership",
    category: CATEGORIES.interfaces,
    csBtn: "Diggs",
    img: "/assets/images/cs-diggs-partnership.webp",
    visitSiteUrl: "https://www.diggs.pet",
    body: [
      { type: "p", text: "Diggs emerged from frustration with subpar dog products and a deep love for animals. Specializing in redefining dog crates and crate training, they aim to provide the best for dogs and their owners." },
      { type: "p", text: "Driven by a team of pet parents and enthusiasts, Diggs combines safety, smart design, and real functional solutions. Their mission? To revolutionize pet ownership with thoughtful products that cater to both dogs and their human companions." },
      { type: "p", text: "They represent a commitment to elevating the pet ownership experience, showcasing how responsible design can enhance the lives of both pets and people. Diggs’ vision extended beyond their products; they sought an online store that resonated with their mission of delivering the utmost for dog owners." },
      { type: "p", text: "And just as the love for dogs brings people together, the shared pursuit of providing exceptional user experiences unites brands. It’s this common thread that led one of our former clients to enthusiastically recommend Sogody’s e-commerce brand extension, Spell & Sell, as the ideal company to craft their website." },
      { type: "p", text: "This is where our partnership begins…" },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/47f6e54184a04876310890b7a194d2ff2ab57e68-3840x1904.webp", alt: "Diggs cart, crate, and newsletter interface modules" },
      { type: "h2", text: "A robust online store" },
      { type: "p", text: "As the demand for Diggs’ products surged at a rapid pace, the necessity for a robust online store became increasingly apparent." },
      { type: "p", text: "With the need to cater to its expanding customer base, Sogody recognized the importance of an online platform that offered seamless management, high customizability, swift performance, and a future-proof foundation." },
      { type: "p", text: "To fulfill these goals, Spell & Sell offered Diggs its maintenance service for its online store using a combination of cutting-edge technologies. Harnessing the power of a Headless CMS, specifically Sanity, allowed us to separate content from presentation, facilitating easy updates and alterations while maintaining a consistent user experience." },
      { type: "p", text: "Leveraging Shopify's native integration with Sanity, we implemented the officially supported Sanity Connect plugin to enable real-time and seamless synchronization between the Sanity CMS and Shopify storefront. This streamlined integration provides a robust and secure e-commerce infrastructure without the need for custom development." },
      { type: "p", text: "This dynamic duo of technologies not only granted Diggs the agility to manage its content effortlessly but also empowered its online store with speed, scalability, and adaptability needed to embrace future challenges and opportunities with confidence." },
      { type: "p", text: "Besides, we successfully enabled multi-country support for their operations in Canada and the United States." },
      { type: "p", text: "The entire site is pre-rendered at build time and served to each shopper from a local node of Netlify’s global edge network, which creates a responsive storefront experience." },
      { type: "h2", text: "Data-driven transformation" },
      { type: "p", text: "Following the successful maintenance of their website, our partnership with Diggs evolved into a comprehensive collaboration spanning nearly two years." },
      { type: "p", text: "We expanded our support through an array of services tailored to their burgeoning needs and ensured an ideal user experience and top-notch functionality by offering:" },
      { type: "h3", text: "Tracking and analytics" },
      { type: "ul", items: [
        "We enabled tracking systems to observe user behavior, track traffic sources, and analyze conversion rates.",
        "Configured bespoke event tracking mechanisms to record precise user engagements, including clicks, form submissions, add-to-cart actions, purchases, and more.",
      ] },
      { type: "h3", text: "Server-side tracking implementation" },
      { type: "ul", items: [
        "We utilized server-side tracking to enhance data precision and safeguard user privacy.",
      ] },
      { type: "h3", text: "Third-party integrations" },
      { type: "ul", items: [
        "Integrated third-party tools and services and established streamlined data connectivity and synchronization among diverse platforms to deliver a seamless customer experience.",
        "We utilized Mulberry to offer extended warranties; established an affiliate marketing program through CJ; built a customer acquisition strategy using Friendbuy; and personalized Diggs’ communication using Klaviyo for email marketing automation.",
      ] },
      { type: "h3", text: "A/B testing" },
      { type: "ul", items: [
        "Designed and executed numerous A/B tests, fine-tuning elements of their site, particularly focused on Product Detail Pages, PDP, with the aim of optimizing conversion rates and user engagement.",
      ] },
      { type: "p", text: "As Diggs experienced significant growth, they ventured into introducing new and complementary products that perfectly complemented their offerings, which gave rise to the need for bundle products, a seamless way to package essential items together." },
      { type: "p", text: "To accommodate these advancements, our team integrated new features and components, and developed an additional Bundle Product Detail Page, providing the Diggs team with the capability to effortlessly curate bundles from their product list." },
      { type: "p", text: "This addition was warmly received by users, offering them a clear, convenient path to assembling everything they need for a comprehensive experience. As a result, this strategic implementation yielded a substantial boost in sales, underscoring the effectiveness and appeal of the bundle approach for both Diggs and their satisfied customers." },
      { type: "h2", text: "Diggs' next online frontier" },
      { type: "p", text: "After consistently delivering successful outcomes for Diggs, we are embarking on an extensive redesign and overhaul of their online store. With a fresh perspective and cutting-edge design concepts, we aim to elevate Diggs’ online presence to new heights, further enhancing the user experience and reinforcing its position as a leader in the industry." },
      { type: "p", text: "In conclusion, the partnership between Diggs and Sogody’s Spell & Sell has been nothing short of transformative. Diggs, driven by a passion for dogs and a commitment to redefining pet ownership, found in Spell & Sell a like-minded partner dedicated to enhancing their online presence and user experience. Together, we embarked on a journey that not only met but exceeded the evolving needs of Diggs and their growing customer base." },
      { type: "p", text: "Stay posted for more ‘tail-wagging’ announcements!" },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "A near two-year partnership building Diggs a fast, scalable headless store on Shopify + Sanity — with tracking, integrations and conversion-focused A/B testing.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/47f6e54184a04876310890b7a194d2ff2ab57e68-3840x1904.webp",
      heroCaption: "Cart, crate and newsletter modules for a user-centric dog-product experience.",
      links: [
        { label: "Visit site", url: "https://www.diggs.pet" },
      ],
      problem: {
        eyebrow: "The brand",
        heading: "Redefining pet ownership",
        body: "Diggs emerged from frustration with subpar dog products and a deep love for animals, redefining dog crates and crate training. As demand surged, they needed a robust online store with seamless management, high customizability, swift performance and a future-proof foundation.",
        stats: [
          { big: "~2 yrs", small: "Ongoing partnership" },
          { big: "Headless", small: "Shopify + Sanity CMS" },
          { big: "2", small: "Countries — US & Canada" },
          { big: "Edge", small: "Pre-rendered on Netlify" },
          { big: "A/B", small: "Conversion-focused testing" },
        ],
      },
      solution: {
        eyebrow: "What we did",
        heading: "From a robust store to data-driven growth",
        body: "Spell & Sell maintained and grew Diggs’ store using a headless CMS — Sanity synced to Shopify via Sanity Connect — then layered on analytics, server-side tracking, third-party integrations and continuous A/B testing.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/47f6e54184a04876310890b7a194d2ff2ab57e68-3840x1904.webp",
          caption: "A secure, scalable storefront pre-rendered at build time and served from Netlify’s edge.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Foundation",
            title: "A robust online store",
            paras: [
              "Headless Sanity CMS with the officially supported Sanity Connect plugin kept content and Shopify in real-time sync — secure and scalable, with multi-country support for the US and Canada.",
            ],
          },
          {
            label: "Step 2",
            tag: "Data",
            title: "Tracking, integrations & testing",
            paras: [
              "We added behavior and conversion tracking, server-side tracking for precision and privacy, and integrations with Mulberry, CJ, Friendbuy and Klaviyo — alongside continuous A/B testing on PDPs.",
            ],
          },
          {
            label: "Step 3",
            tag: "Bundles",
            title: "A new Bundle PDP",
            paras: [
              "As Diggs introduced complementary products, we built a dedicated Bundle Product Detail Page so the team could curate bundles from their product list — driving a substantial boost in sales.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "What’s next",
        heading: "Diggs’ next online frontier",
        checks: [
          "Headless Shopify + Sanity store, edge-served on Netlify",
          "Full analytics and server-side tracking",
          "Mulberry, CJ, Friendbuy & Klaviyo integrations",
          "Bundle PDP driving incremental sales",
        ],
        closing: "After consistently delivering for Diggs, we’re embarking on an extensive redesign of their online store — elevating the experience and reinforcing their position as a leader.",
      },
    },
  },
  {
    slug: "revamping-diggs",
    title: "Reimagining Diggs: A Brand and Platform Transformation",
    shortTitle: "Reimagining Diggs",
    category: CATEGORIES.software,
    csBtn: "Diggs",
    img: "/assets/images/cs-diggs-reimagining.webp",
    visitSiteUrl: "https://www.diggs.pet",
    body: [
      { type: "p", text: "Diggs emerged from frustration with subpar dog products and a deep love for animals. Specializing in redefining dog crates and crate training, they aim to provide the best for dogs and their owners." },
      { type: "p", text: "Driven by a team of pet parents and enthusiasts, Diggs combines safety, smart design, and real functional solutions. Their mission? To revolutionize pet ownership with thoughtful products that cater to both dogs and their human companions." },
      { type: "p", text: "They represent a commitment to elevating the pet ownership experience, showcasing how responsible design can enhance the lives of both pets and people. Diggs’ vision extended beyond their products; they sought an online store that resonated with their mission of delivering the utmost for dog owners." },
      { type: "p", text: "And just as the love for dogs brings people together, the shared pursuit of providing exceptional user experiences unites brands. It’s this common thread that led one of our former clients to enthusiastically recommend Sogody’s e-commerce brand extension, Spell & Sell, as the ideal company to craft their website." },
      { type: "p", text: "This is where our partnership begins…" },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/7057093779914be51e89fdd2727955e6170beb3e-3840x1904.webp", alt: "Diggs PDP before and after redesign" },
      { type: "h2", text: "A robust online store" },
      { type: "p", text: "As the demand for Diggs’ products surged at a rapid pace, the necessity for a robust online store became increasingly apparent." },
      { type: "p", text: "With the need to cater to its expanding customer base, Sogody recognized the importance of an online platform that offered seamless management, high customizability, swift performance, and a future-proof foundation." },
      { type: "p", text: "To fulfill these goals, Spell & Sell offered Diggs its maintenance service for its online store using a combination of cutting-edge technologies. Harnessing the power of a Headless CMS, specifically Sanity, allowed us to separate content from presentation, facilitating easy updates and alterations while maintaining a consistent user experience." },
      { type: "p", text: "Leveraging Shopify's native integration with Sanity, we implemented the officially supported Sanity Connect plugin to enable real-time and seamless synchronization between the Sanity CMS and Shopify storefront. This streamlined integration provides a robust and secure e-commerce infrastructure without the need for custom development." },
      { type: "p", text: "This dynamic duo of technologies not only granted Diggs the agility to manage its content effortlessly but also empowered its online store with speed, scalability, and adaptability needed to embrace future challenges and opportunities with confidence." },
      { type: "p", text: "Besides, we successfully enabled multi-country support for their operations in Canada and the United States." },
      { type: "p", text: "The entire site is pre-rendered at build time and served to each shopper from a local node of Netlify’s global edge network, which creates a responsive storefront experience." },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/7989a0818c7ad95f903a3c89004dcc0e8cbc0998-3840x1904.webp", alt: "Diggs PLP/navigation before and after redesign" },
      { type: "h2", text: "Data-driven transformation" },
      { type: "p", text: "Following the successful maintenance of their website, our partnership with Diggs evolved into a comprehensive collaboration spanning nearly two years. We expanded our support through an array of services tailored to their burgeoning needs and ensured an ideal user experience and top-notch functionality by offering:" },
      { type: "p", text: "On this logic, we have built Testful, a tool that automates the delivery of multiple experiments in one go, through A/B templates, which require zero development effort to be updated and deployed across any market. Through it, Sogody has been part of:" },
      { type: "h3", text: "Tracking and analytics" },
      { type: "ul", items: [
        "We enabled tracking systems to observe user behavior, track traffic sources, and analyze conversion rates.",
        "Configured bespoke event tracking mechanisms to record precise user engagements, including clicks, form submissions, add-to-cart actions, purchases, and more.",
      ] },
      { type: "h3", text: "Server-side tracking implementation" },
      { type: "ul", items: [
        "We utilized server-side tracking to enhance data precision and safeguard user privacy.",
      ] },
      { type: "h3", text: "Third-party integrations" },
      { type: "ul", items: [
        "Integrated third-party tools and services and established streamlined data connectivity and synchronization among diverse platforms to deliver a seamless customer experience.",
        "We utilized Mulberry to offer extended warranties; established an affiliate marketing program through CJ; built a customer acquisition strategy using Friendbuy; and personalized Diggs’ communication using Klaviyo for email marketing automation.",
      ] },
      { type: "h3", text: "A/B testing" },
      { type: "ul", items: [
        "Designed and executed numerous A/B tests, fine-tuning elements of their site, particularly focused on Product Detail Pages, PDP, with the aim of optimizing conversion rates and user engagement.",
      ] },
      { type: "p", text: "As Diggs experienced significant growth, they ventured into introducing new and complementary products that perfectly complemented their offerings, which gave rise to the need for bundle products, a seamless way to package essential items together." },
      { type: "p", text: "To accommodate these advancements, our team integrated new features and components, and developed an additional Bundle Product Detail Page, providing the Diggs team with the capability to effortlessly curate bundles from their product list." },
      { type: "p", text: "This addition was warmly received by users, offering them a clear, convenient path to assembling everything they need for a comprehensive experience. As a result, this strategic implementation yielded a substantial boost in sales, underscoring the effectiveness and appeal of the bundle approach for both Diggs and their satisfied customers." },
      { type: "img", src: "https://cdn.sanity.io/images/3hfxs7a8/production/500ebe53d0ee58e5a325d37f24134066867c8082-3840x1904.webp", alt: "Diggs updated product detail page experience" },
      { type: "h2", text: "Diggs' next online frontier" },
      { type: "p", text: "After consistently delivering successful outcomes for Diggs, we are embarking on an extensive redesign and overhaul of their online store. With a fresh perspective and cutting-edge design concepts, we aim to elevate Diggs’ online presence to new heights, further enhancing the user experience and reinforcing its position as a leader in the industry." },
      { type: "p", text: "In conclusion, the partnership between Diggs and Sogody’s Spell & Sell has been nothing short of transformative. Diggs, driven by a passion for dogs and a commitment to redefining pet ownership, found in Spell & Sell a like-minded partner dedicated to enhancing their online presence and user experience. Together, we embarked on a journey that not only met but exceeded the evolving needs of Diggs and their growing customer base." },
      { type: "p", text: "Stay posted for more ‘tail-wagging’ announcements!" },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "A full brand and platform transformation for Diggs — redesigning the PDP, PLP and navigation on a headless Shopify + Sanity foundation.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/7057093779914be51e89fdd2727955e6170beb3e-3840x1904.webp",
      heroCaption: "The Diggs product detail page, before and after the redesign.",
      links: [
        { label: "Visit site", url: "https://www.diggs.pet" },
      ],
      problem: {
        eyebrow: "Project overview",
        heading: "A brand and platform transformation",
        body: "Building on a near two-year partnership, Diggs sought to reimagine their online store — a fresh, cutting-edge design across the product and listing experience, on a fast, scalable headless foundation.",
        stats: [
          { big: "Rebrand", small: "Brand + platform transformation" },
          { big: "PDP", small: "Redesigned product pages" },
          { big: "PLP", small: "Reworked listing & navigation" },
          { big: "Headless", small: "Shopify + Sanity CMS" },
          { big: "Edge", small: "Pre-rendered on Netlify" },
        ],
      },
      solution: {
        eyebrow: "What we did",
        heading: "Redesigning the Diggs experience",
        body: "We carried the robust headless foundation — Sanity synced to Shopify via Sanity Connect, edge-served on Netlify — into a comprehensive redesign of the PDP, PLP and navigation, backed by tracking, integrations and A/B testing.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/7989a0818c7ad95f903a3c89004dcc0e8cbc0998-3840x1904.webp",
          caption: "Reworked listing and navigation — before and after.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Foundation",
            title: "A robust online store",
            paras: [
              "A headless Sanity CMS synced to Shopify via Sanity Connect kept the store secure, fast and scalable — pre-rendered at build time and served from Netlify’s global edge, with US and Canada support.",
            ],
          },
          {
            label: "Step 2",
            tag: "Redesign",
            title: "Reimagining PDP & PLP",
            paras: [
              "We redesigned the product detail and listing pages and navigation with cutting-edge concepts — elevating the experience while preserving everything that worked.",
            ],
          },
          {
            label: "Step 3",
            tag: "Data",
            title: "Tracking, integrations & bundles",
            paras: [
              "Analytics and server-side tracking, integrations with Mulberry, CJ, Friendbuy and Klaviyo, ongoing PDP A/B testing, and a dedicated Bundle PDP that boosted sales.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "What’s next",
        heading: "A new chapter for Diggs",
        checks: [
          "Redesigned PDP, PLP and navigation",
          "Headless Shopify + Sanity, edge-served on Netlify",
          "Full analytics and third-party integrations",
          "Bundle PDP driving incremental sales",
        ],
        closing: "The partnership between Diggs and Spell & Sell has been transformative — a redesign that elevates their online presence and reinforces their position as a leader in the industry.",
      },
    },
  },
  {
    slug: "d-louise",
    title: "Boosting D.Louise sales",
    shortTitle: "Boosting D.Louise sales",
    category: CATEGORIES.interfaces,
    csBtn: "D.LOUISE",
    img: "/assets/images/cs-dlouise.png",
    visitSiteUrl: "https://www.dlouise.co.uk",
    body: [
      { type: "img", src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/5dc1fa24e5bf06cebba409e65a9e88632400ca26-1920x1035.png?auto=format", alt: "D.Louise before/after mobile commerce transformation" },
      { type: "h2", text: "About D.Louise" },
      { type: "p", text: "Founded in 2021, D.Louise is a distinguished jewelry brand known for its timeless, lifeproof creations backed by a lifetime guarantee. Each piece is thoughtfully designed to combine elegance with durability, ensuring it can be cherished for a lifetime." },
      { type: "p", text: "D.Louise stands apart by prioritizing quality, innovation, and customer satisfaction, offering exquisite jewelry that fits seamlessly into everyday life. With a commitment to creating meaningful connections through their designs, D.Louise continues to redefine modern jewelry, making it both accessible and unforgettable." },
      { type: "h2", text: "What we did" },
      { type: "ul", items: [
        "Total Sales Growth — Increased by 24%, showcasing the effectiveness of the custom theme and UX/UI changes in boosting conversions.",
        "Average Order Value — Grew by 17%, reflecting successful upselling strategies and heightened interest in the brand's offerings.",
        "Add to Cart Rate — Rose by 9%, indicating a more seamless and engaging shopping experience that encouraged user actions.",
        "Organic Search Revenue — A 33% surge in sales from search, highlighting improved visibility and a significant boost in organic traffic.",
        "Customer Retention — Returning conversion rates jumped by 24%, underscoring stronger loyalty and satisfaction among customers.",
        "Performance & Growth Ready — Delivered a fast, SEO-optimized, and scalable foundation designed for future expansion across new markets.",
      ] },
      { type: "h2", text: "Crafting a Unique Identity" },
      { type: "p", text: "D.Louise faced challenges using a standard Shopify theme, which limited their ability to showcase their unique identity and jewelry's exceptional quality. This led to a lower conversion rate and the need for optimization." },
      { type: "p", text: "To address this, we developed a custom Shopify theme tailored to their brand and conducted 25 A/B tests to refine the user experience. Key areas like the product listing page (PLP) and cart saw significant improvements, with 90-100% of users favoring the new design. These data-driven enhancements boosted site performance and highlighted D.Louise's distinct brand identity." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "A custom Shopify Plus theme and 25 A/B tests for a lifeproof jewelry brand — lifting sales 24%, AOV 17% and organic revenue 33%.",
      heroImage: "https://cdn.sanity.io/images/uw03kwl6/new-prod/5dc1fa24e5bf06cebba409e65a9e88632400ca26-1920x1035.png?auto=format",
      heroCaption: "D.Louise's mobile commerce experience, before and after.",
      links: [
        { label: "Visit site", url: "https://www.dlouise.co.uk" },
      ],
      problem: {
        eyebrow: "About D.Louise",
        heading: "Timeless, lifeproof jewelry",
        body: "Founded in 2021, D.Louise is a distinguished jewelry brand known for timeless, lifeproof creations backed by a lifetime guarantee — but a standard Shopify theme limited their identity and conversion rate.",
        stats: [
          { big: "+24%", small: "Total sales growth" },
          { big: "+17%", small: "Average order value" },
          { big: "+9%", small: "Add to cart rate" },
          { big: "+33%", small: "Organic search revenue" },
          { big: "+24%", small: "Returning customer conversion" },
          { big: "SEO", small: "Fast, scalable foundation" },
        ],
      },
      solution: {
        eyebrow: "What we did",
        heading: "Crafting a unique identity",
        body: "We replaced the standard theme with a custom Shopify build tailored to D.Louise's brand, then ran 25 A/B tests to refine the experience and prove the design data-first.",
        figure: {
          src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/5dc1fa24e5bf06cebba409e65a9e88632400ca26-1920x1035.png?auto=format",
          caption: "90–100% of users favored the new PLP and cart designs.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Custom theme",
            title: "A brand-true storefront",
            paras: [
              "We built a custom Shopify theme tailored to D.Louise's brand and the exceptional quality of their jewelry — replacing the limiting standard theme.",
            ],
          },
          {
            label: "Step 2",
            tag: "Experimentation",
            title: "25 A/B tests",
            paras: [
              "Key areas like the product listing page and cart were refined through experimentation, with 90–100% of users favoring the new design.",
            ],
          },
          {
            label: "Step 3",
            tag: "Conversion",
            title: "Data-driven growth",
            paras: [
              "These enhancements boosted site performance and conversions while highlighting D.Louise's distinct brand identity.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "The outcome",
        heading: "Measurable growth",
        checks: [
          "+24% total sales growth",
          "+17% average order value",
          "+33% organic search revenue",
          "Fast, SEO-optimized, scalable foundation",
        ],
        closing: "A custom theme and rigorous experimentation turned D.Louise's standard storefront into a high-converting, on-brand experience.",
      },
    },
  },
  {
    slug: "custom-shopify-landing-page-for-cnct-coolers",
    title: "Custom Shopify landing page for CNCT Coolers",
    shortTitle: "CNCT Coolers Shopify Landing Page",
    category: CATEGORIES.interfaces,
    csBtn: "CNCT Coolers",
    img: "/assets/images/cs-cnct-coolers.webp",
    visitSiteUrl: "",
    tags: ["Shopify", "UX/UI design", "Motion design", "Custom landing page"],
    body: [
      { type: "p", text: "The CNCT Cooler is the world’s first patented design cooler crafted exclusively for Tesla models — fitting Models S, 3, X, and Y, and keeping refreshments chilled for up to two days. To extend that ethos to their online presence, CNCT Coolers needed a Shopify storefront and a custom landing page where the cooler could take center stage." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "A custom, motion-rich Shopify landing page for the world’s first Tesla-inspired cooler — where artistry, innovation, and shopping come together around the product.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/f8ae73ee6a5ab58a5326cf787a1a429fa4bdd2ee-2240x1328.webp",
      heroCaption: "CNCT Coolers — a Shopify experience that showcases the Tesla-inspired cooler in its finest light.",
      partner: {
        name: "CNCT Coolers",
        initials: "CC",
        desc: "Makers of the world’s first patented cooler designed for Tesla models S, 3, X, and Y — a functional accessory and a statement piece inspired by the Tesla brand.",
        url: "",
      },
      problem: {
        eyebrow: "The challenge",
        heading: "An online presence worthy of the product",
        body: "Departing from the mundane, inconspicuous coolers of the past, the CNCT Cooler embodies a paradigm where functionality meets artistry. CNCT Coolers wanted to extend that ethos online, partnering with a team that shared their commitment to innovation and excellence to design and develop their Shopify store and landing page.",
        stats: [
          { big: "World’s first", small: "Patented cooler designed for Tesla" },
          { big: "S / 3 / X / Y", small: "Tailored fit for every Tesla model" },
          { big: "2 days", small: "Keeps refreshments chilled" },
          { big: "Shopify", small: "Custom storefront and landing page" },
          { big: "1 month", small: "Custom landing-page build" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "The nexus of design and usability",
        body: "We crafted CNCT’s e-commerce design from the ground up, reimagining every aspect to create an online destination that resonates with the cooler’s brand essence — then integrated it seamlessly into the Shopify framework for a smooth, intuitive browsing experience.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/a6e617ba7196196280569c164fec9b3334fad9a8-2240x1328.webp",
          caption: "A UX/UI design curated to harmonize with the cooler’s aesthetic and put the product center stage.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Design",
            title: "A UX/UI built around the product",
            paras: [
              "The UX/UI design was thoughtfully curated to harmonize with the cooler’s aesthetic, amplifying its visual appeal and functionality.",
              "By fusing innovative design principles with user-centric navigation, we orchestrated an environment where the CNCT Cooler takes center stage, showcased in its finest light.",
            ],
          },
          {
            label: "Step 2",
            tag: "Motion",
            title: "Motion design for every Tesla model",
            paras: [
              "To convey the cooler’s effortless usability, we crafted motion graphics tailored to each Tesla Model — S, 3, X, and Y — establishing a dynamic, engaging connection with viewers.",
              "Through fluid animations, the designs illustrated how seamlessly the cooler integrates into the trunk spaces of different Tesla models, highlighting both compatibility and simplicity of use.",
            ],
          },
          {
            label: "Step 3",
            tag: "Development",
            title: "A fully custom Shopify landing page",
            paras: [
              "We developed a fully custom landing page within the Shopify ecosystem, integrating HTML, CSS, JavaScript, and Liquid to bring the vision to life.",
              "The intensive month-long effort produced an e-commerce platform whose seamless functionality and aesthetic mirror the product itself — so customers find the CNCT Cooler with ease and enjoy a browsing experience as exceptional as the cooler’s design.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "An experience as exceptional as the cooler",
        body: "The result is not just an e-commerce platform, but a virtual embodiment of the cooler itself — where artistry, innovation, and shopping are in perfect harmony, complementing the groundbreaking nature of the CNCT Cooler.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/8fddebb090e7760f7fbac08c5ec7699bcd55c9ef-2232x1320.webp",
          caption: "A bespoke Shopify platform that lets customers indulge in a browsing experience worthy of the product.",
        },
        items: [
          { n: "01", title: "Brand-led e-commerce design", desc: "A storefront designed from the ground up to resonate with the CNCT Cooler’s brand essence." },
          { n: "02", title: "Engaging motion design", desc: "Animations tailored to each Tesla model brought the cooler’s compatibility and usability to life." },
          { n: "03", title: "Custom Shopify build", desc: "A bespoke landing page built with HTML, CSS, JavaScript, and Liquid for seamless functionality." },
        ],
      },
      next: {
        eyebrow: "The impact",
        heading: "Where artistry meets e-commerce",
        checks: [
          "E-commerce design crafted from the ground up",
          "Seamless integration into the Shopify framework",
          "UX/UI harmonized with the cooler’s aesthetic",
          "Motion design tailored to Tesla models S, 3, X, and Y",
          "Custom landing page in HTML, CSS, JavaScript, and Liquid",
          "A browsing experience as exceptional as the product",
        ],
        closing: "By blending innovative design, motion storytelling, and custom Shopify development, the platform perfectly complements the groundbreaking nature of the CNCT Cooler.",
      },
    },
  },
  {
    slug: "myolavson",
    title: "Olavson Replatform to Headless",
    shortTitle: "Olavson — Headless",
    category: CATEGORIES.software,
    csBtn: "OLAVSON",
    img: "/assets/images/cs-olavson.png",
    visitSiteUrl: "https://myolavson.com",
    body: [
      { type: "p", text: "In today's competitive e-commerce market, brands like Olavson need smooth user experiences to stand out. To help them, we migrated their store to a headless Shopify setup using Gatsby and Sanity." },
      { type: "p", text: "This upgrade let us integrate tools like LoyaltyLion, Klaviyo, and other apps for a seamless shopping experience. In this article, we’ll cover Olavson’s challenges, our solutions, the technical approach, and the key outcomes of this transformation." },
      { type: "img", src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/68cd08ed316ecbb74275ce555f025b74d6f76515-1920x1536.png?auto=format", alt: "Olavson product lifestyle image" },
      { type: "h2", text: "What we did" },
      { type: "ul", items: [
        "Headless Replatforming — Migrated from traditional Shopify to a custom Headless architecture for improved performance and scalability.",
        "Account Management — Customers can view their past orders, see shipping details & edit their personal information.",
        "Reusable Component System — Built a library of 35+ modular React components, allowing rapid content creation and flexible page layouts.",
        "Seamless Shopify Integration — Synced products, inventory, and orders in real-time between Shopify and the custom frontend.",
        "Loyalty Systems — Integrated tailored loyalty experiences to boost retention and lifetime value.",
        "Performance & Growth Ready — Delivered a fast, SEO-optimized, and scalable foundation designed for future expansion across new markets.",
      ] },
      { type: "h2", text: "Olavson's Journey: From Challenges to Transformation" },
      { type: "p", text: "Olavson’s previous Shopify store struggled with slow speeds and limited personalization due to its monolithic structure. This lack of flexibility hindered scalability and blocked the integration of crucial apps like LoyaltyLion and Klaviyo. Without these tools, Olavson couldn’t implement tailored promotions, loyalty programs, or effective email marketing, leaving them at a disadvantage in a competitive market." },
      { type: "h2", text: "Unlocking Success" },
      { type: "ul", items: [
        "Flexibility & Scalability: The headless Shopify setup with Gatsby and Sanity enabled seamless app integrations and future-proof scalability.",
        "Performance Gains: Migration to this architecture boosted site speed, performance, and user experience.",
        "Enhanced Marketing Tools: With LoyaltyLion and Klaviyo, Olavson now offers tailored promotions, loyalty programs, and automated email campaigns, improving their competitive edge.",
        "Future-Ready Architecture: The decoupled design simplifies maintenance, upgrades, and adaptability to new trends.",
      ] },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "Replatforming Olavson to headless Shopify with Gatsby and Sanity — integrating LoyaltyLion, Klaviyo and a 35+ component system for speed and scale.",
      heroImage: "https://cdn.sanity.io/images/uw03kwl6/new-prod/68cd08ed316ecbb74275ce555f025b74d6f76515-1920x1536.png?auto=format",
      heroCaption: "Olavson — a faster, future-proof headless storefront.",
      links: [
        { label: "Visit site", url: "https://myolavson.com" },
      ],
      problem: {
        eyebrow: "The challenge",
        heading: "Outgrowing a monolithic Shopify store",
        body: "Olavson's previous Shopify store struggled with slow speeds and limited personalization. Its monolithic structure blocked integrations like LoyaltyLion and Klaviyo, leaving them without tailored promotions, loyalty programs or effective email marketing.",
        stats: [
          { big: "Headless", small: "Gatsby + Sanity" },
          { big: "35+", small: "Reusable React components" },
          { big: "Real-time", small: "Shopify product & order sync" },
          { big: "LoyaltyLion", small: "+ Klaviyo integrated" },
          { big: "SEO", small: "Fast, scalable foundation" },
        ],
      },
      solution: {
        eyebrow: "What we did",
        heading: "A headless replatform",
        body: "We migrated Olavson from traditional Shopify to a custom headless architecture on Gatsby and Sanity — real-time Shopify sync, a modular component library, and the marketing tools they were missing.",
        figure: {
          src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/68cd08ed316ecbb74275ce555f025b74d6f76515-1920x1536.png?auto=format",
          caption: "A decoupled architecture built for performance and future growth.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Replatform",
            title: "Headless on Gatsby + Sanity",
            paras: [
              "We moved Olavson off a monolithic Shopify theme to a custom headless architecture for improved performance and scalability.",
            ],
          },
          {
            label: "Step 2",
            tag: "Components",
            title: "35+ reusable React components",
            paras: [
              "A modular component library enables rapid content creation and flexible page layouts, with real-time product, inventory and order sync to Shopify.",
            ],
          },
          {
            label: "Step 3",
            tag: "Marketing",
            title: "Loyalty & email tools",
            paras: [
              "LoyaltyLion and Klaviyo unlock tailored promotions, loyalty programs and automated email campaigns — plus full account management for customers.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "Unlocking success",
        heading: "Flexible, fast, future-ready",
        checks: [
          "Seamless app integrations and scalability",
          "Improved site speed and user experience",
          "Tailored promotions and loyalty via LoyaltyLion + Klaviyo",
          "Decoupled design for easy maintenance and upgrades",
        ],
        closing: "The headless architecture future-proofs Olavson — simpler to maintain, faster to grow, and ready for expansion into new markets.",
      },
    },
  },
  {
    slug: "petersham-nurseries",
    title: "Create Your Own Hamper",
    shortTitle: "Create Your Own Hamper",
    category: CATEGORIES.software,
    csBtn: "PETERSHAM NURSERIES",
    img: "/assets/images/cs-petersham.png",
    visitSiteUrl: "https://onlineshop.petershamnurseries.com",
    body: [
      { type: "h2", text: "About Petersham Nurseries" },
      { type: "p", text: "Over a twenty-year period, the Boglione family have created a world-renowned brand from a small nursery on land bordering their garden. An imaginative and creative journey, whereby owners Francesco and Gael, along with their four children, have developed the nurseries in line with their commitment to nature, integrity and family." },
      { type: "p", text: "Instead of creating a complex new page template from scratch, the feature leverages Shopify’s native Collection structure." },
      { type: "img", src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/9ec55109cb06a046ae110f657f0109eec1b6c6e7-2400x1600.png?auto=format", alt: "Restaurant table with glasses" },
      { type: "h2", text: "Backend: The Collection Strategy" },
      { type: "p", text: "Source Collection: All eligible products — candles, jams, lotions — are tagged or added to a specific collection, for example `petersham-nurseries-box-products`. This allows the client to easily manage inventory and add or remove products from the hamper options simply by editing the collection in the Shopify Admin." },
      { type: "p", text: "The \"Base\" Product: The \"Gift Box\" itself (£10.00) is a standalone product or a mandatory add-on that initializes the bundle." },
      { type: "h2", text: "Frontend: Custom Box Builder UI" },
      { type: "p", text: "We built a custom interface that overrides the standard collection grid. This is built using vanilla JavaScript embedded within the Liquid theme to handle the real-time state without refreshing the page." },
      { type: "ul", items: [
        "Sticky Sidebar: On the top, there is a sticky \"Box Summary\" module.",
        "State Management: As users click \"Add to Box,\" the JavaScript updates a local state object — the \"virtual box\" — rather than the actual Shopify cart immediately. This allows for instant UI updates, price totals, and item counts without API lag.",
        "Product Cards: Standard \"Add to Cart\" buttons are replaced with \"Add to Box\" buttons.",
        "Visual Feedback: When clicked, the button changes state, for example \"Added\", and the item appears in the summary.",
      ] },
      { type: "img", src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/cc60d5576c20c16eff50a6593d4ece2c555977ab-980x1176.png?auto=format", alt: "Petersham table and flowers" },
      { type: "h2", text: "Logic & Validation rules" },
      { type: "p", text: "Before the user can checkout, the system enforces specific business logic defined by Petersham Nurseries." },
      { type: "ul", items: [
        "Minimum Quantity: The \"Add to cart\" button in the sidebar remains disabled or triggers an alert until the condition — minimum selection per box: 3 items — is met.",
        "Single Hamper Constraint: The text \"One hamper can be purchased per transaction\" is a validation rule that prevents adding multiple \"Box\" bundles to the main cart simultaneously, simplifying fulfillment logistics.",
      ] },
      { type: "h2", text: "Cart Integration — The Handshake" },
      { type: "p", text: "When the user clicks \"Add to cart\" in the sidebar, the system performs a bulk action." },
      { type: "ul", items: [
        "Payload Creation: It gathers the IDs of all selected products plus the ID of the £10.00 \"Gift Box\".",
        "Line Item Properties: It attaches a Line Item Property, for example `_HamperID: 12345`, to every item. This is crucial for the warehouse team; when they print the packing slip, these properties group the items together, signaling that they belong inside the gift box rather than loose in the shipping package.",
        "AJAX API: The system uses Shopify's AJAX Cart API to push all these items to the cart in a single request, redirecting the user to the checkout flow seamlessly.",
      ] },
      { type: "h2", text: "Backend Flow" },
      { type: "ul", items: [
        "User visits `/collections/petersham-nurseries-box-products`.",
        "Shop initializes a \"Virtual Cart\" at the top.",
        "User selects items; JavaScript adds them to the Virtual Cart, preventing page reloads.",
        "Validation checks: is count >= 3?",
        "User clicks \"Add to Cart\"; JavaScript sends all items plus the Box Product to Shopify's actual cart with grouping tags.",
      ] },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "A custom Create-Your-Own-Hamper box builder for a Michelin-star brand — built on Shopify's native Collection structure with a real-time virtual cart.",
      heroImage: "https://cdn.sanity.io/images/uw03kwl6/new-prod/9ec55109cb06a046ae110f657f0109eec1b6c6e7-2400x1600.png?auto=format",
      heroCaption: "Petersham Nurseries — bespoke gifting on Shopify.",
      links: [
        { label: "Visit site", url: "https://onlineshop.petershamnurseries.com" },
      ],
      problem: {
        eyebrow: "About Petersham Nurseries",
        heading: "A world-renowned brand",
        body: "Over twenty years, the Boglione family built a world-renowned brand from a small nursery. Rather than a complex new template, the hamper feature leverages Shopify's native Collection structure — easy for the client to manage.",
        stats: [
          { big: "Shopify", small: "Native Collection structure" },
          { big: "3+", small: "Minimum items per box" },
          { big: "£10", small: "Gift box base product" },
          { big: "Real-time", small: "Virtual cart, no reloads" },
          { big: "AJAX", small: "Single-request cart handshake" },
        ],
      },
      solution: {
        eyebrow: "How it works",
        heading: "A custom box builder",
        body: "Vanilla JavaScript in the Liquid theme overrides the standard collection grid with a virtual box — instant totals and counts — then hands off to Shopify's AJAX Cart API in one bulk request with grouping properties for fulfillment.",
        figure: {
          src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/cc60d5576c20c16eff50a6593d4ece2c555977ab-980x1176.png?auto=format",
          caption: "A sticky box summary with live totals and item counts.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Backend",
            title: "The collection strategy",
            paras: [
              "Eligible products are tagged into a single collection the client manages in Shopify Admin, with a £10 \"Gift Box\" base product that initializes the bundle.",
            ],
          },
          {
            label: "Step 2",
            tag: "Frontend",
            title: "The box builder UI",
            paras: [
              "A sticky box summary and \"Add to Box\" buttons update a local virtual-box state for instant UI, price totals and item counts without API lag.",
            ],
          },
          {
            label: "Step 3",
            tag: "Handshake",
            title: "Cart integration",
            paras: [
              "On checkout, a single AJAX request pushes all items plus the gift box to Shopify, attaching a _HamperID line-item property so the warehouse groups the box contents together.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "Validation & fulfillment",
        heading: "Logic that protects fulfillment",
        checks: [
          "Minimum 3 items enforced before checkout",
          "One hamper per transaction",
          "Line-item properties group box contents for the warehouse",
          "Single AJAX request to Shopify's cart",
        ],
        closing: "Built on Shopify's native primitives, the hamper builder feels fully custom while keeping inventory and fulfillment simple to manage.",
      },
    },
  },
  {
    slug: "mod-lighting",
    title: "MOD Lighting's Headless Migration",
    shortTitle: "MOD Lighting — Headless",
    category: CATEGORIES.software,
    csBtn: "MOD LIGHTING",
    img: "/assets/images/cs-mod-lighting-headless.png",
    visitSiteUrl: "https://mod-lighting.com",
    body: [
      { type: "h2", text: "About MOD Lighting" },
      { type: "p", text: "MOD Lighting, a global leader in contemporary home lighting solutions, has always prioritized staying ahead in a competitive market. After achieving an impressive 314% sales increase through our successful conversion rate optimization collaboration, MOD Lighting entrusted us to drive their next digital transformation." },
      { type: "p", text: "This time, the goal was to migrate their e-commerce platform to a headless architecture, unlocking greater flexibility, performance, and scalability. While the previous optimizations delivered exceptional results, their existing monolithic architecture posed challenges. Its rigid structure limited the ability to implement new features quickly, integrate modern tools, and deliver a seamless user experience across platforms." },
      { type: "p", text: "To maintain their leadership and support their growth, MOD Lighting needed a solution built for the future, and we delivered." },
      { type: "img", src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/b41c55c6fca0ce525d81cea10beb947cc0a5a2a0-3439x1863.png?auto=format", alt: "MOD Lighting bedroom lifestyle visual" },
      { type: "h2", text: "What we did" },
      { type: "ul", items: [
        "Headless Platform — Migrated MOD Lighting to a custom Shopify Plus headless setup, integrating real-time product data, multilingual infrastructure, and reusable modular components for rapid content creation.",
        "Experience & Retention — Implemented a localized architecture enabling seamless expansion into new regions with tailored content, pricing, and languages, all managed natively within Shopify.",
        "Performance & Growth — Delivered a fast, SEO-optimized, and scalable foundation with best-in-class Lighthouse scores and streamlined developer workflows.",
      ] },
      { type: "h2", text: "Architecture Migration" },
      { type: "p", text: "The migration to headless architecture was executed in phases to ensure a seamless transition." },
      { type: "ul", items: [
        "Phase 1 — Planning: A detailed assessment of existing systems and project scope definition.",
        "Phase 2 — Development: Integration of a new CMS and API framework tailored to MOD Lighting's needs.",
        "Phase 3 — Testing: Rigorous issue resolution and performance optimization for a flawless user experience.",
        "Phase 4 — Deployment: Gradual rollout paired with team training for smooth adoption.",
      ] },
      { type: "img", src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/0b56f64976ddbb9718860aa5297299b1be83922c-3440x1856.png?auto=format", alt: "MOD Lighting mobile commerce performance visual" },
      { type: "h2", text: "Key Benefits" },
      { type: "ul", items: [
        "Flexibility: Faster updates and feature rollouts across platforms.",
        "Performance: Enhanced speed and responsiveness, boosting user engagement.",
        "Cost Savings: Custom solutions reduced reliance on paid Shopify apps.",
        "Global Reach: Support for multiple languages, markets, and currencies.",
        "User Experience: Positive customer feedback on smoother, more enjoyable shopping.",
      ] },
      { type: "p", text: "MOD Lighting's move to a headless architecture is a key milestone in their digital transformation. This modern approach has brought greater flexibility, improved performance, and scalability, setting them up for growth and success in a competitive market." },
      { type: "h2", text: "The Reality Gap: When Flat Images Aren't Enough" },
      { type: "p", text: "Selling premium lighting online presents a unique challenge: How do you convey the nuanced glow, the subtle textures, or the exact scale of a fixture when all you have are flat, two-dimensional images? High-ticket customers aren't just buying light; they're investing in ambiance, mood, and a feeling." },
      { type: "img", src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/7b19df1451714fe40d9f81dbf17e19328f6c8638-700x850.png?auto=format", alt: "MOD Lighting chandelier lifestyle visual" },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "After a 314% sales lift from CRO, migrating MOD Lighting to a Shopify Plus headless architecture — multilingual, modular and built for global growth.",
      heroImage: "https://cdn.sanity.io/images/uw03kwl6/new-prod/b41c55c6fca0ce525d81cea10beb947cc0a5a2a0-3439x1863.png?auto=format",
      heroCaption: "MOD Lighting — premium lighting, now headless.",
      links: [
        { label: "Visit site", url: "https://mod-lighting.com" },
      ],
      problem: {
        eyebrow: "About MOD Lighting",
        heading: "Building on a 314% sales lift",
        body: "After a 314% sales increase from our CRO collaboration, MOD Lighting's monolithic architecture became the constraint — rigid, slow to add features, and hard to integrate with modern tools across platforms.",
        stats: [
          { big: "+314%", small: "Prior sales lift from CRO" },
          { big: "Headless", small: "Shopify Plus architecture" },
          { big: "Multilingual", small: "Markets, pricing & languages" },
          { big: "Lighthouse", small: "Best-in-class scores" },
          { big: "Modular", small: "Reusable components" },
        ],
      },
      solution: {
        eyebrow: "Architecture migration",
        heading: "A phased headless migration",
        body: "We migrated MOD Lighting to a custom Shopify Plus headless setup in phases — real-time product data, a localized multilingual infrastructure, and reusable modular components for rapid content creation.",
        figure: {
          src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/0b56f64976ddbb9718860aa5297299b1be83922c-3440x1856.png?auto=format",
          caption: "A fast, SEO-optimized mobile commerce experience.",
        },
        steps: [
          {
            label: "Phase 1",
            tag: "Planning",
            title: "Assess & scope",
            paras: [
              "A detailed assessment of existing systems and clear definition of the project scope.",
            ],
          },
          {
            label: "Phase 2",
            tag: "Development",
            title: "CMS & API framework",
            paras: [
              "Integration of a new CMS and API framework tailored to MOD Lighting's needs.",
            ],
          },
          {
            label: "Phase 3",
            tag: "Testing",
            title: "Optimize & harden",
            paras: [
              "Rigorous issue resolution and performance optimization for a flawless user experience.",
            ],
          },
          {
            label: "Phase 4",
            tag: "Deployment",
            title: "Rollout & training",
            paras: [
              "Gradual rollout paired with team training for smooth adoption.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "Key benefits",
        heading: "Flexible, fast, global",
        checks: [
          "Faster updates and feature rollouts across platforms",
          "Enhanced speed and engagement",
          "Reduced reliance on paid Shopify apps",
          "Multi-language, market and currency support",
        ],
        closing: "MOD Lighting's move to headless is a key milestone — greater flexibility, performance and scalability for a competitive market.",
      },
    },
  },
  {
    slug: "seal-skin-covers",
    title: "Seal Skins Cover Replatforming to Headless",
    shortTitle: "Seal Skin — Headless",
    category: CATEGORIES.software,
    csBtn: "SEAL SKIN COVERS",
    img: "/assets/images/cs-seal-skin-covers.png",
    visitSiteUrl: "https://sealskincovers.com",
    body: [
      { type: "h2", text: "About Seal Skin Covers" },
      { type: "p", text: "Seal Skin, a renowned provider of premium vehicle and marine covers, understands the necessity of crafting a robust online presence. With a strong commitment to quality craftsmanship, Seal Skin recognized the importance of not only showcasing their superior products but also reaching a broader audience through a compelling digital storefront." },
      { type: "p", text: "In this pursuit, Seal Skin partnered with Spell & Sell, as a team of experts in e-commerce design and development. Leveraging our broad expertise, we emerged as the perfect partner to spearhead Seal Skin's digital makeover. Together, we shared a vision of amplifying Seal Skin's brand identity and maximizing its online potential." },
      { type: "p", text: "Through a strategic partnership, we embarked on a journey to revitalize Seal Skin's digital presence. Leveraging their skills and innovative strategies, we aimed to breathe new life into Seal Skin's online platform. Our goal was to not only showcase Seal Skin's products effectively but also to engage customers and drive online success to unprecedented levels." },
      { type: "img", src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/8ccf521de9005abbc9699513438f658d4c12819d-1920x1035.png?auto=format", alt: "Seal Skin Covers product detail interface" },
      { type: "h2", text: "What we did" },
      { type: "ul", items: [
        "Headless Shopify Architecture — Built a performant, headless site using Shopify as a backend and Gatsby for the frontend.",
        "Dynamic Product Configuration — Enabled complex product logic like custom sizes and pricing using Shopify Draft Orders.",
        "Optimized Checkout Flow — Streamlined checkout with dynamic pricing, secure payment, and reduced friction.",
        "High-Performance Hosting — Hosted statically on Netlify with incremental rollout to ensure stability and speed.",
        "Custom Product Catalog System — Created a tailored catalog system to manage 1,000,000+ product variants efficiently.",
        "Sanity CMS Integration — Used Sanity to manage marketing pages and dynamic content independently from Shopify.",
        "Analytics & Pixel Setup — Deployed Meta, Google, and TikTok pixels for actionable insights and campaign performance.",
        "SEO Optimization — Implemented structured data, fast loading, and crawl-friendly architecture for search rankings.",
        "Ongoing Performance Monitoring — Gradual rollout with uptime tracking and data-driven refinements.",
      ] },
      { type: "h2", text: "Optimizing Seal Skin’s product showcase" },
      { type: "p", text: "At the heart of Seal Skin's success are their top-tier vehicle and marine covers, trusted and loved by numerous customers. Our team ensured these products were front and center on the updated e-commerce platform, featuring high-quality images, detailed descriptions, and easy navigation for customers to explore and make informed purchases." },
      { type: "p", text: "We effectively showcased Seal Skin's premium products through our meticulously designed Product Management System. While static content was managed using Sanity, the extensive range of product combinations required a tailored approach." },
      { type: "p", text: "Understanding the challenges of managing such a large catalog within standard platforms, we proposed a custom-built system dedicated to product catalog management, prioritizing user experience." },
      { type: "p", text: "For categories like car covers with similar products, we streamlined them into a limited number of SKUs in Shopify to simplify management and eliminate duplication." },
      { type: "p", text: "Addressing the complexity of boat covers with varying sizes, our team developed an algorithm to calculate prices based on dimensions, seamlessly integrated into the checkout process using Shopify Draft Order API. This allowed mapping numerous products to a few in Shopify while retaining crucial custom properties." },
      { type: "p", text: "Technically, our solution comprised Gatsby.JS & React for a Headless front-end and a Ruby on Rails backend for enhanced robustness and cost-effectiveness with minimal maintenance." },
      { type: "h2", text: "A gradual rollout for optimal performance" },
      { type: "p", text: "As Spell & Sell, we enhanced Seal Skin's e-commerce platform for efficiency and user convenience, introducing features like smooth checkout, secure payment options, and responsive design for seamless browsing across devices." },
      { type: "p", text: "The new Seal Skin Covers solution is currently in the rollout phase, starting with a 10% traffic split. This gradual approach ensures a smooth transition and optimal performance of the new website while closely monitoring its functionality. By incrementally increasing traffic, we can assess uptime, address any issues promptly, and make necessary improvements, prioritizing a seamless user experience." },
      { type: "p", text: "This systematic testing approach reflects our commitment to delivering a high-quality, dependable e-commerce platform for Seal Skin Covers." },
      { type: "p", text: "Collaboration between Spell & Sell and Seal Skin extends beyond the website launch. With ongoing support and optimization services, we ensure Seal Skin's online store remains innovative, adapting to evolving trends and customer needs." },
      { type: "h2", text: "The Headless E-Commerce Solution" },
      { type: "p", text: "To solve Seal Skin’s complex product and content challenges, Spell & Sell rebuilt their platform using a headless architecture. Shopify served strictly as the backend, while a modern tech stack powered the customer-facing experience for greater flexibility and performance." },
      { type: "p", text: "The solution combined two core systems: a content management layer and a product management layer, each optimized for both build time and runtime. Using Gatsby, the site was statically generated and deployed on Netlify for fast global delivery and efficient handling of large content volumes." },
      { type: "p", text: "Most pages loaded instantly from static snapshots, while checkout and dynamic features interacted with Shopify in real time. To further enhance speed, we implemented deferred static generation, prebuilding high-traffic pages and generating less-frequent ones on demand." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "Replatforming Seal Skin to headless — Gatsby + Shopify + Ruby on Rails handling 1,000,000+ variants, with a custom catalog and dynamic dimension-based pricing.",
      heroImage: "https://cdn.sanity.io/images/uw03kwl6/new-prod/8ccf521de9005abbc9699513438f658d4c12819d-1920x1035.png?auto=format",
      heroCaption: "Seal Skin Covers — premium vehicle & marine covers, headless.",
      links: [
        { label: "Visit site", url: "https://sealskincovers.com" },
      ],
      problem: {
        eyebrow: "About Seal Skin Covers",
        heading: "Premium vehicle & marine covers",
        body: "Seal Skin, a renowned provider of premium vehicle and marine covers, needed a robust digital storefront — but an enormous catalog of sizes and combinations made standard platforms unworkable.",
        stats: [
          { big: "1M+", small: "Product variants managed" },
          { big: "Headless", small: "Gatsby + Shopify + Rails" },
          { big: "Netlify", small: "Static hosting, global delivery" },
          { big: "Draft Orders", small: "Dimension-based pricing" },
          { big: "10%", small: "Gradual traffic rollout" },
        ],
      },
      solution: {
        eyebrow: "What we did",
        heading: "A headless e-commerce solution",
        body: "Shopify served strictly as the backend while Gatsby + React (with a Ruby on Rails backend) powered the storefront — statically generated on Netlify, with a custom catalog system for a massive variant space.",
        figure: {
          src: "https://cdn.sanity.io/images/uw03kwl6/new-prod/8ccf521de9005abbc9699513438f658d4c12819d-1920x1035.png?auto=format",
          caption: "A tailored catalog system for over a million product variants.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Catalog",
            title: "Custom product catalog",
            paras: [
              "A bespoke catalog management system handles 1,000,000+ variants — streamlining similar car covers into a few Shopify SKUs to eliminate duplication.",
            ],
          },
          {
            label: "Step 2",
            tag: "Pricing",
            title: "Dimension-based pricing",
            paras: [
              "For boat covers with varying sizes, an algorithm calculates price by dimensions and integrates into checkout via the Shopify Draft Order API, mapping many products to a few while keeping custom properties.",
            ],
          },
          {
            label: "Step 3",
            tag: "Delivery",
            title: "Static on Netlify",
            paras: [
              "Gatsby statically generates the site on Netlify with deferred static generation — prebuilding high-traffic pages and generating less-frequent ones on demand.",
            ],
          },
        ],
      },
      next: {
        eyebrow: "The outcome",
        heading: "Fast, scalable, gradual",
        checks: [
          "Custom catalog for 1,000,000+ variants",
          "Dimension-based pricing via Shopify Draft Orders",
          "Static Gatsby build on Netlify with deferred generation",
          "Incremental 10% rollout with uptime monitoring",
        ],
        closing: "A headless rebuild gave Seal Skin a fast, flexible storefront that handles enormous product complexity while rolling out safely.",
      },
    },
  },
  {
    slug: "headless-architecture-for-old-gold-racing",
    title: "Building a captivating community: The headless architecture transformation of Old Gold Racing",
    shortTitle: "Old Gold Racing Headless Architecture",
    category: CATEGORIES.software,
    csBtn: "Old Gold Racing",
    img: "/assets/images/cs-old-gold-racing.webp",
    visitSiteUrl: "https://oldgoldracing.com",
    tags: ["Headless", "Platform architecture", "New UX/UI", "With innovative features"],
    body: [
      { type: "p", text: "Old Gold Racing is a leading racing syndicate management business that revolutionizes the co-ownership experience of racehorses. Unlike its competitors, OGR aligns itself more closely with racing clubs, prioritizing exceptional value for its members. As the business evolved, Old Gold Racing needed to transform its outdated WordPress website into a modern platform that could captivate its audience and deliver a stronger user experience." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "Transforming Old Gold Racing’s WordPress site into a faster, headless platform built with Gatsby.js and Sanity — designed for performance, ownership, gifting, content, and community engagement.",
      heroVideo: "https://files.sogody.co.uk/2025-04-24T14-08-14.900Z-old-gold-1.mp4",
      heroPoster: "https://cdn.sanity.io/images/3hfxs7a8/production/5e1716366d71d773d893276d0b6e58998c27bacd-1728x1080.png",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/5e1716366d71d773d893276d0b6e58998c27bacd-1728x1080.png",
      heroCaption: "A faster, more interactive digital platform for Old Gold Racing’s racehorse co-ownership community.",
      partner: {
        name: "Old Gold Racing",
        initials: "OGR",
        desc: "A racing syndicate management business redefining racehorse co-ownership through content, transparency, events, and member engagement.",
        url: "https://oldgoldracing.com",
      },
      links: [
        { label: "Visit site", url: "https://oldgoldracing.com" },
      ],
      problem: {
        eyebrow: "The challenge",
        heading: "A growing community held back by an outdated platform",
        body: "Old Gold Racing had built a strong member community around racehorse co-ownership, but its WordPress website was no longer matching the needs of the business. Slow response times, limited flexibility, and an outdated experience made it harder to deliver the fast, content-rich, and transaction-ready platform members expected.",
        stats: [
          { big: "WordPress", small: "Original platform" },
          { big: "2 sec", small: "Approximate request delays before migration" },
          { big: "Headless", small: "New architecture direction" },
          { big: "Gatsby.js", small: "Fast frontend layer" },
          { big: "Sanity", small: "Flexible content management" },
        ],
      },
      solution: {
        eyebrow: "What we built",
        heading: "A headless architecture for speed and flexibility",
        body: "Sogody moved Old Gold Racing toward a headless setup using Gatsby.js and Sanity, giving the platform a faster frontend, a more flexible content layer, and a stronger foundation for ongoing feature development.",
        figure: {
          video: "https://files.sogody.co.uk/2025-04-24T14-08-32.366Z-old-gold-2.mp4",
          poster: "https://cdn.sanity.io/images/3hfxs7a8/production/2f8a2e268f0c52751ac42119a49a408870e4c844-1440x1080.png",
          caption: "Old Gold Racing’s transformed platform — faster, more interactive, and built around community.",
        },
        steps: [
          {
            label: "Step 1",
            tag: "Research",
            title: "Understanding the member journey",
            paras: [
              "We began with an in-depth research process to understand OGR’s customers, their expectations, and how the platform needed to support content, ownership, and community.",
              "This research showed that a headless architecture would give the business the flexibility and performance it needed.",
            ],
          },
          {
            label: "Step 2",
            tag: "Architecture",
            title: "Moving from WordPress to headless",
            paras: [
              "The previous WordPress site created performance limitations, with requests taking around two seconds to complete.",
              "By moving to a headless architecture with Gatsby.js and Sanity, the platform became faster, more scalable, and easier to evolve.",
            ],
          },
          {
            label: "Step 3",
            tag: "Performance",
            title: "Milliseconds instead of seconds",
            paras: [
              "Using Netlify CI/CD workflows, developers could build, test, and deploy new features faster.",
              "The new architecture reduced response times from seconds to milliseconds, giving users a smoother and more responsive experience.",
            ],
          },
          {
            label: "Step 4",
            tag: "UX/UI",
            title: "Designing a more captivating experience",
            paras: [
              "Our design team created new wireframes and UX/UI flows to modernize the platform and improve user satisfaction.",
              "The new experience focused on making browsing, purchasing, gifting, and engaging with content easier and more compelling.",
            ],
          },
          {
            label: "Step 5",
            tag: "Community",
            title: "From shopping to community",
            paras: [
              "We introduced a gift cart feature, allowing users to purchase shares or horses for family and friends.",
              "We also redesigned the blog experience with stronger content presentation and social sharing options, helping members connect more deeply with OGR’s updates and stories.",
            ],
          },
        ],
      },
      output: {
        eyebrow: "The outcome",
        heading: "A faster, richer ownership experience",
        body: "Old Gold Racing’s new platform moved beyond a standard shopping experience. It became a faster, more interactive, and more community-focused destination for racehorse co-ownership.",
        figure: {
          src: "https://cdn.sanity.io/images/3hfxs7a8/production/d29f36e3e950e286e89a7166fd5a01827bdc4130-2240x1328.webp",
          caption: "A platform built to support performance, transactions, content, and community.",
        },
        items: [
          { n: "01", title: "Improved performance", desc: "Response times improved from seconds to milliseconds through the new headless architecture." },
          { n: "02", title: "Faster development workflow", desc: "Netlify CI/CD workflows made it easier to build, test, and deploy features quickly." },
          { n: "03", title: "Better ownership journey", desc: "The main cart and gift cart made purchasing horse shares more flexible and community-oriented." },
          { n: "04", title: "More engaging content", desc: "A redesigned blog experience helped members connect with stories, updates, and social sharing." },
        ],
      },
      next: {
        eyebrow: "The impact",
        heading: "A platform built for a racing community",
        checks: [
          "Headless architecture using Gatsby.js and Sanity",
          "Improved response times from seconds to milliseconds",
          "Netlify CI/CD workflow for faster development",
          "New UX/UI built around member needs",
          "Gift cart functionality for purchasing shares for others",
          "Redesigned blog and content experience",
          "Stronger foundation for community engagement",
        ],
        closing: "By combining performance, UX/UI, and community-focused features, Sogody helped Old Gold Racing create a platform that better serves members and supports the brand’s growth.",
      },
    },
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
    article: {
      tags: ["Human–AI Interfaces", "Domain-Specific Software Platforms"],
      author: { name: "Diellza", role: "Co-Founder at AldAstra", initials: "D" },
      dateLabel: "March 2026",
      readingTime: "5 min read",
      blocks: [
        { type: "h2", text: "The Early Days: In the Heart of a Startup" },
        { type: "lead", text: "Nearly eight years ago, fresh out of university, I walked into the very first Sogody office. It wasn't a corporate glass tower; it was an apartment-turned-office, shared by a handful of people with a mountain of ambition. I was a junior in every sense — inexperienced, but fueled by an undeniable energy to build something from the ground up." },
        { type: "p", text: "Being one of the first employees in a startup meant there were no small tasks. Each of us wore multiple hats, and every effort was dedicated to moving the needle forward. Looking back, my 21-year-old self would hardly believe that nearly a decade later, I'd still be here, growing alongside the same core team. She certainly wouldn't have believed that the girl just trying to “figure things out” would eventually become a Co-Founder." },
        { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/ab655200c3c364bff6484c1af3eef7dee86e1536-1674x990.png", caption: "The early Sogody days — an apartment-turned-office and a mountain of ambition." },
        { type: "h2", text: "The Turning Point: Trust as a Catalyst" },
        { type: "p", text: "In a startup environment, you don't wait for a roadmap; you build it as you go. My first major professional test came through a project with Samsung (Cheil) — a global giant versus a green junior." },
        { type: "p", text: "I remember nervously asking Lorik if he'd be joining the meeting for support. His response changed my trajectory:" },
        { type: "quote", text: "You know the work better than I do. You'll do just fine.", cite: "Lorik" },
        { type: "p", text: "That vote of confidence was my catalyst. He fully trusted my competence, and I was determined to honor that trust. From that day on, I never stopped pushing my boundaries. I moved from managing projects to leading teams and solving complex problems. I learned that growth refuses to happen in a safe zone — you have to stay uncomfortable to get better." },
        { type: "h2", text: "The Foundation: Values Over Technicality" },
        { type: "p", text: "Over the years, I've likely shared more lunches with the Sogody team than with my own family. These people shaped my formative years, teaching me that human decency is the ultimate pillar of a workplace; expertise and skills are built on top of it." },
        { type: "p", text: "I've always believed that you are the average of the people you work with. I chose a “high average”:" },
        { type: "list", items: [
          { strong: "From Tomor,", text: "I learned that technical skills are just tools. The real value lies in being a generalist with rock-solid logic who can dismantle any problem." },
          { strong: "From Lorik,", text: "I learned that engineering is only half the battle. If you cannot communicate effectively and build trust, your technical impact will always have a ceiling." },
        ] },
        { type: "h2", text: "The Next Chapter: Co-Founding AldAstra" },
        { type: "p", text: "After years of collaborating with brands like Samsung, Unilever, and Thrasio, there came a natural point where I wanted to scale my impact further." },
        { type: "p", text: "True to its culture of empowerment, Sogody invested in that vision. Together, we co-founded AldAstra alongside Synim — who has been a partner in this journey since the beginning." },
        { type: "p", text: "Today, history is repeating itself. We are “figuring things out” again, but this time from the founder's seat. We are navigating the SaaS world with the same grit and foundations we inherited from Sogody. My focus has shifted: I am no longer just building products that win; I am building a new generation of talent that is ready for whatever comes next." },
      ],
    },
  },
  {
    slug: "WhySogody2030",
    title: "Why We Rebuilt Sogody.com for 2030",
    desc: "Sogody.com was rebuilt to reflect where the company is going next: deeper engineering, stronger AI systems, clearer positioning, and a digital presence built for the next decade.",
    date: "2026",
    category: CATEGORIES.software,
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/932cda715e4e736b9b636c51c217135edc3cdfa3.webp",
    body: [
      { type: "p", text: "We rebuilt Sogody.com as a future-ready platform that reflects our evolution toward intelligence, infrastructure and human–AI interfaces for the next generation of products." },
    ],
    article: {
      tags: ["Domain-Specific Software Platforms", "AI & Data Systems", "Human–AI Interfaces"],
      author: { name: "Sogody Team", role: "Sogody", initials: "S" },
      dateLabel: "January 2026",
      readingTime: "4 min read",
      blocks: [
        { type: "lead", text: "Because building well isn't enough anymore. For years, Sogody engineered platforms built to scale. What's changed is what “scale” now requires: systems that don't just perform — they learn, recommend, and evolve on their own. Our site didn't reflect that shift, so we rebuilt it." },
        { type: "h2", text: "A Site That Matches the Work We Do Now" },
        { type: "p", text: "The rebuild is less a redesign than a correction — bringing the site in line with what we actually build. Sogody works as a digital architecture partner for teams scaling with AI-powered platforms, custom digital ecosystems, and real-time commerce infrastructure, and the new site is organized around that: clear navigation across AI, engineering, and e-commerce, and a growing library of case studies showing the work behind the claims." },
        { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/06e9f91bd67d9546e547e5925e48654aa86c2e4e-2232x1332.webp", caption: "The new sogody.com — organized around AI, engineering, and commerce infrastructure." },
        { type: "h2", text: "Designed for the Decade Ahead" },
        { type: "p", text: "By 2030, the platforms that win will be the ones that personalize, automate, and improve themselves without constant manual input. That's already the kind of system we build for clients, and it's the standard we designed this site to meet — infrastructure for what comes next, not a snapshot of where we are today." },
        { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/5603f1ed551049d02395ab12162c19865c1b337f-2240x1328.webp", caption: "Built as infrastructure for the next decade, not a snapshot of today." },
        { type: "h2", text: "What Comes Next" },
        { type: "p", text: "This launch is a starting point. Over time, the site will carry more of the thinking behind the work: engineering write-ups, breakdowns of how we approach AI architecture, product rollouts, and the strategic questions we help clients work through before they build. We invite you to explore it, bookmark it, and build with us." },
      ],
    },
  },
  {
    slug: "power-of-chatbots-and-virtual-assistants",
    title: "The Role of Chatbots and Virtual Assistants in Modern Customer Service",
    desc: "Chatbots and virtual assistants have moved from novelty to business infrastructure. Used well, they help companies respond faster, personalize support, and turn customer interactions into structured insight.",
    date: "2024",
    category: CATEGORIES.ai,
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/29c96cdeeebe79b7f141365da0f7ced77e69b507.webp",
    body: [
      { type: "p", text: "Chatbots and virtual assistants have moved from novelty to business infrastructure — used well, they help companies respond faster, personalize support, and turn customer interactions into structured insight." },
    ],
    article: {
      tags: ["AI & Data Systems"],
      author: { name: "Sogody Team", role: "Sogody", initials: "S" },
      dateLabel: "April 2024",
      readingTime: "6 min read",
      blocks: [
        { type: "h2", text: "What Chatbots and Virtual Assistants Are" },
        { type: "lead", text: "Chatbots and virtual assistants have moved from novelty to business infrastructure. Chatbots are software applications built to simulate conversation — answering questions, sharing information, or guiding a customer to the right next step. Virtual assistants go further: they connect to other systems, complete tasks, and adapt to how a person actually uses them." },
        { type: "h2", text: "Rule-Based vs. AI-Powered Chatbots" },
        { type: "p", text: "Not all chatbots work the same way. Rule-based bots follow a fixed script — reliable for simple, predictable questions, but unable to handle anything outside their training. AI-powered bots use machine learning and natural language processing instead: they interpret intent, learn from past conversations, and improve the more they're used." },
        { type: "h2", text: "Virtual Assistants as Broader Task Systems" },
        { type: "p", text: "A virtual assistant is not just a chat window. It can integrate with booking systems, CRMs, and internal tools to complete a task end-to-end — checking an order status, rescheduling an appointment, or routing a request to the right team. Wendy's, for example, uses an AI assistant to take and confirm drive-thru orders, cutting wait times without slowing down accuracy." },
        { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/0587148f9f5a641efa88aa4d1681ee87f53acfa4-1920x952.webp", caption: "AI-powered assistants now handle a growing share of routine customer interactions." },
        { type: "h2", text: "Where They Create Business Value" },
        { type: "list", items: [
          { strong: "Availability,", text: "support that doesn't stop at the end of a shift." },
          { strong: "Scale,", text: "one system handling many conversations at once." },
          { strong: "Data,", text: "every interaction becomes a signal for what to fix or improve." },
          { strong: "Personalization,", text: "responses shaped by a customer's history and preferences." },
          { strong: "Language,", text: "support across markets without hiring for every language." },
          { strong: "Automation,", text: "routine follow-ups and segmented outreach handled without manual work." },
        ] },
        { type: "h2", text: "Implementation Best Practices" },
        { type: "p", text: "Chatbots work best when they start with a clear objective tied to the broader digital strategy, not as a standalone experiment. Investing in natural language processing improves how well the system understands real questions, and reviewing conversations regularly — not just at launch — is what keeps it accurate as customer needs change." },
        { type: "h2", text: "Sogody's Perspective" },
        { type: "p", text: "We build conversational AI as part of a company's data and customer-experience systems, not as an isolated tool — so what a chatbot learns from a conversation actually feeds back into the business." },
        { type: "h2", text: "Where This Is Headed" },
        { type: "p", text: "As the underlying models improve, chatbots and virtual assistants will keep expanding — connecting to more systems, understanding more context, and handling more of the routine work that used to require a human first response. Used well, they don't replace a support team; they give it more time for the conversations that need one." },
      ],
    },
  },
  {
    slug: "Enhancing-customer-feedback-analysis-with-AI-benefits-and-impact",
    title: "Using AI to Make Customer Feedback Actionable",
    desc: "Collecting feedback is easy. Understanding it at scale is harder. AI helps teams move from scattered comments and survey responses to patterns they can prioritize, measure, and act on.",
    date: "2024",
    category: CATEGORIES.ai,
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/cd962fc4aa06e4e631a95bfd1886ec50ff429414.webp",
    body: [
      { type: "p", text: "Collecting feedback is easy. Understanding it at scale is harder — AI helps teams move from scattered comments and survey responses to patterns they can prioritize, measure, and act on." },
    ],
    article: {
      tags: ["AI & Data Systems", "Human–AI Interfaces"],
      author: { name: "Sogody Team", role: "Sogody", initials: "S" },
      dateLabel: "July 2024",
      readingTime: "5 min read",
      blocks: [
        { type: "h2", text: "Why Feedback Analysis Matters" },
        { type: "lead", text: "Collecting feedback is easy. Understanding it at scale is harder. Most businesses have more customer feedback than they can manually read — reviews, support tickets, survey responses — and the value sits in patterns that are invisible one comment at a time." },
        { type: "h2", text: "How AI Detects Patterns and Sentiment" },
        { type: "p", text: "AI-driven analysis sorts feedback into categories, tracks sentiment, and surfaces what's changing in near real time — so a new complaint pattern shows up on a dashboard before it becomes a trend. ASOS, for one, uses this kind of automated analysis to spot recurring product issues and adjust faster than manual review would allow." },
        { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/74d7b3b415e5ab5e54ba59d8fe19a954658f4ed2-2240x1328.webp", caption: "Automated analysis surfaces feedback patterns as they emerge, not weeks later." },
        { type: "h2", text: "What It Improves" },
        { type: "list", items: [
          { strong: "Speed,", text: "feedback is processed as it arrives, not in a weekly batch." },
          { strong: "Accuracy,", text: "automated tagging reduces the inconsistency of manual review." },
          { strong: "Visibility,", text: "trends and emerging issues surface while there's still time to act." },
          { strong: "Prediction,", text: "historical patterns help forecast churn risk and shifting preferences." },
        ] },
        { type: "h2", text: "Where It Falls Short" },
        { type: "p", text: "AI models can misread sarcasm, context, or ambiguous phrasing, and biased training data can skew results. None of this replaces judgment — it narrows down what deserves a closer look." },
        { type: "h2", text: "Getting Implementation Right" },
        { type: "list", items: [
          { strong: "Start with a goal,", text: "decide what the analysis should improve before choosing a tool." },
          { strong: "Start small,", text: "test on a limited data set before rolling out across every channel." },
          { strong: "Keep training it,", text: "models need regular updates as customer language and priorities shift." },
          { strong: "Check the output,", text: "review whether the insights are actually accurate and useful, not just plentiful." },
        ] },
        { type: "h2", text: "What This Means for CX Teams" },
        { type: "p", text: "Done well, this turns feedback from a backlog into a working input — something a team can prioritize, measure, and act on, rather than a folder no one has time to read." },
      ],
    },
  },
  {
    slug: "the-impact-of-artificial-intelligence-on-customer-retention",
    title: "How AI Improves Customer Retention",
    desc: "Retention improves when businesses understand customers earlier. AI helps identify patterns in behavior, predict churn risk, and personalize the next interaction before a customer disappears.",
    date: "2024",
    category: CATEGORIES.ai,
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/a48306792c35531b2ebae5142cb503973a4a88aa.webp",
    body: [
      { type: "p", text: "Retention improves when businesses understand customers earlier — AI helps identify patterns in behavior, predict churn risk, and personalize the next interaction before a customer disappears." },
    ],
    article: {
      tags: ["AI & Data Systems", "Human–AI Interfaces"],
      author: { name: "Sogody Team", role: "Sogody", initials: "S" },
      dateLabel: "June 2024",
      readingTime: "5 min read",
      blocks: [
        { type: "h2", text: "Retention Starts With Understanding Behavior" },
        { type: "lead", text: "Retention improves when businesses understand customers earlier. AI reads behavior — what someone bought, how they browse, what they respond to — and turns it into a signal for what to do next." },
        { type: "h2", text: "Personalization" },
        { type: "p", text: "Recommendation engines and behavioral analytics track a customer's history to surface products and offers that are actually relevant, rather than generic. When a recommendation lands, it reinforces the relationship, not just the transaction." },
        { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/1a77ae6eabbfcc3c7cba4cbae53beaa8d326478d-2240x1328.webp", caption: "Personalized recommendations reinforce the relationship, not just the transaction." },
        { type: "h2", text: "Predicting Churn Before It Happens" },
        { type: "p", text: "Pattern recognition across purchase frequency, engagement, and feedback can flag customers at risk of leaving before they do. H&M uses this kind of predictive modeling on buying behavior and site activity to catch early signs of disengagement and respond with targeted offers or service outreach." },
        { type: "h2", text: "Automating Customer Service" },
        { type: "p", text: "Routine questions and common issues can be handled automatically, freeing support teams to focus on the complaints and requests that actually need a person. The result is faster response times without a drop in service quality." },
        { type: "h2", text: "Lifecycle Engagement and Lifetime Value" },
        { type: "p", text: "The logic is simple: AI reads behavior, identifies risk, recommends the next-best action, and teams respond earlier and more personally than they could manually. Over time, that consistency is what compounds into lifetime value — fewer customers lost to silence, more retained through timely, relevant attention." },
        { type: "h2", text: "What's Next" },
        { type: "p", text: "As models improve, the gap between a customer's first sign of disengagement and a business's response keeps shrinking. That's the real advantage — not more automation for its own sake, but businesses that notice sooner." },
      ],
    },
  },
  {
    slug: "exploring-ml-dl-and-nlp-in-ai-transformations",
    title: "ML, Deep Learning, and NLP: The Core Techniques Behind AI Systems",
    desc: "Most AI products are not built from one technique. They combine machine learning, deep learning, and natural language processing to recognize patterns, interpret language, and make better decisions from data.",
    date: "2024",
    category: CATEGORIES.ai,
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/c2109b190261a01a246cb306b330b28549fd3c77.webp",
    body: [
      { type: "p", text: "Most AI products are not built from one technique — they combine machine learning, deep learning, and natural language processing to recognize patterns, interpret language, and make better decisions from data." },
    ],
    article: {
      tags: ["AI & Data Systems"],
      author: { name: "Sogody Team", role: "Sogody", initials: "S" },
      dateLabel: "February 2024",
      readingTime: "6 min read",
      blocks: [
        { type: "h2", text: "Why These Techniques Matter" },
        { type: "lead", text: "Most AI products are not built from one technique. They combine machine learning, deep learning, and natural language processing to recognize patterns, interpret language, and make better decisions from data — each doing a different part of the job." },
        { type: "h2", text: "Machine Learning" },
        { type: "p", text: "Machine learning is the broadest of the three: algorithms that learn from data rather than explicit instructions. Supervised learning trains on labeled examples — the logic behind Netflix's recommendations. Unsupervised learning finds structure without labels, which is how search engines group similar pages. Reinforcement learning improves through trial and error, rewarded or penalized for each outcome — the same approach behind game-playing systems that master chess or Go." },
        { type: "h2", text: "Deep Learning" },
        { type: "p", text: "Deep learning is a subset of machine learning modeled loosely on the brain's neural networks, processing information through layered, interconnected nodes. Convolutional networks read images and video, used in healthcare to flag anomalies in medical scans. Recurrent networks handle sequential data like time series or text, applied in finance to read market trends. Generative adversarial networks pit two models against each other to produce new data — realistic images, for instance — from scratch." },
        { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/958c19074db9ff4bb6695f2f4918f56b6b553371-7680x3808.webp", caption: "Machine learning, deep learning, and NLP each handle a different part of the same problem." },
        { type: "h2", text: "Natural Language Processing" },
        { type: "p", text: "NLP sits at the intersection of the two, giving machines the ability to understand, interpret, and generate human language. It powers sentiment analysis, entity recognition, translation, and the conversational interfaces behind assistants like Siri and Alexa. Large language models are the latest step in this line — pushing how accurately a system can read and produce language." },
        { type: "h2", text: "How They Work Together" },
        { type: "p", text: "In practice, these techniques rarely run in isolation. Machine learning provides the foundation, deep learning drives the harder computational work, and NLP applies both to language specifically. One Sogody-built example, TweetPeek, combines sentiment analysis with supervised recommendation models to read a profile and surface relevant, personalized suggestions in seconds." },
        { type: "h2", text: "How They Shape Digital Products" },
        { type: "p", text: "The products that feel most “intelligent” today are usually the ones combining several of these techniques quietly, in the background — recommending, predicting, and adjusting without asking the user to notice the machinery behind it." },
      ],
    },
  },
  {
    slug: "sogody-at-the-diaspora-symposium",
    title: "Developing an AI powerhouse: Key takeaways from Sogody at the Diaspora Symposium",
    desc: "Sogody joined the Diaspora Symposium on Computer Science at the University of Prishtina for a discussion on artificial intelligence in Kosovo, sharing practical lessons from building AI-powered products and applied systems.",
    date: "2023",
    category: CATEGORIES.ai,
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/edac90a98fa1f801f95e032879545fa6868539a7.webp",
    body: [
      { type: "p", text: "This symposium, held on the 13th of July at the University of Prishtina, brought together prominent figures from universities, industry, the local community and the diaspora to exchange cutting-edge research and best practices in artificial intelligence." },
      { type: "p", text: "As a panelist in the final plenary session on “AI and Industry in Kosova,” Sogody’s Head of R&D, Synim Selimi, shared insights on optimizing processes, developing advanced AI models and integrating them into real-world applications — and highlighted two AI-powered tools the company developed: Replix and TweetPeek." },
    ],
    article: {
      tags: ["AI & Data Systems"],
      author: { name: "Sogody Team", role: "Sogody", initials: "S" },
      dateLabel: "July 2023",
      readingTime: "4 min read",
      blocks: [
        { type: "h2", text: "AI in Kosovo, On Stage" },
        { type: "lead", text: "Sogody joined the Diaspora Symposium on Computer Science, organized by the National Research School in ICT, for a day of discussion on artificial intelligence in Kosovo. Held on 13 July at the University of Prishtina, the event brought together researchers, industry, and diaspora professionals to compare notes on where AI in the region stands." },
        { type: "p", text: "The agenda covered automation engineering, machine learning at scale, and AI's growing role in software engineering more broadly." },
        { type: "image", src: "https://cdn.sanity.io/images/3hfxs7a8/production/3ca40d81bc0d099d42492460286b792ab9276852-3840x1904.webp", caption: "The Diaspora Symposium on Computer Science, University of Prishtina — 13 July." },
        { type: "h2", text: "On the Panel: AI and Industry in Kosova" },
        { type: "p", text: "Synim Selimi, Sogody's Head of R&D, joined the plenary panel on “AI and Industry in Kosova.” He walked through how the team applies AI models to real production systems — process optimization, and two tools built in-house, Replix and TweetPeek — and what that work has shown about where AI creates real leverage versus where it's still overstated." },
        { type: "h2", text: "Building AI Teams" },
        { type: "p", text: "Much of the discussion focused on how AI-capable teams are actually built: multidisciplinary collaboration, a solid grounding in data science, and a working understanding of the algorithms themselves, not just the tools built on top of them. Selimi also spoke to Kosovo's AI talent pool specifically — where it's strong, where it needs investment, and what keeps the region competitive as AI hiring becomes more global." },
        { type: "h2", text: "Recognition" },
        { type: "p", text: "Fatbardh Kadriu, a Sogody software engineer and University of Prishtina graduate, joined a separate panel on “Research of AI in Kosova.” Both Kadriu's colleague Arbena Musa and Synim Selimi were recognized at the Albanian ICT Awards." },
        { type: "h2", text: "Kosovo's Growing AI Talent" },
        { type: "p", text: "Events like this are a reminder of how much applied AI work is already happening out of Kosovo. Sogody's role is to keep building the systems — and the teams — that put that talent to use." },
      ],
    },
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
