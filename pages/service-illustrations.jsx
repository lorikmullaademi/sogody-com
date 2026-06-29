/* Sogody — AI service capability illustrations, recreated to match the live
   sogody.com/services/ai-solutions/ cards (light line-art on white).
   Exposed on window.SogodyServiceIllustrations, keyed by card.illo. */

const SI_STROKE = "#d3d7dd";
const SI_FAINT = "#e7eaee";
const SI_INK = "#2b2b2b";
const SI_GREEN = "#67be83";

/* simplified OpenAI-style knot mark */
function SiKnot({ x = 0, y = 0, s = 1, color = SI_INK }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 3.4a4.2 4.2 0 0 0-4 3 4.2 4.2 0 0 0-1.2 7.7 4.2 4.2 0 0 0 4 3 4.2 4.2 0 0 0 7.4-1 4.2 4.2 0 0 0 1.2-7.7 4.2 4.2 0 0 0-4-3 4.2 4.2 0 0 0-3.4-2z" />
      <path d="M11 7.2 14.6 9.3 14.6 13.4 11 15.5 7.4 13.4 7.4 9.3 11 7.2" />
      <path d="M11 7.2 11 11.4 14.6 13.4" />
      <path d="M11 11.4 7.4 13.4" />
    </g>
  );
}

/* 1 — LLM Integration & GPT Systems: doc mockup + GPT mark wired in */
function illoLLM() {
  return (
    <svg viewBox="0 0 372 215" preserveAspectRatio="xMidYMid meet">
      <rect x="168" y="26" width="36" height="36" rx="9" fill="#fff" stroke={SI_FAINT} />
      <SiKnot x={175} y={33} s={0.95} />
      <path d="M186 62 V74 M104 74 H268 M104 74 V86 M268 74 V86" fill="none" stroke={SI_FAINT} strokeWidth="1.4" />
      <rect x="66" y="86" width="240" height="104" rx="12" fill="#fff" stroke={SI_FAINT} />
      <circle cx="88" cy="108" r="7" fill={SI_GREEN} />
      <rect x="250" y="104" width="38" height="8" rx="4" fill="#eef0f3" />
      <rect x="84" y="132" width="180" height="8" rx="4" fill="#edeff2" />
      <rect x="84" y="150" width="150" height="8" rx="4" fill="#f1f3f5" />
      <rect x="84" y="168" width="120" height="8" rx="4" fill="#f1f3f5" />
    </svg>
  );
}

/* 2 — AI-Powered Data Structuring: GPT mark glowing, connector cross */
function illoData() {
  return (
    <svg viewBox="0 0 372 215" preserveAspectRatio="xMidYMid meet">
      <path d="M186 36 V72 M186 143 V179 M70 107 H150 M222 107 H302" fill="none" stroke={SI_FAINT} strokeWidth="1.4" />
      <circle cx="70" cy="107" r="3.4" fill={SI_STROKE} />
      <circle cx="302" cy="107" r="3.4" fill={SI_STROKE} />
      <circle cx="186" cy="36" r="3.4" fill={SI_STROKE} />
      <circle cx="186" cy="179" r="3.4" fill={SI_STROKE} />
      <rect x="158" y="79" width="56" height="56" rx="15" fill="#fff" stroke="#dfeee6" />
      <rect x="158" y="79" width="56" height="56" rx="15" fill="#67be83" opacity="0.08" />
      <SiKnot x={170} y={91} s={1.45} />
    </svg>
  );
}

/* 3 — Personalized Recommendation Engines: browser + image + chat bubbles */
function illoReco() {
  return (
    <svg viewBox="0 0 372 215" preserveAspectRatio="xMidYMid meet">
      <rect x="50" y="34" width="272" height="148" rx="12" fill="#fff" stroke={SI_FAINT} />
      <path d="M50 58 H322" stroke={SI_FAINT} strokeWidth="1.2" />
      <circle cx="66" cy="46" r="3.2" fill="#e3a9a0" /><circle cx="78" cy="46" r="3.2" fill="#e8d29a" /><circle cx="90" cy="46" r="3.2" fill="#a7d3b3" />
      <rect x="66" y="74" width="118" height="92" rx="8" fill="#f4f5f7" />
      <circle cx="104" cy="104" r="11" fill="#e4e7ec" />
      <path d="M84 150 L116 116 L150 150 Z" fill="#e0e4ea" />
      <rect x="196" y="74" width="110" height="40" rx="8" fill="#dfe4f6" />
      <rect x="204" y="86" width="56" height="7" rx="3.5" fill="#b9c2ec" /><rect x="204" y="98" width="78" height="7" rx="3.5" fill="#cdd4f1" />
      <rect x="196" y="124" width="86" height="34" rx="8" fill="#f4f5f7" />
      <rect x="204" y="134" width="64" height="6" rx="3" fill="#e3e6eb" /><rect x="204" y="145" width="44" height="6" rx="3" fill="#e9ebf0" />
      <circle cx="296" cy="150" r="4" fill="#e8b0a4" />
    </svg>
  );
}

/* 4 — Workflow Automation with AI Agents: isometric cube + nodes */
function illoWorkflow() {
  return (
    <svg viewBox="0 0 372 215" preserveAspectRatio="xMidYMid meet">
      <path d="M186 108 L120 70 M186 108 L252 70 M186 108 L120 150 M186 108 L252 150" fill="none" stroke={SI_FAINT} strokeWidth="1.4" />
      <g opacity="0.55">
        <rect x="86" y="54" width="56" height="20" rx="4" fill="#eef0f3" />
        <rect x="232" y="54" width="56" height="20" rx="4" fill="#eef0f3" />
        <rect x="86" y="142" width="56" height="20" rx="4" fill="#eef0f3" />
        <rect x="232" y="142" width="56" height="20" rx="4" fill="#eef0f3" />
      </g>
      <g fill="#fff" stroke={SI_STROKE} strokeWidth="2" strokeLinejoin="round">
        <path d="M186 80 L216 97 L186 114 L156 97 Z" />
        <path d="M156 97 L156 124 L186 141 L186 114 Z" fill="#f6f7f9" />
        <path d="M216 97 L216 124 L186 141 L186 114 Z" fill="#eef0f3" />
      </g>
    </svg>
  );
}

/* 5 — Semantic Search and RAG: knowledge graph with colored tags */
function illoRag() {
  return (
    <svg viewBox="0 0 372 215" preserveAspectRatio="xMidYMid meet">
      <g opacity="0.6">
        <rect x="54" y="62" width="58" height="8" rx="4" fill="#edeff2" /><rect x="54" y="78" width="44" height="8" rx="4" fill="#f1f3f5" />
        <rect x="54" y="132" width="58" height="8" rx="4" fill="#edeff2" /><rect x="54" y="148" width="40" height="8" rx="4" fill="#f1f3f5" />
        <rect x="262" y="62" width="58" height="8" rx="4" fill="#edeff2" /><rect x="276" y="78" width="44" height="8" rx="4" fill="#f1f3f5" />
        <rect x="262" y="132" width="58" height="8" rx="4" fill="#edeff2" /><rect x="280" y="148" width="40" height="8" rx="4" fill="#f1f3f5" />
      </g>
      <path d="M150 108 H120 M222 108 H252 M186 84 V70 M186 132 V146" fill="none" stroke={SI_FAINT} strokeWidth="1.4" />
      <g fontFamily="Arial, sans-serif" fontSize="9" textAnchor="middle">
        <rect x="160" y="60" width="52" height="20" rx="10" fill="#bfe0d0" /><text x="186" y="73" fill="#2f6b4f">Product</text>
        <rect x="158" y="98" width="56" height="20" rx="10" fill="#bcd0ef" /><text x="186" y="111" fill="#33508a">Reviews</text>
        <rect x="162" y="136" width="48" height="20" rx="10" fill="#efc7a0" /><text x="186" y="149" fill="#8a5a2f">Docs</text>
      </g>
    </svg>
  );
}

/* 6 — Cloud AI: line-art cloud over service nodes (Azure / AWS / GCP) */
function illoCloud() {
  return (
    <svg viewBox="0 0 372 215" preserveAspectRatio="xMidYMid meet">
      <path d="M152 136 V172 M186 136 V180 M220 136 V172" fill="none" stroke={SI_FAINT} strokeWidth="1.4" />
      <circle cx="152" cy="176" r="3.4" fill={SI_STROKE} />
      <circle cx="186" cy="184" r="3.4" fill={SI_STROKE} />
      <circle cx="220" cy="176" r="3.4" fill={SI_STROKE} />
      <g transform="translate(120 22) scale(5.5)">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
              fill="#fff" stroke={SI_STROKE} strokeWidth="0.42" strokeLinejoin="round" />
      </g>
      <SiKnot x={174} y={72} s={1.05} color={SI_GREEN} />
    </svg>
  );
}

window.SogodyServiceIllustrations = {
  llm: illoLLM,
  data: illoData,
  reco: illoReco,
  workflow: illoWorkflow,
  rag: illoRag,
  cloud: illoCloud,
};
