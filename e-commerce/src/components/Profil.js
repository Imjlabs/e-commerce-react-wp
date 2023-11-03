import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Profil = () => {
    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem('jwtToken');

        navigate('/');
    };

    return (
        <div className="profil-page">
            <h2>Page de Profil</h2>
            <p>Bienvenue sur votre page de profil.</p>
            <button onClick={handleLogout}>Se déconnecter</button>
        </div>
    );
};

export default Profil;
