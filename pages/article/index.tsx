import { Fragment } from "react";
import Grid from "@mui/material/Grid";

import ArticleCard from "../../components/article/article-card";

const articles = [
  {
    id: "1",
    title: "title1",
    date: "2022-11-23",
    image: "network.jpg",
    excerpt: "excerpt1",
    slug: "tmp",
    category: "category",
    view: 0,
    like: 0,
  },
  {
    id: "2",
    title: "title2",
    date: "2022-11-24",
    image: "network.jpg",
    excerpt: "excerpt2",
    slug: "tmp",
    category: "category",
    view: 0,
    like: 0,
  },
  {
    id: "3",
    title: "title3",
    date: "2022-11-25",
    image: "network.jpg",
    excerpt: "excerpt3",
    slug: "tmp",
    category: "category",
    view: 0,
    like: 0,
  },
];

const ArticlePage = () => {
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        {articles.map((article) => (
          <Grid item xs={12} md={4} key={article.id}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/articles`);
  const articles = await response.json();
}

export default ArticlePage;
