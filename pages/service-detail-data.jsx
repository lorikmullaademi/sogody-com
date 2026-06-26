/* Sogody — per-slug content for service detail pages (live sogody.com CMS copy).
   window.SogodyServiceDetailData */

const SD_SANITY = "https://cdn.sanity.io/images/3hfxs7a8/production";

window.SogodyServiceDetailData = {
  "technology-engineering": {
    metaTitle: "Technology & Engineering Services | Web & Mobile | Sogody",
    hero: {
      titleGreen: "Engineering Scalable Solutions",
      titleRest: " with Data-Driven Precision.",
      sub: "Excellent engineering practices and cutting-edge technology to create platforms that provide exceptional digital experiences.",
      video: "https://files.sogody.co.uk/2025-04-16T14-31-55.123Z-Optimized_e-commerce-projects-9.mp4",
      poster: "assets/images/sd-hero-collage.png",
    },
    caps: {
      title: ["Building something great?", "We’re here to make it happen."],
      cards: [
        { title: "Backend Development", description: "We build secure, scalable systems that ensure seamless performance and reliability.", img: "assets/images/sd-cap-1.png" },
        { title: "API Development", description: "We design efficient, well-documented APIs for smooth integration and data exchange.", img: "assets/images/sd-cap-2.png" },
        { title: "Automation & Integration", description: "We streamline workflows and connect systems for seamless efficiency and scalability.", img: "assets/images/sd-cap-3.png" },
        { title: "Cloud Solutions", description: "Scalable, secure, and reliable cloud infrastructure.", img: "assets/images/sd-cap-4.png" },
        { title: "Data Engineering", description: "We build scalable pipelines for efficient data processing and insights.", img: "assets/images/sd-cap-5.png" },
      ],
      rep: { title: "Tomor / CTO of Sogody", description: "Let’s make it happen together!", avatar: "assets/images/sd-avatar.png" },
    },
    process: {
      title: "Our Process: Strategic, Insightful, and Reliable",
      sub: "Combining thoughtful planning, data-driven decisions, and seamless execution to ensure exceptional results at every stage.",
      steps: [
        { label: "Discovery & Scoping", popup: "We align on goals, scope, and success metrics before a line of code is written.", img: `${SD_SANITY}/4e4ad15285de39bfc3a78c7c3453b09c5f76f845-908x128.webp` },
        { label: "Research & Design", popup: "We research users and architecture, then design the system and the experience.", img: `${SD_SANITY}/657a48f4c6a7677aee9e8a4480708c5658fa909d-884x128.webp` },
        { label: "Development & Testing", popup: "We build in iterative sprints with continuous testing and code review.", img: `${SD_SANITY}/6f32377a4caf670fc9c07de878a053d5c8586171-900x128.webp` },
        { label: "Deployment & Launch", popup: "We ship to production with monitoring, rollbacks, and zero-downtime releases.", img: `${SD_SANITY}/46a0ff366494a093c9deee4afba515688166899e-884x128.webp` },
        { label: "Iteration & Scaling", popup: "We measure real usage, then refine and scale what works.", img: `${SD_SANITY}/f3b5c935ddccee8d1d28c5ad379d65c531483473-892x128.webp` },
      ],
    },
    tech: {
      title: ["Innovate. Build. Scale. With the", "technologies that drive success."],
      cards: [
        { title: "Ruby", description: "Programming Language", img: "assets/images/sd-tech-icon-1.png" },
        { title: "React", description: "JavaScript Library", img: "assets/images/sd-tech-icon-2.png" },
        { title: "Google Cloud", description: "Cloud Computing Platform", img: "assets/images/sd-tech-icon-3.png" },
        { title: "AWS", description: "Cloud Services Provider", img: "assets/images/sd-tech-icon-4.png" },
        { title: "PostgreSQL", description: "Database Management System", img: "assets/images/sd-tech-icon-5.png" },
        { title: "Laravel", description: "PHP Framework", img: "assets/images/sd-tech-icon-6.png" },
      ],
    },
    updates: [
      { title: "The AI-powered digital experiences you can’t afford to miss", desc: "Discover the future of digital engagement with Sogody’s exploration of AI-driven experienc...", img: "assets/images/sd-update-1.png" },
      { title: "Personalization and customization through AI algorithms", desc: "Dive into the future of personalization with AI algorithms! Explore ethical considerations...", img: "assets/images/sd-update-2.png" },
    ],
    noUpdates: true,
  },

  "ai-solutions": {
    metaTitle: "AI Solutions | Sogody",
    hero: {
      titleGreen: "Empower Your Future",
      titleRest: " with AI Transformation",
      sub: "At Sogody, we specialize in delivering cutting-edge AI and Machine Learning solutions tailored to businesses of all sizes.",
      video: "https://files.sogody.co.uk/2025-04-16T14-16-47.751Z-Optimized_ai-service-4.mp4",
      poster: "assets/images/sd-hero-collage.png",
    },
    theme: "ai",
    caps: {
      title: ["Building something great?", "We’re here to make it happen."],
      cards: [
        { title: "LLM Integration & GPT Systems", description: "We build custom GPT-powered tools for chat, search, and content generation.", illo: "llm" },
        { title: "AI-Powered Data Structuring", description: "We extract, enrich, and structure complex data using prompt-driven AI pipelines.", illo: "data" },
        { title: "Personalized Recommendation Engines", description: "We deliver behavior-based suggestions that personalize content, products, or workflows.", illo: "reco" },
        { title: "Workflow Automation with AI Agents", description: "We embed intelligent agents to streamline internal processes and reduce manual effort.", illo: "workflow" },
        { title: "Semantic Search and RAG", description: "We implement vector search and RAG to improve discovery and context accuracy.", illo: "rag" },
      ],
      rep: { title: "Tomor / CTO of Sogody", description: "Let’s make it happen together!", avatar: "assets/images/sd-avatar.png" },
    },
    process: {
      title: "Our Process: Strategic, Insightful, and Reliable",
      sub: "AI-powered execution, data-driven decisions, and scalable results, every step of the way.",
      steps: [
        { label: "AI Discovery & Strategy", popup: "We map use cases, data readiness, and ROI before committing to a build.", img: `${SD_SANITY}/953b94a69cec61ce623c9330e5ae627dd9a44297-908x128.webp` },
        { label: "Data Collection & Preparation", popup: "We gather, clean, and structure the data your models depend on.", img: `${SD_SANITY}/3a1d515ca208670960a7ade657dc11d6320e6d62-884x128.webp` },
        { label: "Development & Testing", popup: "We build and evaluate models against clear accuracy and safety benchmarks.", img: `${SD_SANITY}/114b66df2234136610975a6dfcb8153e9b3d11d6-900x128.webp` },
        { label: "Deployment & Integration", popup: "We embed models into your stack with reliable, observable pipelines.", img: `${SD_SANITY}/24217ce26bdcffe8acec42e46567515ff66d19f6-884x128.webp` },
        { label: "Continuous Improvement & Scaling", popup: "We monitor drift and retrain so performance compounds over time.", img: `${SD_SANITY}/34e8a6b4f313887a465315ce2f033b37624d5a33-892x128.webp` },
      ],
    },
    tech: {
      title: ["Innovate. Build. Scale. With the", "technologies that drive success."],
      cards: [
        { title: "TensorFlow", description: "Machine Learning (ML) Frameworks", img: `${SD_SANITY}/1726b9a9167f66e4da9abd7e8b2e0536b0361320-64x67.webp` },
        { title: "Microsoft Azure", description: "Cloud & ML Platform", img: `${SD_SANITY}/64bde982580f4068ac877bee15d2c822cafb8d68-165x129.webp` },
        { title: "IBM Watson", description: "AI Solutions for Enterprise", img: `${SD_SANITY}/d9c29f2fb360edf1a2a23e84fd1f89452a68efbb-225x122.webp` },
        { title: "ChatGPT", description: "Large Language Models", img: `${SD_SANITY}/0a6a0e5580eb80902051f69c0ff7147587a88320-130x132.webp` },
        { title: "Google AI", description: "Machine Learning (ML) Frameworks", img: `${SD_SANITY}/68bff0d44852bf2d14bb06141ceff9faa63ee3a8-35x38.webp` },
        { title: "Amazon SageMaker", description: "Model Training & Deployment", img: `${SD_SANITY}/a28e8a3502a8f83bf401cd506760836be5f56a1b-201x212.webp` },
      ],
    },
    platforms: {
      title: "Transforming Ideas into Powerful Products.",
      cards: [
        { name: "Testful", tagline: "Automate Experimentation", description: "Testful automates multi-experiment delivery with A/B templates—no development needed for updates or deployment.", href: "https://testful.co.uk/", logo: `${SD_SANITY}/94b4e5a5958e4630d7a2278e14e3005119ce5f0b-76x76.webp` },
        { name: "Replix", tagline: "Acquired by Riverstone Ventures", description: "Unlock the power of AI-generated content curation and engagement to elevate your professional and personal communications.", href: "https://www.replix.ai/", logo: `${SD_SANITY}/620d2831272c9f8041b1c8f3e42158d854c82801-83x78.webp` },
        { name: "ScopexJS", tagline: "Scoped Experiences", description: "ScopexJS, a versatile framework for building and deploying standalone web experiences.", href: "https://www.npmjs.com/package/@sogody/scopexjs", logo: `${SD_SANITY}/9a42f77060effa95ad8d8e086eab999e334decf4-151x152.webp` },
        { name: "AldaChat", tagline: "Your AI Support Lead", description: "AI-powered support that’s efficient, scalable, and always learning. Customer support made effortless.", href: "https://chat.aldastra.com/", logo: `${SD_SANITY}/3638062b00fed2951b6bda902a21c73d5aaf903f-172x200.webp` },
        { name: "TweetPeek", tagline: "Acquired by NH Ventures", description: "Set your follow strategy once and let TweetPeek grow your audience effortlessly—while you focus on what matters.", href: "https://www.tweetpeek.ai/", logo: `${SD_SANITY}/d97e629c9b34e649a0efd1b8e046e47785650e71-136x117.webp` },
      ],
    },
    projectDetails: {
      logo: `${SD_SANITY}/a1c290481d2e822f9c862fd870cf2c734a3a3b7b-476x233.webp`,
      founded: "2025",
      partners: "Synim/Diellza",
      intro: "2025: We invested in AldAstra to establish a hub for AI product pioneering, driving innovation in applied AI, automation, and scalable intelligent solutions.",
      linkedinHref: "https://www.linkedin.com/company/aldastracom/",
      websiteHref: "https://aldastra.com/",
      investedDescription: "We invested in AldAstra, a dedicated AI hub designed to push the boundaries of applied AI. With a focus on machine learning, automation, and semantic search, AldAstra drives innovation, powering next-generation AI solutions that transform businesses.",
      image: `${SD_SANITY}/55a5b76efe1cc2a15d462d1c30462702ecc1a9fc-1960x896.webp`,
    },
    noUpdates: false,
  },

  "customer-experience": {
    metaTitle: "Customer Experience | UX, UI, and CX | Sogody Services",
    hero: {
      titleGreen: "Elevate Your Customer Experience",
      titleRest: " with Sogody.",
      sub: "Creating seamless, data-driven customer journeys, from first touch to long-term loyalty.",
      video: "https://files.sogody.co.uk/2025-04-16T14-32-32.976Z-Optimized_customer-experience-6.mp4",
      poster: "assets/images/sd-hero-collage.png",
    },
    theme: "cx",
    caps: {
      title: ["Building something great?", "We’re here to make it happen."],
      cards: [
        { title: "Strategy & Customer Insights", description: "Research-driven insights to shape personalized and effective customer strategies.", img: "assets/images/sd-cap-1.png" },
        { title: "User-Centered Experience & Interface Design", description: "Design intuitive, user-centered experiences and interfaces for web, mobile, and product flows.", img: "assets/images/sd-cap-2.png" },
        { title: "Conversion Rate Optimization (CRO)", description: "Run structured experimentation programs to improve engagement and drive action.", img: "assets/images/sd-cap-3.png" },
        { title: "CRM & Lifecycle Automation", description: "Automate customer journeys with targeted messaging, triggered actions, and retention flows.", img: "assets/images/sd-cap-4.png" },
        { title: "Retention & Loyalty Strategy", description: "Build systems that keep users engaged, returning, and advocating for your brand.", img: "assets/images/sd-cap-5.png" },
      ],
      rep: { title: "Lorik & Egzona / CEO & Lead SE", description: "Let’s make it happen together!" },
    },
    process: {
      title: "Our Process: Customer Experience, Refined & Optimized",
      sub: "End-to-end execution with data, design, and intelligence, delivering meaningful experiences that convert and retain.",
      steps: [
        { label: "Strategy & Insights", popup: "We uncover what your customers need through research and behavioral data.", img: `${SD_SANITY}/4ff3fd7ca452165fcdf55497a771e1202d658970-908x128.webp` },
        { label: "Experience Design & Optimization", popup: "We design and refine journeys that are intuitive and conversion-led.", img: `${SD_SANITY}/e66dcdda81b76469824a998bc1f9eae667c3b55e-884x128.webp` },
        { label: "Experimentation & Testing", popup: "We run structured A/B programs to validate every change with data.", img: `${SD_SANITY}/77d4a58d7542873b72ffa0c3d06791628279a1fb-900x128.webp` },
        { label: "Implementation & Performance Tracking", popup: "We launch and instrument experiences, tracking the metrics that matter.", img: `${SD_SANITY}/5cb50ef4a6c450abc06d193c4d5fd2a22d88d3af-884x128.webp` },
        { label: "Retention & Personalization", popup: "We build lifecycle flows that keep customers engaged and returning.", img: `${SD_SANITY}/8946c95fe0c85a6ccc6f5124507c834b0e2b6e05-892x128.webp` },
      ],
    },
    tech: {
      title: ["Innovate. Build. Scale. With the", "technologies that drive success."],
      cards: [
        { title: "Adobe Creative Cloud", description: "Design & Multimedia Suite", img: `${SD_SANITY}/dd0ef1e89b656c4414edb44043c5e747ca66ba6a-259x63.webp` },
        { title: "Figma", description: "UI/UX Design & Prototyping", img: `${SD_SANITY}/23fdbe19fa662f65dcbbdaff0db0901f1e19e2c3-97x137.webp` },
        { title: "Optimizely", description: "A/B Testing & Experimentation", img: `${SD_SANITY}/e27e9feec54025fa85ce94c358e4b39dd0594d50-417x121.webp` },
        { title: "CRO/Proof", description: "Conversion Rate Optimization (CRO)", img: `${SD_SANITY}/974009c4c4e7dec0f396729c4a31881afd0106ec-328x52.webp` },
        { title: "VWO", description: "A/B Testing & CRO Platform", img: `${SD_SANITY}/a5583d3ebe79e903757be38e2527b44ab7ce1e08-272x90.webp` },
        { title: "Google Optimize", description: "A/B Testing & Personalization Tool", img: `${SD_SANITY}/63551150012ea8c0e89da0467e1c9aacd2d22f87-134x137.webp` },
      ],
    },
    promo: {
      logo: `${SD_SANITY}/09a533c08302b6224c36208a6ae651c643d4507e-468x89.webp`,
      btnText: "Program",
      description: "Boost Conversions with our CRO/PROOF—Optimized Experiences, Lasting Results.",
      href: "https://www.croproof.com/",
    },
    noUpdates: true,
  },
};
