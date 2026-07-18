import Image from "next/image";
import Link from "next/link";
import type { Part } from "@/lib/series";
import styles from "./ArticleLayout.module.css";

function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ArticleLayout({
  part,
  children,
  dropcap = true,
  showLead = true,
}: {
  part: Part;
  children: React.ReactNode;
  /** Drop-cap the first paragraph — only for real article prose. */
  dropcap?: boolean;
  /** Show the full-width lead image below the header. */
  showLead?: boolean;
}) {
  return (
    <article className={styles.article}>
      <header className={styles.head}>
        <div className={styles.kicker}>
          <Link href="/#parts" className={styles.kickerLink}>
            <span className={`${styles.kickerNumeral} tnum`}>
              Part {part.numeral}
            </span>
          </Link>
          <span className={styles.kickerDivider} aria-hidden="true" />
          <span className={styles.kickerVolume}>{part.part}</span>
        </div>

        <h1 className={styles.title}>{part.title}</h1>

        <p className={styles.standfirst}>{part.standfirst}</p>

        <div className={styles.meta}>
          <span className={styles.byline}>{part.byline}</span>
          <span className={styles.metaDot} aria-hidden="true" />
          {part.published && (
            <>
              <time className="tnum" dateTime={part.published}>
                {formatDate(part.published)}
              </time>
              <span className={styles.metaDot} aria-hidden="true" />
            </>
          )}
          <span className={`${styles.metaRead} tnum`}>
            {part.readingMinutes} min read
          </span>
        </div>
      </header>

      {showLead && (
        <figure className={styles.lead}>
          <div className={styles.leadMedia}>
            <Image
              src={part.image}
              alt={part.imageAlt}
              fill
              priority
              sizes="(max-width: 66rem) 100vw, 62rem"
              className={styles.leadImg}
            />
          </div>
          <figcaption className={styles.leadCaption}>
            {part.imageAlt}
          </figcaption>
        </figure>
      )}

      <div className={`${styles.body} ${dropcap ? styles.hasDropcap : ""}`}>
        {children}
      </div>
    </article>
  );
}
