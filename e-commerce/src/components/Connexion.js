import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://eisee-it.o3creative.fr/2023/groupe3/wp-json/jwt-auth/v1/token', {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('jwtToken', token);
      navigate('/')
      window.location.reload();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="connexion-form-container">
      <h2>Connexion</h2>
      <div className='form-group'>
        <label htmlFor="username">Identifiant :</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} type="submit" style={{
          backgroundColor: '#007BFF', color: '#fff',
          border: 'none',
          borderRadius: '25px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          margin: '0 auto',
          marginTop: '15px',
          display: 'block',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>Se connecter</button>
      </div>
    </div>
  );
}

export default Connexion;
