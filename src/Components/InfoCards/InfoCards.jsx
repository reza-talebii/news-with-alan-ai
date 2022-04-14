import React from "react";

import useStyles from "./styles.js";

import { Grid, Grow, Typography } from "@material-ui/core";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const InfoCards = () => {
  const classes = useStyles();

  const infoCardComponents = (infoCard, index) => {
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        className={classes.infoCard}
        key={index}
      >
        <div
          className={classes.card}
          style={{ backgroundColor: infoCard.color }}
        >
          <Typography variant="h5" component="h5">
            {infoCard.title}
          </Typography>
          {infoCard.info ? (
            <Typography variant="h6" component="h6">
              <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
              {infoCard.info}
            </Typography>
          ) : null}
          <Typography variant="h6" component="h6">
            Try saying: <br /> <i>{infoCard.text}</i>
          </Typography>
        </div>
      </Grid>
    );
  };

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {infoCards.map((infoCard, index) =>
          infoCardComponents(infoCard, index)
        )}
      </Grid>
    </Grow>
  );
};

export default InfoCards;
