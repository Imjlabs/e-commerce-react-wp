import './App.css';
import React from 'react';
import Inscription from './components/Inscription';
import PostList from './components/PostList' ;
import Connexion from './components/Connexion'; 
import Profil from './components/Profil';
import Post from './components/Post';
import CartPage from './components/Panier';
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
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Panier" element={<CartPage />} />
            <Route path="/product/:productId" element={<Post />} />
          </Routes>
        </main>
      </Router>
    </div>

  );
}

export default App;








