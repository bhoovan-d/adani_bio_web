import type { ComponentType } from "react";
import Foundation from "./the-foundation-and-the-man";

/** Maps a Part slug to its written article body. Add a Part by dropping a
 *  content module here and flipping `hasContent` in lib/series.ts. */
export const contentBySlug: Record<string, ComponentType> = {
  "the-foundation-and-the-man": Foundation,
};
