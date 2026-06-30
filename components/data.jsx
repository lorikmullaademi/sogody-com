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
    img: "assets/images/cs-life-sciences.png",
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
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/e3654dfe805cebbc83ac9efb864d61e8c775e91b.webp",
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
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/a6810ae2f04b8cccd82c02dced105596996edde2.webp",
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
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/dc256c2290dd92301a16dff904784463d2e48252.webp",
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
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/410181d46ac8b604ec00f46d31395fb8122522e0.webp",
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
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/dc256c2290dd92301a16dff904784463d2e48252.webp",
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
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/6000817780f1b7196134b0cbeb6421a0de1e9833.webp",
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
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/6000817780f1b7196134b0cbeb6421a0de1e9833.webp",
    visitSiteUrl: "https://www.lifebuoy.com",
    body: [
      { type: "p", text: "Lifebuoy’s award-winning ‘H is for Handwashing’ campaign engages children with the importance of handwashing — turning the letter H into a symbol for handwashing. Having already built Lifebuoy’s microsite and revamped its main site, we delivered fun, interactive educational content across three localized Lifebuoy sites." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      subtitle: "An award-winning ‘H is for Handwashing’ campaign — fun, interactive educational content that turns the letter H into a symbol for handwashing, delivered across three localized Lifebuoy sites.",
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
      },
      solution: {
        eyebrow: "What we built",
        heading: "A custom, interactive campaign",
        body: "Having already built Lifebuoy’s microsite and revamped its main site, we collaborated to deliver the ‘H is for Handwashing’ campaign — fun, interactive educational content for children and caregivers around the world, built under real urgency across many teams.",
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
      },
    },
  },
  {
    slug: "creating-a-digital-experience-for-knorr",
    title: "Creating a digital experience for Knorr",
    shortTitle: "Knorr Digital Experience",
    category: CATEGORIES.software,
    csBtn: "Knorr",
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/d1b9bf2d596205d0b6d6fbd08bd723c1c858d0e2.webp",
    visitSiteUrl: "https://www.knorr.com",
    body: [
      { type: "p", text: "Through our efforts to build a master site for the Arabian market, we created a user experience that meets the needs and expectations of users and is built with usability in mind, making it easier for users to find all the necessary information." },
      { type: "p", text: "The most important technical challenge our team faced was that this was the first time we were building an e-commerce website for Knorr Arabia — there was no previous version to build upon. We built a master site using Adobe Experience Manager (AEM) with entirely custom components that serve as a template for all future localizations, connected to a Recipe Management System and a filtering system for recipes." },
    ],
    modern: {
      eyebrow: "Domain-Specific Software Platforms",
      noHero: true,
      subtitle: "A new Knorr e-commerce experience for the Arabian market — a custom AEM master site for recipes, cookbooks and shopping, built to localize across markets.",
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
      },
      solution: {
        eyebrow: "What we built",
        heading: "A custom master site, from the ground up",
        body: "This was the first time we built an e-commerce website for Knorr Arabia — with no previous version to build on, we did a full revamp, building the entire experience from the ground up as a reusable master site.",
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
    slug: "tweetpeek-ai-powered-twitter-growth-and-insights",
    title: "TweetPeek: AI-powered Twitter growth and insights",
    shortTitle: "TweetPeek",
    category: CATEGORIES.ai,
    csBtn: "TweetPeek",
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/74c3ac4de97294a7beab028a71a92ee141a409bc.webp",
    visitSiteUrl: "https://www.tweetpeek.ai",
    body: [
      { type: "p", text: "TweetPeek is a free app extension by AldAstra Labs that uses machine learning and AI to help users grow their X (formerly Twitter) followers and gain valuable insights about X profiles — an AI-powered helper that grows your audience and interprets X data on your behalf." },
    ],
    modern: {
      eyebrow: "AI & Data Systems",
      noHero: true,
      subtitle: "A free AI-powered extension that grows your X (Twitter) audience and interprets the platform’s data on your behalf — built by AldAstra Labs.",
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
      },
      solution: {
        eyebrow: "How it works",
        heading: "Grow smarter, follow with insight",
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
      },
    },
  },
  {
    slug: "cro-proof-ab-testing-program-revamps-ozarkes-conversion-rates",
    title: "CRO/Proof’s A/B testing program revamps Ozarke’s conversion rates",
    shortTitle: "Ozarke Conversion Rates",
    category: CATEGORIES.interfaces,
    csBtn: "CRO/Proof",
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/55125086ab609e0c4d7c7b8c563efa84bb05b808.webp",
    visitSiteUrl: "https://www.croproof.com",
    body: [
      { type: "p", text: "Sogody transformed Ozarke’s performance with expert A/B testing using Convert and Shopify — fine-tuning the experience under our CRO/Proof program for significant gains in customer interaction and conversion rates." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "An A/B testing program that turned Ozarke’s high traffic into sales — combining Convert and Shopify under Sogody’s CRO/Proof program to refine the UX and lift conversion.",
      heroImage: "https://cdn.sanity.io/images/3hfxs7a8/production/e81e772fa98c89081680ef7861ce51082dd59740-2240x1328.webp",
      heroCaption: "Ozarke’s storefront, refined through experimentation under CRO/Proof.",
      partner: {
        name: "Ozarke",
        initials: "OZ",
        desc: "A modern lighting and home-décor brand, built around the customer.",
        url: "https://www.ozarke.com",
      },
      links: [
        { label: "Visit site", url: "https://www.croproof.com" },
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
  {
    slug: "krispr-sustainable-e-commerce-solution",
    title: "Farm-fresh and click-to-door: KRISPR’s sustainable e-commerce solution",
    shortTitle: "KRISPR E-commerce",
    category: CATEGORIES.interfaces,
    csBtn: "KRISPR",
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/19ad2f8001a72ce03413ebd5a03bb8ee0421b1aa.webp",
    visitSiteUrl: "https://shopkrispr.com",
    body: [
      { type: "p", text: "KRISPR, a UAE-based Ag-Tech company growing pesticide-free, vertically-grown produce delivered within hours of harvest, partnered with Sogody to build a seamless, engaging Shopify e-commerce platform with flexible subscriptions, precise delivery controls and full account management." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "A personalized, subscription-led Shopify store for a UAE Ag-Tech brand — built to change food commerce from production to consumption.",
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
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/40a35fddc3cff9e7c9c08b59b657d88bdf095540.webp",
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
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/c540b7bb9f891a6e2f099a9be9b5b6f78ffc3978.webp",
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
    slug: "a-digital-transformation-of-groove-pillow-e-commerce",
    title: "A digital transformation of Groove Pillow’s e-commerce",
    shortTitle: "Groove Pillow E-commerce",
    category: CATEGORIES.interfaces,
    csBtn: "Groove Pillow",
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/acbcb213f68220ce23e4146afc342c9b8710b63a.webp",
    visitSiteUrl: "https://www.groovepillows.co.uk",
    body: [
      { type: "p", text: "Groove Pillow partnered with Spell & Sell, Sogody’s brand extension, to transform their headless e-commerce — optimizing the Netlify CI/CD pipeline and running a US + UK experimentation program that lifted conversion across the homepage and product pages." },
    ],
    modern: {
      eyebrow: "Human–AI Interfaces",
      subtitle: "A US + UK experimentation program that turned Groove Pillow’s headless store into a faster, more personalized shopping journey.",
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
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/410181d46ac8b604ec00f46d31395fb8122522e0.webp",
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
    img: "https://cdn.sanity.io/files/3hfxs7a8/production/9826d9467c621c4b428d7a0a3f9694d4aadf375c.webp",
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
