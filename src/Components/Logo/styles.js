import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  alanLogo: {
    height: "27vmin",
    borderRadius: "15%",
    padding: "0 5%",
    margin: "3% 0",
    [theme.breakpoints.down("sm")]: {
      height: "35vmin",
    },
  },
}));
