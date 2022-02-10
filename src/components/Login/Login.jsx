import { Dialog, DialogContent, makeStyles,Box, Typography, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { authenticatelogin, authenticatesignup } from "../../services/api";


const useStyle =makeStyles({
    component:{
        height:'70vh',
        width:'90vh'
    },
    image:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height:'70vh',
        backgroundRepeat:'no-repeat',
        background:'#2874f0',
        width:'40%',
        backgroundPosition:'center 85%',
        padding:'45px',
        '& > *':{
            color:'#ffffff',
            fontWeight:600,
        }
        
    },
    login:{
        padding:"25px 35px",
        display:'flex',
        flex:1,
        flexDirection:'column',
        '& > *':{
            marginTop:15,
        }
    },
    signup:{
        padding:"25px 35px",
        display:'flex',
        flex:1,
        flexDirection:'column',
        '& > *':{
            marginTop:15,
        }
    },
    text:{
        color:"#878787",
        fontSize:12,
    },
    loginbtn:{
     textTransform:'none',
     background:'#FB641B',
     color:'#FFFFFF',
     height:45,
     borderRadius:2
    },
    requestbtn:{
     textTransform:'none',
    background:'#FFFFFF',
     color:'#2874f0',
     height:45,
     borderRadius:2,
     boxShadow:'0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createtext:{
      textAlign:'center',
      marginTop:'auto', 
      fontSize:14,
      color:'#2874f0',
      fontWeight:600,
      cursor:'pointer'
    },
    error:{
        color:'#ff6161',
        fontSize:10,
        lineHeight:0,
        fontWeight:600,
        marginTop:10
    }

})
const initialState={
    login:{
      view:'login',
      heading:'Login',
      subheading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subheading:'Sign up with your mobile number to get started'
    }
}
const signupinitialstate={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}
const logininitialstate={
    username:'',
    password:'',
}
const Login=(props)=>{
    const[account,setAccount]=useState(initialState.login);
    const [signup,setSignup]=useState(signupinitialstate);
    const [login,setLogin]=useState(logininitialstate);
    const[error,showError]=useState(false);
    const classes = useStyle();
    const oncloseHandler=()=>{
        props.setOpen(false);
        setAccount(initialState.login);
    }
    const signupHandler=()=>{
        setAccount(initialState.signup);
    }
    const inputchangeHandler=(event)=>{
        setSignup({...signup,[event.target.name]:event.target.value});
    
    }
    const signupUserHandler=async()=>{
       let response = await authenticatesignup(signup); 
       if(!response) return;
       oncloseHandler();
       props.setUname(signup.username)
    
    }
    const loginInputHandler=(event)=>{
        setLogin({...login , [event.target.name]:event.target.value});
    }
    const loginHandler=async()=>{
        let response =await authenticatelogin(login);
        if(!response){
          showError(true);
         return;
        }
        oncloseHandler();
        props.setUname(login.username);
        
    }
    return(
   <Dialog open={props.open} onClose={oncloseHandler} >
       <DialogContent className={classes.component}>
           <Box style={{display:'flex'}}>
               <Box className={classes.image}>
                 <Typography variant="h5">{account.heading}</Typography>
                 <Typography style={{marginTop:20}}>{account.subheading}</Typography>
               </Box>
               {
                   account.view== 'login' ?

               <Box className={classes.login}>
                <TextField onChange={loginInputHandler} name='username' label='Enter Email/Mobile Number'/>
                <TextField onChange={loginInputHandler} name = 'password' label='Enter Password'/>
                {error && <Typography className={classes.error}>invalid username or password</Typography>}
                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                <Button onClick={loginHandler} className={classes.loginbtn}>Login</Button>
                <Typography clasName={classes.text} style={{textAlign:'center'}}>OR</Typography>
                <Button className={classes.requestbtn}>Request OTP</Button>
                <Typography onClick={signupHandler} className={classes.createtext}>New to Flipkart? Create an account</Typography>
               </Box>
               :
               <Box className={classes.signup}>
                <TextField onChange={inputchangeHandler} name='firstname' label='Enter FirstName'/>
                <TextField onChange={inputchangeHandler} name = 'lastname' label='Enter LastName'/>
                <TextField onChange={inputchangeHandler} name = 'username' label='Enter UserName'/>
                <TextField onChange={inputchangeHandler} name='email' label='Enter Email'/>
                <TextField onChange={inputchangeHandler} name = 'password' label='Enter Password'/>
                <TextField onChange={inputchangeHandler} name='phone' label='Enter Phone Number'/>
                <Button onClick={signupUserHandler} className={classes.loginbtn}>Signup</Button>
               </Box>
                }
           </Box>
       </DialogContent>
   </Dialog>
    );
}
export default Login;