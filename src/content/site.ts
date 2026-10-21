export const firm = {
  name: "MK Mboya Advocates LLP",
  shortName: "MK Mboya",
  tagline: "Expertise You Can Trust.",
  location: "Nairobi, Kenya",
  region: "Kenya and East Africa",
  domains: ["mkmboya.ke", "mkmboya.africa", "mkmboya.law"],
  email: "chambers@mkmboya.law",
  emailNote: "Proposed chambers address — confirm with the firm before printing.",
} as const;

export const heroEyebrow = "Kenya · Corporate & Climate Law";

export const landing = {
  lead: "An agile, specialist Kenyan law firm providing high-quality, personalised legal services across corporate and investment transactions, due diligence, local counsel support, renewable energy, and climate & energy advisory.",
  body: "Led by a highly rated climate and corporate lawyer, we combine rigorous legal expertise with commercial understanding and deep local knowledge to help clients navigate complex transactions, investments and regulatory environments in Kenya and across East Africa.",
  intersection:
    "Our practice sits at the intersection of corporate law, investment and the energy transition, giving clients a distinctive combination of transactional expertise and specialist climate and energy knowledge.",
  close:
    "We work with businesses, investors and international counsel to unlock opportunities for sustainable investment in the region and beyond, providing practical, responsive and trusted legal counsel.",
};

export const whoWeAre = {
  title: "Who we are",
  p1: "We are a modern Kenyan law firm providing trusted, practical and commercially focused legal advice to individuals, businesses and institutions. We combine strong legal expertise with a deep understanding of our clients, their objectives and the environments in which they operate.",
  p2: "Our approach is simple: listen carefully, think strategically and deliver solutions that work. We are committed to excellence, integrity and long-term client relationships, providing responsive counsel grounded in both legal rigour and commercial reality.",
};

export const values = [
  "Responsiveness",
  "Rigour",
  "Commercial Understanding",
  "Local Knowledge",
  "Global Perspective",
] as const;

export type PracticeArea = {
  slug: string;
  title: string;
  signature?: boolean;
  intro: string;
  bullets: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-ma-investment",
    title: "Corporate, M&A & Investment Transactions",
    intro:
      "Whether you require legal assistance with a simple commercial transaction, contract, due diligence on a business, or support through a proposed investment, merger or acquisition, we are available to offer the necessary expertise.",
    bullets: [
      "Mergers & acquisitions (buy-side, sell-side and transaction structuring), including drafting and negotiating transaction agreements",
      "Private equity transactions",
      "Capital markets",
      "Competition law",
      "Banking & finance",
      "Investment contracts and shareholder agreements",
      "Complex commercial contracts",
      "Renewable energy project development transactions",
      "Project structuring and regulatory approvals",
      "Community engagement and social licence advisory, including livelihood restoration",
    ],
  },
  {
    slug: "due-diligence-local-counsel",
    title: "Due Diligence & Local Counsel Support",
    intro:
      "We support clients, international law firms, investors and financial institutions as Kenyan local counsel, providing comprehensive local law advice and transaction support. Our services include legal and regulatory due diligence, review and preparation of local law documentation, corporate and regulatory searches, transaction structuring, perfection and registration of security, securitisation, regulatory approvals, and other Kenya-specific legal matters arising in cross-border transactions.",
    bullets: [
      "Corporate and commercial due diligence",
      "Local counsel support for cross-border and multi-jurisdictional transactions",
      "Regulatory compliance and approvals",
    ],
  },
  {
    slug: "land-rights",
    title: "Land Rights Advisory",
    intro:
      "We advise landowners, investors, developers and communities on land rights, acquisition, tenure, compulsory acquisition, resettlement and land-related disputes, with a focus on protecting rights while enabling responsible investment.",
    bullets: [
      "Land transactions and title due diligence",
      "Land-use, tenure and regulatory advisory",
      "Land rights and benefit-sharing considerations in project development",
    ],
  },
  {
    slug: "startup-investor",
    title: "Start-Up & Investor Advisory",
    intro:
      "We support entrepreneurs, start-ups and investors from formation to growth, providing practical advice on structuring, investment, shareholder arrangements, governance, financing and commercial transactions.",
    bullets: [
      "Company incorporation and structuring",
      "Fundraising documentation (SAFEs, convertible notes, term sheets, shareholder agreements)",
      "Corporate governance advisory",
      "Support for private equity-backed transactions",
    ],
  },
  {
    slug: "climate-energy",
    title: "Environmental, Climate & Energy Law",
    signature: true,
    intro:
      "Our signature practice combines legal, regulatory and policy expertise to advise on renewable energy, climate governance, environmental compliance, energy projects, just transitions and sustainable investment.",
    bullets: [
      "Environmental and Social Impact Assessment (ESIA) advisory and review",
      "Climate risk and regulatory compliance for project developers",
      "Just energy transition and green industrialisation advisory",
      "Policy and regulatory engagement",
    ],
  },
  {
    slug: "company-secretarial",
    title: "Company Secretarial Services",
    intro:
      "We provide efficient company secretarial and corporate governance support, including statutory filings, board and shareholder resolutions, registers, annual returns and ongoing compliance.",
    bullets: [
      "Statutory compliance and filings",
      "Board support and corporate governance advisory",
      "Company incorporation, registers and records management",
    ],
  },
];

export const founder = {
  role: "Founding Partner",
  framing:
    "A founder-led boutique with an extended network and of-counsel model — not a large in-house bench. That keeps the work close to the partner who leads it, while drawing in specialist support where a matter needs it.",
  credentials: [
    "LL.M., University of Cape Town",
    "ENS / DLA Piper background",
    "Power Shift Africa",
    "Katiba Institute litigation credentials",
    "Legal 500 recognition",
  ],
  note: "Full biography to be lifted from the founding partner’s CV. Credentials above are taken from the firm outline of 17 August 2026; given name and portrait are not in that brief and are not invented here.",
};

export const insightsSources = [
  {
    outlet: "Mail & Guardian",
    blurb: "Published commentary by the founding partner — archive to be republished here.",
  },
  {
    outlet: "Business Daily Africa",
    blurb: "Existing op-eds and analysis on corporate, climate and energy issues in Kenya.",
  },
  {
    outlet: "Power Shift Africa",
    blurb: "Policy briefs and climate-transition writing that sit beside the signature practice.",
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/people", label: "People" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export function getPractice(slug: string) {
  return practiceAreas.find((p) => p.slug === slug);
}
