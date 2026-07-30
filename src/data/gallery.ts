export type GalleryCategory =
  | "all"
  | "keynote"
  | "dignitaries"
  | "awards"
  | "exhibition";

export interface GalleryItem {
  src: string;
  caption: string;
  category: Exclude<GalleryCategory, "all">;
}

export const galleryData: GalleryItem[] = [
  { src: "INGENIOUS_189.webp", caption: "Keynote Address by Vice-President Kashim Shettima", category: "keynote" },
  { src: "INGENIOUS_120.webp", caption: "Dignitaries at the inaugural summit", category: "dignitaries" },
  { src: "INGENIOUS_126.webp", caption: "Dignitaries at the inaugural summit", category: "dignitaries" },
  { src: "INGENIOUS_563.webp",  caption: "Award Ceremony",                                        category: "awards" },
  { src: "INGENIOUS_131.webp", caption: "Delegates Networking", category: "dignitaries" },
   { src: "INGENIOUS_564.webp",  caption: "Award Ceremony",                                        category: "awards" },
  { src: "INGENIOUS_155.webp",  caption: "Dignitaries at the inaugural summit",                    category: "dignitaries" },
  { src: "INGENIOUS_171.webp",  caption: "Dignitaries at the inaugural summit",                    category: "dignitaries" },
  { src: "INGENIOUS_193.webp",  caption: "Keynote Address by Vice-President Kashim Shettima",      category: "keynote" },
  { src: "INGENIOUS_208.webp",  caption: "Dignitaries at the inaugural summit",                    category: "dignitaries" },
  { src: "INGENIOUS_309.webp",  caption: "Summit hall overview",                                   category: "dignitaries" },
  { src: "INGENIOUS_357.webp",  caption: "Keynote Address",                                        category: "keynote" },
  { src: "INGENIOUS_368.webp",  caption: "Keynote Address",                                        category: "keynote" },
  { src: "INGENIOUS_371.webp",  caption: "Dignitaries at the inaugural summit",                    category: "dignitaries" },
  { src: "INGENIOUS_377.webp",  caption: "Dignitaries at the inaugural summit",                    category: "dignitaries" },
  { src: "INGENIOUS_386.webp",  caption: "Keynote Address",                                        category: "keynote" },
  { src: "INGENIOUS_405.webp",  caption: "Delegates Networking",                                   category: "dignitaries" },
  { src: "INGENIOUS_407.webp",  caption: "Summit hall overview",                                   category: "dignitaries" },
  { src: "INGENIOUS_414.webp",  caption: "Summit hall overview",                                   category: "dignitaries" },
  { src: "INGENIOUS_418.webp",  caption: "Delegates Networking",                                   category: "dignitaries" },
  { src: "INGENIOUS_420.webp",  caption: "Keynote Address",                                        category: "keynote" },
  { src: "INGENIOUS_441.webp",  caption: "Participants at the inaugural summit",                   category: "dignitaries" },
  { src: "INGENIOUS_453.webp",  caption: "Participants at the inaugural summit",                   category: "dignitaries" },
  { src: "INGENIOUS_463.webp",  caption: "Participants at the inaugural summit",                   category: "dignitaries" },
  { src: "INGENIOUS_466.webp",  caption: "Summit hall overview",                                   category: "dignitaries" },
  { src: "INGENIOUS_472.webp",  caption: "Global Collaboration",                                   category: "dignitaries" },
  { src: "INGENIOUS_475.webp",  caption: "Global Collaboration",                                   category: "dignitaries" },
  { src: "INGENIOUS_483.webp",  caption: "Keynote Address",                                        category: "keynote" },
  { src: "INGENIOUS_485.webp",  caption: "Keynote Address",                                        category: "keynote" },
  { src: "INGENIOUS_491.webp",  caption: "Keynote Address",                                        category: "keynote" },
  { src: "INGENIOUS_504.webp",  caption: "Dignitaries at the inaugural summit",                    category: "dignitaries" },
  { src: "INGENIOUS_514.webp",  caption: "Award Ceremony",                                        category: "awards" },
  { src: "INGENIOUS_517.webp",  caption: "Delegates Networking",                                   category: "dignitaries" },
  { src: "INGENIOUS_549.webp",  caption: "Award Ceremony",                                        category: "awards" },
  { src: "INGENIOUS_53.webp",   caption: "Registration Desk",                                      category: "dignitaries" },
  { src: "INGENIOUS_543.webp",  caption: "Exhibition Tour",                                        category: "exhibition" },
  { src: "INGENIOUS_558.webp",  caption: "Summit hall overview",                                   category: "dignitaries" },
  { src: "INGENIOUS_560.webp",  caption: "Dignitaries at the inaugural summit",                    category: "dignitaries" },
  { src: "INGENIOUS_561.webp",  caption: "Panel Discussion",                                       category: "keynote" },
  { src: "INGENIOUS_566.webp",  caption: "Award Ceremony",                                        category: "awards" },
  { src: "INGENIOUS_572.webp",  caption: "Award Ceremony",                                        category: "awards" },
  { src: "INGENIOUS_573.webp",  caption: "Delegates Networking",                                   category: "dignitaries" },
  { src: "INGENIOUS_574.webp",  caption: "Award Ceremony",                                        category: "awards" },
  { src: "INGENIOUS_575.webp",  caption: "Award Ceremony",                                        category: "awards" },
  { src: "INGENIOUS_581.webp",  caption: "Dignitaries at the inaugural summit",                    category: "dignitaries" },
  { src: "INGENIOUS_587.webp",  caption: "Delegates Networking",                                   category: "dignitaries" },
  { src: "INGENIOUS_607.webp",  caption: "Exhibition Tour",                                        category: "exhibition" },
  { src: "INGENIOUS_621.webp",  caption: "Keynote Address by Vice-President Kashim Shettima",      category: "keynote" },
  { src: "INGENIOUS_625.webp",  caption: "Summit hall overview",                                   category: "dignitaries" },
  { src: "INGENIOUS_643.webp",  caption: "Delegates Networking",                                   category: "dignitaries" },
  { src: "INGENIOUS_685.webp",  caption: "Keynote Address",                                        category: "keynote" },
  { src: "INGENIOUS_697.webp",  caption: "Panel Discussion",                                       category: "keynote" },
  { src: "INGENIOUS_700.webp",  caption: "Dignitaries at the inaugural summit",                    category: "dignitaries" },
  { src: "INGENIOUS_704.webp",  caption: "Delegates Networking",                                   category: "dignitaries" },
  { src: "INGENIOUS_712.webp",  caption: "Delegates Networking",                                   category: "dignitaries" },
  { src: "INGENIOUS_718.webp",  caption: "Delegates Networking",                                   category: "dignitaries" },
  { src: "INGENIOUS_725.webp",  caption: "Exhibition Tour",                                        category: "exhibition" },
  { src: "INGENIOUS_79.webp",   caption: "Exhibition Tour",                                        category: "exhibition" },
  { src: "INGENIOUS.webp",      caption: "Award Ceremony",                                        category: "awards" },
];
