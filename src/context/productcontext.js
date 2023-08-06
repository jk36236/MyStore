// create a context
// provider
// consumer-usecontext hook

import { useEffect } from "react";
import { createContext, useContext } from "react";
import axios from "axios";
import { useReducer } from "react";
//imported productreducer as reducer
import reducer from '../reducer/productReducer';



// creating a context

const AppContext=createContext();


const API = "https://api.pujakaitem.com/api/products";

const initialState={
  isLoading:false,
  isError:false,
  products:[],
  featureProducts:[],
}

//children is <App /> component
// app provider ke andar he data ka lena dena hoga,mostly data yahin par create hoga and with the help of provoider we will forward it
const AppProvider=({children})=>{

  const[state,dispatch]=useReducer(reducer,initialState);


// {-------------------------API CALL-------------------------}
  // humne API ko as a url yhan le leiya hai
  //try and catch because we have to check for error, whether we are getting products or not
  // and before error we have to show loader ,now when dispatch is called it will call action from reducer
	const getProducts= async(url) =>{
    dispatch({type:"SET_LOADING"});
    try{
      const res=await axios.get(url);//api call
      //axios return a promise, therefore to resolve it we will use async,await
     //  console.log(res); 
      const products=await res.data;
      dispatch({type:"SET_API_DATA",payload:products});//payload- passdata
    }catch(error){
      dispatch({type:"API_ERROR"})
    }
	 };

  //we want ki jab 1st time page render ho tab api call ho aur sara data aa jaye
  useEffect(()=>{
   getProducts(API);
  },[])


  return <AppContext.Provider value={{...state}}>
{children}
  </AppContext.Provider>
};


//custom hook
const useProductContext=()=>{
  return useContext(AppContext);
}



export {AppProvider,AppContext,useProductContext};