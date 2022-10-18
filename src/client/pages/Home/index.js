import React, { useState } from 'react';
import Keypad from './components/Keypad/Keypad';
import DisplayScreen from './components/DisplayScreen/DisplayScreen';
import './Home.scss';

const Home = () => {
   const [display, setDisplay] = useState('0');
   const [expression, setExpression] = useState('');
   console.log('🚀 ~ file: index.js ~ line 9 ~ Home ~ expression', expression);

   const isOperator = (item) => {
      return ['+', '-', '*', '/'].includes(item);
   };

   const addNumberToExpression = function (e) {
      const number = e.target.innerText;
      if (display === '0' || isOperator(expression.charAt(expression.length - 1))) {
         setDisplay(number);
      } else {
         setDisplay(display + number);
      }
      setExpression(expression + number);
   };

   const calculateResult = function () {
      if (expression === '') return;
      const result = eval(expression);
      setDisplay(result.toString());
      setExpression(result.toString());
   };

   const clearExpression = function () {
      if (display.length !== '0') {
         const displayLength = display.length;
         setDisplay('0');
         setExpression(expression.slice(0, -displayLength));
      } else {
         setExpression('');
      }
   };

   const addOperator = function (symbol) {
      if (expression.length === 0) {
         return;
      } else if (isOperator(expression.charAt(expression.length - 1))) {
         setExpression(expression.slice(0, -1) + symbol);
      } else {
         setExpression(expression + symbol);
      }
   };

   const addPointToNumber = function () {
      if (
         expression.length === 0 ||
         isOperator(expression.charAt(expression.length - 1)) ||
         display.includes('.')
      ) {
         return;
      } else {
         setExpression(expression + '.');
         setDisplay(display + '.');
      }
   };

   const setPercentage = function () {
      if (display !== '0') {
         const percentage = (parseFloat(display) / 100).toString();
         setExpression(expression.slice(0, -display.length) + percentage);
      }
   };

   const setPlusMinus = function () {
      if (display !== '0') {
         const plusMinus = (parseFloat(display) * -1).toString();
         setExpression(expression.slice(0, -display.length) + plusMinus);
      }
   };

   return (
      <div className="container">
         <div className="calculator-wrapper">
            <DisplayScreen result={display} />
            <Keypad
               addNumberToExpression={addNumberToExpression}
               calculateResult={calculateResult}
               clearExpression={clearExpression}
               addOperator={addOperator}
               addPointToNumber={addPointToNumber}
               setPercentage={setPercentage}
               setPlusMinus={setPlusMinus}
               isAllClear={display === '0'}
            />
         </div>
      </div>
   );
};

export default Home;
