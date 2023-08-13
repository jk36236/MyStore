import { useContext, useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from '../reducer/cartReducer';


const CartContext=createContext();

const getLocalCartData=()=>{
  let localCartData=localStorage.getItem("jatinCart");
  // jab 1st time cart load hoga then data will be empty ,therefore we have to give it an empty value
  if(localCartData === []){
    return [];
  }else{
    return JSON.parse(localCartData);
    //again to coinvert it back to array
  }
};

const initialState=
{
  // cart:[],
  cart: getLocalCartData(),
  total_item:"",
  total_amount:"",
  shipping_fee:50000,

}

const CartProvider=({children})=>{//children ka 1st letter should be small

  const [state,dispatch]=useReducer(reducer,initialState);

  const addToCart=(id,color,amount,product)=>{
    dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}});
  }


  const removeItem=(id)=>{
   dispatch({type:"REMOVE_ITEM",payload:id})
  }


  // to add data in localStorage
//we want jab page refresh ho then data localstoirage me add ho jana chahiye
useEffect(()=>{
  //key me storage ka naam
  //value should be string, therefore convert cart into string
  //we can't directly acces cart, it is present inside state
  localStorage.setItem("jatinCart",JSON.stringify(state.cart));

},[state.cart])//jab bhi cart me changes hoga ye run hoga

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