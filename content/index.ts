import type { ComponentType } from "react";
import Foundation from "./the-foundation-and-the-man";
import WeatheringTheStorm from "./weathering-the-storm";

/** Maps a Post slug to its written article body.
 *
 *  To publish a planned Post: drop a content module here and flip
 *  `hasContent` on that Post in lib/series.ts.
 *
 *  To publish your own mini-blog: append a Post with `kind: "mini"`
 *  and `hasContent: true` to `dispatches` in lib/series.ts, add its
 *  content module in content/, and register the slug below. */
export const contentBySlug: Record<string, ComponentType> = {
  "the-foundation-and-the-man": Foundation,
  "weathering-the-storm": WeatheringTheStorm,
};
