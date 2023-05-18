import React from 'react';

import  Image from  "../assets/galaxy2.jpg";
import "../styles/Voyage.css";

function Voyage() {


  
    return (
      
      <div className="home" style ={{backgroundImage: `url(${Image})`}}>
    <div className="headerContainer" >
     
      <h1>We will start our journey from </h1>
           <h1>Milky way galaxy</h1><br/>
      <p>Onto Andromeda, to Gargantua through the wormhole back to our solar system</p>
     
    
    </div>
  </div>
  
    )
  }
  

export default Voyage;
