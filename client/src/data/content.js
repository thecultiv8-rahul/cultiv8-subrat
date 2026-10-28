// All page copy and settings in one place — edit here, not in components.

export const SITE = {
  phone: "+91 97667 77246",
  phoneHref: "tel:+919766777246",
  whatsappHref:
    "https://wa.me/919766777246?text=" +
    encodeURIComponent("Hi Cultiv8, I'd like to know more about the Festive Privilege offer at Sterling Towers, Baner."),
  // TODO: replace with the client's real email address.
  email: "info@cultiv8.co.in",
  website: "https://cultiv8.co.in",
  websiteLabel: "cultiv8.co.in",
  instagram: "#", // TODO
  facebook: "#", // TODO
  addressShort: "Sterling Towers, Pancard Club Rd, Baner, Pune",
  addressLines: ["7th Floor, Sterling Towers", "Pancard Club Rd, Baner", "Pune, Maharashtra 411069"],
  mapsQuery: "Cultiv8 Sterling Towers, Pancard Club Rd, Baner, Pune 411069",
};

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed&t=k`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`;

export const NAV = [
  { label: "Workspaces", href: "#workspaces" },
  { label: "Inside", href: "#inside" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];

export const HERO_STATS = [
  { label: "Centre", value: "Sterling Towers" },
  { label: "Floor", value: "7th Floor, Baner" },
  { label: "Capacity", value: "130 Seats" },
  { label: "Area", value: "5,500 sq ft" },
];

export const CLIENTS = [
  { name: "Sopra Banking Software", logo: "/images/logos/sopra-banking.png" },
  { name: "greytHR", logo: "/images/logos/greythr.png" },
  { name: "Tenthpin", logo: "/images/logos/tenthpin.png" },
  { name: "GigIndia", logo: "/images/logos/gigindia.png" },
  { name: "CrossOver", logo: "/images/logos/crossover.png" },
  { name: "Exaltare Technologies", logo: "/images/logos/exaltare.png" },
  { name: "MobiFolio", logo: "/images/logos/mobifolio.png" },
];

export const WORKSPACES = [
  {
    tag: "Individuals & small teams",
    title: "Dedicated Desks",
    text: "Your own fixed workstation in a professional, shared environment — ready to plug in and work.",
    cta: "Ask about desks",
    img: "/images/dedicated-desks.jpg",
  },
  {
    tag: "Teams",
    title: "Private Cabins",
    text: "Enclosed, lockable cabins for focused teams who need privacy without managing an office.",
    cta: "Ask about cabins",
    img: "/images/private-cabins.jpg",
  },
  {
    tag: "Growing companies",
    title: "Managed Offices",
    text: "A dedicated office for your company, with the workspace run and maintained for you.",
    cta: "Ask about offices",
    img: "/images/managed-offices.jpg",
  },
  {
    tag: "By the hour or day",
    title: "Meeting & Conference Rooms",
    text: "Fully equipped rooms for client meetings, presentations and team sessions — no setup hassle.",
    cta: "Ask about rooms",
    img: "/images/boardroom.jpg",
  },
  {
    tag: "Leadership",
    title: "Director's Suite",
    text: "A private executive office for founders and leaders who want space to think and host.",
    cta: "See it on a tour",
    tour: true,
    img: "/images/directors-suite.jpg",
  },
  {
    tag: "Business presence",
    title: "Virtual Office",
    text: "A professional Baner business address for companies that don't need a desk every day.",
    cta: "Ask about virtual office",
    img: "/images/reception.jpg",
  },
];

export const VIDEOS = [
  {
    id: "walkthrough",
    title: "Full Walkthrough",
    sub: "Walk the actual Cultiv8 floor · approx. 1:16",
    src: "/videos/walkthrough.mp4",
    poster: "/images/breakout-zone.jpg",
  },
  {
    id: "highlights",
    title: "Highlights Reel",
    sub: "37 seconds",
    src: "/videos/highlights.mp4",
    poster: "/images/highlights-poster.jpg",
  },
];

export const GALLERY_FILTERS = [
  { key: "all", label: "All" },
  { key: "workspaces", label: "Workspaces" },
  { key: "meeting", label: "Meeting rooms" },
  { key: "breakout", label: "Breakout & café" },
];

export const GALLERY = [
  { label: "Breakout zone", cat: "breakout", img: "/images/breakout-zone.jpg", wide: true },
  { label: "Front desk", cat: "workspaces", img: "/images/front-desk.jpg" },
  { label: "Boardroom", cat: "meeting", img: "/images/boardroom.jpg" },
  { label: "Dedicated desks", cat: "workspaces", img: "/images/dedicated-desks.jpg" },
  { label: "Café & games", cat: "breakout", img: "/images/cafe-games.jpg" },
  { label: "Reception", cat: "workspaces", img: "/images/reception.jpg" },
  { label: "Meeting room", cat: "meeting", img: "/images/meeting-room.jpg" },
  { label: "Team space", cat: "workspaces", img: "/images/team-space.jpg" },
  { label: "Recreation", cat: "breakout", img: "/images/recreation.jpg" },
  { label: "Breakout zone", cat: "breakout", img: "/images/breakout-mural.jpg" },
];

export const AMENITIES = [
  { icon: "wifi", title: "High-speed Wi-Fi", text: "Reliable connectivity across the floor." },
  { icon: "ac", title: "Air conditioning", text: "Climate-controlled workspaces." },
  { icon: "meeting", title: "Meeting rooms", text: "Boardroom and meeting rooms for calls and sessions." },
  { icon: "cafe", title: "Cafeteria", text: "A dedicated space to take a proper break." },
  { icon: "coffee", title: "Tea & coffee", text: "Keep the day moving." },
  { icon: "games", title: "Recreational area", text: "Foosball, carrom and lounge seating." },
  { icon: "parking", title: "Parking facility", text: "Parking for members." },
  { icon: "power", title: "Power backup", text: "Stay productive through outages." },
  { icon: "security", title: "Security", text: "Secure premises for your team and equipment." },
];

export const LOCATION_POINTS = [
  { icon: "pin", strong: "Baner business district", text: "offices, cafés and services close by." },
  { icon: "road", strong: "Close to the highway", text: "convenient road access for commuting teams and visiting clients." },
  { icon: "metro", strong: "Metro connectivity", text: "ask us for directions from the nearest station." },
  { icon: "building", strong: "Near Hinjawadi IT Park", text: "a practical base for teams working across the western IT belt." },
];

export const OTHER_CENTRES = "Ambrosia Galaxy, Baner · Pyramid Axis, Baner · Palladion Lane, Balewadi.";

export const WHY = [
  { title: "A Baner address", text: "Office space on Pancard Club Road, within reach of Pune's western business corridor." },
  { title: "Exclusive festive offer", text: "Special pricing opportunities for new members. Ask our team for details and eligibility.", highlight: true },
  { title: "Room to scale", text: "From a single desk to a full managed office — grow without changing address." },
  { title: "Essentials handled", text: "Utilities, maintenance and admin support taken care of, so your team can focus." },
  { title: "Space to recharge & park", text: "Foosball, carrom and lounge seating for breaks, plus parking for your commute." },
  { title: "Visit before you decide", text: "Walk the floor, see the cabins and meet the team before you commit." },
];

export const REVIEWS = {
  count: 21,
  // TODO: replace with the Google Business profile reviews link.
  url: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Cultiv8 Sterling Towers Baner Pune"),
  items: [
    {
      name: "M.",
      text: "Cultiv8 Coworking offers a clean, modern, and well-maintained workspace. The internet is fast, meeting rooms are well-equipped, and the overall vibe is very professional.",
    },
    {
      name: "Cafenine",
      text: "As a startup founder, finding the right workspace is crucial, and Cultiv8 Coworking has been perfect. The environment is professional, the community is inspiring, and the facilities are top-notch.",
    },
    {
      name: "Onkar",
      text: "The interiors are premium and modern, designed to keep you productive throughout the day. With high-speed internet, work becomes seamless and efficient. The meeting rooms and workstations are well-maintained…",
    },
  ],
};

export const SEAT_OPTIONS = [
  { value: "1", label: "1 seat" },
  { value: "2-5", label: "2–5 seats" },
  { value: "6-15", label: "6–15 seats" },
  { value: "16-30", label: "16–30 seats" },
  { value: "31-60", label: "31–60 seats" },
  { value: "60+", label: "60+ seats" },
];

export const FAQS = [
  {
    q: "Where is Cultiv8 located?",
    a: "Cultiv8 Sterling Towers is on the 7th floor of Sterling Towers, Pancard Club Road, Baner, Pune 411069. Cultiv8 also operates centres at Ambrosia Galaxy and Pyramid Axis in Baner, and Palladion Lane in Balewadi.",
  },
  {
    q: "What workspace options are available?",
    a: "Dedicated desks, private cabins, managed offices, meeting and conference rooms, a director's suite and virtual office plans. Tell us your team size and we'll recommend the right fit.",
  },
  {
    q: "What is the festive offer and who is eligible?",
    a: "The Cultiv8 Festive Privilege offers special pricing opportunities for new members at Sterling Towers. Eligibility and terms depend on the workspace option and team size — request the details and our team will share them before you commit.",
  },
  {
    q: "Which amenities are included?",
    a: "High-speed Wi-Fi, air conditioning, meeting rooms, cafeteria, tea and coffee, a recreational area, parking, power backup and security. Inclusion may vary by workspace plan; our team will confirm what's included with your option.",
  },
  {
    q: "What are the working hours?",
    a: "Cultiv8 Sterling Towers is open Monday to Saturday. Managed office members have access to extended hours and can discuss specific access requirements with the team directly.",
  },
  {
    q: "Is the workspace suitable for a registered business address?",
    a: "Yes. The virtual office plan gives you a professional Baner business address on Pancard Club Road — suitable for GST registration, company incorporation and client correspondence — without needing a physical desk every day.",
  },
  {
    q: "Can I visit before deciding?",
    a: "Yes. Book a workspace tour and walk the floor, see the cabins and meet the team at a time that suits you. No commitment is required to visit.",
  },
  {
    q: "Are seats available right now?",
    a: "Seats are currently available. Availability changes with demand, so share your team size and we'll confirm what's open for you.",
  },
  {
    q: "Is parking available for members?",
    a: "Yes, parking is available for members at Sterling Towers. Availability and allocation depend on your workspace plan — our team will confirm the details when you enquire.",
  },
  {
    q: "Can I book a meeting room only?",
    a: "Yes — meeting and conference rooms can be booked by the hour or day, with no membership required. Call or WhatsApp us to check availability and rates.",
  },
  {
    q: "How is the internet connectivity?",
    a: "Cultiv8 provides high-speed fibre internet across every desk at Sterling Towers. The network is shared across the floor and maintained to ensure consistent speeds throughout the workday.",
  },
  {
    q: "Where can I find the full terms?",
    a: "The full offer terms are shared by the Cultiv8 team along with your offer details. Submit the enquiry form or contact us on +91 97667 77246.",
  },
];
