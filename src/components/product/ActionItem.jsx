import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import ShoppingCartIcon  from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/CartActions";
import {useHistory} from'react-router-dom';
import { paywithpaytm } from "../../services/api";
import {post} from "../../util/paytm";
const useStyle =makeStyles(theme=>({
  leftcontainer:{
    minWidth:'40%',
   padding:'40px 0 0 80px',
   [theme.breakpoints.down('md')]:{
     padding:'20px  40px'
   }
  },
  image:{
    padding:'15px 20px',
    border:'1px solid #f0f0f0',
    width:'95%'
  },
  button:{
    height:50,
    width:'46%',
    borderRadius:2
  },
  addtocart:{
    background:"#ff9f00",
    color:'#fff',
    marginRight:10
  },
  buynow:{
    background:"#fb641b",
    color:'#fff'
  }  
}));
const ActionItem=(props)=>{
  const classes  =useStyle();
  const history = useHistory();
  const dispatch= useDispatch();
  const addToCartHandler=()=>{
          dispatch(addToCart(props.product.id));
          history.push('/Cart');
  }
  const buynow=async()=>{
     let response= await paywithpaytm({amount:100 , email:'gr67@gmail.com'});
     let information={
       action:'http://securegw-stage.paytm.in/order/process',
       params:response
     } 
     post(information) 
    }
   return(
       <Box className={classes.leftcontainer}>
         <img src={props.product.detailUrl} className={classes.image}/><br/>
         <Button onClick={addToCartHandler} variant="contained" className={clsx (classes.button,classes.addtocart)}><ShoppingCartIcon/>Add to Cart</Button>
         <Button onClick={buynow} variant="contained" className={clsx(classes.button,classes.buynow)}><FlashOnIcon/>Buy Now</Button>
       </Box>
   );
}
export default ActionItem;