import React from 'react';
import Avatar from '@mui/material/Avatar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Grid from '@material-ui/core/Grid'


const RightHeader =()=> {
  return (
    <div style={{backgroundColor:''}}>
        <Grid container 
            direction="row"
            justifyContent="center"
            alignItems="center"
            >

        <Grid  item xs={4}>
            <a href="/">
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />

            </a>


        </Grid>
        <Grid item xs={4}>
             <DarkModeIcon />

        </Grid>

        </Grid>

    </div>
  );
}

export default RightHeader;
