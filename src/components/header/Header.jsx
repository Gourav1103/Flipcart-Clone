import { AppBar, makeStyles, Toolbar, Typography,Box, withStyles,IconButton, Drawer, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";
import SearchBox from "./SearchBar";
import { Menu } from "@material-ui/icons";
import { useState } from "react";
const useStyle=makeStyles(theme=>({
    header : {
        background:'#2874f0',
        height: 55,
    },
    logo:{
     width:75,
    },
    suburl:{
        width:10,
        marginLeft:4,
        height:10,
    },
    container:{
         display:'flex',
    },
    components:{
        marginLeft:'12%',
        lineHeight:0,
        textDecoration:'none',
        color:"#fff"
    },
    subHeading:{
        fontSize:10,
        fontStyle:'italic',
    },
    menubutton:{
     display:'none',
     [theme.breakpoints.down('sm')]:{
         display:'block'
     }
    },
    list:{
        width:250
    },
    custombutton:{
        margin:'0 7% 0 auto',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
}));
const ToolBar= withStyles({
    root:{
        minHeight:55,
    }
})(Toolbar)
const Header=()=>{
    const[open,setOpen]=useState(false);
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
     const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const openHandler=()=>{
        setOpen(true);
    }
    const closeHandler=()=>{
        setOpen(false);
    }
    const list=()=>(
        <Box className={classes.list}  >
            <List>
                <ListItem>
                    <HeaderButton/>
                </ListItem>
            </List>
        </Box>
    )
     return(
     <AppBar className={classes.header}>
         <ToolBar>
         <IconButton 
           color="inherit"
           className={classes.menubutton}
           onClick={openHandler}
          >
             <Menu/>
         </IconButton>
         <Drawer open={open} onClose={closeHandler}>
             {list()}
         </Drawer>
         <Link to="/" className={classes.components}>
             <img src={logoURL} className={classes.logo}/>
           <Box className={classes.container}>
             <Typography className={classes.subHeading}>Explore <span style={{color:'#FFE500'}}>Plus</span></Typography>
              <img src={subURL} className={classes.suburl}/>        
           </Box>
         </Link>
         <SearchBox/>
         <span className={classes.custombutton}><HeaderButton/></span>
         </ToolBar>
     </AppBar>
    );
}
export default Header;