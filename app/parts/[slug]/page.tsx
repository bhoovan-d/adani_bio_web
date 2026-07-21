import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ContinueBlock } from "@/components/ContinueBlock";
import { contentBySlug } from "@/content";
import { getPost, posts, dispatches } from "@/lib/series";
import styles from "./forthcoming.module.css";

export function generateStaticParams() {
  return [...posts, ...dispatches].map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.standfirst,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const Content = contentBySlug[slug];

  return (
    <>
      <ArticleLayout post={post} dropcap={Boolean(Content)}>
        {Content ? (
          <Content />
        ) : (
          <div className={styles.forthcoming}>
            <p className={styles.badge}>Forthcoming</p>
            <p className={styles.lead}>
              This post is still being written. Here is what it will cover.
            </p>
            <p className={styles.preview}>{post.standfirst}</p>
            <Link href="/#parts" className={styles.back}>
              ← Back to the series
            </Link>
          </div>
        )}
      </ArticleLayout>

      {post.hasContent && <ContinueBlock current={post} />}
    </>
  );
}
