import React from 'react';
import Button from '../Button/Button';
import Row from '../Row/Row';
import { ButtonColors } from '../../../../utils';

const Keypad = ({ addToExpression, calculateResult, isAllClear, addOperator }) => {
   return (
      <div className="keypad">
         <Row>
            <Button
               symbol={isAllClear ? 'AC' : 'C'}
               color={ButtonColors.DARK_GRAY}
               handleClick={addToExpression}
            />
            <Button symbol="+/-" color={ButtonColors.DARK_GRAY} handleClick={addToExpression} />
            <Button symbol="%" color={ButtonColors.DARK_GRAY} handleClick={addToExpression} />
            <Button symbol="÷" color={ButtonColors.ORANGE} handleClick={addOperator} />
         </Row>
         <Row>
            <Button symbol="7" />
            <Button symbol="8" />
            <Button symbol="9" />
            <Button symbol="X" color={ButtonColors.ORANGE} handleClick={addOperator} />
         </Row>
         <Row>
            <Button symbol="4" handleClick={addToExpression} />
            <Button symbol="5" handleClick={addToExpression} />
            <Button symbol="6" handleClick={addToExpression} />
            <Button symbol="-" color={ButtonColors.ORANGE} handleClick={addOperator} />
         </Row>
         <Row>
            <Button symbol="1" handleClick={addToExpression} />
            <Button symbol="2" handleClick={addToExpression} />
            <Button symbol="3" handleClick={addToExpression} />
            <Button symbol="+" color={ButtonColors.ORANGE} handleClick={addOperator} />
         </Row>
         <Row>
            <Button symbol="0" handleClick={addToExpression} />
            <Button symbol="," handleClick={addToExpression} />
            <Button symbol="=" color={ButtonColors.ORANGE} handleClick={calculateResult} />
         </Row>
      </div>
   );
};

export default Keypad;
