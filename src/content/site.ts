/**
 * Centralised, editable content for the Aashray website.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * ALL PHOTOGRAPHY IN THIS PROJECT IS AI-GENERATED PLACEHOLDER IMAGERY.
 * Replace the files in src/assets/ with the organisation's real photographs
 * before publication. Images may NOT be presented as actual beneficiaries,
 * staff, locations, or events of the organisation.
 *
 * Every value flagged `verified: false` is a reference-design placeholder
 * that MUST be confirmed by the organisation before publication. Do not
 * present unverified figures, regions, quotes, or team members as fact.
 * ─────────────────────────────────────────────────────────────────────────
 */

import heroChild from "@/assets/hero-child.jpg";
import heroAbout from "@/assets/hero-about.jpg";
import heroWork from "@/assets/hero-work.jpg";
import heroImpact from "@/assets/hero-impact.jpg";
import heroVolunteers from "@/assets/hero-volunteers.jpg";
import heroDonate from "@/assets/hero-donate.jpg";
import heroContact from "@/assets/hero-contact.jpg";
import bannerQuote from "@/assets/banner-quote.jpg";
import programEducation from "@/assets/program-education.jpg";
import programLivelihoods from "@/assets/program-livelihoods.jpg";
import programHealth from "@/assets/program-health.jpg";
import programEnvironment from "@/assets/program-environment.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import closingImpact from "@/assets/closing-impact.jpg";

export const images = {
  heroChild,
  heroAbout,
  heroWork,
  heroImpact,
  heroVolunteers,
  heroDonate,
  heroContact,
  bannerQuote,
  closingImpact,
};

export const site = {
  name: "Aashray",
  tagline: "Small Actions. Real Change.",
  mission:
    "Working together to build a fairer, healthier, and more sustainable future for everyone.",
  hero: {
    headline: ["Small Actions.", "Real Change."],
    support:
      "We work with communities to build a fairer, healthier, and more sustainable future for everyone.",
    primaryCta: { label: "Support Our Work", to: "/donate" },
    secondaryCta: { label: "Explore Our Impact", to: "/impact" },
  },
  /**
   * PLACEHOLDER contact details. Replace with the organisation's verified
   * details before publication. Nothing here has been confirmed.
   */
  contact: {
    address: "[Office address to be confirmed by the organisation]",
    email: "[Email address to be confirmed]",
    phone: "[Phone number to be confirmed]",
    socialNote: "Social media profiles to be added once verified",
  },
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Work", to: "/work" },
  { label: "Impact", to: "/impact" },
  { label: "Get Involved", to: "/get-involved" },
] as const;

/**
 * PLACEHOLDER statistics from the reference design — NOT verified facts.
 * Confirm real figures with the organisation and update `value`/`label`
 * before publication.
 */
export interface ImpactStat {
  value: string;
  label: string;
  verified: boolean;
}

export const impactStats: ImpactStat[] = [
  { value: "10K+", label: "People Reached", verified: false },
  { value: "42", label: "Communities Supported", verified: false },
  { value: "18", label: "Active Initiatives", verified: false },
];

export interface Program {
  id: "education" | "livelihoods" | "health" | "environment";
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  keyActivities: string[];
  /** Placeholder outcome — replace with verified results. */
  outcomePlaceholder: string;
}

export const programs: Program[] = [
  {
    id: "education",
    title: "Education",
    shortDescription:
      "Supporting access to learning and opportunities for children and young people.",
    longDescription:
      "We support learning opportunities, educational resources, and mentoring so that children and young people can stay in school and aim higher — working alongside families, teachers, and local schools to remove the barriers that keep children out of the classroom.",
    image: programEducation,
    imageAlt:
      "A teacher guiding young students writing in notebooks at an open-air village classroom.",
    keyActivities: [
      "After-school learning support and mentoring",
      "Learning materials and educational resources",
      "Support for children at risk of dropping out",
      "Engagement with parents and local schools",
    ],
    outcomePlaceholder:
      "[Verified outcome to be added — e.g. number of children supported, confirmed by the organisation]",
  },
  {
    id: "livelihoods",
    title: "Sustainable Livelihoods",
    shortDescription:
      "Helping communities develop skills, income opportunities, and long-term economic resilience.",
    longDescription:
      "We work with communities to build skills, sustainable income opportunities, and long-term economic resilience — from vocational training and self-help groups to support for local artisans and farmers reaching better markets.",
    image: programLivelihoods,
    imageAlt:
      "Women artisans weaving traditional bamboo crafts at a rural workshop.",
    keyActivities: [
      "Skills and vocational training",
      "Support for self-help and producer groups",
      "Market and enterprise linkages",
      "Financial literacy and planning support",
    ],
    outcomePlaceholder:
      "[Verified outcome to be added — e.g. number of people trained, confirmed by the organisation]",
  },
  {
    id: "health",
    title: "Health & Wellbeing",
    shortDescription:
      "Supporting healthier communities through accessible care and wellbeing initiatives.",
    longDescription:
      "We support healthier communities through accessible care, prevention, and wellbeing initiatives — working with local health workers and volunteers so that families can reach trustworthy care and the knowledge to stay well.",
    image: programHealth,
    imageAlt:
      "A community health worker talking with village elders during a rural wellness visit.",
    keyActivities: [
      "Community wellness visits and check-up camps",
      "Preventive health and hygiene education",
      "Nutrition support for mothers and children",
      "Partnerships with local health services",
    ],
    outcomePlaceholder:
      "[Verified outcome to be added — e.g. number of wellness visits held, confirmed by the organisation]",
  },
  {
    id: "environment",
    title: "Environment",
    shortDescription:
      "Encouraging environmental restoration, sustainability, and community-led conservation.",
    longDescription:
      "We encourage environmental restoration, sustainability, and community-led conservation — planting native trees, restoring common land, and supporting villages to manage water and waste in ways that outlast any single project.",
    image: programEnvironment,
    imageAlt:
      "Community members and children planting a young sapling together on a green hillside.",
    keyActivities: [
      "Community tree planting and native restoration",
      "Water conservation and watershed work",
      "Waste reduction and village cleanliness drives",
      "Environmental education with schools",
    ],
    outcomePlaceholder:
      "[Verified outcome to be added — e.g. number of trees planted and survived, confirmed by the organisation]",
  },
];

export const quoteBanner = {
  statement: "Change begins when someone decides to care.",
  attribution: "[Attribution placeholder — replace with an approved real quote]",
  image: bannerQuote,
} as const;

export const helpPaths = [
  {
    title: "Donate",
    description: "Support meaningful community initiatives.",
    to: "/donate",
  },
  {
    title: "Volunteer",
    description: "Contribute your time and skills.",
    to: "/get-involved",
  },
  {
    title: "Partner",
    description: "Work together to create lasting change.",
    to: "/get-involved",
  },
] as const;

export const values = [
  {
    title: "Dignity",
    description: "Every person matters.",
  },
  {
    title: "Equity",
    description: "Equal opportunities for all.",
  },
  {
    title: "Sustainability",
    description: "For future generations.",
  },
] as const;

/**
 * PLACEHOLDER team members. Names are deliberately generic — replace with
 * verified names, roles, photographs, and biographies before publication.
 */
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  isPlaceholder: boolean;
}

export const team: TeamMember[] = [
  {
    name: "[Name to be confirmed]",
    role: "[Role — e.g. Programme Lead]",
    bio: "[Short biography to be provided by the organisation.]",
    image: team1,
    isPlaceholder: true,
  },
  {
    name: "[Name to be confirmed]",
    role: "[Role — e.g. Community Partnerships]",
    bio: "[Short biography to be provided by the organisation.]",
    image: team2,
    isPlaceholder: true,
  },
  {
    name: "[Name to be confirmed]",
    role: "[Role — e.g. Field Coordinator]",
    bio: "[Short biography to be provided by the organisation.]",
    image: team3,
    isPlaceholder: true,
  },
];

export interface Story {
  title: string;
  quote: string;
  attribution: string;
  image: string;
  imageAlt: string;
  isPlaceholder: boolean;
}

/**
 * PLACEHOLDER stories. These are illustrative examples, NOT real beneficiary
 * accounts. Replace with consented, approved stories — with real names or
 * anonymous attribution only where consent permits.
 */
export const stories: Story[] = [
  {
    title: "Back to the classroom",
    quote: "[Placeholder quote — to be replaced with an approved, consented story.]",
    attribution: "[Attribution placeholder]",
    image: story1,
    imageAlt: "A student in school uniform holding her books outside a village school.",
    isPlaceholder: true,
  },
  {
    title: "A steadier harvest",
    quote: "[Placeholder quote — to be replaced with an approved, consented story.]",
    attribution: "[Attribution placeholder]",
    image: story2,
    imageAlt: "A farmer holding a basket of fresh vegetables in his field at dusk.",
    isPlaceholder: true,
  },
  {
    title: "A community orchard takes root",
    quote: "[Placeholder quote — to be replaced with an approved, consented story.]",
    attribution: "[Attribution placeholder]",
    image: story3,
    imageAlt:
      "A volunteer and children planting a sapling together at a community orchard.",
    isPlaceholder: true,
  },
];

/**
 * Illustrative reach regions. These are NOT confirmed operating regions —
 * show real geography only once the organisation confirms where it works.
 */
export const reachRegions = [
  "North India",
  "East India",
  "West India",
  "Central India",
  "Northeast India",
] as const;

export const outcomes = [
  { title: "Better Education", description: "Learning that opens doors." },
  { title: "Improved Health", description: "Communities that stay well." },
  { title: "A Greener Future", description: "Land restored for tomorrow." },
] as const;

export const donationAmounts = [500, 1000, 2500] as const;

export const donationFrequencies = [
  { id: "once", label: "One-time" },
  { id: "monthly", label: "Monthly" },
] as const;

export type DonationFrequency = (typeof donationFrequencies)[number]["id"];

/** Formats a rupee amount the Indian way, e.g. ₹2,500. */
export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
