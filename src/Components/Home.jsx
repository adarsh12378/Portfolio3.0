import React from 'react'
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import me from "../assest/logo2.png";
const Home = () => {
    const animations = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        },
      };
  return (
        <div id ='home'>
<section>
    <div>
        <motion.h1{...animations.h1}>
            Hello I'm <br />Adarsh Gupta <br />SGSITS Indore
        </motion.h1>

        <Typewriter
            options={{
              strings: ["Software Developer", " Full Stack Engineer", " Training and Placement Coordinator " ,"Founding Member of SGSITS Alumni Association","Sponsership Coordinator at Club Ojaswa"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}

          />
      <div>
      <a href="mailto:adarshgupta9199@gmail.com">
            Hire Me
    </a>

     </div>
          </div>
  
</section>
<section>
  <img src={me} alt="adarsh" />
</section>
        </div>
    
  )
}

export default Home

