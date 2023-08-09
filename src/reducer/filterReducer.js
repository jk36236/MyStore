const filterReducer=(state,action)=>{

switch (action.type) {
  case "LOAD_FILTER_PRODUCTS":
    return{
      ...state,
      filter_products:[...action.payload],
      all_products:[...action.payload], //we are using ... because we don't want to make changes inn original data, ... means we are making changes in copy of original data and not original data
    }
    
  case "SET_GRID_VIEW":
    return{
    ...state,
    grid_view:true,
    }
     
  case "SET_LIST_VIEW":
    return{
    ...state,
    grid_view:false,
    }


    case "GET_SORT_VALUE":
      // id ke through data get kra phir uske andar se index select kiya
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;//usersortvalue ke andar options hain u me se seected index ki value
      // console.log(sort_value); 
      return {
        ...state,
        sorting_value: action.payload,
      };


      case "SORTING_PRODUCTS":
        let newSortData;
        // let tempSortProduct = [...action.payload];
  
        const { filter_products, sorting_value } = state;
        let tempSortProduct = [...filter_products];//because we don't ant to make changes in original data threfore created acopy

  //compare function
        const sortingProducts = (a, b) => {
          if (sorting_value === "lowest") {
            return a.price - b.price;//ye minus nahi kr rha hai,inki trick hai aise likne se ye lowest wala pehle dikhata hai
          }
  
          if (sorting_value === "highest") {
            return b.price - a.price;
          }
  
          if (sorting_value === "a-z") {
            return a.name.localeCompare(b.name);//caomparing on basis of name, 'a' pehle aata hai toh ascending order 
          }
  
          if (sorting_value === "z-a") {
            return b.name.localeCompare(a.name);//a baad me aata hai therefore decending order
          }
        };
  
        newSortData = tempSortProduct.sort(sortingProducts);//using compare function which comes in sorting
  
        return {
          ...state,
          filter_products: newSortData,
        };
  default:
    return state;
}

}

export default filterReducer;