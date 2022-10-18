import React, { useEffect } from 'react';
import './DisplayScreen.scss';

const DisplayScreen = ({ result, handleChangeNumber }) => {
   useEffect(() => {
      const handleClick = function (e) {
         var current = document.getElementsByClassName('active');
         if (current.length > 0) {
            current[0].className = current[0].className.replace(' active', '');
         }
         e.target.classList.add('active');
      };

      const numbers = document.getElementsByClassName('display-number')[0].childNodes;
      numbers.forEach((number) => {
         number.addEventListener('click', handleClick);
      });

      return () => {
         numbers.forEach((number) => {
            number.removeEventListener('click', handleClick);
         });
      };
   }, [result]);

   useEffect(() => {
      const container = document.getElementsByClassName('calculator-wrapper')[0];
      document.addEventListener('click', function (event) {
         const isClickInside = container.contains(event.target);
         if (!isClickInside) {
            const current = document.getElementsByClassName('active');
            if (current.length > 0) {
               current[0].className = current[0].className.replace(' active', '');
            }
         }
      });
   }, []);

   useEffect(() => {
      document.onkeydown = function (e) {
         var current = document.getElementsByClassName('active')[0];
         switch (e.key) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
               if (current) {
                  handleChangeNumber(current.dataset.index, e.key);
               }
               break;
            default:
               break;
         }
      };
   }, [result]);

   return (
      <div className="display-wrapper">
         <div className="icon">
            <div className="calculator-icon-red"></div>
            <div className="calculator-icon-yellow"></div>
            <div className="calculator-icon-green"></div>
         </div>
         <div className="display-number">
            {result.split('').map((item, index) => {
               return (
                  <span key={index} className="number" data-index={index}>
                     {item}
                  </span>
               );
            })}
         </div>
      </div>
   );
};

export default DisplayScreen;
