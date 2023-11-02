import React, { useState } from 'react';

function Connexion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="connexion-form-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Identifiant :</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{backgroundColor: '#007BFF',  color: '#fff',
        border: 'none',
        borderRadius: '25px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        margin: '0 auto',
        display: 'block',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'}}>Se connecter</button>
      </form>
    </div>
  );
}

export default Connexion;