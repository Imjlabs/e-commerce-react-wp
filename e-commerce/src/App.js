import './App.css';
import React from 'react';

import PostList from './components/PostList' ;
import Connexion from './components/Connexion'; 
import CartPage from './components/Panier';
import Post from './components/Post';
import WelcomePage from "./components/WelcomePage";
import Header from './components/Header'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Router>
          <Header />
          <main>
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/Catalogue" element={<PostList />} />
                <Route path="/Panier" element={<CartPage />} />
                <Route path="/Connexion" element={<Connexion />} />
                <Route path="/product/:productId" element={<Post />} />
              </Routes>
          </main>
          </Router>
      </div>
    
  );
}

export default App;








