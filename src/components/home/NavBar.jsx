import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { navData } from "../../constants/navData.js";
const useStyle=makeStyles(theme=>({
    component:{
       display:'flex',
       margin:'55px 130px 0px 130px',
       justifyContent:'space-between',
       overflowX:'overlay',
       [theme.breakpoints.down('md')]:{
           margin:0
       }

    },
    container:{
        textAlign:'center',
        padding:'12px 8px'
    },
    image:{
      width:'64px'
    },
    text:{
        fontSize:14,
        fontWeight:600,
    }

}))
const NavBar=()=>{
    const classes= useStyle();
    return(
        <div className={classes.component}>
        {
         navData.map(data=>(
             <div className={classes.container}>
             <img src={data.url} className={classes.image} />
             <Typography className={classes.text}>{data.text}</Typography>
             </div>
         ))
        }
        </div>
        
    );
}
export default NavBar;