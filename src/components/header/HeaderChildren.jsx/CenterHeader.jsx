import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const CenterHeader = () => {
  return (
    <div style={{ backgroundColor: "" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={2}>
          <a href="">
            <HomeIcon color="primary" sx={{ fontSize: 30 }} />
          </a>
        </Grid>
        <Grid item xs={2}>
          <a href="">
            <NotificationsActiveIcon color="primary" sx={{ fontSize: 30 }} />
          </a>
        </Grid>
        <Grid item xs={2}>
          <a href="">
            <ChatIcon color="primary" sx={{ fontSize: 30 }} />
          </a>
        </Grid>
        <Grid item xs={2}>
          <a href="">
            <PeopleIcon color="primary" sx={{ fontSize: 30 }} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default CenterHeader;
