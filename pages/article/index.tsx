import { Fragment } from "react";
import Grid from "@mui/material/Grid";

import ArticleCard from "../../components/article/article-card";

const articles = [
  {
    id: "1",
    title: "title1",
    date: "2022-11-23",
    imagePath: "",
    excerpt: "excerpt1",
  },
  {
    id: "2",
    title: "title2",
    date: "2022-11-24",
    imagePath: "",
    excerpt: "excerpt2",
  },
  {
    id: "3",
    title: "title3",
    date: "2022-11-25",
    imagePath: "",
    excerpt: "excerpt3",
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
          <Grid item xs={12} md={6} key={article.id}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default ArticlePage;
