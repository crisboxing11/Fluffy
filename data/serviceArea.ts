// data/serviceArea.ts
// JSON-LD ONLY. Owner rule: sub-areas must never be rendered as visible copy.
// sameAs URLs checked Oct 5, 2026 via the Wikidata wbgetentities API (enwiki sitelinks).
// Green Valley has no standalone Wikipedia/Wikidata entry, so it has no sameAs.
// Boulder City is outside the service area and must not appear here.

// Official public business address. JSON-LD only. Do not render this in visible copy.
export const LAS_VEGAS_POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "6628 Sky Pointe Dr #280",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89131",
  addressCountry: "US",
};

const NEVADA = { "@type": "State", name: "Nevada" };
const LAS_VEGAS_CITY = { "@type": "City", name: "Las Vegas", containedInPlace: NEVADA };
const HENDERSON_CITY = { "@type": "City", name: "Henderson", containedInPlace: NEVADA };
const CLARK_COUNTY = {
  "@type": "AdministrativeArea",
  name: "Clark County",
  containedInPlace: NEVADA,
};

const refs = (enwiki: string, wikidataId?: string): string[] =>
  wikidataId
    ? [`https://en.wikipedia.org/wiki/${enwiki}`, `https://www.wikidata.org/wiki/${wikidataId}`]
    : [`https://en.wikipedia.org/wiki/${enwiki}`];

export const LAS_VEGAS_AREA_SERVED = [
  // Incorporated cities
  { ...LAS_VEGAS_CITY, sameAs: refs("Las_Vegas", "Q23768") },
  { ...HENDERSON_CITY, sameAs: refs("Henderson,_Nevada", "Q49267") },
  {
    "@type": "City",
    name: "North Las Vegas",
    containedInPlace: NEVADA,
    sameAs: refs("North_Las_Vegas,_Nevada", "Q143782"),
  },
  // Master-planned community (Wikidata: "in Las Vegas, Nevada")
  {
    "@type": "Place",
    name: "Summerlin",
    containedInPlace: LAS_VEGAS_CITY,
    sameAs: refs("Summerlin,_Nevada", "Q3472796"),
  },
  // Unincorporated towns / CDPs in Clark County
  {
    "@type": "Place",
    name: "Spring Valley",
    containedInPlace: CLARK_COUNTY,
    sameAs: refs("Spring_Valley,_Nevada", "Q992507"),
  },
  {
    "@type": "Place",
    name: "Enterprise",
    containedInPlace: CLARK_COUNTY,
    sameAs: refs("Enterprise,_Nevada", "Q1344696"),
  },
  {
    "@type": "Place",
    name: "Paradise",
    containedInPlace: CLARK_COUNTY,
    sameAs: refs("Paradise,_Nevada", "Q984542"),
  },
  // Henderson neighborhoods
  { "@type": "Place", name: "Green Valley", containedInPlace: HENDERSON_CITY },
  {
    "@type": "Place",
    name: "Anthem",
    containedInPlace: HENDERSON_CITY,
    sameAs: refs("Anthem,_Henderson"), // enwiki article confirmed; no Wikidata ID verified
  },
];
