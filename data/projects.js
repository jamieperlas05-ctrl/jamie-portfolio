/*
  Project data. This is the only file Jamie edits to add or change a project.

  - featured: true puts the project in the top row on the home page.
  - skills: names of skills this project uses. Any skill name that appears here
    is added to the skill filter on the home page automatically. Skill names are
    matched exactly, so keep the same spelling and capitalization each time.
  - cover: image shown on the card and at the top of the project page.
  - gallery: images shown below the project text.
  - body: sections of text. Each section has an optional heading, optional
    paragraphs, and optional list items.
  - Skill names come from Jamie's spreadsheet.
  - Copy is taken verbatim from the live site. Summaries are placeholders ("2025")
    until Jamie supplies real text. Slots 4 to 11 are unused placeholders.
*/
window.PORTFOLIO_PROJECTS = [
  {
    id: "divine-feminine", title: "Divine Feminine", summary: "2025", featured: true,
    skills: ["CAD", "3D rendering", "Figma", "AI Tools", "user research", "collaboration", "prototyping", "industrial design"],
    cover: "images/divine-feminine/divine-feminine-10.jpg",
    gallery: [
      "images/divine-feminine/divine-feminine-01.jpg", "images/divine-feminine/divine-feminine-02.jpg",
      "images/divine-feminine/divine-feminine-03.jpg", "images/divine-feminine/divine-feminine-04.jpg",
      "images/divine-feminine/divine-feminine-05.png", "images/divine-feminine/divine-feminine-06.png",
      "images/divine-feminine/divine-feminine-07.png", "images/divine-feminine/divine-feminine-08.jpg",
      "images/divine-feminine/divine-feminine-09.jpg", "images/divine-feminine/divine-feminine-11.png",
      "images/divine-feminine/divine-feminine-12.jpg", "images/divine-feminine/divine-feminine-13.jpg"
    ],
    body: [
      { paragraphs: [
        "Divine Feminine is a line of discreet, fashionable safety devices for women: a pepper spray and a claw clip that look like everyday accessories but send an SOS alert to trusted contacts with one trigger. With Chloe Arbow and Lyndsey Naputo, we designed, coded, and prototyped the entire system ourselves. I led design and production of the companion app, which shares the wearer’s live location with emergency contacts.",
        "This project was a recipient of the Kohen Seed Funding."
      ] },
      { heading: "Pieces", list: [
        "A claw clip that sends a notification to emergency contacts when the pin is pulled, also doubles as a physical deterrent. Hidden, functional, and something entirely new.",
        "A reimagined pepper spray. Chic, elegant, feminine. Takes a picture when the spray is deployed, connected to a universal app to communicate with emergency contacts and services."
      ] },
      { heading: "Why", list: [
        "1 in 3 women (estimated 840 million) have experienced physical and/or sexual violence at least once in their lives.",
        "77% of women under age 40 reported being followed by a man or group of men in the past year in a way that made them feel unsafe.",
        "85% of women in the United States experience street harassment before the age of 17."
      ], paragraphs: [
        "Sources: https://www.unwomen.org/en/articles/facts-and-figures/facts-and-figures-ending-violence-against-women and https://www.thehotline.org/stakeholders/domestic-violence-statistics/"
      ] },
      { heading: "Process", paragraphs: [
        "Both devices house an ESP32 system with a hidden button and GPS module. Programmed in C++ to get a location fix and send an SOS signal over Bluetooth Low Energy to the companion app, which logs the alert in Firebase and pushes the wearer’s location to their emergency contacts in real time."
      ] },
      { heading: "Mobile App", paragraphs: [
        "Supporting app for quick emergency response with the trigger of any connected device. When activated, the app sends alerts and real-time location to trusted contacts.",
        "Designed in Figma and built in Flutter with a Firebase backend. The interface prioritizes speed, simplicity, and discreet operation during high-stress situations."
      ] }
    ]
  },
  {
    id: "gathered-matter", title: "Gathered Matter", summary: "2025", featured: true,
    skills: ["Adobe Creative Suite", "apparel construction", "prototyping", "sewing"],
    cover: "images/gathered-matter/gathered-matter-01.png",
    gallery: [
      "images/gathered-matter/gathered-matter-02.png", "images/gathered-matter/gathered-matter-03.png",
      "images/gathered-matter/gathered-matter-04.jpg", "images/gathered-matter/gathered-matter-05.png",
      "images/gathered-matter/gathered-matter-06.jpg", "images/gathered-matter/gathered-matter-07.jpg",
      "images/gathered-matter/gathered-matter-08.png", "images/gathered-matter/gathered-matter-09.png",
      "images/gathered-matter/gathered-matter-10.png", "images/gathered-matter/gathered-matter-11.png",
      "images/gathered-matter/gathered-matter-12.jpg", "images/gathered-matter/gathered-matter-13.jpg"
    ],
    body: [
      { paragraphs: [
        "This denim collection explores hand smocking as both a decorative and functional technique. By allowing stretch and movement within the fabric, smocking is used to mimic elements traditionally achieved through ruched hems or ribbed knit, reframing fabric manipulation as functional."
      ] },
      { heading: "Pieces", paragraphs: [
        "The collection includes a bomber jacket, corset top, and wide-leg jeans."
      ] },
      { heading: "Tech Pack", paragraphs: [
        "Designed and crafted for an Apparel Design Studio, with technical packs developed in Adobe Illustrator."
      ] }
    ]
  },
  {
    id: "raydiant", title: "Raydiant", summary: "2025", featured: true,
    skills: ["CAD", "3D rendering", "Figma", "AI Tools", "user research", "prototyping", "metal-smithing"],
    cover: "images/raydiant/raydiant-10.jpg",
    gallery: [
      "images/raydiant/raydiant-01.jpg", "images/raydiant/raydiant-02.png",
      "images/raydiant/raydiant-03.png", "images/raydiant/raydiant-04.jpg",
      "images/raydiant/raydiant-05.png", "images/raydiant/raydiant-06.png",
      "images/raydiant/raydiant-07.png", "images/raydiant/raydiant-08.jpg",
      "images/raydiant/raydiant-09.png", "images/raydiant/raydiant-11.jpg",
      "images/raydiant/raydiant-12.png", "images/raydiant/raydiant-13.png",
      "images/raydiant/raydiant-14.png", "images/raydiant/raydiant-15.png"
    ],
    body: [
      { paragraphs: [
        "Raydiant is a discreet device designed to measure ultraviolet exposure. By monitoring individual sun impact and alerting users to hazardous conditions, Raydiant helps prevent the risks of overexposure. Paired with a mobile application, Raydiant makes it easy to review data, track sunscreen use, and receive personalized recommendations."
      ] },
      { heading: "The Need", paragraphs: [
        "While many sunscreen users are committed to sun protection, most struggle with knowing when to reapply and understanding how the sun is truly impacting their skin.",
        "Raydiant helps solve this by giving users a discreet device with personalized insight into how the sun is affecting their skin in real time."
      ] },
      { heading: "Internals", paragraphs: [
        "Raydiant combines a UV-grade sapphire stone with a sterling silver housing for a chic jewelry look. Powered by solar energy, it requires no battery and syncs via Bluetooth.",
        "Components:"
      ], list: [
        "nRF52811 - Microcontroller",
        "VEML6075 - UV Sensor",
        "BPW34 - Solar Power",
        "BAT54S - Power Storage"
      ] },
      { heading: "Mobile App", paragraphs: [
        "The Raydiant app helps users stay sun-safe by reporting personal UV and vitamin D intake and providing expert-backed sun facts.",
        "Users can log sunscreen applications and get specialized reminders when it’s time to reapply."
      ] }
    ]
  },
  { id: "project-4", title: "Name", summary: "Description or year", featured: false, skills: [] },
  { id: "project-5", title: "Name", summary: "Description or year", featured: false, skills: [] },
  { id: "project-6", title: "Name", summary: "Description or year", featured: false, skills: [] },
  { id: "project-7", title: "Name", summary: "Description or year", featured: false, skills: [] },
  { id: "project-8", title: "Name", summary: "Description or year", featured: false, skills: [] },
  { id: "project-9", title: "Name", summary: "Description or year", featured: false, skills: [] },
  { id: "project-10", title: "Name", summary: "Description or year", featured: false, skills: [] },
  { id: "project-11", title: "Name", summary: "Description or year", featured: false, skills: [] }
];
