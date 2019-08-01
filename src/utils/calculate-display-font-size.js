function calculateDisplayFontSize(displayValue) {
  let displayFontSize = '4em';
  let displayValueLenght = displayValue.includes('.') ? displayValue.length - 1 : displayValue.length;

  if(displayValueLenght === 6) {
    displayFontSize = '3.8em';
  } 
  if(displayValueLenght === 7) {
    displayFontSize = '3.2em';
  }
  if(displayValueLenght === 8) {
    displayFontSize = '2.8em';
  }
  if(displayValueLenght === 9) {
    displayFontSize = '2.6em';
  }

  return displayFontSize;
}

export default calculateDisplayFontSize;