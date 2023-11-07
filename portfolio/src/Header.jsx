import React from 'react';
import './header.css';

function Header() {
  

  return (
    <>
      <header>
      <p id="name">Marien</p>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header
