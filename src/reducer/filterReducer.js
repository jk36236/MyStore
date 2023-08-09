const filterReducer=(state,action)=>{

switch (action.type) {
  case "LOAD_FILTER_PRODUCTS":
    return{
      ...state,
      filter_products:[...action.payload],
      all_products:[...action.payload], //we are using ... because we don't want to make changes inn original data, ... means we are making changes in copy of original data and not original data
    }
    
  case "SET_GRIDVIEW":
    return{
    ...state,
    grid_view:true,
    }
  default:
    return state;
}

}

export default filterReducer;