import Image from "next/image";
import Link from "next/link";
import { getVolume, type Post } from "@/lib/series";
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
  post,
  children,
  dropcap = true,
  showLead = true,
}: {
  post: Post;
  children: React.ReactNode;
  /** Drop-cap the first paragraph — only for real article prose. */
  dropcap?: boolean;
  /** Show the full-width lead image below the header. */
  showLead?: boolean;
}) {
  const volume = getVolume(post.volume);
  const kickerLabel =
    post.kind === "mini" ? "Dispatch" : `Volume ${volume?.numeral}`;

  return (
    <article className={styles.article}>
      <header className={styles.head}>
        <div className={styles.kicker}>
          <Link href="/#parts" className={styles.kickerLink}>
            <span className={`${styles.kickerNumeral} tnum`}>
              {kickerLabel}
            </span>
          </Link>
          {volume && post.kind !== "mini" && (
            <>
              <span className={styles.kickerDivider} aria-hidden="true" />
              <span className={styles.kickerVolume}>{volume.title}</span>
            </>
          )}
        </div>

        <h1 className={styles.title}>{post.title}</h1>

        <p className={styles.standfirst}>{post.standfirst}</p>

        <div className={styles.meta}>
          <span className={styles.byline}>{post.byline}</span>
          <span className={styles.metaDot} aria-hidden="true" />
          {post.published && (
            <>
              <time className="tnum" dateTime={post.published}>
                {formatDate(post.published)}
              </time>
              <span className={styles.metaDot} aria-hidden="true" />
            </>
          )}
          <span className={`${styles.metaRead} tnum`}>
            {post.readingMinutes} min read
          </span>
        </div>
      </header>

      {showLead && (
        <figure className={styles.lead}>
          <div className={styles.leadMedia}>
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 66rem) 100vw, 62rem"
              className={styles.leadImg}
            />
          </div>
          <figcaption className={styles.leadCaption}>
            {post.imageAlt}
          </figcaption>
        </figure>
      )}

      <div className={`${styles.body} ${dropcap ? styles.hasDropcap : ""}`}>
        {children}
      </div>
    </article>
  );
}
