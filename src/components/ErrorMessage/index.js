// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
// Internals
import './index.css';


const ErrorMessage = ({ error }) => {
  if (!error) {
    return <span />
  }

  return (
    <div className="error-message">
      <p className="red">Roses are red...</p>
      <p className="blue">Violets are blue...</p>
      <p className="black">Amazon's server just gave us a massive F*** YOU!</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.bool.isRequired,
};

export default ErrorMessage;
