import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

import useStyles from "./styles";

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
}
