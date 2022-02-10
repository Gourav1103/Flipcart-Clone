import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
    components:{
       margin:'80px 140px',
       width:'80%',
       height:'65vh',
       background:'#fff'
    },
    image:{
        width:'15%'
    },
    container:{
        textAlign:'center',
        paddingTop:70,
        '& > *':{
            marginTop:10,
            fontSize:14
        }
    },
    button:{
        marginTop:20,
        padding:'12px 70px',
        borderRadius:2,
        background:'#2874f0',
        fontSize:14,
        color:'#fff'
    }
})
const EmptyCart=()=>{
    const classes= useStyle();
    const history=useHistory();
    
    const addtocart=()=>{
               history.push('/')
    }
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    return(
         <Box className={classes.components}>
             <Box className={classes.container}>
             <img src={emptycarturl} className={classes.image}/>
             <Typography>Your Cart is Empty!</Typography>
             <Typography>Add items to it now.</Typography>
             <Button variant="contained" className={classes.button} onClick={addtocart} >Shop now</Button>
             </Box>
         </Box>
     );
}
export default EmptyCart;