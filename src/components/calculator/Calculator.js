import React from 'react';
import '../../css/calculator.scss';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      currentOperand: 'left',
      operation: '',
      leftOperand: '',
      rightOperand: '',
      result: '',
    };

    this.displayValue = this.displayValue.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.showResult = this.showResult.bind(this);
  }

  displayValue(value) {
    this.setState(state => {
    
      if (state.currentOperand === 'left') {
        return {
          display: 'left',
          leftOperand: state.leftOperand + value,
        };
      }

      if (state.currentOperand === 'right') {
        return {
          display: 'right',
          rightOperand: state.rightOperand + value,
        };
      }
    });
  }

  setOperation(operation) {
    this.setState(state => {
      if (state.rightOperand) {
        return {
          operation,
          display: 'left',
          currentOperand: 'right',
          leftOperand: this.calculateResult({
            leftOperand: state.leftOperand,
            operation: state.operation,
            rightOperand: state.rightOperand,
          }),
          rightOperand: '',
        };
      }
      return {
        operation,
        display: 'left',
        currentOperand: 'right',
      };
    });
  }

  showResult() {
    this.setState(state => {
        return {
          display: 'result',
          currentOperand: 'left',
          operation: '',
          leftOperand: '',
          rightOperand: '',
          result: this.calculateResult({
            leftOperand: state.leftOperand,
            operation: state.operation,
            rightOperand: state.rightOperand,
          }),
        }
    }) 
  }

  calculateResult({leftOperand, operation, rightOperand}) {
    const result = eval(`${leftOperand} ${operation} ${rightOperand}`);
    return result;
  }

  getDisplayValue() {
    const { display, leftOperand, rightOperand, result } = this.state;
    switch(display) {
      case 'left': 
        return leftOperand;
      case 'right': 
        return rightOperand;
      case 'result': 
        return result;
      default: 
        return 0;
    }
  }

  render() {
    const {display, rightOperand, leftOperand} = this.state;

    const displayValue = this.getDisplayValue();
    
    return (
      <div id="container">
        <input
          type="text"
          name="output"
          id="output"
          inputMode="numeric"
          value={displayValue}
          disabled
        />
        <div className="grid-container">
          <Button type="calc" value="AC" />
          <Button type="calc" value="+/-" />
          <Button type="calc" value="%" />
          <Button
            type="operation"
            value="÷"
            operation="/"
            onClick={this.setOperation}
          />
          <Button type="numeric" value="7" onClick={this.displayValue} />
          <Button type="numeric" value="8" onClick={this.displayValue} />
          <Button type="numeric" value="9" onClick={this.displayValue} />
          <Button
            type="operation"
            value="x"
            operation="*"
            onClick={this.setOperation}
          />
          <Button type="numeric" value="4" onClick={this.displayValue} />
          <Button type="numeric" value="5" onClick={this.displayValue} />
          <Button type="numeric" value="6" onClick={this.displayValue} />
          <Button
            type="operation"
            value="-"
            operation="-"
            onClick={this.setOperation}
          />
          <Button type="numeric" value="1" onClick={this.displayValue} />
          <Button type="numeric" value="2" onClick={this.displayValue} />
          <Button type="numeric" value="3" onClick={this.displayValue} />
          <Button
            type="operation"
            value="+"
            operation="+"
            onClick={this.setOperation}
          />
          <Button
            type="numeric"
            value="0"
            doubleWidth
            onClick={this.displayValue}
          />
          <Button type="numeric" value="." />
          <Button
            type="operation"
            value="="
            operation="="
            onClick={this.showResult}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
