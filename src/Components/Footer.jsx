import React from "react";
import me from "../assest/tnp.jpg"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        

        <h2>Adarsh Gupta</h2>
        <p>Ek Din Ek Mauka Jarur Ayega Bas Usko Jane Mat Dena ~Adarsh.</p>
        <br />
        <p>Shri Govindram Seksaria Institute of Technology and Science, Indore, Madhya Pradesh, India.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/adarsh-gupta-583975224/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/ashvin_adarsh_gupta/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/adarsh12378" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;