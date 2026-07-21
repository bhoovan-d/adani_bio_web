/* ============================================================
   Series data model — the Adani Empire, told in twelve.
   Four Volumes of three Posts each (12 in all). One article
   template is reused for every Post; `hasContent` marks which
   are written vs. forthcoming.

   Growing the series:
   • A planned Post — append to `posts` (set its `volume` and
     `order`), drop a content module in content/, register it
     in content/index.ts, and flip `hasContent`.
   • Your own mini-blog — append to `dispatches` with
     `kind: "mini"` and `hasContent: true`, then add the
     content module + registry entry. Dispatches render in
     their own group, outside the four-Volume arc.
   ============================================================ */

export type Volume = {
  number: number; // 1..4
  numeral: string; // display numeral, e.g. "I"
  title: string; // the volume, e.g. "The Foundation & The Man"
  blurb: string; // one line describing the volume
};

export type Post = {
  slug: string;
  volume: number; // which Volume this Post belongs to (1..4)
  order: number; // global reading order across the whole series
  title: string; // the article headline
  standfirst: string; // the dek
  readingMinutes: number;
  published: string; // ISO date, or "" when forthcoming
  hasContent: boolean;
  byline: string;
  image: string; // Unsplash photo path, resolved by lib/image-loader
  imageAlt: string;
  kind?: "feature" | "mini"; // "mini" = an editor's own dispatch
};

export const SERIES_TITLE = "The Adani Empire";
export const SERIES_TAGLINE =
  "How one group was assembled — the man, the money, the map, and the frontiers ahead.";
export const SERIES_ISSUE = "Issue 01 · 2026";

/** Cover masthead image for the homepage. */
export const COVER_IMAGE = "photo-1590496793907-4d66e2994b4d";
export const COVER_IMAGE_ALT =
  "Container cranes and stacked freight lit at dusk over a working deep-water port.";

/** The four Volumes, in reading order. */
export const volumes: Volume[] = [
  {
    number: 1,
    numeral: "I",
    title: "The Foundation & The Man",
    blurb: "The man, the origin story, and the founding idea everything grew from.",
  },
  {
    number: 2,
    numeral: "II",
    title: "The Financial Engine & Incubation Model",
    blurb:
      "The launchpad model — refinancing, leverage, and the discipline of the ratios.",
  },
  {
    number: 3,
    numeral: "III",
    title: "Global Dominance & Strategic Assets",
    blurb: "The strategy of owning the world's chokepoints, port by port.",
  },
  {
    number: 4,
    numeral: "IV",
    title: "Diversification & Future Frontiers",
    blurb: "Where a group that built a nation's arteries decides to go next.",
  },
];

/** Volume imagery, reused across the Posts within each Volume until
 *  bespoke art is supplied. Swap freely per Post. */
const VOL_IMAGE: Record<number, { image: string; imageAlt: string }> = {
  1: {
    image: "photo-1585713181935-d5f622cc2415",
    imageAlt:
      "A fully-laden container ship photographed from directly above, cutting a white wake through deep green water.",
  },
  2: {
    image: "photo-1564035105550-e1f02aa8556b",
    imageAlt:
      "A container vessel berthed under yellow gantry cranes at a working terminal, freight stacked along the quay.",
  },
  3: {
    image: "photo-1601311852860-1d8f42381551",
    imageAlt:
      "A container port and ships under low fog, cranes receding into the mist along a wide harbour.",
  },
  4: {
    image: "photo-1509389928833-fe62aef36deb",
    imageAlt:
      "Long rows of solar panels stretching toward a treeline in an aerial view of a utility-scale solar field.",
  },
};

/** The twelve planned Posts. Only Post 1 is written so far. */
export const posts: Post[] = [
  // ---- Volume I — The Foundation & The Man ----
  {
    slug: "the-foundation-and-the-man",
    volume: 1,
    order: 1,
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
  },
  {
    slug: "weathering-the-storm",
    volume: 1,
    order: 2,
    title: "Weathering the Storm",
    standfirst:
      "The Hindenburg report wiped over a hundred billion dollars off the group in weeks. What happened between the pulled share sale and the re-rating — and what it revealed about how Adani manages a crisis.",
    readingMinutes: 9,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: VOL_IMAGE[1].image,
    imageAlt: VOL_IMAGE[1].imageAlt,
  },
  {
    slug: "giving-back",
    volume: 1,
    order: 3,
    title: "Giving Back",
    standfirst:
      "The Adani Foundation and the ₹60,000-crore pledge — philanthropy at the scale of the empire, read both generously and skeptically.",
    readingMinutes: 6,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: VOL_IMAGE[1].image,
    imageAlt: VOL_IMAGE[1].imageAlt,
  },

  // ---- Volume II — The Financial Engine & Incubation Model ----
  {
    slug: "the-incubator",
    volume: 2,
    order: 4,
    title: "The Incubator",
    standfirst:
      "Adani Enterprises as launchpad: how a new venture is nursed inside the parent before it is spun out into its own listing.",
    readingMinutes: 8,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: VOL_IMAGE[2].image,
    imageAlt: VOL_IMAGE[2].imageAlt,
  },
  {
    slug: "the-refinancing-discipline",
    volume: 2,
    order: 5,
    title: "The 1:3 and 1:4 Discipline",
    standfirst:
      "Construction finance refinanced into long-tenure debt, with bullet payments at the end. The ratios that keep the leverage honest, explained without jargon.",
    readingMinutes: 10,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: VOL_IMAGE[2].image,
    imageAlt: VOL_IMAGE[2].imageAlt,
  },
  {
    slug: "self-funded",
    volume: 2,
    order: 6,
    title: "₹1 Lakh Crore, Self-Funded",
    standfirst:
      "Adani Power as the case study — the plants built from internal accruals, and what that proved about the model.",
    readingMinutes: 7,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: VOL_IMAGE[2].image,
    imageAlt: VOL_IMAGE[2].imageAlt,
  },

  // ---- Volume III — Global Dominance & Strategic Assets ----
  {
    slug: "map-of-chokepoints",
    volume: 3,
    order: 7,
    title: "A Map of Chokepoints",
    standfirst:
      "The port thesis: why owning the world's transit points is a strategy, not a shopping list.",
    readingMinutes: 9,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: VOL_IMAGE[3].image,
    imageAlt: VOL_IMAGE[3].imageAlt,
  },
  {
    slug: "vizhinjam",
    volume: 3,
    order: 8,
    title: "Vizhinjam: The Deep-Water Bet on Kerala",
    standfirst:
      "India's answer to Singapore, Dubai, and Malaysia — draft depths, transhipment share, and the geography that makes it work.",
    readingMinutes: 11,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: VOL_IMAGE[3].image,
    imageAlt: VOL_IMAGE[3].imageAlt,
  },
  {
    slug: "international-checkmates",
    volume: 3,
    order: 9,
    title: "Haifa, Colombo, Carmichael",
    standfirst:
      "Three international checkmates read as one strategy: an Israeli gateway, a Sri Lankan pivot, an Australian coal artery.",
    readingMinutes: 10,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: VOL_IMAGE[3].image,
    imageAlt: VOL_IMAGE[3].imageAlt,
  },

  // ---- Volume IV — Diversification & Future Frontiers ----
  {
    slug: "securing-the-nation",
    volume: 4,
    order: 10,
    title: "Securing the Nation",
    standfirst:
      "The strategic expansion into Adani Defence — what the group is building, and why the arteries logic extends here.",
    readingMinutes: 8,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: VOL_IMAGE[4].image,
    imageAlt: VOL_IMAGE[4].imageAlt,
  },
  {
    slug: "urban-expansion",
    volume: 4,
    order: 11,
    title: "Urban Expansion",
    standfirst:
      "The move into real estate — Dharavi, the airport-city playbook, and what a builder of arteries does with land.",
    readingMinutes: 7,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: VOL_IMAGE[4].image,
    imageAlt: VOL_IMAGE[4].imageAlt,
  },
  {
    slug: "everything-after-ports",
    volume: 4,
    order: 12,
    title: "Everything After Ports",
    standfirst:
      "The closer — the frontier thesis that ties the four Volumes back together, and where the next issue is headed.",
    readingMinutes: 9,
    published: "",
    hasContent: false,
    byline: "By The Editors",
    image: VOL_IMAGE[4].image,
    imageAlt: VOL_IMAGE[4].imageAlt,
  },
];

/** Editor's own mini-blogs, outside the four-Volume arc.
 *  Append here (kind: "mini") to publish a dispatch. */
export const dispatches: Post[] = [];

/** Every Post that has a page — the planned series plus dispatches. */
function allPosts(): Post[] {
  return [...posts, ...dispatches];
}

export function getPost(slug: string): Post | undefined {
  return allPosts().find((p) => p.slug === slug);
}

export function getVolume(n: number): Volume | undefined {
  return volumes.find((v) => v.number === n);
}

/** The Posts in a Volume, in reading order. */
export function postsInVolume(n: number): Post[] {
  return posts.filter((p) => p.volume === n).sort((a, b) => a.order - b.order);
}

/** The twelve planned Posts, sorted by global reading order. */
export function orderedPosts(): Post[] {
  return [...posts].sort((a, b) => a.order - b.order);
}

/** The next Post in the arc, or undefined at the end.
 *  Dispatches are standalone and have no "next". */
export function getNextPost(slug: string): Post | undefined {
  const ordered = orderedPosts();
  const i = ordered.findIndex((p) => p.slug === slug);
  if (i === -1 || i === ordered.length - 1) return undefined;
  return ordered[i + 1];
}
