import fs from "fs";
import path from "path";
import Link from "next/link";

export default function BlogIndex() {
  const postsDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((file) => ({
    slug: file.replace(".mdx", ""),
    title: file.replace(".mdx", "").replace(/-/g, " "),
  }));

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline text-lg"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}