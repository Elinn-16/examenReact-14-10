import React from 'react';
import './Feedback.css';

const Feedback = ({ feedback, attempts }) => {
  return (
    <div className="feedback-container">
      <p>{feedback}</p>
      <p>Intentos: {attempts}</p>
    </div>
  );
};

export default Feedback;
