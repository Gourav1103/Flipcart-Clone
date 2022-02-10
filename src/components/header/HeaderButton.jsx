import { Box, Button, Typography , Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import LoginButton from "../Login/Login";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";
const useStyle=makeStyles(theme=>({
    login:{
      background:'white',
      color:'blue',
      fontWeight:600,
      textTransform:'unset',
      padding: '5px 40px',
      borderRadius:2,
      boxShadow:'none'  ,
      [theme.breakpoints.down('sm')]:{
        background:'#2874f0',
        color:'#FFFFFF'
    }
      
    },
    wrapper:{
    margin:'0 7% 0 auto',
    display  :'flex',
    '& > *':{
      marginRight:'50px',
      alignItems:'center',
      textDecoration:'none',
      color:"#FFF",
      [theme.breakpoints.down('sm')]:{
        color:'#2874f0',
       
    }
    },
    [theme.breakpoints.down('sm')]:{
        display:'block',
    }
    },
    container:{
        display:'flex',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    }
}));
const HeaderButton=()=>{
    const[open,setOpen]=useState(false);
    const{uname,setUname} = useContext(LoginContext);
    const {cartItems}= useSelector(state=>state.cart);
    const classes = useStyle();
    const openHandler=()=>{
       setOpen(true);
    }
    return(
        <Box className={classes.wrapper}>
            { uname ? <Profile uname={uname} setUname={setUname}/>
                :
            <Link to=""><Button variant="contained" className={classes.login} onClick={openHandler}>Login</Button></Link>
            }
            <Link to=""><Typography style={{marginTop:5}}>More</Typography></Link>
            <Link to="/Cart" className={classes.container}>
            <Badge badgeContent={cartItems.length} color="primary">
             <ShoppingCart />
            </Badge>
                <Typography style={{marginLeft:10 }}>cart</Typography>
                </Link>
                <LoginButton open={open} setOpen={setOpen} setUname={setUname} />
        </Box>
    );    
}
export default HeaderButton;