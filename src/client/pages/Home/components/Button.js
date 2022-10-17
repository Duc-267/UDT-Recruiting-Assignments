import React from 'react';
import { ButtonColors } from '../../../utils';

const Button = ({ symbol, color = ButtonColors.LIGHT_GRAY, handleClick }) => {
   return (
      <button
         onClick={() => handleClick(symbol)}
         className="button-wrapper"
         style={{ backgroundColor: color }}>
         {symbol}
      </button>
   );
};

export default Button;
