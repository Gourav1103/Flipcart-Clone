import axios from "axios";
import * as action from '../constants/productContant';
const url = 'http://localhost:8000';
export const getProducts=()=>async(dispatch)=>{
  try{
     const {data}= await axios.get(`${url}/products`);
     dispatch({type:action.Get_Product_Success,payload:data});
    }catch(error){
        dispatch({type:action.Get_Product_Fail,payload:error.response});
  }
}
export const getProductDetail=(id)=>async(dispatch)=>{
  try{
    const {data}= await axios.get(`${url}/product/${id}`);
    dispatch({type:action.Get_Product_Detail_Success,payload:data});
  }catch(error){
    dispatch({type:action.Get_Product_Detail_Fail,payload:error.response});
  }
}