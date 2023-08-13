


const cartReducer = (state,action) => {

  if(action.type=== "ADD_TO_CART"){
    let {id,color,amount,product}=action.payload;
    // console.log(product);

    let cartProduct;
    cartProduct={
      id:id + color, //same prd with diff. color should have diff id, otherwise diff. color produtc will add in 1 prdt.
      name:product.name,
      color,
      amount,
      image:product.image[0].url,//we get multiple image and we only want 1
      price:product.price,
      max:product.stock,
    }

    return{
      ...state,
      cart:[...state.cart,cartProduct],//jo pehle data hai uske baad add hoga cartProduct
    }
  }
  return state;
}

export default cartReducer