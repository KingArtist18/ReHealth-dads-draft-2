import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

// 1. Updated to await params
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPost(resolvedParams.slug);
  if (!post) return { title: "Not found" };
  return { title: `${post.title} | ReHealth Dads`, description: post.excerpt };
}

// 2. Updated to await params
export default async function PostPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const post = getPost(resolvedParams.slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/writing" className="text-sm font-semibold text-[var(--accent)] hover:underline">
        ← All writing
      </Link>
      <div className="mt-8 flex items-center gap-3 text-sm text-[var(--muted)]">
        <span className="rounded-full border border-[var(--border)] px-3 py-1 font-medium">
          {post.category}
        </span>
        <span>
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span>· {post.readingTime}</span>
      </div>
      <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-xl text-[var(--muted)]">{post.excerpt}</p>
      <hr className="my-10 border-[var(--border)]" />
      <article className="prose prose-lg max-w-none">{post.body}</article>
    </main>
  );
}