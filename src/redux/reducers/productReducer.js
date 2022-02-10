import * as actiontype from '../constants/productContant';

export const getProductsReducer=(state={products:[]},action)=>{
   switch(action.type)
   {
       case actiontype.Get_Product_Success:
           return {products:action.payload};
       case actiontype.Get_Product_Fail:
           return {error:action.payload}    
         default:
          return state;
   }
}
 export const getProductDetailReducer=(state={product:{}},action)=>{
    switch(action.type)
    {
        case actiontype.Get_Product_Detail_Success:
            return {product:action.payload};
        case actiontype.Get_Product_Detail_Fail:
            return {error:action.payload}    
          default:
           return state;
    }
 };