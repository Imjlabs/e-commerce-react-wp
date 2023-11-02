import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h3>Votre panier</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total : {calculateTotal(cartItems)}</p>
    </div>
  );
};

const calculateTotal = (cartItems) => {
  // Calculez le total des prix des articles dans le panier
  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  return total.toFixed(2); // Formatage du total avec 2 décimales
};

export default Cart;
