import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';//navlink has functionality that page don't get reloaded when we click on link text like it gets reloaded in case on <a> tag.
import Nav from './Nav.js';

const Header = () => {
  // mainheader is a styled compoennt working like header
  return(
     <MainHeader>

{/* now when we click on image we will be redirected to home page without refreshing the page */}
    <NavLink to="/">
<img src='./images/logo.png' alt="logo" />
    </NavLink>

    <Nav />
  </MainHeader> 
  );
}


const MainHeader=styled.header`
padding:0 4.8rem;
height:10rem;
background-color: ${({theme})=> theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
position:relative;

.logo{
  height:5rem;
}

`;

export default Header