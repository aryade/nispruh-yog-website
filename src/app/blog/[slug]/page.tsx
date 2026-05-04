import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost } from "../blog-posts";
import { motion } from "framer-motion";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.dateISO,
    },
  };
}

const TAG_COLOUR: Record<string, string> = {
  Practice: "var(--pista-green)",
  Reflection: "var(--pista-green)",
  Lineage: "var(--text-heading)",
  "Daily Life": "var(--bg-secondary)",
  Philosophy: "var(--text-muted)",
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[var(--bg-primary)]">
      {/* ── Back link ──────────────────────────────────────────── */}
      <div className="border-b border-[var(--border-soft)]/50">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-[var(--pista-green)] hover:text-[var(--pista-green)]/80 transition-colors duration-200"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M13 8H3M7 12l-4-4 4-4" />
            </svg>
            Back to blog
          </Link>
        </div>
      </div>

      {/* ── Article header ─────────────────────────────────────── */}
      <header className="py-16 border-b border-[var(--border-soft)]/50">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="max-w-3xl">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span
                className="text-[0.65rem] uppercase tracking-[0.16em] font-semibold px-2.5 py-1 rounded-full"
                style={{
                  color: TAG_COLOUR[post.tag],
                  background: `${TAG_COLOUR[post.tag]}14`,
                }}
              >
                {post.tag}
              </span>
              <span className="text-[0.72rem] text-[var(--text-muted)]/60">
                {post.readTime} read
              </span>
              <span className="text-[0.72rem] text-[var(--text-muted)]/60">
                &middot;
              </span>
              <time
                dateTime={post.dateISO}
                className="text-[0.72rem] text-[var(--text-muted)]/60"
              >
                {post.date}
              </time>
            </div>

            {/* Title */}
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-[1.05rem] leading-[1.8] text-[var(--text-muted)] max-w-[52ch]">
              {post.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* ── Article content ────────────────────────────────────── */}
      <article className="py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="prose prose-sm max-w-none text-[var(--text-body)]">
            <BlogContent content={post.content} />
          </div>
        </div>
      </article>

      {/* ── Related posts / CTA ────────────────────────────────── */}
      <section className="py-16 border-t border-[var(--border-soft)]/50 bg-[var(--bg-secondary)]/30">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="text-[1.5rem] font-semibold text-[var(--text-heading)] mb-4">
            More from the path
          </h2>
          <p className="text-[0.95rem] text-[var(--text-muted)] mb-8 max-w-[50ch] mx-auto">
            Explore more reflections on practice, philosophy, and the daily
            unfolding of awareness.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--pista-green)] text-white text-[0.85rem] font-medium hover:bg-[var(--pista-green)]/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/50"
          >
            View all posts
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

/**
 * Client component to render markdown content with proper styling
 */
function BlogContent({ content }: { content: string }) {
  // Simple markdown to HTML-like rendering
  // For production, consider using a library like remark or markdown-it
  const sections = content.split("\n\n");

  return (
    <>
      {sections.map((section, idx) => {
        section = section.trim();
        if (!section) return null;

        // Headers
        if (section.startsWith("# ")) {
          return (
            <h1
              key={idx}
              className="text-2xl font-semibold text-[var(--text-heading)] mt-8 mb-4 first:mt-0"
            >
              {section.replace(/^# /, "")}
            </h1>
          );
        }
        if (section.startsWith("## ")) {
          return (
            <h2
              key={idx}
              className="text-xl font-semibold text-[var(--text-heading)] mt-8 mb-4"
            >
              {section.replace(/^## /, "")}
            </h2>
          );
        }

        // Blockquotes
        if (section.startsWith("> ")) {
          const lines = section.split("\n");
          const quoteLines = lines
            .filter((line) => line.startsWith("> "))
            .map((line) => line.replace(/^> /, ""));
          const attribution = lines.find((line) => line.startsWith("— "));

          return (
            <blockquote
              key={idx}
              className="border-l-4 border-[var(--pista-green)]/30 pl-6 py-4 my-6 italic text-[var(--text-muted)]"
            >
              <p className="mb-2">{quoteLines.join(" ")}</p>
              {attribution && (
                <footer className="text-[0.85rem] text-[var(--text-muted)]/70 font-normal not-italic">
                  {attribution}
                </footer>
              )}
            </blockquote>
          );
        }

        // Horizontal rule
        if (section === "---") {
          return (
            <hr
              key={idx}
              className="my-8 border-[var(--border-soft)]/30"
              aria-hidden="true"
            />
          );
        }

        // Lists
        if (section.includes("\n- ")) {
          const items = section.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul
              key={idx}
              className="list-disc list-inside space-y-2 text-[var(--text-body)] leading-relaxed my-4"
            >
              {items.map((item, i) => (
                <li key={i}>{item.replace(/^- /, "")}</li>
              ))}
            </ul>
          );
        }

        // Numbered lists
        if (section.match(/^\d+\./)) {
          const items = section.split("\n").filter((line) => line.match(/^\d+\./));
          return (
            <ol
              key={idx}
              className="list-decimal list-inside space-y-2 text-[var(--text-body)] leading-relaxed my-4"
            >
              {items.map((item, i) => (
                <li key={i}>{item.replace(/^\d+\.\s*/, "")}</li>
              ))}
            </ol>
          );
        }

        // Regular paragraph with inline formatting
        return (
          <p
            key={idx}
            className="text-[1rem] leading-[1.85] text-[var(--text-body)] my-4"
          >
            {renderInlineMarkdown(section)}
          </p>
        );
      })}
    </>
  );
}

/**
 * Render inline markdown elements (bold, italic, links)
 */
function renderInlineMarkdown(text: string) {
  const parts: (string | React.ReactNode)[] = [];
  let lastIndex = 0;

  // Match bold, italic, and links
  const regex = /\*\*(.+?)\*\*|_(.+?)_|\*(.+?)\*|https?:\/\/[^\s]+/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add formatted text
    if (match[1]) {
      // Bold
      parts.push(
        <strong key={match.index} className="font-semibold">
          {match[1]}
        </strong>
      );
    } else if (match[2]) {
      // Underline italic
      parts.push(
        <em key={match.index} className="italic">
          {match[2]}
        </em>
      );
    } else if (match[3]) {
      // Italic
      parts.push(
        <em key={match.index} className="italic">
          {match[3]}
        </em>
      );
    } else if (match[0].startsWith("http")) {
      // Link
      parts.push(
        <a
          key={match.index}
          href={match[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--pista-green)] hover:underline"
        >
          {match[0]}
        </a>
      );
    }

    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
