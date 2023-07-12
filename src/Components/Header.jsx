import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = ({ setMenuOpen, menuOpen }) => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100; // Define the scroll position where the background color should change

      if (isTop) {
        setNavbarBackground('transparent');
      } else {
        setNavbarBackground('#f0f0f0'); // Replace with your desired background color
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav style={{ backgroundColor: navbarBackground }}>
        <NavContent setMenuOpen={setMenuOpen}/>
        <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
          <AiOutlineMenu/>
        </button>
      </nav>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Adarsh Gupta</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
      <a onClick={() => setMenuOpen(false)} href="#about">About</a>
      <a onClick={() => setMenuOpen(false)} href="#experience">Experience</a>
      <a onClick={() => setMenuOpen(false)} href="#projects">Projects</a>
      <a onClick={() => setMenuOpen(false)} href="#position">Positions</a>
      <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
    </div>
    <a href="mailto:adarshgupta9199@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
