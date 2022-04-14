import React, { useState, useEffect, useRef } from "react";

import placeholderImage from "../../assets/news-placeholder.png";

import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

const NewsCard = ({ article, activeArticle, i }) => {
  const classes = useStyles();
  const { description, publishedAt, source, title, url, urlToImage } = article;

  //SCROLL TOP CARD HANDLER
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || React.createRef())
    );
  }, []);

  useEffect(() => {
    if (activeArticle === i && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
  //END SCROLL TOP CARD HANDLER

  return (
    <Card
      ref={elRefs[i]}
      className={activeArticle === i ? classes.activeCard : classes.card}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={urlToImage || placeholderImage}
          title={title}
        />

        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>

        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {title}
        </Typography>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" href={url}>
          Learn More
        </Button>

        <Typography variant="h5" color="textSecondary" component="h2">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
