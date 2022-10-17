import React from 'react';
import Button from './Button';
import Row from './Row';
import { ButtonColors } from '../../../utils';

const Keypad = ({ addToExpression, calculateResult }) => {
   return (
      <div className="keypad">
         <Row>
            <Button symbol="AC" color={ButtonColors.DARK_GRAY} handleClick={addToExpression} />
            <Button symbol="+/-" color={ButtonColors.DARK_GRAY} handleClick={addToExpression} />
            <Button symbol="%" color={ButtonColors.DARK_GRAY} handleClick={addToExpression} />
            <Button symbol="÷" color={ButtonColors.ORANGE} handleClick={addToExpression} />
         </Row>
         <Row>
            <Button symbol="7" handleClick={addToExpression} />
            <Button symbol="8" handleClick={addToExpression} />
            <Button symbol="9" handleClick={addToExpression} />
            <Button symbol="X" color={ButtonColors.ORANGE} handleClick={addToExpression} />
         </Row>
         <Row>
            <Button symbol="4" handleClick={addToExpression} />
            <Button symbol="5" handleClick={addToExpression} />
            <Button symbol="6" handleClick={addToExpression} />
            <Button symbol="-" color={ButtonColors.ORANGE} handleClick={addToExpression} />
         </Row>
         <Row>
            <Button symbol="1" handleClick={addToExpression} />
            <Button symbol="2" handleClick={addToExpression} />
            <Button symbol="3" handleClick={calculateResult} />
            <Button symbol="+" color={ButtonColors.ORANGE} handleClick={addToExpression} />
         </Row>
         <Row>
            <Button symbol="0" handleClick={addToExpression} />
            <Button symbol="," handleClick={calculateResult} />
            <Button symbol="=" color={ButtonColors.ORANGE} handleClick={addToExpression} />
         </Row>
      </div>
   );
};

export default Keypad;
