import React, { useState } from 'react';
import Button from './Button_Component';
import './index.css';

function Calculator() {
  const [display, setDisplay] = useState(''); 
  const [result, setResult] = useState(null); 
  const [isResultDisplayed, setIsResultDisplayed] = useState(false); 

  const handleButtonClick = (label) => {
    if (label === 'C') {
      setDisplay('');
      setResult(null); 
      setIsResultDisplayed(false); 
    } else if (label === '=') {
      try {
        const evaluatedResult = eval(display); 
        setResult(evaluatedResult);
        setDisplay('');
        setIsResultDisplayed(true); 
      } catch (error) {
        setResult('Error');
        setDisplay(''); 
        setIsResultDisplayed(false); 
      }
    } else {
      if (isResultDisplayed) {
        setDisplay(result.toString() + label); 
        setIsResultDisplayed(false); 
      } else {
        setDisplay((prevDisplay) => prevDisplay + label);
      }
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {isResultDisplayed ? result : display || '0'} 
      </div>

      <div className="buttons">
        {['1', '2', '3', '+'].map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
        {['4', '5', '6', '-'].map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
        {['7', '8', '9', '*'].map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
        {['C', '0', '=', '/'].map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
        {['.', '(', ')'].map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
