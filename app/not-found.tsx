import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: "36rem",
        margin: "0 auto",
        padding: "clamp(4rem, 12vw, 8rem) 1.5rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.74rem",
          fontWeight: 600,
          letterSpacing: "0.11em",
          textTransform: "uppercase",
          color: "var(--ember-ink)",
          marginBottom: "1rem",
        }}
      >
        Off the map
      </p>
      <h1
        style={{
          fontSize: "clamp(2.4rem, 7vw, 3.5rem)",
          marginBottom: "1rem",
        }}
      >
        This page isn&rsquo;t part of the series
      </h1>
      <p style={{ color: "var(--ink-muted)", marginBottom: "2rem" }}>
        The page you were looking for doesn&rsquo;t exist — or hasn&rsquo;t been
        written yet.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          color: "var(--ember-ink)",
        }}
      >
        ← Back to the beginning
      </Link>
    </div>
  );
}
