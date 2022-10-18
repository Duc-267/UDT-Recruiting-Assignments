import React from 'react';
import './DisplayScreen.scss';

const DisplayScreen = ({ result }) => {
   return (
      <div className="display-wrapper">
         <div className="icon">
            <div className="calculator-icon-red"></div>
            <div className="calculator-icon-yellow"></div>
            <div className="calculator-icon-green"></div>
         </div>
         <div className="display-number">{result}</div>
      </div>
   );
};

export default DisplayScreen;
