import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from './../img1.png';
import img2 from './../img2.png';
import img3 from './../img3.png';
import img4 from './../img4.png';
import img5 from './../img5.png';
import img6 from './../img6.png';
import img7 from './../img7.png';

function WelcomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img5,img2,img1,img3,img7,img4,img6]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="WelcomePage">
      <h1 className="welcome-text">
      <span className="elegance">ÉLÉGANCE À CHAQUE TOURNANT</span>
            Bienvenue dans l'univers de <span className="goragavira">Goragavira</span>,
            où chaque robe raconte une histoire.
          </h1>

      <div className="image-slider">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} /> 
            <Link to="/Catalogue"> 
                <div className="explore-catalogue">Découvrez notre Catalogue</div>
            </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
    