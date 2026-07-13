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
    title: "Falcon — Automotive Spot",
    category: "Commercials",
    camera: "RED Komodo 6K",
    software: "DaVinci Resolve Studio",
    notes: "Flat LOG under mixed tungsten and daylight. Rebuilt skin tones, custom film emulation for the night exteriors.",
    beforeImage: "https://picsum.photos/id/111/1280/720?grayscale",
    afterImage: "https://picsum.photos/id/111/1280/720",
    vimeoId: "76979871",
    featured: true
  },
  {
    title: "Salt & Light — Short Film",
    category: "Film",
    camera: "Sony FX6",
    software: "DaVinci Resolve Studio",
    notes: "Video-only entry: the before/after comparison is cut into the film itself.",
    vimeoId: "76979871",
    featured: true
  },
  {
    title: "Manama Coastline — Aerial Reel",
    category: "Drone",
    camera: "DJI Inspire 3 / X9-8K",
    software: "DaVinci Resolve Studio",
    notes: "D-Log to HDR delivery. Balanced harsh midday Gulf sun, recovered highlight detail in water and glass.",
    beforeImage: "https://picsum.photos/id/1011/1280/720?grayscale",
    afterImage: "https://picsum.photos/id/1011/1280/720",
    vimeoId: "76979871",
    featured: true
  },
  {
    title: "Midnight District — Music Video",
    category: "Music Videos",
    camera: "Blackmagic URSA Mini Pro 12K",
    software: "DaVinci Resolve Studio",
    notes: "Images-only entry: slider without a video. High-contrast neon look, split-toned shadows, halation pass.",
    beforeImage: "https://picsum.photos/id/1067/1280/720?grayscale",
    afterImage: "https://picsum.photos/id/1067/1280/720",
    featured: true
  },
  {
    title: "Desert Dawn — Brand Film",
    category: "Commercials",
    camera: "RED V-Raptor",
    software: "DaVinci Resolve Studio",
    notes: "Still-only entry: one graded frame, no slider. Warm sunrise palette built from cool dawn footage.",
    afterImage: "https://picsum.photos/id/1016/1280/720"
  },
  {
    title: "Harbour Lines — Documentary",
    category: "Film",
    camera: "Canon C70",
    software: "DaVinci Resolve Studio",
    notes: "Naturalistic grade, matched three cameras across two shoot days.",
    beforeImage: "https://picsum.photos/id/1040/1280/720?grayscale",
    afterImage: "https://picsum.photos/id/1040/1280/720",
    vimeoId: "76979871"
  }
];
