
import React, { useEffect, useRef } from "react";
import {Link} from 'react-router-dom';
import  "../styles/Home.css";
import BannerImage from "../assets/orion.jpg";
import Lottie from "lottie-web";
import galaxyCycleAnimation from "../lotties/galaxy-cycle.json";
import Navbar from "../components/Navbar";

import "../styles/Home.css";
 function Home() {
//animation
  
/*  const animationContainer = useRef(null);*/

  /*useEffect(() => {
    if (animationContainer.current) {
      Lottie.loadAnimation({
        container: animationContainer.current,
        animationData: galaxyCycleAnimation,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    }
  }, []);     */

  return (
    <div className="home" style ={{backgroundImage: `url(${BannerImage})`}}>
  <div className="headerContainer" >
   
    <h1>Hi there Space Explorers!</h1><br/>
    <p>Welcome to the Milky Way galaxy</p>
    <Link to="/voyage">
      <button>LET'S GO</button>
    </Link>
  
  </div>
</div>

  )
}

export default Home;
