import Image from "next/image";
import Link from "next/link";
import {
  volumes,
  postsInVolume,
  dispatches,
  type Post,
} from "@/lib/series";
import styles from "./SeriesIndex.module.css";

/** One Post row — a link when written, an inert card when forthcoming. */
function PostRow({ post, kicker }: { post: Post; kicker: string }) {
  const inner = (
    <>
      <div className={styles.thumb}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 40rem) 40vw, 200px"
          className={styles.thumbImg}
        />
        <span className={`${styles.numeral} tnum`} aria-hidden="true">
          {post.order}
        </span>
      </div>
      <div className={styles.textCol}>
        <p className={styles.volume}>{kicker}</p>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.standfirst}>{post.standfirst}</p>
        <div className={styles.rowMeta}>
          {post.hasContent ? (
            <>
              <span className={styles.statusReady}>Available now</span>
              <span className={styles.dot} aria-hidden="true" />
              <span className={`${styles.readtime} tnum`}>
                {post.readingMinutes} min
              </span>
            </>
          ) : (
            <span className={styles.statusSoon}>Forthcoming</span>
          )}
        </div>
      </div>
      <span className={styles.arrow} aria-hidden="true">
        {post.hasContent ? "→" : ""}
      </span>
    </>
  );

  return (
    <li className={styles.item}>
      {post.hasContent ? (
        <Link
          href={`/parts/${post.slug}`}
          className={`${styles.row} ${styles.rowReady}`}
          aria-label={`Read: ${post.title}`}
        >
          {inner}
        </Link>
      ) : (
        <div
          className={`${styles.row} ${styles.rowSoon}`}
          aria-label={`${post.title} — forthcoming`}
        >
          {inner}
        </div>
      )}
    </li>
  );
}

export function SeriesIndex() {
  return (
    <div className={styles.groups}>
      {volumes.map((vol) => (
        <section key={vol.number} className={styles.group}>
          <div className={styles.groupHead}>
            <p className={styles.groupLabel}>
              <span className="tnum">Volume {vol.numeral}</span>
            </p>
            <h3 className={styles.groupTitle}>{vol.title}</h3>
            <p className={styles.groupBlurb}>{vol.blurb}</p>
          </div>
          <ol className={styles.list}>
            {postsInVolume(vol.number).map((post) => (
              <PostRow
                key={post.slug}
                post={post}
                kicker={`Volume ${vol.numeral} · ${vol.title}`}
              />
            ))}
          </ol>
        </section>
      ))}

      {dispatches.length > 0 && (
        <section className={styles.group}>
          <div className={styles.groupHead}>
            <p className={styles.groupLabel}>Dispatches</p>
            <h3 className={styles.groupTitle}>From the editor</h3>
            <p className={styles.groupBlurb}>
              Shorter pieces outside the main arc.
            </p>
          </div>
          <ol className={styles.list}>
            {dispatches.map((post) => (
              <PostRow key={post.slug} post={post} kicker="Dispatch" />
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
