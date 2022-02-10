import { makeStyles} from "@material-ui/styles";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import { Box } from "@material-ui/core";
import MidSection from "./MidSection";
// import { products } from "../../constants/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts as listProducts  } from "../../redux/actions/productActions";
const useStyle=makeStyles(theme=>({
    components:{
        padding:10,
        background:"#F2F2F2"
    },
    rightwrraper:{
        background:'#FFFFFF',
        padding:8,
        margin:'12px 0 0 10px',
        width:'17%',
        [theme.breakpoints.down('md')]:{
            display:'none'
        }
    },
    leftwrraper:{
        width:'83%',
        [theme.breakpoints.down('md')]:{
            width:'100%'
        }
    }
}))
const Home=()=>{
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
   const {products}= useSelector(state=>state.getProducts);
   const dispatch=useDispatch();
   useEffect(()=>{
       dispatch(listProducts());
   },[dispatch])
   return(
        <div>
        <NavBar/>
        <div className={classes.components}>
            <Banner/>
            <Box style={{display:'flex'}}>
                <Box  className={classes.leftwrraper}><Slide timer={true} title="Deal of the day" products={products}/></Box>
               <Box className={classes.rightwrraper} ><img src={adURL} style={{width:240}}/></Box>
            </Box>
            <MidSection/>
            <Slide timer={false} title="Discounts for you" products={products}/>
            <Slide timer={false} title="Suggested for you" products={products}/>
            <Slide timer={false} title="Top Selections" products={products}/>
            <Slide timer={false} title="Recommended Items" products={products}/>
            <Slide timer={false} title="Bestsellers" products={products}/>
            
            </div>
        
        </div>
    );
}
export default Home;