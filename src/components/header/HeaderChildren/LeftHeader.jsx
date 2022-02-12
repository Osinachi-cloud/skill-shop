import React from 'react';
import createUseStyles from 'react-jss'


const styles = createUseStyles({
    container:{
        backgroundColor:'red'
    }

})

const LeftHeader = () => {
    const classes = styles();
  return (
        <div style={{ backgroundColor:'', border: '1px'}}>
            Logo

         </div>
        )
    ;
};

export default LeftHeader;
