import React, { useState } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [storedValue, setStoredValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (number) => {
    setDisplayValue(displayValue + number);
  };

  const handleOperatorClick = (op) => {
    if (op === 'neg') {
      if (parseFloat(displayValue) > 0) {
        displayValue.substring(1, displayValue.length);
        setDisplayValue('-' + displayValue);
      } else {
        setDisplayValue(displayValue.substring(1, displayValue.length));
      }
    } else {
      if (displayValue !== '' && storedValue !== '') {
          handleOtherOperator();
      } else if (displayValue !== '') {
        setStoredValue(displayValue);
        setDisplayValue('');
      }
      setOperator(op);
    }
  };

  const handleClear = () => {
    setDisplayValue('');
    setStoredValue('');
    setOperator('');
  };

  const handleOtherOperator = () => {
    const num1 = parseFloat(storedValue);
    const num2 = parseFloat(displayValue);

    switch (operator) {
      case '%':
        setStoredValue((num1 * (num2 / 100)).toString());
        break;
      case '+':
        setStoredValue((num1 + num2).toString());
        break;
      case '-':
        setStoredValue((num1 - num2).toString());
        break;
      case '*':
        setStoredValue((num1 * num2).toString());
        break;
      case '/':
        setStoredValue((num1 / num2).toString());
        break;
      default:
        break;
    }
    setDisplayValue('');
  };

  const handleEquals = () => {
    const num1 = parseFloat(storedValue);
    const num2 = parseFloat(displayValue);

    switch (operator) {
      case '%':
        setDisplayValue((num1 * (num2 / 100)).toString());
        break;
      case '+':
        setDisplayValue((num1 + num2).toString());
        break;
      case '-':
        setDisplayValue((num1 - num2).toString());
        break;
      case '*':
        setDisplayValue((num1 * num2).toString());
        break;
      case '/':
        setDisplayValue((num1 / num2).toString());
        break;
      default:
        break;
    }

    setStoredValue('');
    setOperator('');
  };

  return (
    <div className='calculator'>
      <div className='display'>
        <p>
          <small>
            {storedValue} {operator} {displayValue}
          </small>
          <br />
          {displayValue}
        </p>
      </div>
      <div className='buttons'>
        <div className='row'>
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleOperatorClick('neg')}>+/-</button>
          <button onClick={() => handleOperatorClick('%')}>%</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        <div className='row'>
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleOperatorClick('*')}>x</button>
        </div>
        <div className='row'>
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className='row'>
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div className='row'>
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={() => handleNumberClick('.')}>.</button>
          <button onClick={() => handleEquals()}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
