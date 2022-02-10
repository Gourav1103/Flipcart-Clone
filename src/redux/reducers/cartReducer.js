import * as actiontype from '../constants/cartConstants';

export const cartReducer=(state={cartItems :[]},action)=>{
    switch(action.type){
        case actiontype.ADD_TO_CART:
          const item = action.payload;
          const exist = state.cartItems.find(product=> product.id === item.id);
          if(exist){
           return;
          }
          return {...state,cartItems:[...state.cartItems,item]};
         case actiontype.REMOVE_TO_CART:
           return {...state,cartItems: state.cartItems.filter(product=>product.id!==action.payload)} 
          default:
          return state;
}
}
        