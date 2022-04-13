import React from "react";

import logo from "../../assets/alan.jpg";
import useStyle from "./styles";

const Logo = () => {
  const classes = useStyle();

  return <img src={logo} className={classes.alanLogo} alt="logo" />;
};

export default Logo;
