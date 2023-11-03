import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      
      {cartItems.length > 0 && (
        <div>
          <h3>Total: ${calculateTotal()}</h3>
          <button>Commander</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
