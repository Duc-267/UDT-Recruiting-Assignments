import React from 'react';
import { ButtonColors } from '../../../../utils';
import './Button.scss';

const Button = ({ symbol, color = ButtonColors.LIGHT_GRAY }) => {
   return (
      <button
         className="button-wrapper"
         onClick={() => {
            console.log('button clicked');
         }}
         style={{ backgroundColor: color }}>
         {symbol}
      </button>
   );
};

export default Button;
