/* ============================================================
   YOUR PROJECTS LIVE HERE — the only file you edit to add work.

   Every field except title and category is OPTIONAL:

   title       → project name (required)
   category    → e.g. "Commercials", "Film", "Drone",
                 "Music Videos" — the filter bar builds itself
                 automatically from whatever you use (required)
   camera      → camera used (optional)
   software    → grading software (optional)
   notes       → a line or two about the grade (optional)

   beforeImage + afterImage → BOTH set = drag slider
   afterImage only          → shown as a single graded still
   neither                  → no image, video only

   vimeoId     → the numbers from your Vimeo link (optional)
                 https://vimeo.com/76979871 → "76979871"
                 leave out = images only, no video

   featured    → true = shown in the fullscreen screening on
                 the home page. Leave out (or false) = archive
                 only. Keep 6-10 featured; everything appears
                 in the Archive automatically.
                 (If you mark nothing featured, the home page
                 shows everything.)

   So a project can be: slider + video, slider only,
   still only, video only, or still + video. Mix freely.

   Newest project first = shown first on the page.

   The demo entries use placeholder photos (picsum.photos),
   grayscale as "before" / color as "after" — replace with your
   own stills exported from Resolve (put them in images/).
   ============================================================ */

const PROJECTS = [
  {
    title: "Canon C700",
    category: "Commercial",
    software: "",
    beforeImage: "images/Canon C700/Canon C700_2.1.1.png",
    afterImage: "images/Canon C700/Canon C700_1.1.1.png",
    vimeoId: "1210169871"
    featured: true
  },
  {
    title: "Sony a7S3",
    category: ""Commercial",",
    software: "",
    beforeImage: "images/sony a7S3/1.png",
    afterImage: "images/sony a7S3/2.png",
    vimeoId: "1210173308"
    featured: true
  },
  {
    title: "Yelo — KSA",
    category: "TVC",
    software: "",
    beforeImage: "images/Yelo/1.png",
    afterImage: "images/Yelo/2.png",
    featured: true
  },
  {
    title: "Bahrain",
    category: "Drone",
    camera: "",
    software: "",
    notes: "",
    beforeImage: "images/Tree Sample/Tree Sample_1.1.4.png",
    afterImage: "images/Tree Sample/Tree Sample_1.1.1.png",
    featured: true
  },
  {
    title: "Arcapita - Interview",
    category: "Corporate",
    camera: "",
    software: "",
    notes: "",
    beforeImage: "images/arcapita/a.png",
    afterImage: "images/arcapita/b.png",
    featured: true
  },
];
