import Image from "next/image";
import Link from "next/link";
import { getNextPost, getVolume, type Post } from "@/lib/series";
import styles from "./ContinueBlock.module.css";

/**
 * The primary reader action at the foot of every article: continue to the
 * next Post. On the final Post, it points back to the series index instead.
 */
export function ContinueBlock({ current }: { current: Post }) {
  const next = current.kind === "mini" ? undefined : getNextPost(current.slug);

  if (!next) {
    return (
      <aside className={styles.wrap}>
        <div className={styles.eyebrow}>End of the series</div>
        <Link href="/#parts" className={styles.card}>
          <div className={styles.cardBody}>
            <p className={styles.cardKicker}>Back to the beginning</p>
            <p className={styles.cardTitle}>Revisit the full series</p>
            <p className={styles.cardStandfirst}>
              The man, the money, the map, and the frontiers ahead.
            </p>
          </div>
          <span className={styles.arrow} aria-hidden="true">
            ↑
          </span>
        </Link>
      </aside>
    );
  }

  const nextVolume = getVolume(next.volume);

  return (
    <aside className={styles.wrap}>
      <div className={styles.eyebrow}>Continue the series</div>
      <Link
        href={`/parts/${next.slug}`}
        className={styles.card}
        aria-label={`Continue to: ${next.title}`}
      >
        <div className={styles.media}>
          <Image
            src={next.image}
            alt={next.imageAlt}
            fill
            sizes="(max-width: 40rem) 100vw, 16rem"
            className={styles.mediaImg}
          />
        </div>
        <div className={styles.cardBody}>
          <p className={`${styles.cardKicker} tnum`}>
            Volume {nextVolume?.numeral} · {nextVolume?.title}
          </p>
          <p className={styles.cardTitle}>{next.title}</p>
          <p className={styles.cardStandfirst}>{next.standfirst}</p>
        </div>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </Link>
    </aside>
  );
}
