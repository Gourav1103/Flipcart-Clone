import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";

const useStyle= makeStyles({
    components:{
    
     background:'#fff',
     marginLeft:15
    },
    header:{
        padding:'16px 24px',
        borderBottom:'1px solid #f0f0f0'
    },
    container:{
        padding:'15px 24px',
        '& > *':{
            marginTop:20,
            fontSize:14
        }
    },
    greytext:{
        color:'#878787'
    },
    price:{
        float:'right'
    },
    totalamount:{
        fontSize:18,
        fontWeight:600,
        borderTop:'1px dashed #e0e0e0',
        padding:'20px 0px',
        borderBottom:'1px dashed #e0e0e0'
    }
})
const TotalView=(props)=>{
    const classes = useStyle();
    const[price,setPrice]=useState(0);
    const[discount,setDiscount]=useState(0);
    useEffect(()=>{
        TotalAmount();
    },[props.cartItems]);
    const TotalAmount=()=>{
        let price=0,discount=0;
         props.cartItems.map(item=>(
             
            price+=(item.price.mrp),
            discount+=(item.price.mrp-item.price.cost)
        ))
        
      setPrice(price);
      setDiscount(discount);
    }
    return(
        <Box className={classes.components}>
            <Box className={classes.header}>
           <Typography className={classes.greytext}>PRICE DETAILS</Typography>
            </Box>
            <Box className={classes.container}>
             <Typography>Price({props.cartItems.length} item)<span className={classes.price}>₹{price}</span></Typography>
             <Typography>Discount<span className={classes.price}>₹{discount}</span></Typography>
             <Typography>Delivery Charge<span className={classes.price}>₹40</span></Typography>
             <Typography className={classes.totalamount}>Total Amount <span className={classes.price}>₹{price-discount+40}</span></Typography>
             <Typography style={{color:'green'}}>You will save ₹{discount-40} on this order </Typography>
            </Box>
        </Box>
    );
}
export default TotalView;