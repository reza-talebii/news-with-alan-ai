import React from "react";

import useStyle from "./styles";

const Logo = () => {
  const classes = useStyle();

  return (
    <img
      src="https://alan.app/voice/images/previews/preview.jpg"
      className={classes.alanLogo}
      alt="logo"
    />
  );
};

export default Logo;
