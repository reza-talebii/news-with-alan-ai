import React from "react";

import Logo from "../Logo/Logo";
import useStyle from "./styles";

import InfoController from "../InfoController/InfoController";

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
