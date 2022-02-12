import React from "react";
import Avatar from "@mui/material/Avatar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Grid from "@material-ui/core/Grid";
import LeftHeader from "./LeftHeader";
import createUseStyles from "react-jss";
import SearchBox from "./SearchBox";
import Switch from '@mui/material/Switch';

const styles = createUseStyles({
  container: {
    backgroundColor: "purple",
    width: "100%",
    padding: '0',
    margin: 0,
  },
});

const RightHeader = () => {
  const classes = styles();
  return (
    <div  style={{ backgroundColor:'', border: '1px '}}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <a href="/">
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </a>
        </Grid>
        <Grid item xs={9} sm={9} md={9} lg={9}>
          <SearchBox/>
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1}>
          {/* <DarkModeIcon /> */}
          <Switch/>
          
        </Grid>

      </Grid>
    </div>
  );
};

export default RightHeader;


  /* <Row>
  <Col xs={12} sm={3} md={2} lg={1} />
  <Col xs={6} sm={6} md={8} lg={10} />
  <Col xs={6} sm={3} md={2} lg={1} />
</Row> */