
import { Card, makeStyles,Box, Typography, Button } from "@material-ui/core";
import clsx from "clsx";
import GroupCartButton from "./GroupCartButton";
const useStyle = makeStyles({
    component:{
        display:'flex',
        borderRadius:0,
        borderTop:'1px solid #f0f0f0'
    },
    leftcomponent:{
        margin:20,
        display:'flex',
        flexDirection:'column'
    },
    rightcomponent:{
        margin:20
    },
    smalltext:{
        fontSize:14
    },
    greytext:{
        color:'#878787'
    },
    price:{
        fontSize:18,
        fontWeight:600
    },
    image:{
        height:110,
        width:110
    },
    button:{
        marginTop:20,
        fontSize:16
    }
})
const CartItem=(props)=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const classes = useStyle();
  const {longTitle} = props.item.title;
  const{cost}=props.item.price;
  const{mrp}=props.item.price;
  const{discount}=props.item.price;
    return (
      <Card className={classes.component}>
          <Box className={classes.leftcomponent}>
             <img src={props.item.url} className={classes.image}/>
             <GroupCartButton/>
          </Box>
          <Box className={classes.rightcomponent}>
              <Typography>{longTitle}</Typography>
              <Typography style={{marginTop:10}} className={clsx(classes.smalltext,classes.greytext)}>
                  Seller:SuperComNet
                  <span><img src={fassured} style={{width:50,marginLeft:10}}/></span>
                  </Typography>
                  <Typography style={{margin:'20px 0'}}>
                      <span className={classes.price}>₹{cost}</span>&nbsp;&nbsp;&nbsp;
                      <span className={classes.greytext}><strike>₹{mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                      <span style={{color:'#388E3C'}}>{discount}</span>
                  </Typography>
                  <Button className={classes.button} onClick={props.removeCartItemHandler} >Remove</Button>
          </Box>
      </Card>
  );
}
export default CartItem