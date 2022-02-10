import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ImageURL } from "../../constants/ImageData";
const useStyle=makeStyles(theme=>({
    wrraper:{
        display:'flex',
        marginTop:20,
        justifyContent:'space-between',
    },
    help:{
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }     
    }
}))
const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
const MidSection=()=>{
    const classes=useStyle();
 return(
     <>
     <Grid lg={12} md={12} sm={12} xs={12} container className={classes.wrraper}>
          {
              ImageURL.map(image=>(
                <Grid item lg={4} md={4} sm={12} xs={12} >
                <img src={image} style={{width:'98%'}}/>
                </Grid>
                  ))
          }
     </Grid>
     <img src={coronaURL} className={classes.help}style={{ width:'100%',marginTop:20}}/>
     </>
 );
}
export default MidSection;