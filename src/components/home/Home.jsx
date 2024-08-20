import React from 'react';
import "./home.css";
import Me from "../../assets/logo.png"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
//import Shapes from "./Shapes"
const Home = () => {
    return (
 <section className="home container" id="home" data-testid="home">
    <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name"> Meryem Kolbasar </h1>
        <span className="home__education"> Full Stack Java Developer</span>
      

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>


        <ScrollDown />
        </div> 

      {/*  <Shapes /> */}
        </section>
    );
} 

export default Home