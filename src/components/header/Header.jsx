import React from "react";
import CenterHeader from "./HeaderChildren.jsx/CenterHeader";
import RightHeader from "./HeaderChildren.jsx/RightHeader";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import LeftHeader from "./HeaderChildren.jsx/LeftHeader";

const Header = () => {
  return (
    <Box
      sx={{
        boxShadow: 0,
          width: '100%',
        // height: "3rem",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        p: 1,
        m: 0,
        borderRadius: 0,
        textAlign: "center",
        paddingLeft:'-50px',
        // border: '3px solid green',
        fontSize: "0.875rem",
        fontWeight: "700",
        // display: 'flex',
        
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        backgroundColor = 'red'
        justifyContent='center'
        alignItems="center"
        height={100}
        rowSpacing={0}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={3} sm={1} md={1} lg={2} p={0}>
            <LeftHeader/>
        </Grid>
        <Grid item xs={8} sm={6} md={6} lg={6} p={0}>
          <CenterHeader />
        </Grid>
        <Grid item xs={0} sm={5} md={4} lg={3} p={0}>
          <RightHeader />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;


  /* <Row>
  <Col xs={12} sm={3} md={2} lg={1} />
  <Col xs={6} sm={6} md={8} lg={10} />
  <Col xs={6} sm={3} md={2} lg={1} />
</Row> */

