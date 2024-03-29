import React from "react";
import useStyles from "./styles.js";

import { Grid, Grow } from "@material-ui/core";

import NewsCard from "../NewsCard/NewsCard";
import InfoCards from "../InfoCards/InfoCards";

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) return <InfoCards />;

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard
              key={i}
              i={i}
              article={article}
              activeArticle={activeArticle}
            />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
