import React from 'react';
import Button from '../Button/Button';
import Row from '../Row/Row';
import { ButtonColors } from '../../../../utils';

const Keypad = ({
   addNumberToExpression,
   calculateResult,
   isAllClear,
   addOperator,
   clearExpression,
   addPointToNumber,
   setPercentage,
   setPlusMinus,
}) => {
   return (
      <div className="keypad">
         <Row>
            <Button
               symbol={isAllClear ? 'AC' : 'C'}
               color={ButtonColors.DARK_GRAY}
               handleClick={clearExpression}
            />
            <Button symbol="+/-" color={ButtonColors.DARK_GRAY} handleClick={setPlusMinus} />
            <Button symbol="%" color={ButtonColors.DARK_GRAY} handleClick={setPercentage} />
            <Button symbol="÷" color={ButtonColors.ORANGE} handleClick={() => addOperator('/')} />
         </Row>
         <Row>
            <Button symbol="7" handleClick={addNumberToExpression} />
            <Button symbol="8" handleClick={addNumberToExpression} />
            <Button symbol="9" handleClick={addNumberToExpression} />
            <Button symbol="X" color={ButtonColors.ORANGE} handleClick={() => addOperator('*')} />
         </Row>
         <Row>
            <Button symbol="4" handleClick={addNumberToExpression} />
            <Button symbol="5" handleClick={addNumberToExpression} />
            <Button symbol="6" handleClick={addNumberToExpression} />
            <Button symbol="-" color={ButtonColors.ORANGE} handleClick={() => addOperator('-')} />
         </Row>
         <Row>
            <Button symbol="1" handleClick={addNumberToExpression} />
            <Button symbol="2" handleClick={addNumberToExpression} />
            <Button symbol="3" handleClick={addNumberToExpression} />
            <Button symbol="+" color={ButtonColors.ORANGE} handleClick={() => addOperator('+')} />
         </Row>
         <Row>
            <Button symbol="0" handleClick={addNumberToExpression} />
            <Button symbol="," handleClick={addPointToNumber} />
            <Button symbol="=" color={ButtonColors.ORANGE} handleClick={calculateResult} />
         </Row>
      </div>
   );
};

export default Keypad;
