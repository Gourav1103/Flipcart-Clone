import { Search } from '@material-ui/icons';
import { styled, alpha, List, ListItem, makeStyles } from '@material-ui/core';
import { InputBase } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { getProducts as listProducts  } from "../../redux/actions/productActions";
import { useState } from 'react';
import { Fragment } from 'react';
const SearchIcon = styled('div')(({ theme }) => ({
    borderRadius: 2,
    backgroundColor: '#fff',
    marginLeft: 10,
    width: '38%',
    display:'flex',
    color:'black',
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: 5,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'blue',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width:'100%',
    '& .MuiInputBase-input': {
      paddingLeft:20,
    },
  }));
  const useStyle=makeStyles({
    list:{
      position:'absolute',
      color:'#000',
      background:'#FFFFFF',
      marginTop:40
    }
  })
const SearchBox=()=>{
  const classes= useStyle();
  const[text,setText] = useState();
  const[open,setOpen] = useState(true);
  const getText=(text)=>{
       setText(text);
       console.log(text);
       setOpen(false);
  }
  const {products}= useSelector(state=>state.getProducts);
   const dispatch=useDispatch();
   useEffect(()=>{
       dispatch(listProducts());
   },[dispatch])
   
    return(
      <Fragment>
        
        <SearchIcon>

            <StyledInputBase
              placeholder="Search for products,brands and more "
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>getText(e.target.value)}
            />
             <SearchIconWrapper>
              <Search  />
            </SearchIconWrapper>
            {
            text&&
            <List className={classes.list} hidden={open}>
              {
                products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                  <ListItem>
                    <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'inherit'}} onClick={()=>setOpen(true)}>
                    {product.title.longTitle}
                    </Link>
                  </ListItem>
                ))
              }
              
            </List>
          }  
          </SearchIcon>
        
          
          </Fragment>
    );
}
export default SearchBox;