import Image from "next/image";
import Link from "next/link";
import { SeriesIndex } from "@/components/SeriesIndex";
import {
  volumes,
  orderedPosts,
  getVolume,
  SERIES_TITLE,
  SERIES_ISSUE,
  COVER_IMAGE,
  COVER_IMAGE_ALT,
} from "@/lib/series";
import styles from "./page.module.css";

export default function Home() {
  const ordered = orderedPosts();
  const lead = ordered.find((p) => p.hasContent) ?? ordered[0];
  const leadVolume = getVolume(lead.volume);

  return (
    <div className={styles.page}>
      {/* ===================== Magazine cover ===================== */}
      <section className={styles.cover} aria-labelledby="cover-title">
        <div className={styles.coverMedia}>
          <Image
            src={COVER_IMAGE}
            alt={COVER_IMAGE_ALT}
            fill
            priority
            sizes="100vw"
            className={styles.coverImg}
          />
          <div className={styles.coverScrim} aria-hidden="true" />
        </div>

        <div className={styles.coverGrid}>
          <p className={styles.masthead}>
            <span>A Reading Series</span>
            <span className={styles.mastheadDot} aria-hidden="true" />
            <span className="tnum">{SERIES_ISSUE}</span>
          </p>

          <div className={styles.coverHead}>
            <h1 id="cover-title" className={styles.coverTitle}>
              {/* Deliberate wordmark stack: last word drops to its own line
                  ("The Adani" / "Project"). Kept generic so it tracks SERIES_TITLE. */}
              {(() => {
                const words = SERIES_TITLE.split(" ");
                const last = words.pop();
                return (
                  <>
                    {words.join(" ")}
                    <br />
                    {last}
                  </>
                );
              })()}
            </h1>
            <p className={styles.coverStandfirst}>
              How one group was assembled — the man, the money, the map, and the
              frontiers ahead. A deconstruction of the strategy, the leverage,
              and the assets, told as one continuous story.
            </p>
            <div className={styles.coverActions}>
              <Link href={`/parts/${lead.slug}`} className={styles.coverCta}>
                Begin the series
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="#parts" className={styles.coverCtaGhost}>
                In this issue
              </Link>
            </div>
          </div>

          <ol className={styles.coverlines} aria-label="Inside this issue">
            {volumes.map((v) => (
              <li key={v.number} className={styles.coverline}>
                <span className={`${styles.coverlineNum} tnum`}>
                  {v.numeral}
                </span>
                <span className={styles.coverlineText}>{v.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== Editorial statement ===================== */}
      <section id="about" className={styles.statement} aria-labelledby="stmt-h">
        <p className={styles.statementLabel} id="stmt-h">
          From the editors
        </p>
        <p className={styles.statementBody}>
          The Adani story arrives mostly as headlines — a number that rose, a
          number that fell, an allegation, a rebuttal. This series does the
          opposite. It slows down and shows the <em>mechanics</em>: how a diamond
          sorter became a commodities trader, how a trader came to own a
          nation&rsquo;s ports and power, and how the whole apparatus is financed,
          defended, and expanded.
        </p>
      </section>

      {/* ===================== Lead feature ===================== */}
      <section className={styles.lead} aria-labelledby="lead-title">
        <p className={styles.leadEyebrow}>The opening feature</p>
        <Link href={`/parts/${lead.slug}`} className={styles.leadCard}>
          <div className={styles.leadMedia}>
            <Image
              src={lead.image}
              alt={lead.imageAlt}
              fill
              sizes="(max-width: 60rem) 100vw, 55vw"
              className={styles.leadImg}
            />
          </div>
          <div className={styles.leadBody}>
            <p className={`${styles.leadKicker} tnum`}>
              Volume {leadVolume?.numeral} · {leadVolume?.title}
            </p>
            <h2 id="lead-title" className={styles.leadTitle}>
              {lead.title}
            </h2>
            <p className={styles.leadStandfirst}>{lead.standfirst}</p>
            <span className={styles.leadLink}>
              Read the feature
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </section>

      {/* ===================== Contents ===================== */}
      <section id="parts" className={styles.contents} aria-labelledby="parts-h">
        <div className={styles.contentsHead}>
          <h2 className={styles.contentsTitle} id="parts-h">
            In This Issue
          </h2>
          <p className={styles.contentsIntro}>
            Twelve posts across four volumes, read in order for the full arc —
            or start wherever the story pulls you.
          </p>
        </div>
        <SeriesIndex />
      </section>
    </div>
  );
}
