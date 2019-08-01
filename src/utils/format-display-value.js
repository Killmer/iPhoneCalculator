const formatDisplayValue = (string) => { 
    let counter = 0;
    
    const hasFractionalNumbers = string.match(/\./);
    const [integers, fractionalNumbers ] = string.split('.');
 
    const formatedDisplayValue = [...integers].reduceRight(
      (formatedArray, number) => {
        if (counter === 3) {
          formatedArray.push(',');
          counter = 0;
        }
        formatedArray.push(number);
        if (number === '.') return formatedArray;
        counter += 1;
        return formatedArray;
      },
      [],
    ).reverse().join('')

    const result = hasFractionalNumbers ? `${formatedDisplayValue}.${fractionalNumbers || ''}` : formatedDisplayValue;

    return result
  }

export default formatDisplayValue;