import React from 'react';
import '../App';

const Feedback = ({ feedback, attempts }) => {
  return (
    <div className="feedback-container">
      <p>{feedback}</p>
      <p>Intentos: {attempts}</p>
    </div>
  );
};

export default Feedback;
