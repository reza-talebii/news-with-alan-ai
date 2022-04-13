import React from "react";

import Logo from "../Logo/Logo";
import InfoController from "../InfoController/InfoController";

import useStyle from "./styles";

const Header = ({ newsArticles }) => {
  const classes = useStyle();

  return (
    <div className={classes.logoContainer}>
      {newsArticles.length ? <InfoController /> : null}

      <Logo />
    </div>
  );
};

export default Header;
