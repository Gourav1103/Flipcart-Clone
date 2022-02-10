import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CartItem from "./CartItem";
import { removeToCart } from "../../redux/actions/CartActions";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";
const useStyle= makeStyles(theme=>({
    components:{
     marginTop:55,
     padding:'30px 135px',
     display:'flex',
     [theme.breakpoints.down('sm')]:{
         padding:'15px 0'
     }
    },
    leftcomponent:{
        // width:'67%',
        paddingRight:15,
        [theme.breakpoints.down('sm')]:{
            marginBotton: 15
        }
    },
    bottom:{
       padding:'16px 22px',
       background:'#fff',
       borderTop:'1px solid #f0f0f0',
       boxShadow:'0 2px 10px 0 rgb(0 0 0 /10%)'
    },
    placeorder:{
        background:"#fb641b",
        color:'#fff',
        borderRadius:2,
        width:250,
        height:50,
        display:'flex',
        marginLeft:'auto'
    }
}));
const Cart=()=>{
    const classes = useStyle();
      const{cartItems}=useSelector(state=>state.cart);
    const dispatch= useDispatch();
      useEffect(()=>{
          console.log(cartItems);
      })
     const removeCartItemHandler=(id)=>{
         dispatch(removeToCart(id));
     }
    return(
    <>
       {
           cartItems.length ?
           <Grid container className={classes.components}>
               <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftcomponent}>
                 <Box className={classes.header}>    
                  <Typography style={{fontWeight:600}}>My Cart({cartItems.length})</Typography>
                 </Box>
                 {
                     cartItems.map(item=>(
                         <CartItem item={item} removeCartItemHandler={()=>removeCartItemHandler(item.id)}/>
                     ))
                 }
                 <Box className={classes.bottom}>
                   <Button variant="contained" className={classes.placeorder} >Place Order</Button>
                 </Box>
               </Grid>
               <Grid item lg={3} md={3} sm={12} xs={12}>
               <TotalView cartItems={cartItems}/>
               </Grid>
           </Grid>
        :
         <EmptyCart/>
    
    }  
      
   
    </>  
        
        );
}
export default Cart;