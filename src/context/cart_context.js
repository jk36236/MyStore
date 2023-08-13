import { useContext, useReducer } from "react";
import { createContext } from "react";
import reducer from '../reducer/cartReducer';


const CartContext=createContext();
const initialState=
{
  cart:[],
  total_item:"",
  total_amount:"",
  shipping_fee:5000,

}

const CartProvider=({children})=>{//children ka 1st letter should be small

  const [state,dispatch]=useReducer(reducer,initialState);

  const addToCart=(id,color,amount,product)=>{
    dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}})
  }


  const removeItem=(id)=>{
   dispatch({type:"REMOVE_ITEM",payload:id})
  }
    return (
    <CartContext.Provider value={{...state,addToCart,removeItem}}>
      {children}
    </CartContext.Provider>
    );
}

const useCartContext=()=>
{
  return useContext(CartContext);
}

export {CartProvider,useCartContext};