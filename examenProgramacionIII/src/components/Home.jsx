import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '/examenProgramacionIII/src/App';

const Home = () => {
  const playerNameRef = useRef(null);
  const navigate = useNavigate();

  const startGame = () => {
    const playerName = playerNameRef.current.value.trim();
    if (playerName) {
      navigate('/game', { state: { playerName } });
    } else {
      alert('Por favor, ingresa tu nombre.');
    }
  };

  return (
    <div className="home-container">
      <h1>¡Bienvenido al juego!</h1>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        ref={playerNameRef}
        className="name-input"
      />
      <button onClick={startGame} className="start-button">
        JUGAR
      </button>
    </div>
  );
};

export default Home;