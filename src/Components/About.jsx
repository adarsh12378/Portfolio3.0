import React from 'react'
import c from "../assest/c.jpg"
import cpp from "../assest/c++.png";
import html from "../assest/html.png";
import css from "../assest/css.png";
import js from "../assest/js.png";
import mg from "../assest/mg.png";
import node from "../assest/node.png";
import ej from "../assest/ej.png";
import sql from "../assest/sql.png";
import dsa from "../assest/dsa.png";

const Sldr = () => {
  return (
<div>
  <div class="sdr">
  
  
  <div class="sd-track">
  

    
    <div class="sd">
    <img src={c} alt="sd_image" />
  </div>
  <div class="sd">
  <img src={cpp} alt="sd_image" />
  </div>
  <div class="sd">
  <img src={html}alt="sd_image" />
  </div>
  <div class="sd">
  <img src={css} alt="sd_image" />
  </div>
  <div class="sd">
  <img src={js} alt="sd_image" />
  </div>
 
 
  
  <div class="sd">
    <img src={mg} alt="sd_image" />
  </div>
  <div class="sd">
  <img src={node} alt="sd_image" />
  </div>
  <div class="sd">
  <img src={ej} alt="sd_image" />
  </div>
  <div class="sd">
  <img src={sql} alt="sd_image" />
  </div>
  <div class="sd">
  <img src={dsa} alt="sd_image" />
  </div>
 
  
  
  </div>
  
</div>


   </div>
  )
};
   
  

const Work = () => {
  return (
    <div id ="about">
      <section>

        <h1>About</h1>
        <br />
        <p>A software engineer passionate about developing interesting, meaningful and efficient software. I am a dedicated coder and a team player.I'm a tech enthusiastic person who loves and live to code. I work hard each and every day to expertise my skills and develop new skills.
with an avid interest in mathematics, programming .I live combining technical and artistic skills, want to learn more about Data structures and algorithms DSA And Full Stack Web Development .
Sophomore at Shri G S Institute Of Technology And Science Indore. I am looking for opportunities to further my passion. </p>
<br />
<h1>Skills</h1>

   <Sldr/>
      </section>
    
    </div>
  )
}

export default Work
