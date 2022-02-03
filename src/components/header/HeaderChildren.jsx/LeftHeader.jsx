import React from 'react';

import Grid from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from "@mui/icons-material/Home";
import {createUseStyles} from 'react-jss'

  
const styles = createUseStyles({
    input:{
        border:'none',
        backgroundColor: 'transparent',
        height:'30px' ,
        width:'80%',
        padding:'5px 10px'
    },
    searchBg:{
        backgroundColor:'#F0F2F5',
        padding:'0 5px 0 0',
        width:'200px',
        borderRadius:'5px'
        
    },
    container:{
        padding:'0 30px 0 30px',
    }
})



const LeftHeader =()=> {
const classes = styles()

  return (
    <div className={classes.container}>
          <form>
              <Grid container justifyContent="space-between" alignItems="center" className={classes.searchBg}>
                     <input type="text" placeholder="search" className={classes.input} />
                     <SearchIcon/>

              </Grid>
              
        </form>
     
    </div>
  );
}

export default LeftHeader;
