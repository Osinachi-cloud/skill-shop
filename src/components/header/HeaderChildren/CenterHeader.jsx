import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";

const CenterHeader = () => {
  return (
    <div style={{ backgroundColor: "" }} style={{ backgroundColor:'', border: '1px '}}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={2} p={1}>
          <Button>
            <a href="">
              <HomeIcon color="primary" sx={{ fontSize: 30 }} />
            </a>
          </Button>
        </Grid>
        <Grid item xs={2} p={1}>
          <Button>
            <a href="">
              <NotificationsActiveIcon color="primary" sx={{ fontSize: 30 }} />
            </a>
          </Button>
        </Grid>
        <Grid item xs={2} p={1}>
          <Button>
            <a href="">
              <ChatIcon color="primary" sx={{ fontSize: 30 }} />
            </a>
          </Button>
        </Grid>
        <Grid item xs={2} p={1}>
          <Button>
            <a href="">
              <PeopleIcon color="primary" sx={{ fontSize: 30 }} />
            </a>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CenterHeader;
