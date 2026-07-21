"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SERIES_TITLE } from "@/lib/series";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const isArticle = pathname?.startsWith("/parts/");
  const isHome = pathname === "/";
  const [progress, setProgress] = useState(0);
  const [condensed, setCondensed] = useState(false);
  const [overHero, setOverHero] = useState(isHome);
  const ticking = useRef(false);

  useEffect(() => {
    setOverHero(isHome);
    if (!isArticle && !isHome) {
      setProgress(0);
      setCondensed(false);
      return;
    }
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollTop = doc.scrollTop;
        if (isArticle) {
          const scrollable = doc.scrollHeight - doc.clientHeight;
          setProgress(scrollable > 0 ? scrollTop / scrollable : 0);
        }
        setCondensed(scrollTop > 32);
        if (isHome) {
          // white-on-photo until the cover has mostly scrolled away
          setOverHero(scrollTop < window.innerHeight * 0.82);
        }
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isArticle, isHome, pathname]);

  return (
    <header
      className={[
        styles.header,
        condensed ? styles.condensed : "",
        overHero ? styles.onHero : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.bar}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true" />
          <span className={styles.brandName}>{SERIES_TITLE}</span>
        </Link>
        <nav className={styles.nav} aria-label="Series">
          <Link href="/#parts" className={styles.navLink}>
            The Series
          </Link>
          <Link href="/#about" className={styles.navLink}>
            About the Series
          </Link>
        </nav>
      </div>
      {isArticle && (
        <div
          className={styles.progressTrack}
          role="progressbar"
          aria-label="Reading progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
        >
          <div
            className={styles.progressFill}
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      )}
    </header>
  );
}
