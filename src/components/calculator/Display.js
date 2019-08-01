import React from 'react';
import formatDisplayValue from '../../utils/format-display-value';
import calculateDisplayFontSize from '../../utils/calculate-display-font-size';

function Display({display, leftOperand, rightOperand, result}) {
  let displayValue;
  
  switch (display) {
    case 'left':
      displayValue = leftOperand;
      break;
    case 'right':
      displayValue = rightOperand;
      break;
    case 'result':
      displayValue = result;
      break;
    default:
      displayValue = '0';
  }
  
  return (
    <input
      type="text"
      name="output"
      id="output"
      inputMode="numeric"
      value={formatDisplayValue(displayValue)}
      style={{fontSize: calculateDisplayFontSize(displayValue)}}
      disabled
    />
  );
}

export default Display;
