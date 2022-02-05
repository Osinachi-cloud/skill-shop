import React from 'react';

import SearchIcon from '@mui/icons-material/Search'
import {createUseStyles} from 'react-jss'
import Button from "@mui/material/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";



  
const styles = createUseStyles({
    input:{
        border:'none',
        backgroundColor: 'transparent',
        height:'30px' ,
        width:'80%',
        padding:'5px 10px'
    },
    searchBg:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F0F2F5',
        padding:'0 5px 0 0',
        width:'250px',
        borderRadius:'5px',
        display:'flex',
        margin:'5px 40px 5px 0'
        
    },
    container:{
        padding:'0 0 0 0',
        backgroundColor:'',
        margin:"0"

    }
})



const SearchBox =()=> {
const classes = styles()

  return (
    <div className={classes.container}>
          <form>
                    <div className={classes.searchBg}>
                    <input type="text" placeholder="search" className={classes.input} />

                    <Button>
                     <SearchIcon/>


                    </Button>
                    </div>
                    

              
        </form>
            
     
    </div>
  );
}

export default SearchBox;
