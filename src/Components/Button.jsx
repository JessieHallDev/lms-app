import React from 'react';
import '../index.css';

const Button = ({ 
  label = "", 
  onClick, 
  type = "button", 
  disabled = false 
}) => {
  return (
    <button className='button'
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;