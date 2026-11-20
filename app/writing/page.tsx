import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing | ReHealth Dads",
  description: "Essays on men's health, fatherhood, and the boring habits that work.",
};

export default function WritingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
        Writing
      </p>
      <h1 className="text-4xl font-bold md:text-5xl">
        Notes from the trenches of dad health.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
        No listicles. No biohacking hype. Just what actually moved the needle
        for real fathers.
      </p>

      <div className="mt-12 space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group block rounded-3xl border border-[var(--border)] p-8 transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl"
          >
            <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
              <span className="rounded-full border border-[var(--border)] px-3 py-1 font-medium">
                {post.category}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>· {post.readingTime}</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold group-hover:text-[var(--accent)]">
              {post.title}
            </h2>
            <p className="mt-2 text-[var(--muted)]">{post.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]">
              Read →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}