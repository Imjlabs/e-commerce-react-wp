import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from './../img1.png';
import img2 from './../img2.png';
import img3 from './../img3.png';

function WelcomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2,img3]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="WelcomePage">
      <h1 className="welcome-text">
      Bienvenue sur notre boutique en ligne !<br />Goragavira </h1>
      <p>Découvrez notre catalogue</p>
      <div className="image-slider">
        <Link to="/Catalogue"><img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} /> </Link>
      </div>
     
    </div>
  );
}

export default WelcomePage;