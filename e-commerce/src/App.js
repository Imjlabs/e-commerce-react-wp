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
import { CartProvider } from './components/CartContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentPage from './components/PaymentPage';

function App() {

  return (
    <div className="App">
      <CartProvider>
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
              <Route path="/page-de-paiement" element={<PaymentPage />} />
              <Route path="/product/:productId" element={<Post />} />
            </Routes>
          </main>
        </Router>
      </CartProvider>
    </div>
  );
}


export default App;








