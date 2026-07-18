/* ============================================================
   Series data model — the four-Part arc of the Adani Empire.
   Every Part reuses one article template; `hasContent` marks
   which are written vs. forthcoming. Room to grow: add a Part
   by appending here and dropping a content module in content/.
   ============================================================ */

export type PartSection = {
  heading: string;
  blurb: string;
};

export type Part = {
  slug: string;
  number: number;
  numeral: string; // display numeral, e.g. "I"
  part: string; // the volume, e.g. "The Foundation & The Man"
  title: string; // the article headline
  standfirst: string; // the dek
  readingMinutes: number;
  published: string; // ISO date
  hasContent: boolean;
  byline: string;
  image: string; // Unsplash photo path, resolved by lib/image-loader
  imageAlt: string;
  sections: PartSection[];
};

export const SERIES_TITLE = "The Adani Empire";
export const SERIES_TAGLINE =
  "How one group was assembled — the man, the money, the map, and the frontiers ahead.";
export const SERIES_ISSUE = "Issue 01 · 2026";

/** Cover masthead image for the homepage. */
export const COVER_IMAGE = "photo-1590496793907-4d66e2994b4d";
export const COVER_IMAGE_ALT =
  "Container cranes and stacked freight lit at dusk over a working deep-water port.";

export const parts: Part[] = [
  {
    slug: "the-foundation-and-the-man",
    number: 1,
    numeral: "I",
    part: "The Foundation & The Man",
    title: "The Sorter Who Built a Continent's Infrastructure",
    standfirst:
      "Before the ports and the power plants, there was a teenager sorting diamonds in Bombay. The origins of Gautam Adani, and the founding idea that everything else grew from.",
    readingMinutes: 8,
    published: "2026-07-18",
    hasContent: true,
    byline: "By The Editors",
    image: "photo-1585713181935-d5f622cc2415",
    imageAlt:
      "A fully-laden container ship photographed from directly above, cutting a white wake through deep green water.",
    sections: [
      { heading: "Early Life & Origins", blurb: "From a Gujarati merchant family to the Bombay diamond trade." },
      { heading: "Weathering the Storm", blurb: "The Hindenburg report and the group's resilience." },
      { heading: "Giving Back", blurb: "Philanthropy and community impact." },
    ],
  },
  {
    slug: "the-financial-engine",
    number: 2,
    numeral: "II",
    part: "The Financial Engine & Incubation Model",
    title: "The Incubator",
    standfirst:
      "How Adani Enterprises works as a launchpad — construction finance refinanced into long-tenure debt, bullet payments at the end, and the discipline of the 1:3 and 1:4 ratios.",
    readingMinutes: 11,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: "photo-1564035105550-e1f02aa8556b",
    imageAlt:
      "A container vessel berthed under yellow gantry cranes at a working terminal, freight stacked along the quay.",
    sections: [
      { heading: "The Incubator", blurb: "Enterprises as the launchpad for new ventures." },
      { heading: "Financial Strategy & Leverage", blurb: "The refinancing model and debt-to-equity discipline." },
      { heading: "Self-Sufficiency", blurb: "₹1 lakh crore from internal accruals at Adani Power." },
    ],
  },
  {
    slug: "global-dominance",
    number: 3,
    numeral: "III",
    part: "Global Dominance & Strategic Assets",
    title: "A Map of Chokepoints",
    standfirst:
      "The strategy of acquiring geopolitical assets — a deep-water port in Kerala, the gateway port in Israel, Colombo, and Carmichael in Australia.",
    readingMinutes: 12,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: "photo-1601311852860-1d8f42381551",
    imageAlt:
      "A container port and ships under low fog, cranes receding into the mist along a wide harbour.",
    sections: [
      { heading: "Building a Global Network", blurb: "Acquiring strategic geopolitical assets." },
      { heading: "The Kerala Deep-Water Port", blurb: "Taking on Singapore, Dubai, and Malaysia." },
      { heading: "International Checkmates", blurb: "Israel, Colombo, and Carmichael." },
    ],
  },
  {
    slug: "future-frontiers",
    number: 4,
    numeral: "IV",
    part: "Diversification & Future Frontiers",
    title: "Everything After Ports",
    standfirst:
      "The expansion into defence and real estate — where a group that built the arteries of a nation decides to go next.",
    readingMinutes: 9,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: "photo-1509389928833-fe62aef36deb",
    imageAlt:
      "Long rows of solar panels stretching toward a treeline in an aerial view of a utility-scale solar field.",
    sections: [
      { heading: "Securing the Nation", blurb: "The strategic expansion into Adani Defence." },
      { heading: "Urban Expansion", blurb: "Moves into the real estate sector." },
    ],
  },
];

export function getPart(slug: string): Part | undefined {
  return parts.find((p) => p.slug === slug);
}

export function getNextPart(slug: string): Part | undefined {
  const i = parts.findIndex((p) => p.slug === slug);
  if (i === -1 || i === parts.length - 1) return undefined;
  return parts[i + 1];
}
