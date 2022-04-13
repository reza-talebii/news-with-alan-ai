import React from "react";

import useStyle from "./styles";
import { Typography } from "@material-ui/core";

const InfoController = () => {
  const classes = useStyle();

  return (
    <div className={classes.infoContainer}>
      <div className={classes.card}>
        <Typography variant="h5" component="h2">
          Try saying: <br />
          <br />
          Open article number [4]
        </Typography>
      </div>
      <div className={classes.card}>
        <Typography variant="h5" component="h2">
          Try saying: <br />
          <br />
          Go back
        </Typography>
      </div>
    </div>
  );
};

export default InfoController;
