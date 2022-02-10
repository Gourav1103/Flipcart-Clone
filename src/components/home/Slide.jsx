import { Box, Button, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom';

import Countdown from 'react-countdown';
const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const usestyle = makeStyles(theme=>({
    image:{
        height:150,
    },
    component:{
      marginTop:12,
      background:"#FFFFFF"
    },
    dealText:{
        fontSize:22,
        fontWeight:600,
        marginRight:10

    },
    deal:{
        padding:'15px 20px',
        display:'flex',
        lineHeight:'32px',
        marginRight:25,
    },
    timer:{
     color:"#7f7f7f",
     marginLeft:10,
     dispaly:'flex',
     alignItems:'center',
     fontSize:15
    },
    button:{
        marginLeft:'auto',
        background:'#2874fe',
        borderRadius:2,
        fontSize:13
    },
    text:{
      fontSize:14,
      marginTop:5,
    },
    wrraper:{
      padding:'35px 15px'
    },
   timers:{
    [theme.breakpoints.down('sm')]:{
      display:'none'
    } }
}))

const Slide=(props)=>{
    const classes = usestyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer=({hours,minutes,seconds})=>{
      return <span className={classes.timer}>{hours}:{minutes}:{seconds} left</span>
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography  className={classes.dealText}>{props.title}</Typography>
                { props.timer &&
                  <Box className={classes.timers}>
                   <img src={timerURL} style={{width:24}}  />
                   <Countdown date={Date.now()+ 5.04e+7} renderer={renderer}/>
                    </Box>
                }
                <Button variant="contained" color="primary" className={classes.button}>View All</Button>
                </Box>
                <Divider/>
        <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        // removeArrowOnDeviceType={["tablet","mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
            {
                props. products.map(product=>(
                    <Link to={`/product/${product.id}`}>
                    <Box textAlign="center"  className={classes.wrraper}>
                    
                       <img src={product.url} className={classes.image}/>
                       <Typography className={classes.text} style={{fontWeight:600,color:'#212121'}}>{product.title.shortTitle}</Typography> 
                       <Typography className={classes.text} style={{color:'green'}}>{product.discount}</Typography> 
                       <Typography className={classes.text} style={{color:'#212121',opacity:'.6'}}>{product.tagline}</Typography>
                     
                                      
                    </Box>
                    </Link>
                    

                ))
            }
         </Carousel>
         </Box>
    );
};
export default Slide;