import React from "react";
import CenterHeader from "./HeaderChildren.jsx/CenterHeader";
import LeftHeader from "./HeaderChildren.jsx/LeftHeader";
import RightHeader from "./HeaderChildren.jsx/RightHeader";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box
      sx={{
        boxShadow: 3,
          width: '100%',
        height: "3rem",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        p: 1,
        m: 0,
        borderRadius: 0,
        textAlign: "center",
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        height={100}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={3}>
          <LeftHeader />
        </Grid>
        <Grid item xs={6}>
          <CenterHeader />
        </Grid>
        <Grid item xs={3}>
          <RightHeader />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;

{
  /* <Row>
  <Col xs={12} sm={3} md={2} lg={1} />
  <Col xs={6} sm={6} md={8} lg={10} />
  <Col xs={6} sm={3} md={2} lg={1} />
</Row> */
}
