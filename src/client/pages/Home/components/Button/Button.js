import React from 'react';
import { ButtonColors } from '../../../../utils';
import './Button.scss';

const Button = ({ symbol, color = ButtonColors.LIGHT_GRAY, handleClick }) => {
   return (
      <button className="button-wrapper" onClick={handleClick} style={{ backgroundColor: color }}>
         {symbol}
      </button>
   );
};

export default Button;
