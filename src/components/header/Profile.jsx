import { Typography,Menu,MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const useStyle = makeStyles({
    component:{
        marginTop:40
    },
    logout:{
        marginLeft:20,
        fontSize:14
    }
})
 const Profile =(props)=>{
 const[open,setOpen]=useState(false);
const classes = useStyle();
 const handleClose=()=>{
     setOpen(false);
 }
 const handleClick=(event)=>{
     setOpen(event.currentTarget);
 }
 const logoutHandler=()=>{
     props.setUname('');
 }
  return(
      <>
       <Link to=""><Typography onClick={handleClick} style={{marginTop:4}}>{props.uname}</Typography></Link>
      <Menu
        anchorEl={open}
        open={open}
        onClose={handleClose}
        className={classes.component}  
          >
        <MenuItem onClick={handleClose,logoutHandler}>
            <PowerSettingsNewIcon fontSize="small" color="primary" />
           <Typography className={classes.logout}>Logout</Typography> 
            </MenuItem>
      </Menu>
      </>
  );
 }
 export default Profile;