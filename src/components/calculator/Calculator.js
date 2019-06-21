import React from 'react';
import '../../css/calculator.scss';
import Button from './Button';
import Display from './Display';

const DEFAULT_STATE = {
  display: '',
  currentOperand: 'leftOperand',
  operation: '',
  leftOperand: '',
  rightOperand: '',
  result: '',
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;

    this.displayValue = this.displayValue.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.showResult = this.showResult.bind(this);
    this.reset = this.reset.bind(this);
    this.percentage = this.percentage.bind(this);
    this.toggleSign = this.toggleSign.bind(this);
  }

  displayValue(value) {
    this.setState(state => {
      if (state.currentOperand === 'leftOperand') {
        return {
          display: 'left',
          leftOperand: state.leftOperand + value,
        };
      }

      if (state.currentOperand === 'rightOperand') {
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
          currentOperand: 'rightOperand',
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
        currentOperand: 'rightOperand',
      };
    });
  }

  showResult() {
    this.setState(state => {
      return {
        display: 'result',
        currentOperand: 'leftOperand',
        operation: '',
        leftOperand: '',
        rightOperand: '',
        result: this.calculateResult({
          leftOperand: state.leftOperand,
          operation: state.operation,
          rightOperand: state.rightOperand,
        }),
      };
    });
  }

  reset() {
    this.setState(DEFAULT_STATE);
  }

  percentage() {
    this.setState(state => {
      const percentValue = (+state.leftOperand / 100).toString();
      if (state.rightOperand) {
        return;
      }
      return {
        leftOperand: percentValue,
      };
    });
  }

  toggleSign() {
    this.setState(state => {
      const { currentOperand } = state;
      const currentOperandValue = state[currentOperand];
      const isPositive = +currentOperandValue > 0;
      const toggleValue = isPositive ? `-${currentOperandValue}` : currentOperandValue.slice(1);

      return {
        [currentOperand]: toggleValue,
      }
    })
  }

  calculateResult({leftOperand, operation, rightOperand}) {
    const result = eval(`${leftOperand} ${operation} ${rightOperand}`);
    return result;
  }

  render() {
    const {display, rightOperand, leftOperand, result} = this.state;

    return (
      <div id="container">
        <Display
          display={display}
          rightOperand={rightOperand}
          leftOperand={leftOperand}
          result={result}
        />
        <div className="grid-container">
          <Button type="calc" value="AC" onClick={this.reset} />
          <Button type="calc" value="+/-" onClick={this.toggleSign}/>
          <Button type="calc" value="%" onClick={this.percentage} />
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
          <Button type="numeric" value="." onClick={this.displayValue} />
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
