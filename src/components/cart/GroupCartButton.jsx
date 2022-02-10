import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyle= makeStyles({
    component:{
    marginTop:30
    },
    button:{
     borderRadius:'50%'
    }
})
const GroupCartButton=()=>{
    const classes = useStyle();
    const[counter,setCounter]= useState(1);
    const decreamentHandler=()=>{
       setCounter(counter=>counter-1);
    }
    const increamentHandler=()=>{
      setCounter(counter=>counter+1);
    }
    return(
        <ButtonGroup className={classes.component}>
            <Button className={classes.button} onClick={decreamentHandler} disabled={counter==1}>-</Button>
            <Button>{counter}</Button>
            <Button className={classes.button} onClick={increamentHandler}>+</Button>
        </ButtonGroup>
    );
}
export default GroupCartButton;