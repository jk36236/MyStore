import React from 'react'
import FormatPrice from '../helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'


const CartItem = ({id,name,image,color,price,amount}) => {

  // decreasing count
  const setDecrease=()=>{
    //if amount is >0 then decrement by 1 ,else setamount to 1
  // amount>0 ?setAmount(amount -1): setAmount(1)
  }
// increasing count
  const setIncrease=()=>{
    //if value is less then ehat we have in stock then increment else set to stock
// amount<stock ? setAmount(amount +1 ): setAmount(stock)
  }
  return (
    <div className='cart_heading grid grid-five-column'>
      {/* cart image and text below it */}
      <div className='cart-image--name'>
        <div>
          <figure>
            <img src={image} alt={id}/>
          </figure>
        </div>
        <div> 
          <p>{name}</p>
          <div className='color-div'>
            <p>Color:</p>
            <div className='color-style' style={{backgroundColor:color,color:color}}></div>
          </div>
        </div>
      </div>

{/* price */}
      <div className='cart-hide'>
<p> <FormatPrice price={price}/>   </p>
      </div>

      {/* quantity */}
      <CartAmountToggle 
    amount={amount}
    setDecrease={setDecrease}
    setIncrease={setIncrease}
    
    />

    {/* sub total- price * amount */}
    <div className='cart-hide'>
      <p><FormatPrice price={price * amount} /></p>
    </div>

{/* remove icon */}
<div>
  <FaTrash className='remove_icon' />
</div>
    </div>
  )
}

export default CartItem