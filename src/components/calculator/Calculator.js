import React from 'react';
import '../../css/calculator.scss';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      operation: null,
      leftOperand: null,
    };

    this.displayValue = this.displayValue.bind(this);
    this.setOperation = this.setOperation.bind(this);
  }

  displayValue(value) {
    this.setState(state => {
      if (state.display === '0' || state.leftOperand) {
        return {
          display: value,
        };
      }

      return {
        display: state.display + value,
      };
    });
  }

  setOperation(operation) {
    this.setState(state => {
      if (state.leftOperand) {
        const rightOperand = state.display;
        const result = eval(
          `${state.leftOperand} ${state.operation} ${rightOperand}`,
        );
        return {
          operation: operation === "=" ? null : operation,
          display: result,
          leftOperand: operation === "=" ? null : result,
        };
      }
      return {
        operation,
        leftOperand: state.display,
      };
    });
  }

  render() {
    const {display} = this.state;
    return (
      <div id="container">
        <input
          type="text"
          name="output"
          id="output"
          inputMode="numeric"
          value={display}
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
            onClick={this.setOperation}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
