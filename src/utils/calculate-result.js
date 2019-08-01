const  calculateResult = ({leftOperand, operation, rightOperand}) => {
  const result = eval(`${leftOperand} ${operation} ${rightOperand}`);
  return result.toString();
}

export default calculateResult;