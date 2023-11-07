import React, { useState, useEffect } from 'react';
import './portfolio.css';

function Portfolio() {
  const [animatePortfolio, setAnimatePortfolio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPosition = 150; // Adjust this value based on when you want the animation to trigger

      if (scrollY >= triggerPosition) {
        setAnimatePortfolio(true);
      } else {
        setAnimatePortfolio(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log('animatePortfolio:', animatePortfolio);

  return (
    <div id="portfolio" className={animatePortfolio ? 'slide-up' : ''}>
      <h1 id="title">Portfolio</h1>
      <div className="projects">
        <div className="project-container" id="pawgress">
          <h2>Pawgress</h2>
          <h3>This is a social media site for dogs!</h3>
          <a href="https://github.com/TheRealMi/Pawgress"><img id="git" src="github.png"></img></a>
          <a href="https://pawgress-263620beafdd.herokuapp.com/"><img id="git" src="click-here.png"></img></a>
        </div>
        <div className="project-container" id="sports-quiz">
          <h2>Sports Quiz</h2>
          <h3>This is a sports quiz using an API to generate the questions.</h3>
          <a href="https://github.com/AmbitiousFlo/Sports-Trivia"><img id="git" src="github.png"></img></a>
          <a href="https://ambitiousflo.github.io/Sports-Trivia/"><img id="git" src="click-here.png"></img></a>
        </div>
        <div className="project-container" id="TBA">
          <h2>TBA</h2>
          <h3>TBA</h3>
          <a href=""><img id="git" src="github.png"></img></a>
          <a href=""><img id="git" src="click-here.png"></img></a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio