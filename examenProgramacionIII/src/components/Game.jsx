import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Feedback from './Feedback';
import '../App';

const Game = () => {
  const location = useLocation();
  const playerName = location.state?.playerName || 'Jugador';
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (numGuess === randomNumber) {
      setFeedback('¡Correcto!');
      setGameWon(true);
    } else if (numGuess < randomNumber) {
      setFeedback('Muy bajo');
    } else {
      setFeedback('Muy alto');
    }
  };

  const handleRestart = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setAttempts(0);
    setFeedback('');
    setGameWon(false);
  };

  return (
    <div className="game-container">
      <h1>¡Hola, {playerName}!</h1>
      <div className="number-box">
        {gameWon ? randomNumber : '?'}
      </div>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Ingresa tu adivinanza"
        className="guess-input"
        disabled={gameWon}
      />
      <button onClick={handleGuess} className="guess-button" disabled={gameWon}>
        Adivinar
      </button>
      {gameWon && (
        <button onClick={handleRestart} className="restart-button">
          Reiniciar Juego
        </button>
      )}
      <Feedback feedback={feedback} attempts={attempts} />
    </div>
  );
};

export default Game;