import Image from "next/image";
import Link from "next/link";
import { getNextPart, type Part } from "@/lib/series";
import styles from "./ContinueBlock.module.css";

/**
 * The primary reader action at the foot of every article: continue to the
 * next Part. On the final Part, it points back to the series index instead.
 */
export function ContinueBlock({ current }: { current: Part }) {
  const next = getNextPart(current.slug);

  if (!next) {
    return (
      <aside className={styles.wrap}>
        <div className={styles.eyebrow}>End of the series</div>
        <Link href="/#parts" className={styles.card}>
          <div className={styles.cardBody}>
            <p className={styles.cardKicker}>Back to the beginning</p>
            <p className={styles.cardTitle}>Revisit all four Parts</p>
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

  return (
    <aside className={styles.wrap}>
      <div className={styles.eyebrow}>Continue the series</div>
      <Link
        href={`/parts/${next.slug}`}
        className={styles.card}
        aria-label={`Continue to Part ${next.numeral}: ${next.title}`}
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
            Part {next.numeral} · {next.part}
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
