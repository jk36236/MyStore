import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from '../reducer/filterReducer';
import { FaBullseye } from "react-icons/fa";

const FilterContext=createContext();//creating a context


const initialState={
  filter_products:[],//isme he products add krne hai
  all_products:[],
  grid_view:true,
}

//provider- wrap <app> component with it
export const FilterContextProvider =({children})=>{

  //we need products=[] from previous context(AppContext) ,which the usecontextprovider will give us
const {products}=useProductContext();

//now we got the products data, now we have to add it in state of Filtercontext ,use useReducer
const[state,dispatch]=useReducer(reducer,initialState);


// to set the grid view
const setGridView=()=>{
  return dispatch({type:"SET_GRID_VIEW"});
};

// to set the list view
const setListView=()=>{
  return dispatch({type:"SET_LIST_VIEW"});
};
useEffect(()=>{
dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
},[products])

return(
  <FilterContext.Provider value={{...state, setGridView, setListView}}>
{children}
  </FilterContext.Provider>
);
}


//custom hook-taki usecontext ko hume baar-2 har jageh import na krna pade
export const useFilterContext =() =>{
  return useContext(FilterContext);
}

