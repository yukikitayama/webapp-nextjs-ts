import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";

import { getArticlesFilenames } from "../../utils/article";

const ArticleContentPage = () => {

  return <div>content</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params!;

  // Find article markdown file
  const articlesDirectory = path.join(process.cwd(), "articles");
  const markdownPath = path.join(articlesDirectory, `${slug}.md`);
  const markdownFile = fs.readFileSync(markdownPath, "utf-8");

  // Extract article ID

  // Get article metadata

  return {
    props: {
      article: null,
    },
  };
};

export const getStaticPaths = () => {
  // To make getStaticProps() work, pre-generate all the dynamic path segments "slug"
  const articleFilenames = getArticlesFilenames();
  const slugs = articleFilenames.map((filename) =>
    filename.replace(/\.md$/, "")
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default ArticleContentPage;
