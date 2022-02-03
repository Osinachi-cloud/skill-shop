import React from "react";
import Avatar from "@mui/material/Avatar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Grid from "@material-ui/core/Grid";
import LeftHeader from "./LeftHeader";
import createUseStyles from "react-jss";
import SearchBox from "./SearchBox";

const styles = createUseStyles({
  container: {
    backgroundColor: "purple",
    width: "100%",
    padding: 0,
    margin: 0,
  },
});

const RightHeader = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <a href="/">
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </a>
        </Grid>
        <Grid item xs={9}>
          <SearchBox/>
        </Grid>

        <Grid item xs={1}>
          <DarkModeIcon />
        </Grid>
      </Grid>
    </div>
  );
};

export default RightHeader;
