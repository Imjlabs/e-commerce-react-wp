import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './../logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Suggestions from './Suggestion';

var session_url = 'https://eisee-it.o3creative.fr/2023/groupe3/wp-json/wc/v3/products';
var username = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
var password = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('jwtToken'); 

    setIsUserLoggedIn(!!token);
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(session_url, {
      auth: {
        username: username,
        password: password
      }
    })
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })

      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  const handleSearch = () => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(results);
    setShowSuggestions(true);
  };

  const handleSelectProduct = (product) => {
    navigate(`/product/${product.id}`);
    setSearchValue('');
    setShowSuggestions(false);
  };

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div className="header-search">
        <input
          type="text"
          placeholder="Recherche produits..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button type="submit" onClick={handleSearch}>Rechercher</button>
        {showSuggestions && (
          <Suggestions suggestions={searchResults} handleSelect={handleSelectProduct} />
        )}
      </div>
      <div className="header-catalogue">
        <div className="header-productList">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
            <path d="M3 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3ZM3 9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3ZM8 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8ZM8 9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8Z" />
          </svg></span>
          <Link to="/Catalogue">Catalogue</Link>
        </div>
        <div className="header-cart">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
          </span>
          <Link to="/Panier">Panier</Link>
        </div>
        <div className="header-profile">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" /></svg>
          </span>
          {isUserLoggedIn ? (
            <Link to="/Profil">Profil</Link>
          ) : (
            <>
              <Link to="/Connexion">Connexion</Link> |{" "}
              <Link to="/Inscription"> Inscription</Link>
            </>
          )}
        </div>


      </div>
    </div>
  );
};

export default Header;
