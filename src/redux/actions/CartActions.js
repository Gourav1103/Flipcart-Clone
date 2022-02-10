import axios from "axios";
import * as actiontype from '../constants/cartConstants';
const url = 'http://localhost:8000';
export const addToCart=(id)=>async(dispatch)=>{
  try{
     const {data} =await axios.get(`${url}/product/${id}`);
     dispatch({type:actiontype.ADD_TO_CART,payload:data});
  }catch(error){
      console.log('Error while calling addtocart api');
  }
}
export const removeToCart=(id)=>async(dispatch)=>{
     dispatch({type:actiontype.REMOVE_TO_CART,payload:id});
}