export type SiteMeta = {
  name: string;
  role: string;
  location: string;
  email: string;
  githubUrl: string;
  legacyPortfolioUrl: string;
  resumeUrl: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ActionLink = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type ProofMetric = {
  label: string;
  value: string;
  note: string;
};

export type RoleFitItem = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href?: string;
};

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type ArtifactLink = {
  label: string;
  href: string;
};

export type CaseStudySection = {
  title: string;
  items: string[];
};

export type CaseStudy = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  outcome: string;
  previewImage: string;
  tags: string[];
  metrics: CaseStudyMetric[];
  sections: CaseStudySection[];
  artifacts: ArtifactLink[];
};

export type SiteContent = {
  meta: SiteMeta;
  description: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctas: ActionLink[];
    availability: string;
    note: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  proof: {
    eyebrow: string;
    title: string;
    intro: string;
    metrics: ProofMetric[];
  };
  cases: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  strengths: {
    eyebrow: string;
    title: string;
    intro: string;
    items: RoleFitItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    links: ContactLink[];
  };
  footer: string;
  caseStudies: CaseStudy[];
};

const caseStudies: CaseStudy[] = [
  {
    slug: "darkest-afk",
    number: "01",
    eyebrow: "Support systems design",
    title: "Darkest AFK compensation workflow",
    summary:
      "Built a repeatable operator-facing catalog for faster recovery packages and cleaner internal handling.",
    outcome:
      "A support-heavy recovery flow became faster, more consistent, and easier to repeat without manual lookup noise.",
    previewImage: "/images/cases/project-darkest-afk.svg",
    tags: [
      "112+ indexed items",
      "Bilingual operator UX",
      "Standardized package prep",
    ],
    metrics: [
      { label: "Indexed items", value: "112+" },
      { label: "Operator UX", value: "Bilingual" },
      { label: "Preparation", value: "Standardized" },
    ],
    sections: [
      {
        title: "Challenge",
        items: [
          "Support and admin workflows needed a faster, safer way to prepare compensation packages without repeated manual lookup and formatting.",
          "Manual item search and package prep created repetitive friction and made consistency harder to maintain.",
        ],
      },
      {
        title: "Inputs",
        items: [
          "Support workflow pain points.",
          "Existing item metadata.",
          "Internal package assembly requirements.",
        ],
      },
      {
        title: "Method",
        items: [
          "Built a static operator tool with search, filtering, bilingual labels, and standardized package-prep logic.",
          "Optimized the flow for repetitive internal support work rather than presentation-only browsing.",
          "Created a cleaner path from item lookup to repeatable output.",
        ],
      },
      {
        title: "What surfaced",
        items: [
          "Operator tooling matters when the same recovery flow happens repeatedly.",
          "Consistency is as important as speed in compensation work.",
          "Workflow design can remove support friction without changing team structure.",
        ],
      },
      {
        title: "Impact",
        items: [
          "112+ indexed items in one operator-facing tool.",
          "Clearer and more repeatable package preparation.",
          "Public proof of support tooling and process thinking.",
        ],
      },
      {
        title: "Next move",
        items: [
          "Measure package-prep time before and after tool adoption.",
          "Track formatting mistakes and repeat corrections.",
          "Identify the next repetitive support workflow worth standardizing.",
        ],
      },
    ],
    artifacts: [
      {
        label: "Legacy public case page",
        href: "https://codeavd.github.io/Portfolio/cases/darkest-afk.html",
      },
      {
        label: "Original one-pager on GitHub",
        href: "https://github.com/CodeAvd/Portfolio/blob/main/case_01_darkest_afk_one_pager_en.md",
      },
    ],
  },
  {
    slug: "dig-dig-die",
    number: "02",
    eyebrow: "Feedback intelligence",
    title: "Dig Dig Die escalation-ready feedback view",
    summary:
      "Structured noisy community feedback into a shared view for support, product, and execution conversations.",
    outcome:
      "Raw complaints became a concise escalation artifact with priorities, repeat themes, and less duplication across teams.",
    previewImage: "/images/cases/project-dig-dig-die.svg",
    tags: ["23 structured items", "6 critical issues", "3 repeat themes"],
    metrics: [
      { label: "Structured items", value: "23" },
      { label: "Critical issues", value: "6" },
      { label: "Repeat themes", value: "3" },
    ],
    sections: [
      {
        title: "Challenge",
        items: [
          "Steam, Discord, and community reports contained recurring bug and UX signals, but the feedback was fragmented and duplicated across channels.",
          "Support and product conversations were slower because the same issues were appearing in multiple formats without a shared structure.",
        ],
      },
      {
        title: "Inputs",
        items: [
          "Steam feedback snapshots.",
          "Discord and community reports.",
          "Creator and player commentary.",
        ],
      },
      {
        title: "Method",
        items: [
          "Clustered raw feedback into repeat issue groups and feedback themes.",
          "Added simple priority framing to move from noise to next actions.",
          "Packed the result into a support-to-product escalation view.",
        ],
      },
      {
        title: "What surfaced",
        items: [
          "23 structured items made the volume of player pain legible.",
          "6 critical bug or UX issues stood out as near-term risk.",
          "3 repeat feedback themes showed where frustration was concentrating.",
        ],
      },
      {
        title: "Impact",
        items: [
          "Faster path from public user complaints to structured escalation.",
          "Less duplication between support, product, and dev conversations.",
          "Clear proof of customer feedback prioritization inside a support-led narrative.",
        ],
      },
      {
        title: "Next move",
        items: [
          "Track whether structured escalations shorten prioritization conversations.",
          "Measure how often duplicate complaints collapse into a single issue view.",
          "Repeat the same workflow for another noisy signal set.",
        ],
      },
    ],
    artifacts: [
      {
        label: "Legacy public case page",
        href: "https://codeavd.github.io/Portfolio/cases/dig-dig-die.html",
      },
      {
        label: "Original one-pager on GitHub",
        href: "https://github.com/CodeAvd/Portfolio/blob/main/case_03_dig_dig_die_one_pager_en.md",
      },
    ],
  },
  {
    slug: "vacation-cafe",
    number: "03",
    eyebrow: "Retention and friction analysis",
    title: "Vacation Cafe player-friction analysis",
    summary:
      "Turned fragmented player friction signals into retention-oriented hypotheses a product team could review quickly.",
    outcome:
      "Community pain points became named patterns, clearer language, and short-loop experiments instead of scattered anecdotes.",
    previewImage: "/images/cases/project-vacation-cafe.svg",
    tags: [
      "6-8h pain point",
      "Level 4-5 complexity spike",
      "Short-loop hypotheses",
    ],
    metrics: [
      { label: "Friction signal", value: "6-8h" },
      { label: "Complexity spike", value: "Level 4-5" },
      { label: "Experiments", value: "Short-loop" },
    ],
    sections: [
      {
        title: "Challenge",
        items: [
          "Community and market feedback described points where the cozy loop started to feel repetitive or mechanically heavy, but the signals were not yet organized into actions.",
          "The underlying player pain was real, but it was scattered across channels and not translated into testable next steps.",
        ],
      },
      {
        title: "Inputs",
        items: [
          "Steam review and feedback snapshots.",
          "Discord discussion samples.",
          "Genre and benchmark observations.",
        ],
      },
      {
        title: "Method",
        items: [
          "Grouped repeat complaints into friction patterns instead of isolated anecdotes.",
          "Mapped the patterns to simple retention and session-quality questions.",
          "Proposed short-loop hypotheses a team could review quickly.",
        ],
      },
      {
        title: "What surfaced",
        items: [
          "A repeat friction signal appeared around 6-8 hours for part of the player base.",
          "Complexity increased near Level 4-5 and changed the feel of the loop.",
          "This work is strongest as decision support, not as a full product-title pivot.",
        ],
      },
      {
        title: "Impact",
        items: [
          "Clear public example of player-friction analysis and hypothesis framing.",
          "Better language for turning user pain into support-to-product escalation.",
          "Useful differentiation without breaking the support narrative.",
        ],
      },
      {
        title: "Next move",
        items: [
          "Test whether the same framework helps in a SaaS onboarding or help-center context.",
          "Shorten the analysis into a one-page operating memo.",
          "Track whether teams act faster when friction patterns are named clearly.",
        ],
      },
    ],
    artifacts: [
      {
        label: "Legacy public case page",
        href: "https://codeavd.github.io/Portfolio/cases/vacation-cafe.html",
      },
      {
        label: "Original one-pager on GitHub",
        href: "https://github.com/CodeAvd/Portfolio/blob/main/case_02_vacation_cafe_one_pager_en.md",
      },
    ],
  },
];

export const siteContent: SiteContent = {
  meta: {
    name: "Grigorii",
    role: "Hybrid operator for support systems, feedback intelligence, and product execution",
    location: "Russia | Remote",
    email: "grigorii584@gmail.com",
    githubUrl: "https://github.com/CodeAvd/Portfolio",
    legacyPortfolioUrl: "https://codeavd.github.io/Portfolio/",
    resumeUrl: "https://codeavd.github.io/Portfolio/resume.html",
  },
  description:
    "English-first portfolio showing how support signals become cleaner workflows, sharper escalation, and better product decisions.",
  nav: [
    { label: "Work", href: "#cases" },
    { label: "Approach", href: "#approach" },
    { label: "Strengths", href: "#strengths" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "( ENGLISH-FIRST PORTFOLIO )",
    title: "Support signals become calmer systems and better product decisions.",
    description:
      "I work between support, operations, and product thinking. The job stays the same: reduce noise, structure what matters, and ship artifacts teams can actually use.",
    ctas: [
      { label: "View case studies", href: "#cases", variant: "primary" },
      {
        label: "Open resume",
        href: "https://codeavd.github.io/Portfolio/resume.html",
        variant: "secondary",
      },
      {
        label: "GitHub",
        href: "https://github.com/CodeAvd/Portfolio",
        variant: "secondary",
      },
    ],
    availability:
      "Remote-first and interview-ready for support ops, technical support, AI-adjacent operations, and product-facing execution roles.",
    note:
      "Public-safe packaging only. The cases keep the logic and the outcomes, while leaving out private workflows and internal-only data.",
  },
  approach: {
    eyebrow: "( APPROACH )",
    title: "The work lives in the seam between support, operations, and product packaging.",
    paragraphs: [
      "I am most useful when support work is no longer just tickets. If the same problem keeps surfacing across chats, reports, and player complaints, I structure it into something a team can move on.",
      "Sometimes that becomes a support-facing workflow. Sometimes it becomes a feedback intelligence pack or a decision memo. The pattern does not change: name the friction, reduce the noise, and leave the team with a calmer next step.",
      "This portfolio stays deliberately lean. It uses real public proof, but the storytelling is tighter, more selective, and built to show how I think when the work starts crossing functions.",
    ],
  },
  proof: {
    eyebrow: "( PROOF )",
    title: "Selected signals that make the work legible quickly.",
    intro:
      "A compact read on the kind of operator value behind the three case studies.",
    metrics: [
      {
        label: "Indexed support items",
        value: "112+",
        note: "Darkest AFK compensation workflow catalog.",
      },
      {
        label: "Structured priorities",
        value: "23",
        note: "Dig Dig Die feedback consolidated into one shared view.",
      },
      {
        label: "Critical issues surfaced",
        value: "6",
        note: "Named as near-term bug or UX risk for escalation.",
      },
      {
        label: "Support-heavy experience",
        value: "3.5+ years",
        note: "Gamedev, Web3, FinTech, and operations-facing environments.",
      },
    ],
  },
  cases: {
    eyebrow: "( CASE STUDIES )",
    title: "Three public cases where support work turns into clearer systems.",
    intro:
      "Workflow design, feedback intelligence, and product-facing packaging drawn from current-company work and support-adjacent analysis.",
  },
  strengths: {
    eyebrow: "( STRENGTHS )",
    title: "The role-fit is broad, but the signal stays precise.",
    intro:
      "This site is meant to read wider than a support dashboard without losing support credibility.",
    items: [
      {
        eyebrow: "Operator tooling",
        title: "Support systems design",
        description:
          "Workflow automation, internal tooling, and repeatable recovery flows for teams where consistency matters as much as speed.",
      },
      {
        eyebrow: "Signal packaging",
        title: "Feedback intelligence",
        description:
          "Steam, Discord, and community feedback clustered into structured priorities instead of raw complaint volume.",
      },
      {
        eyebrow: "Cross-functional clarity",
        title: "Translation into action",
        description:
          "Packaging support signals so product, QA, and operations can move without re-reading the whole fire.",
      },
    ],
  },
  contact: {
    eyebrow: "( CONTACT )",
    title: "If your team needs sharper signal handling, cleaner workflows, or stronger packaging, we should talk.",
    intro:
      "Open to remote-first roles that sit across support ops, technical support, AI-adjacent execution, and product-facing operations.",
    links: [
      {
        label: "Email",
        value: "grigorii584@gmail.com",
        href: "mailto:grigorii584@gmail.com",
      },
      {
        label: "GitHub",
        value: "github.com/CodeAvd/Portfolio",
        href: "https://github.com/CodeAvd/Portfolio",
      },
      {
        label: "Resume",
        value: "Current public resume",
        href: "https://codeavd.github.io/Portfolio/resume.html",
      },
      {
        label: "Legacy archive",
        value: "codeavd.github.io/Portfolio",
        href: "https://codeavd.github.io/Portfolio/",
      },
      {
        label: "Location",
        value: "Russia | Remote",
      },
    ],
  },
  footer:
    "English ships first. The content model is ready for Russian later without reshaping the site.",
  caseStudies,
};

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug) ?? null;
}

export function getAdjacentCaseStudies(slug: string) {
  const index = caseStudies.findIndex((caseStudy) => caseStudy.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: caseStudies[index - 1] ?? null,
    next: caseStudies[index + 1] ?? null,
  };
}
