import React, { useState } from 'react';
import Keypad from './components/Keypad/Keypad';
import DisplayScreen from './components/DisplayScreen/DisplayScreen';
import './Home.scss';

const Home = () => {
   const [display, setDisplay] = useState('0');
   const [expression, setExpression] = useState('');

   function addToExpression(e) {
      const number = e.target.innerText;
      setExpression((text) => [...text, number]);
      setDisplay((text) => [...text, number]);
   }
   return (
      <div className="container">
         <div className="calculator-wrapper">
            <DisplayScreen result={display} />
            <Keypad addToExpression={addToExpression} isAllClear={display === '0'} />
         </div>
      </div>
   );
};

export default Home;
