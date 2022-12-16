import fs from "fs";
import path from "path";

const articlesDirectory = path.join(process.cwd(), "articles");

export const getArticlesFilenames = () => {
  return fs.readdirSync(articlesDirectory);
};