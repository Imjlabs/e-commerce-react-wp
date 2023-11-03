import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + parseFloat(product.price), 0);
  };

  return (
    <div className="cart-page">
      <h2>Votre Panier</h2>

      {cart.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <span>{product.name}</span>
                <span>{parseFloat(product.price).toFixed(2)} €</span>
                <button onClick={() => removeFromCart(product.id)}>Retirer</button>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <strong>Total :</strong> {calculateTotal().toFixed(2)} €
          </div>

          <button onClick={clearCart}>Vider le Panier</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
