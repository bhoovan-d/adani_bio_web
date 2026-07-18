import Image from "next/image";
import Link from "next/link";
import { parts } from "@/lib/series";
import styles from "./SeriesIndex.module.css";

export function SeriesIndex() {
  return (
    <ol className={styles.list}>
      {parts.map((part) => {
        const inner = (
          <>
            <div className={styles.thumb}>
              <Image
                src={part.image}
                alt={part.imageAlt}
                fill
                sizes="(max-width: 40rem) 40vw, 200px"
                className={styles.thumbImg}
              />
              <span className={`${styles.numeral} tnum`} aria-hidden="true">
                {part.numeral}
              </span>
            </div>
            <div className={styles.textCol}>
              <p className={styles.volume}>
                <span className="tnum">Part {part.numeral}</span> · {part.part}
              </p>
              <h3 className={styles.title}>{part.title}</h3>
              <p className={styles.standfirst}>{part.standfirst}</p>
              <div className={styles.rowMeta}>
                {part.hasContent ? (
                  <>
                    <span className={styles.statusReady}>Available now</span>
                    <span className={styles.dot} aria-hidden="true" />
                    <span className={`${styles.readtime} tnum`}>
                      {part.readingMinutes} min
                    </span>
                  </>
                ) : (
                  <span className={styles.statusSoon}>Forthcoming</span>
                )}
              </div>
            </div>
            <span className={styles.arrow} aria-hidden="true">
              {part.hasContent ? "→" : ""}
            </span>
          </>
        );

        return (
          <li key={part.slug} className={styles.item}>
            {part.hasContent ? (
              <Link
                href={`/parts/${part.slug}`}
                className={`${styles.row} ${styles.rowReady}`}
                aria-label={`Read Part ${part.numeral}: ${part.title}`}
              >
                {inner}
              </Link>
            ) : (
              <div
                className={`${styles.row} ${styles.rowSoon}`}
                aria-label={`Part ${part.numeral}: ${part.title} — forthcoming`}
              >
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
