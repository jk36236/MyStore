import React,{useState} from 'react'
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";

const AddToCart = ({product}) => {
  const{id,colors,stock}=product;
  // states
  const[color,setColor] = useState(colors[0]);
  
  return (
    <Wrapper>
    <div className='colors'>
      <p>Colors: 
        {
          colors.map((curColor,index)=>{
          return(
            //jo bhi curcolor hai use background color set kar diya hai
            <button key={index} style={{backgroundColor:curColor}} className={color === curColor? "btnStyle active": "btnStyle"}
            onClick={()=>setColor(curColor)}//click on any btn will set it as curcolor
            >//active class to highlight the btn
            
            {color===curColor? <FaCheck className='checkStyle'/>: null}//check icon on active  
              //color and null will hide text  
            </button>
          )
          })
        }
      </p>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart