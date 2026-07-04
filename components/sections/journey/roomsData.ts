import { Room } from "./JourneyScene";

// The Home page journey: one full-viewport scene per space, alternating
// text alignment left/right so the eye keeps resettling. Rooms with real
// project photography use it; the rest use the tonal placeholder panel
// until renders or shoots are ready — swap `image` in and drop `icon`
// when that photography lands.
export const rooms: Room[] = [
  {
    index: 1,
    id: "exterior",
    label: "Exterior",
    title: "Where Light Meets Stone",
    description:
      "Concrete, timber, and glass hold a quiet conversation with the site — every elevation composed the way a portrait is composed.",
    detail: "Facade — Board-formed Concrete & Oak",
    icon: "exterior",
    align: "left",
    tone: "ink",
  },
  {
    index: 2,
    id: "entrance",
    label: "Entrance",
    title: "A Threshold, Not a Door",
    description:
      "The arrival sequence is choreographed — light narrows, then opens. The first few steps set the tone for everything that follows.",
    detail: "Pivot Door — 3.2m Brushed Bronze",
    icon: "entrance",
    align: "right",
    tone: "void",
  },
  {
    index: 3,
    id: "living-room",
    label: "Living Room",
    title: "Space to Exhale",
    description:
      "Volume, warmth, and restraint. Furniture is positioned to frame the view, not compete with it — natural light does most of the work.",
    detail: "Flooring — Wide-plank White Oak",
    image: "/images/project-1/living-room.jpg",
    icon: "exterior",
    align: "left",
  },
  {
    index: 4,
    id: "kitchen",
    label: "Kitchen",
    title: "Precision, Warmed Up",
    description:
      "A honed-marble island anchors the room while hidden lighting and integrated appliances keep every surface calm and uninterrupted.",
    detail: "Island — Honed Calacatta Marble",
    image: "/images/project-1/kitchen-01.jpg",
    icon: "office",
    align: "right",
  },
  {
    index: 5,
    id: "dining-room",
    label: "Dining Room",
    title: "Held by Warm Light",
    description:
      "Evening light and a single sculptural fixture turn the dining table into the room's quiet centerpiece.",
    detail: "Fixture — Hand-blown Brass Chandelier",
    icon: "dining",
    align: "left",
    tone: "ember",
  },
  {
    index: 6,
    id: "bedroom",
    label: "Bedroom",
    title: "Stillness by Design",
    description:
      "Soft textiles, muted tones, and a panoramic window turn rest into the room's entire purpose.",
    detail: "Textiles — Belgian Linen",
    image: "/images/project-1/bedroom.jpg",
    icon: "night",
    align: "right",
  },
  {
    index: 7,
    id: "bathroom",
    label: "Master Bathroom",
    title: "Marble, Mist, and Mirrors",
    description:
      "A freestanding tub and book-matched marble walls turn a daily ritual into a small architectural event.",
    detail: "Surfaces — Book-matched Marble",
    icon: "bathroom",
    align: "left",
    tone: "void",
  },
  {
    index: 8,
    id: "closet",
    label: "Walk-in Closet",
    title: "Curated, Not Just Stored",
    description:
      "Integrated lighting and joinery in warm timber present every piece like it belongs in a showroom, not a drawer.",
    detail: "Joinery — Solid Walnut",
    image: "/images/project-1/closet-01.jpg",
    icon: "office",
    align: "right",
  },
  {
    index: 9,
    id: "office",
    label: "Home Office",
    title: "Focus, Framed by Nature",
    description:
      "Concrete, books, and plants keep the room grounded, while a wide window keeps the outside world within reach.",
    detail: "Desk — Custom Steel & Oak",
    icon: "office",
    align: "left",
    tone: "ink",
  },
  {
    index: 10,
    id: "garden",
    label: "Garden",
    title: "Landscape as Architecture",
    description:
      "Planting, water, and paving are designed with the same discipline as the building itself — nothing here is an afterthought.",
    detail: "Landscape — Native & Drought-tolerant Planting",
    icon: "garden",
    align: "right",
    tone: "ember",
  },
  {
    index: 11,
    id: "pool",
    label: "Swimming Pool",
    title: "Water Without Edges",
    description:
      "An infinity edge dissolves into the horizon at golden hour, turning the pool deck into the villa's most photographed corner.",
    detail: "Finish — Dark-bottom Infinity Edge",
    icon: "pool",
    align: "left",
    tone: "void",
  },
  {
    index: 12,
    id: "night",
    label: "Night View",
    title: "The House, After Dark",
    description:
      "As daylight fades, architectural lighting takes over — every elevation reads differently once the sun is gone.",
    detail: "Lighting — Recessed Architectural Warm White",
    icon: "night",
    align: "right",
    tone: "void",
  },
];
