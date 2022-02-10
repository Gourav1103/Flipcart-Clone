import { Box, Grid, makeStyles, Table, TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions/productActions";
import clsx from 'clsx';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ActionItem from "./ActionItem";
const useStyle = makeStyles(theme=>({
    component:{
        marginTop:55,
        background:'#f2f2f2',
    },
    container:{
        // margin:'0 80px',
        background:'#fff',
        display:'flex',
        [theme.breakpoints.down('md')]:{
            margin:0
        }
    },
    rightcontainer:{
        marginTop:50,
        '& > *':{
            marginTop:10,
        }
    },
    smalltext:{
        fontSize:14,
        verticalAlign:'baseline',
        '& > *':{
            marginTop:10,
            fontSize:14
        }
    },
    greytext:{
      color:'#878787'
    },
    price:{
        fontSize:28
    },
    badge:{
        fontSize:14,
        marginRight:10,
        color:'#00cc00'
    }
}))
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
const DetailView=(props)=>{
    const classes = useStyle();
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date= new Date(new Date().getTime()+(5*24*60*60*1000));
    const {product}=useSelector(state=>state.getProductDetail);
    const dispatch=useDispatch();    
    useEffect(()=>{
       dispatch(getProductDetail(props.match.params.id));
    },[dispatch,props.match.params.id])
    return (
        <Box className={classes.component}>
       { product && Object.keys(product).length&&
        <Grid container className={classes.container}>
            <Grid item lg={4} md={4} sm={8} xs={12} >
                <ActionItem product={product}/>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightcontainer}>
                <Typography>{product.title.longTitle}</Typography>
                <Typography className={clsx (classes.smalltext,classes.greytext)}>
                    8 Ratings & 1 Review
                    <span><img src={fassured} style={{width:77,marginLeft:20}}/></span>
                    </Typography>
                   <Typography>
                       <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                       <span className={classes.greytext}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;&nbsp;
                       <span style={{color:'#388C3C'}}>₹{product.price.discount}off</span>
                   </Typography>
                   <Typography style={{marginTop:20,fontWeight:600}}>Available Offers</Typography>
                <Box className={classes.smalltext}>
                <Typography><LocalOfferIcon className={classes.badge}/>Special PriceGet extra 15% off (price inclusive of discount)</Typography>

                <Typography><LocalOfferIcon className={classes.badge}/>Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%See all products</Typography>
  
                 <Typography><LocalOfferIcon className={classes.badge}/>Bank Offer10% off on ICICI Bank Cards, up to ₹300. On orders of ₹1750 and above</Typography>

                 <Typography><LocalOfferIcon className={classes.badge}/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                </Box>
                <Table>
                    <TableBody>
                        <TableRow className={classes.smalltext}>
                            <TableCell className={classes.greytext}>Delivery</TableCell>
                             <TableCell style={{fontWeight:600}}>{date.toDateString()} | ₹40 </TableCell>
                        </TableRow>
                        <TableRow className={classes.smalltext}>
                            <TableCell className={classes.greytext}>Warranty</TableCell>
                             <TableCell>No Warranty</TableCell>
                        </TableRow>
                        <TableRow className={classes.smalltext}>
                            <TableCell className={classes.greytext}>Seller</TableCell>
                             <TableCell className={classes.smalltext}>
                                 <span style={{color:'#2874f0'}}>SuperComNet</span>
                                 <Typography>Gst invoice Available</Typography>
                                 <Typography>14 Days Return Policy</Typography>
                                  <Typography>View more sellers starting from ₹300</Typography>
                             </TableCell>
                        </TableRow>
                        <TableRow className={classes.smalltext}>
                            <TableCell colSpan={2}>
                                <img src={sellerURL} style={{width:390}}/>
                            </TableCell>
                             
                        </TableRow>
                        <TableRow className={classes.smalltext}>
                          <TableCell className={classes.greytext}>Description</TableCell>
                          <TableCell>{product.description}</TableCell>
                             
                        </TableRow>
                    </TableBody>
                </Table>
                </Grid>
        </Grid>
        }
        </Box>
    )
}
export default DetailView;