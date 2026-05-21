/**
 * Photo manifest — drop real photos into /public/photos/ with these exact filenames.
 * The PhotoSlot component handles graceful gradient fallback when a file is missing.
 *
 * Photo specs:
 *  - hero: 2400x1600, JPEG, < 400KB
 *  - lake/captain: 1600x1200, JPEG, < 250KB
 *  - cruise tiles: vary (see ratio), JPEG, < 200KB each
 *
 * TODO(chris): drop your photos here. Filename match is required.
 */

export const photos = {
  heroBoat: { src: "/photos/hero-boat-sunset.jpg", alt: "Aqua Tiki tiki boat on Lake Chatuge at sunset" },
  heroDeck: { src: "/photos/hero-deck-detail.jpg", alt: "Carved tiki totem and 'no shoes, no shirt, no problem' sign aboard the Aqua Tiki" },
  heroGuests: { src: "/photos/hero-guests.jpg", alt: "Both Aqua Tiki pontoons cruising side by side on Lake Chatuge" },

  lakeWide: { src: "/photos/lake-chatuge-wide.jpg", alt: "Lake Chatuge with Blue Ridge mountains and the iconic CHATUGE dam intake" },
  lakeSunsetJon: { src: "/photos/lake-sunset-jon.jpg", alt: "Sunset over Lake Chatuge from a jon boat" },
  lakeBrasstown: { src: "/photos/lake-brasstown.jpg", alt: "Lake Chatuge looking toward Brasstown Bald" },
  lakeSunburst: { src: "/photos/lake-sunburst.jpg", alt: "Mid-day sunburst over Lake Chatuge" },
  lakeMountains: { src: "/photos/lake-mountains.jpg", alt: "Blue Ridge mountains over Lake Chatuge" },

  cruiseSunset: { src: "/photos/cruise-sunset.jpg", alt: "Sunset cruise on Lake Chatuge" },
  cruiseParty: { src: "/photos/cruise-party.jpg", alt: "Private party on the Aqua Tiki" },
  cruiseDate: { src: "/photos/cruise-date.jpg", alt: "Couple on a date-night cruise" },
  cruiseBachelorette: { src: "/photos/cruise-bachelorette.jpg", alt: "Bachelorette group aboard" },
  cruiseFamily: { src: "/photos/cruise-family.jpg", alt: "Family enjoying the lake" },
  cruiseCustom: { src: "/photos/cruise-custom.jpg", alt: "Custom charter on Lake Chatuge" },

  captain: { src: "/photos/captain.jpg", alt: "Captain Jonathan aboard the Aqua Tiki on Lake Chatuge" },
} as const;
