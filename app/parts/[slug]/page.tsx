import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ContinueBlock } from "@/components/ContinueBlock";
import { contentBySlug } from "@/content";
import { getPart, parts } from "@/lib/series";
import styles from "./forthcoming.module.css";

export function generateStaticParams() {
  return parts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const part = getPart(slug);
  if (!part) return {};
  return {
    title: part.title,
    description: part.standfirst,
  };
}

export default async function PartPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const part = getPart(slug);
  if (!part) notFound();

  const Content = contentBySlug[slug];

  return (
    <>
      <ArticleLayout part={part} dropcap={Boolean(Content)}>
        {Content ? (
          <Content />
        ) : (
          <div className={styles.forthcoming}>
            <p className={styles.badge}>Forthcoming</p>
            <p className={styles.lead}>
              This Part is still being written. Here is what it will cover.
            </p>
            <ul className={styles.sections}>
              {part.sections.map((s) => (
                <li key={s.heading} className={styles.section}>
                  <span className={styles.sectionHeading}>{s.heading}</span>
                  <span className={styles.sectionBlurb}>{s.blurb}</span>
                </li>
              ))}
            </ul>
            <Link href="/#parts" className={styles.back}>
              ← Back to the series
            </Link>
          </div>
        )}
      </ArticleLayout>

      {part.hasContent && <ContinueBlock current={part} />}
    </>
  );
}
