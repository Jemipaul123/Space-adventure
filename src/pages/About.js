import React from "react";
import MultiplePizzas from "../assets/spacead.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We would like to take you all to a journey in which the interstellar crew travelled, 
          knowing the depths of wormhole, fartherness of the galaxy they travelled into, 
          the planets they visited, and finally visiting the huge massive blackhole 
          at the centre of the galaxy Gargantua
        </p>
      </div>
    </div>
  );
}

export default About;
