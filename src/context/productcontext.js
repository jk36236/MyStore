// create a context
// provider
// consumer-usecontext hook

import { useEffect } from "react";
import { createContext, useContext } from "react";
import axios from "axios";



// creating a context

const AppContext=createContext();


const API = "https://api.pujakaitem.com/api/products";

//children is <App /> component
// app provider ke andar he data ka lena dena hoga,mostly data yahin par create hoga and with the help of provoider we will forward it
const AppProvider=({children})=>{

  // humne API ko as a url yhan le leiya hai
 const getProducts= async(url) =>{
 const res=await axios.get(url);//api call
 //axios return a promise, therefore to resolve it we will use async,await

 const products=await res.data;
//  console.log(res); 
 };


  //we want ki jab 1st time page render ho tab api call ho aur sara data aa jaye
  useEffect(()=>{
   getProducts(API);
  },[])


  return <AppContext.Provider value={{myName:"jatin"}}>
{children}
  </AppContext.Provider>
};


//custom hook
const useProductContext=()=>{
  return useContext(AppContext);
}



export {AppProvider,AppContext,useProductContext};