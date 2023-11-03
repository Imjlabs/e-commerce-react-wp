import React, { useEffect } from 'react';

const PaymentPage = () => {
  const paymentDetails = {
    cardNumber: '**** **** **** ****',
    expirationDate: 'MM/YY',
    cvv: '***',
  };

  useEffect(() => {
    // Récupérez les détails du panier depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const productIdArray = urlParams.getAll('productId');
    
    // Utilisez productIdArray pour accéder aux détails spécifiques du panier
    // ...

  }, []);

  const handlePayment = () => {
    // Logique de traitement du paiement
    // ...
    alert("Paiment confirmée !! Votre commande à été effectué !")
    // Redirection vers la page de confirmation après le paiement
    window.location.href = '/'; // Remplacez par l'URL réelle
  };

  return (
    <div className="payment-page">
      <h2>Page de Paiement</h2>

      <div className="payment-details">
        <label>Numéro de carte:</label>
        <input
          type="number"
          placeholder="creditcard"
        />

        <label>Date d'expiration:</label>
        <input
          type="date"
          placeholder="date d'expiration"
        />

        <label>CVV:</label>
        <input
          type="number"
          placeholder="CVV"
        />
      </div>

      <button onClick={handlePayment}>Confirmer le Paiement</button>
    </div>
  );
};

export default PaymentPage;
