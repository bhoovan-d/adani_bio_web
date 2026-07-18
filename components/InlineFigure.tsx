import Image from "next/image";
import styles from "./InlineFigure.module.css";

/** A captioned inline image for article bodies. Breaks slightly wider than
 *  the reading measure for a magazine feel. */
export function InlineFigure({
  src,
  alt,
  caption,
  ratio = "3 / 2",
}: {
  src: string;
  alt: string;
  caption: string;
  ratio?: string;
}) {
  return (
    <figure className={styles.figure}>
      <div className={styles.media} style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 48rem) 100vw, 46rem"
          className={styles.img}
        />
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
