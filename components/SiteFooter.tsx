import Link from "next/link";
import { SERIES_TITLE } from "@/lib/series";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.colophon}>
          <span className={styles.mark} aria-hidden="true" />
          <p className={styles.title}>{SERIES_TITLE}</p>
          <p className={styles.note}>
            A twelve-post reading series, in four volumes, on how the group was
            built. Independently written; not affiliated with the Adani Group.
          </p>
        </div>
        <nav className={styles.links} aria-label="Footer">
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/#parts" className={styles.link}>
            The Series
          </Link>
          <Link href="/#about" className={styles.link}>
            About
          </Link>
        </nav>
      </div>
      <p className={styles.fineprint}>
        © {new Date().getFullYear()} · Editorial project. Facts drawn from public
        record.
      </p>
    </footer>
  );
}
