import fs from "fs";
import path from "path";
import { compile } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { runSync } from "@mdx-js/mdx";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const contentDir = path.join(process.cwd(), "content", "blog");
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const source = fs.readFileSync(filePath, "utf-8");

  const compiled = await compile(source, { outputFormat: "function-body" });
  const { default: Content } = runSync(compiled, runtime);

  return (
    <article className="prose prose-neutral mx-auto my-10 px-6">
      <Content />
    </article>
  );
}