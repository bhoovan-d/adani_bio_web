// Custom next/image loader for Unsplash. `src` is a photo path like
// "photo-1590496793907-4d66e2994b4d"; the loader adds responsive sizing.
export default function unsplashLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const q = quality ?? 78;
  return `https://images.unsplash.com/${src}?auto=format&fit=crop&w=${width}&q=${q}`;
}
