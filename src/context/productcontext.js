// create a context
// provider
// consumer-usecontext hook

import { createContext, useContext } from "react";



// creating a context

const AppContext=createContext();

//children is <App /> component
// app provider ke andar he data ka lena dena hoga,mostly data yahin par create hoga and with the help of provoider we will forward it
const AppProvider=({children})=>{
  return <AppContext.Provider value={{myName:"jatin"}}>
{children}
  </AppContext.Provider>
};


//custom hook
const useProductContext=()=>{
  return useContext(AppContext);
}



export {AppProvider,AppContext,useProductContext};