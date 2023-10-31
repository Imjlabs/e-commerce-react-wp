import './App.css';
import React from 'react';

import PostList from './components/PostList' ;
import Connexion from './components/Connexion'; // Assurez-vous d'avoir créé ce composant
import Panier from './components/Panier';
import Post from './components/Post';
import Header from './components/Header'; // Assurez-vous que le chemin est correct
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Router>
          <Header />
          <main>
          <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/Connexion" element={<Connexion />} />
              <Route path="/Panier" element={<Panier />} />
          </Routes>
        </main>
        </Router>
      </div>
    
  );
}

export default App;

