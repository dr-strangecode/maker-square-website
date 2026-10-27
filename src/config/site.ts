export type BrandId = "lbh" | "maker";

const rawBrand = (import.meta.env.PUBLIC_BRAND ?? "lbh").toLowerCase();
export const brandId: BrandId = rawBrand === "maker" ? "maker" : "lbh";

const shared = {
  email: "hello@littlebloomhouse.com",
  phoneDisplay: "(423) 524-9500",
  phoneTel: "+14235249500",
  addressLine1: "The Mall at Johnson City",
  addressLine2: "2011 North Roan Street, Suite E3C",
  addressLine3: "Johnson City, TN 37601",
  mapsUrl:
    "https://www.google.com/maps/place/Little+Bloom+House/@36.3385264,-82.3789826,17z/data=!4m6!3m5!1s0x885a7d36d166ee37:0xf0af41ae828c3654!8m2!3d36.3385264!4d-82.3789826!16s%2Fg%2F11vyrgqwkz",
  // Driving directions to the exact coordinates of our existing Google Maps business pin.
  // This is intentionally NOT a search for the mall's street address, which leads to the front.
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=36.3385264%2C-82.3789826&travelmode=driving",
  mapsEmbedSrc: "https://www.google.com/maps?cid=17343152907797411412&output=embed",
  parking: "We have our own outside entrance at the back of the mall between Women's Belk and mall entrance D. Parking is in lot 17.",
  doorCap: 50,
  partyLeadDays: 7,
  gripSockPrice: 2.5,
  partyExtraAdult: 5,
  partyDuration: "1 hour 45",
  hours: [
    { day: "Monday – Friday", time: "9:00 am – 4:00 pm", note: "Open play" },
    { day: "Saturday", time: "9:00 am – 1:00 pm", note: "Open play" },
    { day: "Sunday", time: "Closed", note: "No open play or parties" },
  ],
  publicParty: {
    includedKids: 8,
    extraChild: 18,
    rosterCap: 12,
    saturdayPrice: 249,
    weekdayPrice: 199,
    saturdayTime: "11:00 am – 12:45 pm",
    duration: "1 hour 45",
  },
  privateParty: {
    includedKids: 15,
    includedAdults: 15,
    extraChild: 20,
    extraAdult: 5,
    rosterCap: 25,
    weekendPrice: 399,
    fridayPrice: 329,
    duration: "1 hour 45",
  },
  balloon: {
    name: "Balloon Set",
    price: 199,
  },
  partySchedule: [
    {
      day: "Weekdays",
      blurb:
        "Open play runs 9:00 am–4:00 pm Monday–Friday. A Public Party is 1 hour 45, tables in a corner while other families keep playing.",
      blocks: [
        {
          kind: "Public Party",
          time: "During open play",
          price: "$199",
          arrive: "You’re welcome to arrive 30 minutes early to set up. Play time is 1 hour 45.",
        },
      ],
    },
    {
      day: "Friday",
      blurb: "Friday evening the suite can be just your group.",
      blocks: [
        {
          kind: "Private Party",
          time: "5:00–6:45 pm",
          price: "$329",
          arrive: "Arrive at 4:30 pm to set up. Play time is 1 hour 45.",
        },
      ],
    },
    {
      day: "Saturday",
      blurb:
        "Open play is 9:00 am–1:00 pm. The shared birthday is 11:00 am–12:45 pm. After 1:00 the room can be private.",
      blocks: [
        {
          kind: "Public Party",
          time: "11:00 am–12:45 pm",
          price: "$249",
          arrive: "Arrive at 10:30 am to set up. Play time is 1 hour 45.",
        },
        {
          kind: "Private Party",
          time: "2:00–3:45 pm",
          price: "$399",
          arrive: "Arrive at 1:30 pm to set up. Play time is 1 hour 45.",
        },
        {
          kind: "Private Party",
          time: "5:00–6:45 pm",
          price: "$399",
          arrive: "Arrive at 4:30 pm to set up. Play time is 1 hour 45.",
        },
      ],
    },
  ],
  partyTimeChoices: [
    { group: "Public Party", value: "Saturday 11:00 am–12:45 pm · Public Party" },
    { group: "Public Party", value: "Weekday during open play · Public Party" },
    { group: "Private Party", value: "Friday 5:00–6:45 pm · Private Party" },
    { group: "Private Party", value: "Saturday 2:00–3:45 pm · Private Party" },
    { group: "Private Party", value: "Saturday 5:00–6:45 pm · Private Party" },
  ],
  facebook: "https://www.facebook.com/littlebloomhousejc",
  instagram: "https://www.instagram.com/thelittlebloomhouse",
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
  smartwaiverUrl: import.meta.env.PUBLIC_SMARTWAIVER_URL ?? "",
};

const skins = {
  lbh: {
    id: "lbh" as const,
    name: "Little Bloom House",
    short: "Little Bloom House",
    titleSuffix: "Little Bloom House",
    tagline: "Johnson City’s first play cafe",
    logoSrc: "/images/logo-lbh.png",
    logoAlt: "Little Bloom House wordmark",
    showRelaunchNote: true,
    footerLegal: "Little Bloom House is under new owners. Same suite at the Mall at Johnson City.",
    openPlay: {
      summary: "$7 per playing child",
      note: "October tickets are a reduced price while we prepare to relaunch in November!",
      rows: [
        { label: "Playing child", value: "$7" },
        { label: "Infant in arms, with a paying sibling", value: "Free" },
        { label: "Grip socks, if you need a pair", value: "$2.50" },
      ],
    },
  },
  maker: {
    id: "maker" as const,
    name: "Maker Square",
    short: "Maker Square",
    titleSuffix: "Maker Square",
    tagline: "A play place at the Mall at Johnson City",
    logoSrc: "/images/logo-maker.png",
    logoAlt: "Maker Square play place logo",
    showRelaunchNote: false,
    footerLegal: "Maker Square · Suite E3C · The Mall at Johnson City",
    openPlay: {
      summary: "$15, then $13, then $11",
      note: "The step-down is for children who live in the same household. Cousins and neighbors each start at $15.",
      rows: [
        { label: "1st playing child", value: "$15" },
        { label: "2nd playing child", value: "$13" },
        { label: "3rd playing child, and each after", value: "$11" },
        { label: "Infant in arms, with a paying sibling", value: "Free" },
        { label: "Extra adult, after one per playing child", value: "$5" },
        { label: "Grip socks, if you need a pair", value: "$2.50" },
      ],
    },
  },
};

export const brand = { ...shared, ...skins[brandId] };

export const nav = [
  { href: "/", label: "Home" },
  { href: "/hours", label: "Hours" },
  { href: "/rules", label: "Rules" },
  { href: "/parties", label: "Parties" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
