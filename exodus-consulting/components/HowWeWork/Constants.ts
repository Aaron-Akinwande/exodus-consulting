export const alignDimensions = [
  {
    letter: "A",
    name: "Aspiration",
    tagline: "Clarifies strategic intent, ambition, and measurable priorities",
    description:
      "We assess how clearly strategy is articulated, understood, and translated into actionable objectives across the organization.",
    addresses: [
      "Unclear or competing priorities",
      "Strategy that lives only at the top",
      "Lack of measurable success indicators",
    ],
    changes: [
      "Clear strategic direction and focus",
      "Agreed priorities tied to outcomes",
      "Alignment between ambition and execution capacity",
    ],
    color: "#D15B12",
    bgColor: "bg-orange-600",
    textColor: "text-orange-600",
    borderColor: "border-orange-600",
  },
  {
    letter: "L",
    name: "Leadership",
    tagline: "Establishes decision rights, accountability, and governance",
    description:
      "We examine how leadership teams make decisions, allocate ownership, and operate together under pressure.",
    addresses: [
      "Slow or unclear decision-making",
      "Leadership bottlenecks",
      "Diffused accountability",
    ],
    changes: [
      "Clear decision authority and escalation paths",
      "Stronger leadership alignment",
      "Faster, higher-quality decisions",
    ],
    color: "#4CA2A8",
    bgColor: "bg-teal-500",
    textColor: "text-teal-500",
    borderColor: "border-teal-500",
  },
  {
    letter: "I",
    name: "Infrastructure",
    tagline:
      "Designs the structures, roles, processes, and systems required to execute strategy",
    description:
      "We evaluate whether the organization's operating model supports or constrains performance.",
    addresses: [
      "Role confusion and duplicated effort",
      "Inefficient processes",
      "Structural misalignment with strategy",
    ],
    changes: [
      "Clear organizational design and interfaces",
      "Defined roles and responsibilities",
      "Systems and processes that enable execution",
    ],
    color: "#C5A880",
    bgColor: "bg-amber-500",
    textColor: "text-amber-600",
    borderColor: "border-amber-500",
  },
  {
    letter: "G",
    name: "Growth Enablers",
    tagline:
      "Aligns performance management, incentives, capability development, and succession with strategy",
    description:
      "We assess whether people systems actively reinforce strategic priorities or work against them.",
    addresses: [
      "Misaligned incentives",
      "Weak performance management",
      "Capability gaps that limit scale",
    ],
    changes: [
      "Performance systems tied to outcomes",
      "Targeted capability development",
      "Stronger bench and succession readiness",
    ],
    color: "#4CA2A8",
    bgColor: "bg-teal-500",
    textColor: "text-teal-500",
    borderColor: "border-teal-500",
  },
  {
    letter: "N",
    name: "Narrative",
    tagline: "Shapes culture, behaviors, communication, and ways of working",
    description:
      "We examine the lived experience of the organization and the stories that guide behavior, formally and informally.",
    addresses: [
      "Cultural drift",
      "Misalignment between stated values and actual behavior",
      "Weak communication loops",
    ],
    changes: [
      "A shared organizational story",
      "Clear behavior expectations",
      "Culture that reinforces strategy and performance",
    ],
    color: "#D15B12",
    bgColor: "bg-orange-600",
    textColor: "text-orange-600",
    borderColor: "border-orange-600",
  },
];

export const osLayers = [
  {
    name: "Strategy and Aspiration",
    focus: "Strategic clarity, alignment, and measurable priorities",
    outputs: [
      "OS readiness heatmap",
      "Strategic insights",
      "Prioritized recommendations",
    ],
  },
  {
    name: "Leadership and Governance",
    focus:
      "Decision rights, leadership roles, escalation paths, and governance effectiveness",
    outputs: [
      "Leadership scorecards",
      "Governance gap analysis",
      "Execution risk insights",
    ],
  },
  {
    name: "Organization and Structure",
    focus: "Role clarity, reporting lines, and cross-functional interfaces",
    outputs: [
      "Organizational charts",
      "Role clarity maps",
      "Interface agreements",
    ],
  },
  {
    name: "People and Capability Systems",
    focus:
      "Performance management, incentives, learning, and succession with strategy",
    outputs: [
      "Performance frameworks",
      "Capability gap analysis",
      "Development roadmap",
    ],
  },
  {
    name: "Operations, Risk, and Compliance",
    focus: "Operational processes, compliance posture, and risk exposure",
    outputs: ["Policy and process assessments", "Operational gap analysis"],
  },
  {
    name: "Culture and Ways of Working",
    focus: "Cultural alignment, behavioral norms, and engagement drivers",
    outputs: ["Cultural alignment heatmap", "Behavior adoption plan"],
  },
];

export const engagementModels = [
  {
    name: "Focused Engagement",
    scope: "1-2 ALIGN Dimensions",
    description:
      "Targets one or two ALIGN dimensions to address specific execution or alignment challenges.",
    ideal: "Organizations with specific pain points or tactical needs",
  },
  {
    name: "Multi-Layer Engagement",
    scope: "3-4 ALIGN Dimensions",
    description:
      "Spans three to four ALIGN dimensions for organizations navigating scale, complexity, or transformation.",
    ideal: "Growing organizations facing structural or systemic challenges",
    popular: true,
  },
  {
    name: "Full Operating System Partnership",
    scope: "All ALIGN Dimensions",
    description:
      "Applies the full ALIGN methodology through a long-term partnership focused on end-to-end design and embed.",
    ideal: "Organizations undergoing comprehensive transformation",
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Engagement Scoping",
    desc: "We identify priority ALIGN dimensions based on strategic objectives and organizational pain points.",
  },
  {
    num: "02",
    title: "Diagnosis",
    desc: "We assess gaps and constraints, producing heatmaps, insights, and risk indicators.",
  },
  {
    num: "03",
    title: "Design and Embed",
    desc: "We architect practical solutions across structures, systems, and governance and embed them into operations.",
  },
  {
    num: "04",
    title: "Embed and Handover",
    desc: "We ensure knowledge transfer, establish ownership, and implement monitoring mechanisms.",
  },
  {
    num: "05",
    title: "Targeted Add-ons",
    desc: "Optional add-ons are deployed where diagnostics indicate the highest impact.",
  },
];
