import React from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';


const Home = () => {
  const data={
    name:"My Store",
  };
  
  return (
    //we have used fragment because it is giving error, because we should have 1 parent component in react but here we have 3,therefore used fragments.
    <>
    <HeroSection myData={data}/>
    <Services />
    <Trusted /> 
    </>
  );
  
}



export default Home